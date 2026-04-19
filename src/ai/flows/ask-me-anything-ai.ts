
/**
 * @fileOverview An AI agent that answers questions about Pantaleo Kiruwa's journey, skills, and projects.
 * 
 * NOTE: This implementation is currently stubbed for static hosting environments (like GitHub Pages).
 * For full AI functionality, this project should be deployed to a server-side environment 
 * like Firebase App Hosting.
 */

import { z } from 'genkit';

// Input Schema
const AskMeAnythingInputSchema = z.object({
  question: z.string().describe("The user's question about Pantaleo Kiruwa."),
  academicJourney: z.string().describe("A detailed description of the academic background."),
  professionalJourney: z.string().describe("A detailed description of the professional experience."),
  skills: z.string().describe("A list or description of technical proficiencies, soft skills, and areas of expertise."),
  projects: z.string().describe("A detailed description of projects, including descriptions and technologies used."),
  interests: z.string().describe("A description of personal interests and hobbies."),
});
export type AskMeAnythingInput = z.infer<typeof AskMeAnythingInputSchema>;

// Output Schema
const AskMeAnythingOutputSchema = z.object({
  answer: z.string().describe("The AI's relevant and contextualized response to the user's question."),
});
export type AskMeAnythingOutput = z.infer<typeof AskMeAnythingOutputSchema>;

/**
 * Wrapper function to call the AI.
 * Since GitHub Pages is static, we return a helpful message instead of attempting a server call.
 */
export async function askMeAnything(input: AskMeAnythingInput): Promise<AskMeAnythingOutput> {
  console.log("AI request received:", input.question);
  
  // Dynamic message based on environment
  const message = "The AI Assistant is currently unavailable because this site is hosted on a static platform (GitHub Pages). To enable the AI 'Ask Me Anything' feature, please deploy this project to Firebase App Hosting.";
  
  return { 
    answer: message 
  };
}
