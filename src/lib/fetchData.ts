import type FetchDataProps from "@/interfaces/FetchData";

const apiKey = import.meta.env.COCKPIT_API_KEY;
const endpoint = import.meta.env.COCKPIT_GRAPHQL_URL;

export default async function fetchData(
  query: string,
  variables?: any
): Promise<FetchDataProps> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({ query, variables: variables }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json().then((res) => res.data);
    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    return {};
  }
}
