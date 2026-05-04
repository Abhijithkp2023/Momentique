Wedding Event Frontend (Digital Atelier)
This is the high-end, production-ready frontend for a digital wedding invitation platform. It is built to deliver high-fidelity animations (GSAP/Framer) while maintaining a strict, reusable structure.

🚀 Core Architecture
We follow a Component-Widget-Page hierarchy to ensure reusability and scalability.

Components (/src/components): Pure, atomic UI elements. No business logic.  

Examples: Button.tsx, Typography.tsx, AnimateOnScroll.tsx, LanguageSwitcher.tsx.

Widgets (/src/widgets): Logic-aware sections composed of multiple components.

Examples: HeroBanner.tsx, RSVPSection.tsx, TimelineSlider.tsx, PhotoGallery.tsx.

Templates (/src/templates): Layout structures that accept JSON data to render a specific theme.

Pages (/src/pages): High-level routing entry points.

🛠 Tech Stack & Rules
Framework: React with Page Routing.

Animation:

GSAP: For high-end cinematic sequences and scroll-triggers.

Framer Motion: For micro-interactions and simple state transitions.

AOS: For lightweight scroll reveal effects.

Multi-language: react-i18next for translations. Supports LTR and RTL.

Optimization: Lazy loading for 3D/Heavy widgets; code-splitting for templates.

📁 Project Structure
Plaintext
src/
├── assets/             # Global fonts, SVGs, high-res images
├── components/         # Atomic UI (Buttons, Inputs, Spacers)
├── widgets/            # Section-level UI (Banner, RSVP, Map)
├── hooks/              # Custom hooks (useLanguage, useTheme)
├── i18n/               # Translation files & font configuration
├── pages/              # Route definitions
├── services/           # API calls to Backend
├── templates/          # JSON-driven wedding layouts
└── styles/             # Global CSS & Tailwind config
🏗 Template Execution Logic (JSON-Driven)
The Admin user selects a template and fills a form. The backend generates a configuration JSON. The frontend uses a dynamic slug to render the site:

URL Entry: [yoursite.com/wedding/:slug](https://yoursite.com/wedding/:slug)

Data Fetch: Fetch JSON based on :slug.

Template Mapper: Map template_id from JSON to a component in /templates.

Injection: Pass the JSON data as props to the specific template.

🌐 Multi-language & Typography Rules
To maintain "Premium Feel," every language must have its own Typography Suite.

Font Mapping: Do not use one font for all. Create a mapping in i18n/config.ts.

English: Modern Serif (Playfair Display)

Arabic: Elegant Kufic script

Malayalam: Clean, high-legibility sans-serif

RTL Support: Use Tailwind's logical properties (e.g., ps-4 instead of pl-4) and dir="rtl" attribute based on the selected language.

Fallback: Always define a fallback font-family to avoid layout shifts.

📜 Coding Principles (For AI Agent)
Reusable Only: If you write a style or logic twice, move it to a Component or Hook.

No Over-Optimization: Focus on readability first. Use GSAP for heavy lifting, AOS for simple reveals.

DRY (Don't Repeat Yourself): Ensure Widgets are built to be layout-agnostic so they fit in multiple templates.

Prop-Driven Styling: Widgets must accept colors and fonts from the JSON to allow theme customization.

🚦 Future Readiness
Widget-Based Growth: Adding a new template should only require rearranging existing Widgets and creating 1-2 new ones.

Headless Ready: The frontend treats the backend purely as a JSON provider, making it easy to swap backends later.