# Bits of Good – Technical Communication Toolkit (Static Site)

This README describes how to build a **static documentation website** for
Bits of Good’s **Technical Communication Toolkit** using a **JavaScript/TypeScript
static site generator** (for example: Next.js, Astro, or a custom Vite-based setup).

The site should:

- Be **fully static** (can be exported to plain HTML/CSS/JS)
- Use **TypeScript** where possible
- Have a **sidebar tree** (like the “Learning Rust” site)
- Have a **search box** that filters across pages
- Render content from **Markdown files**

This README is written so an LLM (e.g., Codex/Claude) can follow it
and generate the whole project.

---

## 1. Overall Site Purpose

The site is the **Bits of Good Technical Communication Toolkit**.

Audience:

- **Developers**
- **PMs (Product Managers)**
- **Designers**
- **EMs (Engineering Managers)**

Goals:

- Explain how we do **technical communication** when building software for nonprofits
- Give new members an onboarding path
- Provide reusable templates (PRs, specs, READMEs, emails)
- Show good vs bad examples of communication
- Document standard practices for communicating with nonprofits

---

## 2. Tech Stack Requirements

Use **any JavaScript/TypeScript-based static site generator**, with these constraints:

- Must support:
  - File-based routing OR a simple routing system
  - Static export (generating pure HTML/CSS/JS, no server required)
  - React or similar component system is fine, but **no Rust** tools
- Recommended options (pick one in implementation):
  - **Next.js** with `output: 'export'` (static export)
  - **Astro** with Markdown content
  - **Vite + React** custom static build

For the purposes of this README, assume:

- We use **Next.js with TypeScript**, App Router or Pages Router is acceptable.
- We render content from a `content/` directory of Markdown files.
- We build a simple client-side search over the content metadata and headings.

---

## 3. Information Architecture (Pages)

These are the *logical pages* that must exist in the site:

- `/` – **Introduction**
- `/getting-started` – New Member Onboarding
- `/roles` – Roles & Responsibilities  
  (Developers, PMs, Designers, EMs)
- `/guidelines` – Writing & Communication Guidelines
- `/templates` – Templates Index
  - `/templates/pr-template`
  - `/templates/spec-template`
  - `/templates/readme-template`
  - `/templates/email-template`
- `/nonprofit-communication` – Communicating with Nonprofits
- `/examples` – Good vs Bad Examples
- `/faq` – FAQ & Common Mistakes

All these pages should be stored as Markdown (or MDX) files
in a `content/` directory.

---

## 4. Visual Layout & UX Requirements

### 4.1. General Layout

- **Header (top)**
  - Site title: “Bits of Good – Technical Communication Toolkit”
  - Optional small tagline
  - Search input on the right

- **Sidebar (left)**
  - Fixed position on desktop
  - Contains a **navigation tree** mirroring the site structure:
    - Introduction
    - Getting Started
    - Roles & Responsibilities
    - Writing & Communication Guidelines
    - Templates (expandable)
      - PR Template
      - Feature Spec Template
      - README Template
      - Nonprofit Email Template
    - Communicating With Nonprofits
    - Examples: Good vs Bad
    - FAQ & Common Mistakes

- **Main Content (right)**
  - Renders whatever page is active
  - Uses typography suitable for docs (headings, code blocks, lists)

- On mobile:
  - Sidebar can collapse into a hamburger menu.

### 4.2. Search

- A simple **client-side search**:
  - Input in the header
  - As the user types, shows a dropdown list of matching pages
  - Matches on page title and maybe some keywords defined per page
- It is acceptable to:
  - Maintain a small JSON index of pages (slug, title, description, keywords)
  - Filter this index on the client when the user types
- Clicking a result should navigate to that page.

---

## 5. Project Structure (Suggested)

Example file structure for a Next.js + TypeScript static site:

```text
.
├─ package.json
├─ tsconfig.json
├─ next.config.mjs        # or next.config.js, configured for static export
├─ public/
│   └─ (static assets, logo, etc.)
├─ content/
│   ├─ introduction.md
│   ├─ getting-started.md
│   ├─ roles.md
│   ├─ guidelines.md
│   ├─ nonprofit-communication.md
│   ├─ examples.md
│   ├─ faq.md
│   └─ templates/
│       ├─ index.md
│       ├─ pr-template.md
│       ├─ spec-template.md
│       ├─ readme-template.md
│       └─ email-template.md
├─ src/
│   ├─ app/ or pages/     # depending on router choice
│   │   ├─ (route components)
│   ├─ components/
│   │   ├─ Layout.tsx
│   │   ├─ Sidebar.tsx
│   │   ├─ Search.tsx
│   │   └─ MarkdownRenderer.tsx
│   └─ lib/
│       ├─ content.ts     # helpers to load/parse markdown
│       └─ searchIndex.ts # static data for search
└─ out/ or .next/export/  # static export target (build output)
If using Astro or another SSG, adapt path names accordingly,
but keep content vs components vs layout separation.

6. Content: Markdown Files
Each content page should be a Markdown file with at least:

A top-level heading (# Title)

Optional front-matter (YAML) with:

title

description

keywords (array or comma-separated)

Example with front-matter:

markdown
Copy code
---
title: "Introduction"
description: "Overview of the Bits of Good Technical Communication Toolkit."
keywords: ["intro", "overview", "toolkit"]
---

# Introduction

Welcome to the **Bits of Good Technical Communication Toolkit**.

This site teaches **Developers, PMs, Designers, and EMs** how we write,
communicate, and document our work when building software for nonprofits.

Our goals:

- Help new members onboard quickly  
- Improve clarity across roles  
- Ensure knowledge persists beyond any single semester  
- Communicate clearly with nontechnical nonprofit partners  

If you're new, start with [Getting Started](/getting-started).
Below are minimal starter contents for all pages.

6.1. content/getting-started.md
markdown
Copy code
---
title: "Getting Started"
description: "Onboarding guide for new Bits of Good members."
keywords: ["onboarding", "new members", "checklist"]
---

# Getting Started

This page is for **new members** of Bits of Good.

## What Technical Communication Means Here

Technical communication is how we:
- Write specs and requirements
- Document decisions and tradeoffs
- Explain how features work
- Communicate changes to nonprofits
- Make projects maintainable after we graduate

## First Week Checklist

### Day 1
- [ ] Read your project README  
- [ ] Skim the Toolkit (Introduction → Roles → Guidelines)  
- [ ] Join the project communication channels  

### Day 3
- [ ] Write your first PR using the PR template  
- [ ] Review one teammate's PR  
- [ ] Read the spec for your current feature  

### Day 7
- [ ] Contribute at least one doc improvement  
- [ ] Ask your EM/PM for feedback on your communication  
- [ ] Make sure you know how updates are sent to nonprofits  
6.2. content/roles.md
markdown
Copy code
---
title: "Roles & Responsibilities"
description: "Documentation responsibilities for Developers, PMs, Designers, and EMs."
keywords: ["roles", "developers", "pms", "designers", "ems"]
---

# Roles & Responsibilities

Different roles have different documentation responsibilities.

## Developers

- Write clear, structured PR descriptions
- Update READMEs when behavior changes
- Document tricky logic and edge cases
- Add comments or small docs for complex architectural decisions

## PMs (Product Managers)

- Write feature specs and acceptance criteria
- Summarize nonprofit conversations into structured notes
- Maintain a living roadmap / requirements doc
- Call out what needs additional documentation after meetings

## Designers

- Document design rationale (why we chose a particular UX)
- Provide annotated handoff notes in Figma or similar tools
- Update design files when flows change
- Note accessibility considerations (color, contrast, keyboard nav)

## EMs (Engineering Managers)

- Ensure the team follows communication guidelines
- Keep onboarding materials accurate
- Coordinate with PMs and nonprofit stakeholders on technical decisions
- Encourage knowledge sharing instead of siloing information
6.3. content/guidelines.md
markdown
Copy code
---
title: "Writing & Communication Guidelines"
description: "Core rules for clear writing and documentation."
keywords: ["writing", "guidelines", "style"]
---

# Writing & Communication Guidelines

These rules make our documentation clear and easy to use.

## Core Principles

1. **Simple > complex**  
2. **Short sentences > long paragraphs**  
3. **Examples > abstract explanations**  
4. **Screenshots > walls of text**  
5. **Assume the reader is new to the project**

## Style Rules

- Use headings and bullet points
- Use code blocks for commands and config
- Avoid unexplained jargon
- Prefer diagrams when describing flows

## Jargon Translation Examples

| Term         | Plain English                                      |
|--------------|-----------------------------------------------------|
| API          | A way for two systems to talk to each other         |
| Deploy       | Publish new code so users can access it             |
| Refactor     | Improve code without changing what it does          |
| Environment  | A specific setup (dev, staging, production, etc.)   |
6.4. content/nonprofit-communication.md
markdown
Copy code
---
title: "Communicating With Nonprofits"
description: "Guidelines for talking to nontechnical stakeholders."
keywords: ["nonprofits", "communication", "stakeholders"]
---

# Communicating With Nonprofits

Most nonprofits we work with are **not** technical.

Our job: explain what we’re doing in language they can understand.

## Rules

### 1. Avoid Jargon

Use plain language whenever possible.

### 2. Explain Impact, Not Implementation

Nonprofits care about outcomes.

- ❌ “We added client-side validation for malformed payloads.”
- ✅ “We added checks so users can't submit broken forms anymore.”

### 3. Send Regular Updates

Each update should include:
- What we completed
- What we're doing next
- Any blockers
- Questions where we need their input

### 4. Confirm Assumptions

Repeat requirements back in your own words to check understanding.
6.5. content/examples.md
markdown
Copy code
---
title: "Examples: Good vs Bad"
description: "Concrete examples of good and bad technical communication."
keywords: ["examples", "good", "bad", "pr", "spec"]
---

# Examples: Good vs Bad

Seeing examples is the fastest way to understand expectations.

## Pull Request Description

### ❌ Bad Example

```text
fixed the bug
✅ Good Example
text
Copy code
## What changed?
Fixed a bug where clicking "Submit" did nothing when required fields were empty.

## Why?
Users were submitting incomplete forms, causing confusing errors on the backend.

## How to test?
1. Go to /signup
2. Leave required fields empty
3. Click "Submit"
4. You should now see an error message instead of nothing happening.
Spec Writing
❌ Bad Example
The user creates an event and it works.

✅ Good Example
markdown
Copy code
## Summary
Users can create events with a name, date, and volunteer capacity.

## Acceptance Criteria
- User can specify name, date, and capacity
- Form validates missing required fields
- On success, user is redirected to the event details page

## Nonprofit Notes
They want capacity to be optional at launch.
yaml
Copy code

### 6.6. `content/faq.md`

```markdown
---
title: "FAQ & Common Mistakes"
description: "Frequently asked questions and common pitfalls."
keywords: ["faq", "mistakes", "troubleshooting"]
---

# FAQ & Common Mistakes

## FAQ

### Do I have to document everything?

No. You need to document **anything that would be hard for someone else to figure out** if you disappeared.

### What if I don't fully understand the feature yet?

Document what you know, and add an “Open Questions” section.

### What if the nonprofit doesn’t reply?

Reach out to your EM/PM. There should be a clear escalation path.

---

## Common Mistakes

- Only documenting in Slack instead of persistent docs  
- Writing PRs with one-line descriptions  
- Overexplaining obvious things while skipping edge cases  
- Forgetting to update docs when behavior changes  
- Using overly academic or formal language  
6.7. content/templates/index.md
markdown
Copy code
---
title: "Templates"
description: "Reusable templates for PRs, specs, READMEs, and emails."
keywords: ["templates", "pr", "spec", "readme", "email"]
---

# Templates

This section contains reusable templates for:

- Pull Request descriptions
- Feature specs
- Project READMEs
- Nonprofit communication emails

Use the sidebar to select a specific template.
6.8. content/templates/pr-template.md
markdown
Copy code
---
title: "Pull Request Template"
description: "Standard template for Bits of Good pull requests."
keywords: ["template", "pull request", "pr"]
---

# Pull Request Template

Use this structure for all PR descriptions.

```markdown
## What changed?
-

## Why did it change?
-

## How to test?
-

## Screenshots (if applicable)
-
yaml
Copy code

### 6.9. `content/templates/spec-template.md`

```markdown
---
title: "Feature Spec Template"
description: "Template for writing feature specifications."
keywords: ["template", "spec", "requirements"]
---

# Feature Spec Template

```markdown
## Summary
One paragraph explaining the feature.

## User Story
As a ___, I want to ___ so that ___.

## Acceptance Criteria
- [ ]
- [ ]
- [ ]

## Nonprofit Notes
Important preferences or constraints from the nonprofit.

## Open Questions
- 
yaml
Copy code

### 6.10. `content/templates/readme-template.md`

```markdown
---
title: "README Template"
description: "Template for project-level README files."
keywords: ["template", "readme", "project docs"]
---

# README Template

```markdown
# Project Name

## Overview
Short description of the project and who it serves.

## Getting Started
1. Install dependencies
2. Run the development server
3. Configure environment variables

## Folder Structure
Brief explanation of key folders and files.

## Contributing
Branch naming, PR workflow, coding style.

## Deployment
How to deploy or release a new version.

yaml
Copy code

### 6.11. `content/templates/email-template.md`

```markdown
---
title: "Nonprofit Email Template"
description: "Template for weekly updates to nonprofit partners."
keywords: ["template", "email", "nonprofit"]
---

# Nonprofit Email Template

```markdown
Hi [Nonprofit Name],

Here is this week’s update from the Bits of Good team:

**Completed**
- 

**In Progress**
- 

**Blocked**
- 

**Questions**
- 

Best,  
[Your Name]  
Bits of Good
markdown
Copy code

---

## 7. Implementation Notes (for the Code)

High-level requirements for the implementation:

1. **Markdown Rendering**
   - Use a Markdown → HTML pipeline (e.g., `remark`, `rehype`, or Astro’s built-in MD support).
   - Render headings, lists, code blocks, tables correctly.

2. **Routing**
   - Each Markdown file under `content/` should correspond to a route.
   - For example:
     - `content/introduction.md` → `/`
     - `content/getting-started.md` → `/getting-started`
     - etc.
   - The mapping can be defined in a small configuration object.

3. **Sidebar Navigation**
   - Define a navigation structure in a TypeScript config file, e.g. `src/lib/nav.ts`.
   - This structure should include:
     - path
     - title
     - optional children (for Templates section)
   - The `Sidebar` component renders this tree.

4. **Search**
   - Build a small array of page metadata:
     - slug/path
     - title
     - description
     - keywords
   - When the user types into the search bar:
     - Filter this array by a simple `includes()` match (case-insensitive).
     - Show a dropdown list of matches; clicking navigates.

5. **Static Export**
   - Configure the chosen SSG (e.g. Next.js `output: 'export'`) so the site can be built into static files directory (e.g. `out/`).
   - No server-side dependencies at runtime.

---

## 8. Commands (Example for a Next.js Setup)

These are example scripts; the actual implementation should provide them.

```bash
# install dependencies
npm install

# run dev server
npm run dev

# build production bundle
npm run build

# export static site (if using Next.js static export)
npm run export
The final static site should live in something like out/ and be deployable
to GitHub Pages, Netlify, Vercel (static), or any static host.

9. Definition of Done
The implementation is complete when:

All pages listed in this README exist and render from Markdown.

There is a left sidebar navigation tree mirroring the site structure.

There is a search box that filters and navigates to pages.

Layout is responsive (sidebar collapses on mobile).

The site can be built as a static bundle and served with any static file host.