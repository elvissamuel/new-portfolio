import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Work Together</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you're looking for a frontend
              developer, full-stack developer, or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-slate-500 mr-3" />
                <Link href="mailto:elvissamuel8@gmail.com" className="text-slate-700 hover:text-slate-900">
                  elvissamuel8@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-slate-500 mr-3" />
                <Link href="tel:+2348140913156" className="text-slate-700 hover:text-slate-900">
                  +234 814 091 3156
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-slate-500 mr-3" />
                <span className="text-slate-700">Lagos, Nigeria</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button asChild variant="outline" size="sm" className="bg-white text-slate-900 hover:bg-slate-50">
                <Link href="https://linkedin.com/in/omotehinseelvis1" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="bg-white text-slate-900 hover:bg-slate-50">
                <Link href="https://github.com/elvissamuel" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
