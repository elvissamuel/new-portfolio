import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI"],
    },
    {
      title: "Backend",
      skills: ["Next.js", "Express.js", "RESTful APIs", "Prisma ORM"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Firebase"],
    },
    {
      title: "Tools & Testing",
      skills: ["Git", "GitHub", "VS Code", "Linux", "Cypress", "React Testing Library"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
