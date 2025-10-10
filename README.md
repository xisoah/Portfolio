Project Overview
This portfolio project showcases a personal portfolio site built with Next.js and TypeScript. It includes sections for hero, projects, skills, education, and contact, designed to be responsive and accessible.

Tech Stack
- Next.js
- React
- TypeScript
- ESLint
- PostCSS
- Geist font (via next/font)
- Vercel deployment

Local Development
1. Install dependencies
   - Use npm, yarn, pnpm, or bun (the repository includes scripts referencing bun)
2. Run the development server:
   - npm run dev
   - yarn dev
   - pnpm dev
   - bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Build and Deployment
- Build for production:
  - npm run build
  - yarn build
- Deploy to Vercel or any hosting platform.

Project Structure
- src/  - source code
- public/ - static assets
- PRD.MD
- README.md

Environment and CI
- azure-pipelines.yml is configured for CI/CD.
- Node.js version: see package.json engines (if available)
- This project runs in a Next.js environment with Vercel font optimization.

Contributing
- Contributions are welcome. Please open issues and submit pull requests.
- See azure-pipelines.yml for CI details.
