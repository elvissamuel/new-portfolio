import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "TeflonHub",
      location: "Lagos, Nigeria",
      period: "February 2025 – Present",
      achievements: [
        "Developed and maintained ERP frontend modules using React/Next.js and Vue, ensuring high performance",
        "Built and deployed Federal government applications including NSITF (Nigeria Social Insurance Trust Fund) and NRC (Nigerian Railway Corporation) systems",
        "Created responsive, accessible user interfaces for government portals serving millions of Nigerian citizens",
        "Built reusable UI components with Tailwind CSS, reducing development time by 30%",
        "Optimized database queries and API integrations for government applications, improving application performance",
        "Implemented security best practices and compliance standards required for Federal government applications",
        "Optimized SSR/SSG in Next.js for faster load times across government platforms",
      ],
      current: true,
    },
    {
      title: "Full-stack Developer",
      company: "Innovar Technologies",
      location: "Lagos, Nigeria",
      period: "August 2023 – February 2025",
      achievements: [
        "Developed user-friendly interfaces for school management and warehouse ERP systems",
        "Built and maintained robust API endpoints to handle large-scale data transactions",
        "Designed and implemented complex database schemas for student records and inventory management",
        "Ensured real-time data synchronization and state management, improving system responsiveness",
        "Collaborated with cross-functional teams to deliver scalable, maintainable solutions",
        "Streamlined development process by implementing reusable components, cutting development time",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Tenbox Technologies",
      location: "Dubai",
      period: "Contract",
      achievements: [
        "Developed responsive and visually appealing user interfaces using React, Tailwind, and Antd",
        "Built reusable components and modules to ensure scalability and maintainability",
        "Developed interactive features such as dashboards and administrative tools using Shadcn",
        "Used Axios and React Query for efficient API integration",
        "Integrated third-party services and external APIs for progressive web applications",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-slate-900">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-slate-900">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-slate-700">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-slate-50 text-slate-700">
                      {exp.period}
                    </Badge>
                    {exp.current && <Badge className="bg-green-100 text-green-800">Current</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-slate-400 mr-2 mt-2">•</span>
                      <span className="text-slate-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
