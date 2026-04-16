import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { AmaChat } from "@/components/ama-chat";
import { portfolioData } from "@/lib/portfolio-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  FolderKanban, 
  Mail, 
  ArrowRight,
  ChevronRight,
  ExternalLink,
  MapPin,
  Github,
  Linkedin,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
                Hi, I&apos;m {portfolioData.owner.name}. An aerospace engineering graduate from the International Institute of Aerospace Engineering and Management, Jain University, passionate about space exploration, and space sciences in general, and eager to work in the Aeronautical sector as an Aircraft Maintenance Engineer, contribute meaningfully, and make a significant impact in the field.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-2xl group" asChild>
                  <a href="#projects">
                    Explore My Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl" asChild>
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
                  src={profilePic?.imageUrl || "https://picsum.photos/seed/pantaleo-kiruwa/600/600"}
                  alt="Pantaleo Kiruwa Profile"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  data-ai-hint="professional headshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Trajectory */}
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
            <p className="text-muted-foreground max-w-md">
              A chronological view of my roles, academic research, and career aspirations in the aerospace sector.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {portfolioData.experienceList.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow group-hover:border-accent/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-full">{exp.period}</span>
                  </div>
                  <p className="font-semibold text-sm mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
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
                <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={projectImg?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <Button className="bg-accent text-accent-foreground hover:bg-white transition-colors" asChild>
                        <a href="#"><ExternalLink className="mr-2 w-4 h-4" /> View Details</a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 bg-card border-x border-b rounded-b-3xl">
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

      {/* AI Ask Me Anything */}
      <AmaChat />

      {/* Contact Form */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-white shadow-2xl overflow-hidden border">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-headline font-bold mb-6 leading-tight">Let&apos;s build the <span className="text-accent italic">future</span> of aviation.</h2>
                  <p className="text-primary-foreground/70 text-lg mb-10">
                    Always open to discussing aerospace innovations, maintenance collaborations, or technical opportunities in the aeronautical sector.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold opacity-50">Email Me</p>
                        <p className="text-lg font-medium">{portfolioData.owner.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest font-bold opacity-50">Location</p>
                        <p className="text-lg font-medium">{portfolioData.owner.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-10">
                  <a href={`https://${portfolioData.owner.github}`} target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"><Github size={18} /></a>
                  <a href={`https://${portfolioData.owner.linkedin}`} target="_blank" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"><Linkedin size={18} /></a>
                </div>
              </div>

              <div className="p-12 lg:p-16">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                      <Input placeholder="Your Name" className="h-12 border-muted bg-muted/20 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <Input placeholder="your@email.com" className="h-12 border-muted bg-muted/20 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                    <Input placeholder="Aerospace Collaboration" className="h-12 border-muted bg-muted/20 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                    <Textarea placeholder="How can we work together in the aeronautical sector?" className="min-h-[150px] border-muted bg-muted/20 rounded-2xl resize-none" />
                  </div>
                  <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-lg rounded-2xl group shadow-lg shadow-primary/20">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
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
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#projects" className="hover:text-primary">Experience</a>
            <a href="#ama" className="hover:text-primary">AI Chat</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
