import { HiCheckCircle } from 'react-icons/hi'

const About = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">About </span>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Passionate about quality, learning automation, and building real-world solutions.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile Card */}
          <div className="relative group animate-fade-in-up lg:col-span-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse-glow"></div>
            <div className="relative glass p-5 rounded-3xl border border-white/10">
              <div className="relative h-[360px] rounded-2xl overflow-hidden">
                <img
                  src="/WhatsApp Image 2026-01-30 at 8.35.59 PM.jpeg"
                  alt="Penke Lakshmana Sai Kaushik"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-bold text-white">Penke Lakshmana Sai Kaushik</h3>
                <p className="text-white/80 mt-2">Quality Assurance Supervisor</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="glass-dark px-3 py-1 rounded-full text-sm text-white/90">ISO 13485</span>
                  <span className="glass-dark px-3 py-1 rounded-full text-sm text-white/90">QMS</span>
                  <span className="glass-dark px-3 py-1 rounded-full text-sm text-white/90">IPQA</span>
                  <span className="glass-dark px-3 py-1 rounded-full text-sm text-white/90">CAPA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview + Highlights */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-7 rounded-3xl border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Quality Assurance Supervisor | Medical Device Manufacturing
              </h3>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Quality Assurance Supervisor with experience in medical device manufacturing. Skilled in
                <span className="font-semibold text-pink-300"> ISO 13485, QMS, IPQA, and CAPA</span>, with a strong focus on
                compliance, audits, and documentation to improve quality systems.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div className="glass-dark p-5 rounded-2xl">
                  <p className="text-white font-bold mb-2">Key Skills</p>
                  <ul className="space-y-2 text-white/85 text-sm md:text-base">
                    <li className="flex items-start gap-2"><span className="text-yellow-300">•</span> ISO 13485 Compliance</li>
                    <li className="flex items-start gap-2"><span className="text-yellow-300">•</span> In‑Process QA (IPQA)</li>
                    <li className="flex items-start gap-2"><span className="text-yellow-300">•</span> QMS & Documentation</li>
                    <li className="flex items-start gap-2"><span className="text-yellow-300">•</span> CAPA & Audits</li>
                  </ul>
                </div>
                <div className="glass-dark p-5 rounded-2xl">
                  <p className="text-white font-bold mb-2">Focus Areas</p>
                  <ul className="space-y-2 text-white/85 text-sm md:text-base">
                    <li className="flex items-start gap-2"><span className="text-pink-300">•</span> QA Compliance & Risk</li>
                    <li className="flex items-start gap-2"><span className="text-pink-300">•</span> Process Improvement</li>
                    <li className="flex items-start gap-2"><span className="text-pink-300">•</span> Automation Learning</li>
                    <li className="flex items-start gap-2"><span className="text-pink-300">•</span> Documentation & Audits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass p-7 rounded-3xl border border-white/10">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Experience Timeline</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-yellow-300"></div>
                  <div>
                    <p className="text-white font-semibold">Molbio Diagnostics Limited</p>
                    <p className="text-white/80 text-sm md:text-base">QA Supervisor • 2024 – Present</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-pink-300"></div>
                  <div>
                    <p className="text-white font-semibold">Brainsitter India Pvt Ltd</p>
                    <p className="text-white/80 text-sm md:text-base">Supervisor • 2023 – 2024</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-blue-300"></div>
                  <div>
                    <p className="text-white font-semibold">Power Grid Corporation of India</p>
                    <p className="text-white/80 text-sm md:text-base">Apprentice (EEE) • 2018 – 2019</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-3 text-white/90">
              <span className="inline-flex items-center gap-2 glass-dark px-3 py-2 rounded-full">
                <HiCheckCircle className="text-yellow-300" />
                <span className="font-semibold text-white">Location:</span> Visakhapatnam, India
              </span>
              <span className="inline-flex items-center gap-2 glass-dark px-3 py-2 rounded-full">
                <HiCheckCircle className="text-pink-300" />
                <span className="font-semibold text-white">Industry:</span> Medical Device
              </span>
              <span className="inline-flex items-center gap-2 glass-dark px-3 py-2 rounded-full">
                <HiCheckCircle className="text-blue-300" />
                <span className="font-semibold text-white">Certifications:</span> ISO 13485, QMS
              </span>
              <span className="inline-flex items-center gap-2 glass-dark px-3 py-2 rounded-full">
                <HiCheckCircle className="text-green-300" />
                <span className="font-semibold text-white">Focus Areas:</span> QA, Automation, Dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
