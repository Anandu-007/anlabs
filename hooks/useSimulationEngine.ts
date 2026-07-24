"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { simulatedRequests } from "@/data/requests";

// Smoothly interpolate between two values
const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

// Generate realistic jitter using Perlin-noise like behavior (simplified)
const generateJitter = (base: number, variance: number, phase: number) => {
  return base + Math.sin(phase) * variance + (Math.random() * variance * 0.2);
};

export function useSimulationEngine() {
  const [metrics, setMetrics] = useState({
    latency: 18,
    requests: 124,
    memory: 412,
    cpu: 22,
  });

  const [activeRequestIndex, setActiveRequestIndex] = useState(0);
  const [healthStatus, setHealthStatus] = useState("Healthy");
  const phaseRef = useRef(0);
  const targetMetricsRef = useRef(metrics);

  const updateMetrics = useCallback(() => {
    phaseRef.current += 0.1;
    
    // Occasionally spike CPU and latency to simulate load
    const isSpike = Math.random() > 0.95;
    
    if (isSpike) {
      setHealthStatus(Math.random() > 0.5 ? "Degraded" : "Critical");
    } else if (phaseRef.current % 5 < 0.2) { // Reset health
      setHealthStatus("Healthy");
    }
    
    targetMetricsRef.current = {
      latency: isSpike ? generateJitter(60, 20, phaseRef.current) : generateJitter(18, 5, phaseRef.current),
      requests: generateJitter(130, 20, phaseRef.current * 0.5),
      memory: generateJitter(412, 10, phaseRef.current * 0.2),
      cpu: isSpike ? generateJitter(70, 15, phaseRef.current) : generateJitter(22, 6, phaseRef.current),
    };
  }, []);

  // Simulation Loop for Metrics Interpolation
  useEffect(() => {
    const dataInterval = setInterval(updateMetrics, 2000);
    
    let animationFrame: number;
    const renderLoop = () => {
      setMetrics((prev) => ({
        latency: lerp(prev.latency, targetMetricsRef.current.latency, 0.05),
        requests: lerp(prev.requests, targetMetricsRef.current.requests, 0.05),
        memory: lerp(prev.memory, targetMetricsRef.current.memory, 0.05),
        cpu: lerp(prev.cpu, targetMetricsRef.current.cpu, 0.05),
      }));
      animationFrame = requestAnimationFrame(renderLoop);
    };
    
    animationFrame = requestAnimationFrame(renderLoop);
    
    return () => {
      clearInterval(dataInterval);
      cancelAnimationFrame(animationFrame);
    };
  }, [updateMetrics]);

  // Request Flow Loop
  useEffect(() => {
    const requestInterval = setInterval(() => {
      setActiveRequestIndex((prev) => (prev + 1) % simulatedRequests.length);
    }, 2800);
    return () => clearInterval(requestInterval);
  }, []);

  const activeRequest = { ...simulatedRequests[activeRequestIndex] };
  if (healthStatus === "Critical" && Math.random() > 0.5) {
    activeRequest.status = "503";
    activeRequest.latency = "Timeout";
  } else if (healthStatus === "Degraded" && Math.random() > 0.8) {
    activeRequest.status = "500";
    activeRequest.latency = ">500ms";
  }

  return {
    metrics: {
      latency: Math.round(metrics.latency),
      requests: Math.round(metrics.requests),
      memory: Math.round(metrics.memory),
      cpu: Math.round(metrics.cpu),
      uptime: "99.99%",
    },
    activeRequest,
    activeRequestIndex,
    healthStatus,
  };
}
