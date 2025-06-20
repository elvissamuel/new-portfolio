import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A full-stack warehouse inventory application with real-time tracking and comprehensive reporting features. Built to handle large-scale inventory operations with intuitive user interface.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Real-time inventory tracking",
        "Advanced reporting dashboard",
        "Multi-user access control",
        "Automated stock alerts",
      ],
    },
    {
      title: "Food Testing Laboratory App",
      description:
        "A comprehensive laboratory management system for food testing operations, featuring sample tracking, test result management, and compliance reporting.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      features: [
        "Sample lifecycle management",
        "Test result documentation",
        "Compliance reporting",
        "Quality assurance workflows",
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A mobile-responsive portfolio website showcasing projects, blog posts, and professional experience. Built with modern web technologies and optimized for performance.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      features: ["Responsive design", "Blog integration", "Project showcase", "Contact form"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 mb-2">{project.title}</CardTitle>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-slate-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1 bg-white text-slate-900 hover:bg-slate-50">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-slate-900 text-white hover:bg-slate-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
