# Polish core pages and complete site quality pass

## Scope
- Rework About, Programs, Projects, Contact, and Donate using the established navy, teal, sun-gold, and Quicksand system.
- Preserve all existing copy, routes, form behavior, donation steps, contact actions, and current image library.
- Replace decorative excess with calmer editorial layouts, clearer hierarchy, refined spacing, restrained motion, and accessible controls.
- Replace all Donate emojis with Lucide icons and improve its pledge, payment, validation, and confirmation states.
- Simplify the whole-site loading screen to a lightweight branded mark, organization name, and subtle progress treatment.

## Page direction
- **About:** image-led story, clear mission/vision split, values and objectives presented as structured editorial content.
- **Programs:** alternating program stories with consistent iconography, concise benefit lists, and purposeful support links.
- **Projects:** focused success-story navigator, large documentary imagery, project details, and a restrained future-goals timeline.
- **Contact:** professional image-led introduction, accessible WhatsApp form, direct contact methods, and clear response expectations.
- **Donate:** trustworthy two-column pledge experience, accessible amount and focus selection, icon-based impact guide, polished pledge/payment/confirmation states.

## Quality and verification
- Fix navigation contrast, invalid classes, internal-link behavior, accessible labels, missing image risks, and styling inconsistencies found during implementation.
- Check every route at desktop and phone widths for overflow, overlap, spacing, and legibility.
- Exercise interactive project tabs, mobile navigation, contact form, donation validation, theme toggle, and scroll-to-top behavior.
- Review current build, runtime, console, and network signals; fix issues without changing working business behavior.

## Technical details
- Continue with React, Tailwind, Framer Motion, Lucide, and existing shadcn controls.
- Use semantic design tokens only; no hardcoded component colors.
- Keep motion reveal-based and honor reduced-motion preferences.
- Move Quicksand loading from CSS remote import to the document head to avoid build-resolution failures.
