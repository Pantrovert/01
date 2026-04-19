'use server';
/**
 * @fileOverview An AI agent that answers questions about Pantaleo Kiruwa's journey, skills, and projects.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskMeAnythingInputSchema = z.object({
  question: z.string().describe("The user's question about Pantaleo Kiruwa."),
  academicJourney: z.string().describe("Academic background."),
  professionalJourney: z.string().describe("Professional experience."),
  skills: z.string().describe("Technical proficiencies."),
  projects: z.string().describe("Project descriptions."),
  interests: z.string().describe("Personal interests."),
});
export type AskMeAnythingInput = z.infer<typeof AskMeAnythingInputSchema>;

const AskMeAnythingOutputSchema = z.object({
  answer: z.string().describe("The AI's response."),
});
export type AskMeAnythingOutput = z.infer<typeof AskMeAnythingOutputSchema>;

export async function askMeAnything(input: AskMeAnythingInput): Promise<AskMeAnythingOutput> {
  return askMeAnythingFlow(input);
}

const askMeAnythingPrompt = ai.definePrompt({
  name: 'askMeAnythingPrompt',
  input: {schema: AskMeAnythingInputSchema},
  output: {schema: AskMeAnythingOutputSchema},
  prompt: `You are an AI assistant for Pantaleo Kiruwa, an aerospace engineering graduate.
Answer questions based *only* on this info:

Academic: {{{academicJourney}}}
Professional: {{{professionalJourney}}}
Skills: {{{skills}}}
Projects: {{{projects}}}
Interests: {{{interests}}}

Question: "{{{question}}}"`
});

const askMeAnythingFlow = ai.defineFlow(
  {
    name: 'askMeAnythingFlow',
    inputSchema: AskMeAnythingInputSchema,
    outputSchema: AskMeAnythingOutputSchema,
  },
  async (input) => {
    const {output} = await askMeAnythingPrompt(input);
    return output!;
  }
);