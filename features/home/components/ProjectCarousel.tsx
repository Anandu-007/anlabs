// "use client";

// import ProjectCard from "./ProjectCard";


// export default function ProjectCarousel() {
//   const carouselProjects = [...projects, ...projects];

//   return (
//     <div className="relative overflow-hidden">
//       {/* Left Fade */}
//       <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />

//       {/* Right Fade */}
//       <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />

//       <div className="group -mx-4 md:mx-0">
//         <div className="project-carousel flex w-full md:w-max gap-6 md:gap-8 group-hover:[animation-play-state:paused] overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar px-4 md:px-0 pb-8 md:pb-0 max-md:[animation:none] pr-12 md:pr-0">
//           {carouselProjects.map((project, index) => (
//             <div key={`${project.id}-${index}`} className="snap-center shrink-0 w-[85vw] md:w-auto">
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }