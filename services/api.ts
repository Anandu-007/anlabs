const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status}`
    );
  }

  return response.json();
}

export const IMAGE_BASE_URL =
  API_BASE_URL.replace("/api/v1", "");