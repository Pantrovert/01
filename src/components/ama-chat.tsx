
"use client";

import { useState, useRef, useEffect } from "react";
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { askMeAnything } from "@/ai/flows/ask-me-anything-ai";

type Message = {
  role: "user" | "bot";
  content: string;
};

export function AmaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello! I'm Pantaleo's AI assistant. Ask me anything about his aerospace journey or research projects!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const { answer } = await askMeAnything(userMessage);
      setMessages((prev) => [...prev, { role: "bot", content: answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Sorry, I encountered an error. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 w-16 h-16 rounded-2xl shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground z-40 transition-transform hover:scale-110",
          isOpen && "scale-0"
        )}
      >
        <Sparkles className="w-8 h-8" />
      </Button>

      <div
        className={cn(
          "fixed bottom-8 right-8 w-[90vw] max-w-[400px] z-50 transition-all duration-500 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <Card className="shadow-2xl border-2 rounded-[2rem] overflow-hidden flex flex-col h-[600px]">
          <CardHeader className="bg-primary text-primary-foreground p-6 flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg font-headline">Ask Me Anything</CardTitle>
                <p className="text-xs opacity-70">AI Portfolio Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 text-white rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 overflow-hidden bg-muted/30">
            <ScrollArea className="h-full p-6" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-3",
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                        msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      )}
                    >
                      {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div
                      className={cn(
                        "p-4 rounded-2xl text-sm leading-relaxed max-w-[80%]",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-white text-primary rounded-tl-none border shadow-sm"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border shadow-sm flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 bg-white border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex w-full gap-2"
            >
              <Input
                placeholder="Ask about my projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="rounded-xl border-muted bg-muted/20 focus:ring-accent"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 rounded-xl shrink-0">
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
