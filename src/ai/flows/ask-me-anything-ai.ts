'use server';
/**
 * @fileOverview An AI agent that answers questions about the portfolio owner's journey, skills, and projects.
 *
 * - askMeAnything - A function that handles answering questions about the portfolio content.
 * - AskMeAnythingInput - The input type for the askMeAnything function.
 * - AskMeAnythingOutput - The return type for the askMeAnything function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const AskMeAnythingInputSchema = z.object({
  question: z.string().describe("The user's question about the portfolio owner."),
  academicJourney: z.string().describe("A detailed description of the portfolio owner's academic background."),
  professionalJourney: z.string().describe("A detailed description of the portfolio owner's professional experience."),
  skills: z.string().describe("A list or description of the portfolio owner's technical proficiencies, soft skills, and areas of expertise."),
  projects: z.string().describe("A detailed description of the portfolio owner's projects, including descriptions, technologies used, and external links."),
  interests: z.string().describe("A description of the portfolio owner's personal interests and hobbies."),
});
export type AskMeAnythingInput = z.infer<typeof AskMeAnythingInputSchema>;

// Output Schema
const AskMeAnythingOutputSchema = z.object({
  answer: z.string().describe("The AI's relevant and contextualized response to the user's question based on the provided portfolio content."),
});
export type AskMeAnythingOutput = z.infer<typeof AskMeAnythingOutputSchema>;

// Wrapper function to call the flow
export async function askMeAnything(input: AskMeAnythingInput): Promise<AskMeAnythingOutput> {
  return askMeAnythingFlow(input);
}

// Define the prompt
const askMeAnythingPrompt = ai.definePrompt({
  name: 'askMeAnythingPrompt',
  input: {schema: AskMeAnythingInputSchema},
  output: {schema: AskMeAnythingOutputSchema},
  prompt: `You are an AI assistant designed to answer questions about a portfolio owner named "The Owner".
Your goal is to provide relevant, contextualized, and concise responses based *only* on the provided information below.
Do not invent information or provide details not explicitly mentioned. If you don't have enough information to answer a question, state that clearly.

Here is the information about The Owner:

### Academic Journey
{{{academicJourney}}}

### Professional Journey
{{{professionalJourney}}}

### Skills & Competencies
{{{skills}}}

### Projects
{{{projects}}}

### Interests
{{{interests}}}

Based on the information above, please answer the following question from a visitor:
Question: "{{{question}}}"

Your Answer:`
});

// Define the flow
const askMeAnythingFlow = ai.defineFlow(
  {
    name: 'askMeAnythingFlow',
    inputSchema: AskMeAnythingInputSchema,
    outputSchema: AskMeAnythingOutputSchema,
  },
  async (input) => {
    const {output} = await askMeAnythingPrompt(input);
    if (!output) {
      throw new Error('Failed to generate response from AI.');
    }
    return output;
  }
);
