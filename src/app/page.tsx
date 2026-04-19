import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { portfolioData } from "@/lib/portfolio-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Briefcase, 
  FolderKanban, 
  Mail, 
  ArrowRight,
  ExternalLink,
  MapPin,
  Github,
  Linkedin,
  Rocket,
  Send,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const profilePic = PlaceHolderImages.find(img => img.id === "profile-pic");

  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm border border-accent/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                Aerospace & Aeronautical Excellence
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight text-primary">
                Advancing the <span className="text-accent underline decoration-accent/30 underline-offset-8">Frontiers</span> of Flight.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-body">
                Hi, I&apos;m {portfolioData.owner.name}. {portfolioData.owner.tagline}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-2xl group" asChild>
                  <a href="#projects">
                    Explore My Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl border-2" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <a href={`https://${portfolioData.owner.github}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
                <a href={`https://${portfolioData.owner.linkedin}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
                <div className="flex items-center gap-2 text-muted-foreground text-sm border-l pl-6 border-muted">
                  <MapPin className="w-4 h-4" />
                  {portfolioData.owner.location}
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={profilePic?.imageUrl || "/profile.jpg"}
                  alt="Pantaleo Kiruwa Profile"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent font-bold mb-2 uppercase tracking-widest text-xs">
                <Briefcase className="w-4 h-4" />
                Work History
              </div>
              <h2 className="text-4xl font-headline font-bold text-primary">Professional Trajectory</h2>
            </div>
          </div>

          <div className="space-y-8">
            {portfolioData.experienceList.map((exp, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-2">
                        {exp.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent font-bold mb-2 uppercase tracking-widest text-xs">
                <FolderKanban className="w-4 h-4" />
                Academic & Research Projects
              </div>
              <h2 className="text-4xl font-headline font-bold text-primary">Aerospace Focus</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {portfolioData.projectsList.map((project, idx) => {
              const projectImg = PlaceHolderImages.find(img => img.id === project.id);
              return (
                <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={projectImg?.imageUrl || `/${project.id}.jpg`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <Button className="bg-accent text-accent-foreground hover:bg-white transition-colors" asChild>
                        <Link href={`/projects/${project.id}/`}>
                          <ExternalLink className="mr-2 w-4 h-4" /> View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-accent font-bold mb-2 uppercase tracking-widest text-xs">
                  <Sparkles className="w-4 h-4" />
                  Get In Touch
                </div>
                <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-6">Let&apos;s Build the Future of Aviation.</h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
                  Whether you have a question about my research or want to discuss a potential collaboration in the aerospace sector, I&apos;m always open to new opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Email Me</p>
                    <a href={`mailto:${portfolioData.owner.email}`} className="text-lg font-medium hover:text-accent transition-colors">
                      {portfolioData.owner.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Connect</p>
                    <a href={`https://${portfolioData.owner.linkedin}`} target="_blank" className="text-lg font-medium hover:text-accent transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="rounded-[2.5rem] p-2 bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase opacity-60 ml-2">Name</label>
                    <Input className="bg-white/10 border-white/10 text-white placeholder:text-white/30 h-12 rounded-2xl" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase opacity-60 ml-2">Email</label>
                    <Input className="bg-white/10 border-white/10 text-white placeholder:text-white/30 h-12 rounded-2xl" placeholder="hello@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-60 ml-2">Message</label>
                  <Textarea className="bg-white/10 border-white/10 text-white placeholder:text-white/30 min-h-[150px] rounded-2xl" placeholder="How can I help you?" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 rounded-2xl text-lg group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <Rocket className="w-4 h-4" />
            </div>
            <span className="font-headline font-bold tracking-tight text-primary">Pantaleo Kiruwa</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {portfolioData.owner.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
