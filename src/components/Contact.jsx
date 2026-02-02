import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiMail className="text-3xl" />,
      title: 'Email',
      value: 'lakshmanasaikaushik565@gmail.com',
      link: 'mailto:lakshmanasaikaushik565@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <HiPhone className="text-3xl" />,
      title: 'Phone',
      value: '+91 8886875787',
      link: 'tel:+918886875787',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      title: 'LinkedIn',
      value: 'Lakshmana Sai Kaushik P',
      link: 'https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaGithub className="text-3xl" />,
      title: 'GitHub',
      value: 'kaushik565',
      link: 'https://github.com/kaushik565',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: <HiLocationMarker className="text-3xl" />,
      title: 'Location',
      value: 'Visakhapatnam, India',
      link: null,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Get In </span>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            I'm open to opportunities in Quality Assurance, Automation Testing, and Software Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group glass p-6 rounded-3xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                {info.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-yellow-300 transition-colors break-words text-sm"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-white/80 text-sm">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-3xl text-center shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-white to-pink-300 bg-clip-text text-transparent">
            Ready to Work Together?
          </h3>
          <p className="text-xl mb-10 text-white/90 font-medium max-w-2xl mx-auto">
            Let's discuss how I can bring quality, reliability, and innovation to your team
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:lakshmanasaikaushik565@gmail.com"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50"
            >
              <HiMail className="text-2xl group-hover:animate-bounce" />
              Send Email
            </a>
            <a
              href="/Penke%20Lakshmana%20Sai%20Kaushik.docx"
              download
              className="inline-flex items-center justify-center gap-3 glass-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 hover:bg-white/20 shadow-xl"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
