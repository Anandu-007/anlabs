import Window from "@/components/os/Window";
import { Terminal } from "lucide-react";

export default function NotesPage() {
  const notes = [
    { title: "Building JWT Authentication", date: "2026-07-20", category: "SECURITY" },
    { title: "Designing Database Relationships", date: "2026-07-15", category: "ARCHITECTURE" },
    { title: "Dockerizing FastAPI", date: "2026-07-10", category: "DEVOPS" },
    { title: "Building XENOVA", date: "2026-07-01", category: "SYSTEMS" },
    { title: "Lessons from Event Registration", date: "2026-06-25", category: "ENGINEERING" },
    { title: "Learning LangChain", date: "2026-06-15", category: "AI" },
  ];

  return (
    <Window title="C:\ANLABS\NOTES">
      <div className="p-6 md:p-8 font-mono h-full flex flex-col">
        <div className="mb-6 text-primary flex items-center gap-2">
          <Terminal className="h-5 w-5" />
          <span>anlabs_journal v1.0.4</span>
        </div>

        <p className="text-zinc-500 mb-6 border-b border-zinc-800 pb-4">
          Engineering journal. Documentation, architecture notes, and deployment logs.
        </p>

        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="text-zinc-500 border-b border-zinc-800">
                <th className="font-normal py-2 px-4 w-32">DATE</th>
                <th className="font-normal py-2 px-4 w-32 hidden sm:table-cell">CATEGORY</th>
                <th className="font-normal py-2 px-4">TITLE</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, i) => (
                <tr 
                  key={i} 
                  className="border-b border-zinc-900 hover:bg-primary/10 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 text-zinc-500 group-hover:text-primary transition-colors">
                    {note.date}
                  </td>
                  <td className="py-3 px-4 text-zinc-600 hidden sm:table-cell">
                    [{note.category}]
                  </td>
                  <td className="py-3 px-4 text-zinc-300 group-hover:text-white transition-colors">
                    {note.title}.md
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-zinc-600 text-xs flex items-center gap-2">
            <span className="w-2 h-4 bg-primary animate-pulse inline-block" />
            Awaiting input...
          </div>
        </div>
      </div>
    </Window>
  );
}
