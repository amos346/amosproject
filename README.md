# Amos Tech — Professional Website Design & SEO Specialist Portfolio

A stunning, modern, premium personal portfolio website for **Amos Tech** (Amos Gbadebo), a professional Website Designer and SEO Specialist based in Nigeria with 3 years of experience.

## Tech Stack

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React**

## Project Structure

- `index.html`: Main HTML entry point with metadata and fonts.
- `package.json`: Project dependencies, scripts (`npm run dev`, `npm run build`), and configuration.
- `tsconfig.json`: TypeScript compiler configuration.
- `vite.config.ts`: Vite bundler configuration.
- `vercel.json`: Vercel deployment and client-side routing configuration.
- `src/`: Source code directory containing `App.tsx`, `main.tsx`, and `index.css`.

## Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/amos-tech-portfolio.git
   cd amos-tech-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To generate the production-ready build inside the `dist` folder:

```bash
npm run build
```

## Deploying to Vercel

1. Push your project to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will automatically configure the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
