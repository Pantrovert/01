
/**
 * @fileOverview A 100% pure TypeScript stub for the AI agent.
 * 
 * Updated for static export compatibility. This file has NO external dependencies.
 */

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
 * Static wrapper function for GitHub Pages.
 */
export async function askMeAnything(input: AskMeAnythingInput): Promise<AskMeAnythingOutput> {
  console.log("AI request received in static mode:", input.question);
  
  const message = "The interactive AI 'Ask Me Anything' feature is currently limited in this static version of the site. To enable full AI functionality with Gemini 2.5 Flash, the project requires a server-enabled platform like Firebase App Hosting.";
  
  return { 
    answer: message 
  };
}
