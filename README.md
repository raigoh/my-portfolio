# Personal Portfolio Website 🚀

<div align="center">
  <img src="public/images/me.jpg" alt="Portfolio Preview" width="600"/>
  <br />
  <br />
  
  ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
</div>

## 🚀 Features

- ⚡️ Modern and Responsive Design
- 🎨 Customizable Theme (Light/Dark Mode)
- 📧 Contact Form with Email Integration
- 🎯 Interactive Project Showcase
- 📱 Mobile-First Approach
- 🔄 Smooth Animations with Framer Motion
- 🛠 Built with TypeScript for Type Safety

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Email Service:** Nodemailer
- **Deployment:** Netlify
- **Form Handling:** React Hook Form
- **Notifications:** Sonner

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/raigoh/my-portfolio.git
```

2. Install dependencies

```bash
cd my-portfolio
npm install
```

3. Create a `.env` file in the root directory

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

4. Start the development server

```bash
npm run dev
```

## 📁 Project Structure

```bash
my-portfolio/
├── netlify/
│ └── functions/
│ └── contact.js
├── public/
│ ├── images/
│ ├── videos/
│ └── pdf/
├── src/
│ ├── app/
│ ├── components/
│ └── lib/
├── netlify.toml
├── next.config.ts
└── package.json
```

## 🎨 Customization

1. Update personal information in `src/components/contact.tsx`
2. Modify styles in `src/globals.css`
3. Add your projects in `src/components/projects.tsx`
4. Customize theme in `tailwind.config.js`

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Environment Variables

Required environment variables:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## 🚀 Deployment

This project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure the environment variables in Netlify's dashboard
3. Deploy with the following settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Raigo Hõim - [vikationu@gmail.com](mailto:vikationu@gmail.com)

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/raigoh/my-portfolio.git)

---

<div align="center">
  Made with ❤️ by Raigo Hõim
</div>

⭐️ If you found this helpful, please star the repository!
