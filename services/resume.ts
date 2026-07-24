import { apiFetch, IMAGE_BASE_URL } from "./api";

export interface ResumeFile {
  id: number;
  filename: string;
  file_path: string;
  file_type: string;
}

export async function downloadResume() {
  const resume = await apiFetch<ResumeFile>("/files/resume");

 window.open(
  `${IMAGE_BASE_URL}${resume.file_path}`,
  "_blank",
  "noopener,noreferrer"
);
}