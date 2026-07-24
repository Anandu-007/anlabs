const API_BASE_URL = "http://127.0.0.1:8000/api/v1";

export async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}

export const IMAGE_BASE_URL = "http://127.0.0.1:8000/";