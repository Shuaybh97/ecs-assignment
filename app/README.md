# Portfolio App Structure

This folder contains your complete portfolio website application with all necessary files organized in a clean, portable structure.

## 📁 Folder Structure

```
portfolio-app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component with metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles with Tailwind directives
├── components/            # React components
│   └── Portfolio.tsx      # Main portfolio component
├── data/                  # Data and configuration files
│   ├── types.ts          # TypeScript interfaces and types
│   ├── skills.ts         # Skills data
│   ├── projects.ts       # Projects data with status
│   ├── experience.ts     # Work experience data
│   └── social.ts         # Social links configuration
└── public/               # Static assets
    └── profile.jpg       # Profile picture

```

## 🚀 How to Use

### 1. Copy to Your Workspace
Simply copy the `portfolio-app` folder to your desired location and rename if needed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

### 4. Deploy
The entire folder is ready for:
- **Docker deployment**: Use with your existing Dockerfile
- **Vercel**: Push to GitHub and connect to Vercel
- **Traditional hosting**: Build and deploy the `.next` folder

## 📝 File Descriptions

### App Files
- **layout.tsx**: Next.js root layout with metadata (page title, description)
- **page.tsx**: Home page that imports and renders the Portfolio component
- **globals.css**: Global styles and Tailwind CSS directives

### Components
- **Portfolio.tsx**: Main component containing all sections (About, Skills, Projects, Experience) with smooth navigation

### Data Files
- **types.ts**: TypeScript interfaces (SectionType, SkillGroup, Project, Experience)
- **skills.ts**: Array of skill groups with categories
- **projects.ts**: Array of projects with title, description, tech stack, and status
- **experience.ts**: Array of work experience entries
- **social.ts**: Social links (GitHub, LinkedIn, CV)

### Assets
- **profile.jpg**: Your profile picture (320x320px)

## ⚙️ Configuration Files Needed

When moving this app, you'll need the following files from the root directory:

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `Dockerfile` - For containerization (optional)
- `.dockerignore` - For Docker builds (optional)

## 🔧 Customization

### Update Social Links
Edit `data/social.ts`:
```typescript
export const socialLinks = {
  github: 'your-github-url',
  linkedin: 'your-linkedin-url',
  cv: 'your-cv-url', // or use Google Drive link
};
```

### Update Skills
Edit `data/skills.ts` to add/remove skill categories

### Update Projects
Edit `data/projects.ts` to add/modify projects with status badges

### Update Experience
Edit `data/experience.ts` to add/modify work experience

## 📦 Moving This Folder

This folder is completely self-contained for the application source code. To move it:

1. **Copy the entire `portfolio-app` folder** to your desired location
2. **Replace the `app`, `components`, `data`, and `public` folders** in your project with the contents of this folder
3. **Keep the configuration files** (`package.json`, `tsconfig.json`, etc.) at the root level

## ✅ Ready to Deploy

This structure is optimized for:
- ✅ Local development
- ✅ Docker containerization
- ✅ AWS ECS deployment
- ✅ Vercel deployment
- ✅ Traditional static hosting

Enjoy your portable portfolio! 🎉
