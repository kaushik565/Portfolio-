const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900 text-center">
      <div className="container-custom">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Kaushik. All rights reserved.
        </p>
        <p className="text-zinc-700 text-xs mt-2">
          Built with React, Tailwind, and Framer Motion.
        </p>
      </div>
    </footer>
  )
}

export default Footer
