import { apiFetch, IMAGE_BASE_URL } from "./api";

export interface ResumeFile {
  id: number;
  filename: string;
  file_path: string;
  file_type: string;
}

export async function downloadResume() {
  const resume = await apiFetch<ResumeFile>("/files/resume");

  console.log("Resume object:", resume);
  console.log("file_path:", resume.file_path);
  console.log("IMAGE_BASE_URL:", IMAGE_BASE_URL);

  const resumeUrl = new URL(
    resume.file_path,
    `${IMAGE_BASE_URL}/`
  );

  console.log("Final URL:", resumeUrl.toString());

  window.open(
    resumeUrl.toString(),
    "_blank",
    "noopener,noreferrer"
  );
}