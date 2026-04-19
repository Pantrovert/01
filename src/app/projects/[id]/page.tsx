
import { portfolioData } from "@/lib/portfolio-data";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Rocket,
  Calendar,
  Globe,
  FileText
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Required for static export in Next.js 15
export async function generateStaticParams() {
  return portfolioData.projectsList.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioData.projectsList.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6 leading-tight">
                  {project.title}
                </h1>
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-y py-4 border-muted/30">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    <span>Aerospace Project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground font-body">
                {project.fullHighlight.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-2xl group" asChild>
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 w-5 h-5" />
                    Visit Project Link
                  </a>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl border-2 group" asChild>
                  <a href={project.reportPath} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 w-5 h-5 text-accent" />
                    View Project Report
                  </a>
                </Button>
              </div>

              <div className="bg-accent/5 p-6 rounded-3xl border border-accent/10 mt-12">
                <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-widest">Aeronautical Note</p>
                <p className="text-muted-foreground text-sm italic">
                  This project was conducted as part of the aerospace engineering curriculum at IIAEM, Jain University, focusing on advanced simulation and diagnostic techniques.
                </p>
              </div>
            </div>

            <div className="space-y-12 lg:sticky lg:top-32">
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-square lg:aspect-video">
                <Image
                  src={`/${project.id}.jpg`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white border rounded-3xl shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Technique</p>
                  <p className="font-headline font-bold text-primary">Advanced Analysis</p>
                </div>
                <div className="p-6 bg-white border rounded-3xl shadow-sm">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Scope</p>
                  <p className="font-headline font-bold text-primary">Aeronautical Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
