# DEV MOTORS

![App Preview](https://imgix.cosmicjs.com/8b6eca00-6006-11f1-b25a-95d4ebff12bd-autopilot-photo-1556761175-5973dc0f32e7-1780571665048.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and responsive company website for **DEV MOTORS**, a professional services company. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), this site showcases services, team members, case studies, and client testimonials sourced directly from your existing content model.

## Features

- 🏠 **Dynamic Homepage** — Hero section, featured services, team highlights, recent case studies, and rotating testimonials
- 🛠️ **Services** — Listing and detail pages with icons, summaries, and rich descriptions
- 👥 **Team Members** — Profile grid and individual bios with photos, job titles, and contact links
- 📊 **Case Studies** — Showcase challenges, solutions, and measurable results with related services and project leads
- 💬 **Testimonials** — Star-rated client quotes with company and role information
- 📱 **Fully Responsive** — Mobile-first design that looks stunning on any device
- ⚡ **Server Components** — Fast data fetching with Next.js App Router
- 🎨 **Modern UI** — Tailwind CSS with a refined automotive-inspired aesthetic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a215db3d66dd9646b9dfa44&clone_repository=6a215ee7d66dd9646b9dfa8b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "DEV MOTORS". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the `services`, `team-members`, `case-studies`, and `testimonials` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are provided automatically when cloning in Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single case study with related objects
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This application reads from four object types in your Cosmic bucket:

- **services** — `service_name`, `icon`, `summary`, `description`, `featured_image`
- **team-members** — `name`, `job_title`, `bio`, `photo`, `email`, `linkedin_url`
- **case-studies** — `title`, `client_name`, `industry`, `challenge`, `solution`, `results`, `featured_image`, `related_service`, `project_lead`
- **testimonials** — `client_name`, `company`, `job_title`, `quote`, `rating`, `photo`, `related_service`

All data fetching happens server-side using the Cosmic SDK with the `depth` parameter to resolve connected objects. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Add the environment variables
4. Deploy

<!-- README_END -->