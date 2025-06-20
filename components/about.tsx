export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Professional Summary</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I'm an experienced full-stack developer with over 3 years of hands-on experience in building scalable web
              applications. I specialize in modern frontend technologies like React, Next.js, and Vue.js, combined with
              robust backend solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              My expertise spans across creating responsive user interfaces, optimizing application performance, and
              implementing clean, maintainable code. I'm passionate about delivering exceptional user experiences and
              staying current with the latest web technologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold text-slate-900 w-20">Location:</span>
                <span className="text-slate-600">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-slate-900 w-20">Education:</span>
                <span className="text-slate-600">B.Sc Computer Science</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-slate-900 w-20">Languages:</span>
                <span className="text-slate-600">English (Fluent), Yoruba</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Experience</span>
                <span className="font-semibold text-slate-900">3+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Projects Completed</span>
                <span className="font-semibold text-slate-900">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Technologies Mastered</span>
                <span className="font-semibold text-slate-900">10+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Current Focus</span>
                <span className="font-semibold text-slate-900">Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
