
/**
 * @fileOverview A 100% pure TypeScript stub for the AI agent.
 * 
 * This file contains NO imports to prevent the Next.js bundler from 
 * pulling in server-side dependencies during static export for GitHub Pages.
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
 * Static wrapper function.
 * Since GitHub Pages is static, we return a helpful message.
 */
export async function askMeAnything(input: AskMeAnythingInput): Promise<AskMeAnythingOutput> {
  console.log("AI request received in static mode:", input.question);
  
  const message = "The interactive AI 'Ask Me Anything' feature is currently disabled in this static version of the site (GitHub Pages). To enable full AI functionality with Gemini 2.5 Flash, the project should be deployed to a server-enabled platform like Firebase App Hosting.";
  
  return { 
    answer: message 
  };
}
