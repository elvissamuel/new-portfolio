import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">Omotehinse Elvis</h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 mb-6">Software Developer</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Experienced full-stack developer with over 3 years of experience, building scalable web applications and
            creating optimized user experiences with modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild variant="outline" className="bg-white text-slate-900 hover:bg-slate-50">
            <Link href="mailto:elvissamuel8@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-white text-slate-900 hover:bg-slate-50">
            <Link href="tel:+2348140913156">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-white text-slate-900 hover:bg-slate-50">
            <Link href="https://linkedin.com/in/omotehinseelvis1" target="_blank">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-white text-slate-900 hover:bg-slate-50">
            <Link href="https://github.com/elvissamuel" target="_blank">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
            <Link href="#about">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
