
/**
 * @fileOverview A static-compatible stub for the AI agent.
 * 
 * This file is intentionally simplified to have ZERO imports from Genkit or Node-specific 
 * libraries to ensure the GitHub Pages static build (which has no server) succeeds.
 */

// We define simple types instead of importing from 'zod' to be absolutely safe 
// from any dependency chain issues during the static export.
export type AskMeAnythingInput = {
  question: string;
  academicJourney?: string;
  professionalJourney?: string;
  skills?: string;
  projects?: string;
  interests?: string;
};

export type AskMeAnythingOutput = {
  answer: string;
};

/**
 * Static wrapper function.
 * Since GitHub Pages is static, we return a helpful message.
 */
export async function askMeAnything(input: AskMeAnythingInput): Promise<AskMeAnythingOutput> {
  console.log("AI request received:", input.question);
  
  const message = "The AI Assistant is currently unavailable on this static version of the site (GitHub Pages). To enable the interactive AI 'Ask Me Anything' feature, this project should be deployed to a server-enabled platform like Firebase App Hosting.";
  
  return { 
    answer: message 
  };
}
