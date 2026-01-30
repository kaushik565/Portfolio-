# React Portfolio - Penke Lakshmana Sai Kaushik

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing my skills in Quality Assurance, Automation Testing, and Full-Stack Development.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Sleek UI with Tailwind CSS and gradient animations
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🎯 **SEO Optimized** - Ready for search engine indexing
- 🔥 **Production Ready** - Optimized build for deployment

## 🛠️ Technologies Used

- **React 18** - Modern React with Hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

## 📋 Sections

1. **Hero/Home** - Eye-catching introduction with gradient background
2. **About Me** - Background, experience, and professional journey
3. **Skills** - Technical skills organized by categories:
   - Quality & Compliance (ISO 13485, QMS, IPQA, CAPA, Audits)
   - Technical Skills (Java, Selenium, JavaScript, React, Node.js, Socket.IO)
   - Tools & Platforms (Git, VS Code, Postman, Firebase, MongoDB, Linux/Windows)
4. **Projects** - Showcase of real-world applications:
   - Live Cricket Scoring System
   - Industrial Safety Reporting App
   - Admin Dashboard Applications
5. **Contact** - Multiple ways to connect
6. **Footer** - Quick links and social media

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173/`

## 📦 Deployment

### Deploy to Netlify

1. **Option 1: Drag & Drop**
   - Build your project: `npm run build`
   - Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

2. **Option 2: Git Integration**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

### Deploy to Vercel

1. **Option 1: Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Option 2: Git Integration**
   - Push your code to GitHub
   - Import project on [Vercel](https://vercel.com)
   - Vercel will auto-detect Vite settings
   - Deploy!

### Deploy to GitHub Pages

```bash
npm run build
# Upload the dist folder to your gh-pages branch
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/`:

- **Hero.jsx** - Name, title, and introduction
- **About.jsx** - Biography and background
- **Skills.jsx** - Your skills and technologies
- **Projects.jsx** - Add/edit your projects
- **Contact.jsx** - Contact information and social links
- **Footer.jsx** - Footer content

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Add Your Images

Replace placeholder images in:
- About section (`src/components/About.jsx`)
- Add your profile photo

## 📝 Project Structure

```
Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main App component
│   ├── index.css        # Tailwind imports
│   └── main.jsx         # Entry point
├── index.html
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
├── netlify.toml         # Netlify deployment config
├── vercel.json          # Vercel deployment config
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Penke Lakshmana Sai Kaushik**

- 📧 Email: lakshmanasaikaushik565@gmail.com
- 💼 LinkedIn: [lakshmana-sai-kaushik-p-b10697183](https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183)
- 💻 GitHub: [@kaushik565](https://github.com/kaushik565)
- 📍 Location: Visakhapatnam, India

---

Built with ❤️ using React, Vite, and Tailwind CSS
