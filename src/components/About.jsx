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
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Passionate about quality, learning automation, and building real-world solutions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with glassmorphism frame */}
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse-glow"></div>
            <div className="relative glass p-2 rounded-3xl">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Penke Lakshmana Sai Kaushik"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quality Assurance Supervisor | Aspiring Automation Engineer
              </h3>
              
              <div className="space-y-5 text-white/90 leading-relaxed text-lg">
                <p>
                  I am a <span className="font-bold text-yellow-300">Quality Assurance Supervisor</span> in the 
                  medical devices industry, where quality, compliance, and safety are paramount. I have hands-on 
                  experience in <span className="font-semibold text-pink-300">ISO 13485, QMS, IPQA, CAPA</span>, and audits.
                </p>
                
                <p>
                  Alongside my QA career, I'm actively learning <span className="font-bold text-purple-300">Java, 
                  Selenium automation, and web technologies</span> to transition into automation testing and software 
                  development roles.
                </p>
                
                <p>
                  My goal is to build <span className="font-bold text-yellow-300">dependable, scalable, and 
                  user-friendly systems</span> that combine industry quality expertise with modern software skills.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Location</p>
                    <p className="text-white/80">Visakhapatnam, India</p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-3 rounded-xl">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Industry</p>
                    <p className="text-white/80">Medical Device</p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Certifications</p>
                    <p className="text-white/80">ISO 13485, QMS</p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-xl">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Focus Areas</p>
                    <p className="text-white/80">QA, Automation, Dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
