
'use server';
/**
 * @fileOverview A professional portfolio assistant AI.
 * Handles questions about Pantaleo's aerospace background and projects.
 */

import { portfolioData } from "@/lib/portfolio-data";

export async function askMeAnything(question: string): Promise<{ answer: string }> {
  const q = question.toLowerCase();
  
  if (q.includes("hi") || q.includes("hello")) {
    return { answer: "Hello! I'm Pantaleo's portfolio assistant. How can I help you learn about his aerospace journey?" };
  }
  
  if (q.includes("project") || q.includes("research")) {
    const projectTitles = portfolioData.projectsList.map(p => p.title).join(", ");
    return { answer: `Pantaleo has worked on several key projects: ${projectTitles}. Which one would you like to know more about?` };
  }

  if (q.includes("education") || q.includes("study") || q.includes("university")) {
    return { answer: `Pantaleo graduated in Aerospace Engineering from IIAEM, Jain University in 2024.` };
  }

  if (q.includes("contact") || q.includes("email")) {
    return { answer: `You can reach Pantaleo at ${portfolioData.owner.email} or connect with him on LinkedIn.` };
  }

  return { 
    answer: "That's a great question! Pantaleo is passionate about aircraft maintenance and hypersonic dynamics. For more specific details, feel free to check his project reports or contact him directly via the form below!" 
  };
}
