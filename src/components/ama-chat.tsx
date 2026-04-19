
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, User, Send, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "ai";
  content: string;
};

/**
 * Local response logic for GitHub Pages (Static Deployment).
 * This function handles chat logic without requiring a server backend.
 */
async function localAskMeAnything(question: string) {
  // Simulate a short delay to feel like an AI
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const response = "Hi! I'm Pantaleo's portfolio assistant. Currently, this site is running on GitHub Pages as a static site. To enable my advanced AI features (powered by Gemini), the project would need to be deployed to a platform with a backend, like Firebase App Hosting. For now, please explore the Experience and Projects sections to learn about my journey in Aerospace Engineering!";
  
  return { answer: response };
}

export function AmaChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: `Hi! I'm Pantaleo's assistant. Ask me anything about his aerospace engineering journey, skills, or projects!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await localAskMeAnything(userMessage);
      setMessages((prev) => [...prev, { role: "ai", content: result.answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "I'm sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ama" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>PORTFOLIO ASSISTANT</span>
          </div>
          <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Ask Me Anything</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get instant answers about my career, skills, and background from my custom assistant.
          </p>
        </div>

        <Card className="shadow-xl border-accent/20 overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <CardTitle className="text-xl">Pantaleo&apos;s Assistant</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  Ready to help with your inquiries
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth bg-background"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                      msg.role === "user" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                    )}
                  >
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground rounded-tr-none"
                        : "bg-muted text-foreground rounded-tl-none"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 mr-auto items-center text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm italic">Thinking...</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t bg-muted/30 flex gap-2">
              <Input
                placeholder="Ask about my aerospace experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="rounded-full bg-background"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full bg-primary shrink-0"
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
