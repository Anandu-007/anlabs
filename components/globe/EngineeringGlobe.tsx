// "use client";
// import {
//   Monitor,
//   Server,
//   ShieldCheck,
//   Database,
//   Cpu,
//   Box,
//   Bot,
//   LayoutDashboard,
//   icons,
// } from "lucide-react";
// import Packet from "../architecture/Packet";
// import Connections from "../architecture/Connections";
// import Node from "../architecture/Node";
// const services = [
//   {
//     id: "client",
//     title: "CLIENT",
//     subtitle: "Browser",
//     icon:Monitor,
//     top: "0%",
//     left: "50%",
//   },
//   {
//     id: "api",
//     title: "FASTAPI",
//     subtitle: "Gateway",
//         icon: Server,
//     top: "22%",
//     left: "50%",
//   },
//   {
//     id: "auth",
//     title: "AUTH",
//     subtitle: "JWT",
//     icon: ShieldCheck,
//     top: "55%",
//     left: "18%",
//   },
//   {
//   id: "ai",
//   title: "AI CORE",
//   subtitle: "LangChain",
//   icon: Bot,
//   top: "55%",
//   left: "50%",
// },
//   {
//     id: "dashboard",
//     title: "DASHBOARD",
//     subtitle: "Analytics",
//       icon: LayoutDashboard,
//     top: "55%",
//     left: "82%",
//   },
//   {
//     id: "postgres",
//     title: "POSTGRES",
//     subtitle: "Database",
//      icon: Database,
//     top: "88%",
//     left: "15%",
//   },
//   {
//     id: "redis",
//     title: "REDIS",
//     subtitle: "Cache",
//        icon: Cpu,
//     top: "88%",
//     left: "50%",
//   },
//  {
//   id: "docker",
//   title: "DOCKER",
//   subtitle: "Container",
//   icon: Box,
//   top: "88%",
//   left: "85%",
// },
// ];

// export default function EngineeringGlobe() {
//   return (
//     <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
//       <div className="relative w-[700px] h-[500px]">
      
// <Connections />
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="absolute -translate-x-1/2 -translate-y-1/2"
//             style={{
//               left: service.left,
//               top: service.top,
//             }}
//           >
//             <Node
//   title={service.title}
//   subtitle={service.subtitle}
//   icon={service.icon}
// />
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }