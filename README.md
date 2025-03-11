# Personal Portfolio Website 🚀

![Portfolio Preview](public/images/preview.png)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and a contact form with email integration.

## ✨ Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌓 Dark/Light mode support
- ⚡ Fast performance
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with email integration
- 🔧 Built with TypeScript
- 🎯 SEO optimized

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Nodemailer](https://nodemailer.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your email configuration:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### 📧 Email Configuration

To enable the contact form functionality:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security → App Passwords
   - Select 'Mail' and your device
   - Copy the generated password
4. Use these credentials in your `.env` file

## 📁 Project Structure

portfolio/
├── src/
│ ├── components/
│ │ ├── ui/
│ │ └── ...
│ ├── lib/
│ │ └── email.ts
│ └── pages/
│ └── api/
├── public/
│ └── images/
└── ...

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🎨 Customization

1. Update personal information in `src/components/contact.tsx`
2. Modify styles in `src/globals.css`
3. Add your projects in `src/components/projects.tsx`
4. Customize theme in `tailwind.config.js`

## 📝 Environment Variables

Create a `.env` file with the following variables:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Your Name - [vikationu@gmail.com](mailto:vikationu@gmail.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐️ If you found this helpful, please star the repository!
