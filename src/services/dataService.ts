// src/services/dataService.ts

export async function fetchAIData(): Promise<any> {
  try {
    const response = await fetch('/ai-data.json'); // Fetch the JSON file from the public directory
    if (!response.ok) {
      throw new Error('Failed to fetch AI data');
    }
    const data = await response.json(); // Parse JSON response
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching AI data:', error);
    return null;
  }
}
  