ß// Filename: public/custom-elements/styles.js.js
export const dorisStyles = `
/* ============================================
   Doris Mortellaro - Modern UI/UX Redesign
   ============================================ */

/* CSS Custom Properties */
:root {
  /* Farbpalette - Warme Erdtöne */
  --color-primary: #B8956A;
  --color-primary-dark: #9A7B52;
  --color-primary-light: #D4B896;
  --color-secondary: #F5F0E8;
  --color-secondary-dark: #E8E0D4;
  --color-accent: #8B6914;
  --color-accent-light: #C9A84C;
  
  /* Textfarben */
  --color-text: #2C2C2C;
  --color-text-light: #5A5A5A;
  --color-text-muted: #8A8A8A;
  --color-white: #FFFFFF;
  --color-white-soft: #FDFCFA;
  
  /* Funktionale Farben */
  --color-success: #4A7C59;
  --color-error: #B54242;
  --color-warning: #C9A84C;
  
  /* Typografie */
  --font-heading: 'Cormorant Garamond', 'Georgia', serif;
  --font-body: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  
  /* Schriftgrößen (Fluid Typography) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.65vw, 1.375rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
  --text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
  --text-4xl: clamp(2.5rem, 1.8rem + 3.5vw, 5rem);
  
  /* Abstände */
  --space-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
  --space-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1.25rem);
  --space-md: clamp(1rem, 0.8rem + 1vw, 2rem);
  --space-lg: clamp(1.5rem, 1.2rem + 1.5vw, 3rem);
  --space-xl: clamp(2rem, 1.5rem + 2.5vw, 5rem);
  --space-2xl: clamp(3rem, 2rem + 5vw, 8rem);
  
  /* Layout */
  --container-max: 1280px;
  --container-narrow: 768px;
  --header-height: 80px;
  --header-height-scrolled: 64px;
  
  /* Animationen */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
  --transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Schatten */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.08);
  --shadow-xl: 0 24px 60px rgba(0,0,0,0.12);
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
}

/* Dark Mode Support (optional) */
/* @media (prefers-color-scheme: dark) {
  :root {
    --color-text: #E8E4E0;
    --color-text-light: #B8B4B0;
    --color-text-muted: #888480;
    --color-white: #1A1816;
    --color-white-soft: #242220;
    --color-secondary: #2A2826;
    --color-secondary-dark: #3A3836;
  }
}*/

/* ============================================
   RESET & BASE
   ============================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-white-soft);
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

ul, ol {
  list-style: none;
}

/* ============================================
   TYPOGRAPHY
   ============================================ */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }
h5 { font-size: var(--text-lg); }
h6 { font-size: var(--text-base); }

p {
  margin-bottom: var(--space-sm);
  color: var(--color-text-light);
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.font-heading { font-family: var(--font-heading); }
.font-body { font-family: var(--font-body); }

.text-primary { color: var(--color-primary); }
.text-accent { color: var(--color-accent); }
.text-muted { color: var(--color-text-muted); }

/* ============================================
   LAYOUT UTILITIES
   ============================================ */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.container-narrow {
  max-width: var(--container-narrow);
}

.section {
  padding: var(--space-2xl) 0;
  position: relative;
}

.section-sm { padding: var(--space-xl) 0; }
.section-lg { padding: var(--space-2xl) 0; }

.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-white { background-color: var(--color-white); }
.bg-white-soft { background-color: var(--color-white-soft); }

/* ============================================
   BUTTONS
   ============================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.1);
  transform: translateX(-100%);
  transition: transform var(--transition-base);
}

.btn:hover::before {
  transform: translateX(0);
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.btn-accent:hover {
  background-color: var(--color-accent-light);
}

.btn-white {
  background-color: var(--color-white);
  color: var(--color-primary);
}

.btn-white:hover {
  background-color: var(--color-secondary);
}

.btn-lg {
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-base);
}

/* ============================================
   HEADER & NAVIGATION
   ============================================ */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  background: rgba(253, 252, 250, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);
}

.header.scrolled {
  height: var(--header-height-scrolled);
  background: rgba(253, 252, 250, 0.95);
  border-bottom-color: var(--color-secondary-dark);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--color-text);
  transition: opacity var(--transition-fast);
}

.logo:hover {
  opacity: 0.8;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: var(--text-lg);
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.nav-link {
  position: relative;
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-light);
  letter-spacing: 0.01em;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: all var(--transition-base);
  transform: translateX(-50%);
  border-radius: var(--radius-full);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 60%;
}

.nav-cta {
  margin-left: var(--space-sm);
}

/* Mobile Navigation Toggle */
.nav-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-xs);
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: all var(--transition-base);
  border-radius: var(--radius-full);
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.nav-mobile {
  position: fixed;
  inset: 0;
  background: var(--color-white-soft);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.nav-mobile.active {
  opacity: 1;
  visibility: visible;
}

.nav-mobile .nav-link {
  font-size: var(--text-2xl);
  font-family: var(--font-heading);
  padding: var(--space-sm) var(--space-md);
}

.nav-mobile .btn {
  margin-top: var(--space-md);
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--header-height);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-white-soft) 50%, var(--color-secondary) 100%);
  opacity: 0.6;
}

.hero-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, var(--color-primary-light) 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.15;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.hero-text {
  max-width: 600px;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-primary-light);
  color: var(--color-white);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.hero-title {
  margin-bottom: var(--space-md);
  line-height: 1.1;
}

.hero-title span {
  color: var(--color-primary);
  font-style: italic;
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-light);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.hero-image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
}

.hero-image-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--color-primary-light);
  border-radius: var(--radius-lg);
  top: 20px;
  left: 20px;
  z-index: -1;
}

/* Floating Elements */
.floating-card {
  position: absolute;
  background: var(--color-white);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  animation: float 6s ease-in-out infinite;
}

.floating-card-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
}

.floating-card-text {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.floating-card-1 {
  top: 10%;
  right: -10%;
  animation-delay: 0s;
}

.floating-card-2 {
  bottom: 15%;
  left: -10%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* ============================================
   SECTION HEADER
   ============================================ */
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-xl);
}

.section-label {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-secondary);
  color: var(--color-primary);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-sm);
}

.section-title {
  margin-bottom: var(--space-sm);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-light);
}

/* ============================================
   SERVICES / CARDS
   ============================================ */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

.service-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  margin-bottom: var(--space-md);
  transition: all var(--transition-base);
}

.service-card:hover .service-icon {
  background: var(--color-primary);
  color: var(--color-white);
  transform: scale(1.1);
}

.service-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-sm);
}

.service-description {
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--text-sm);
  transition: gap var(--transition-fast);
}

.service-link:hover {
  gap: var(--space-sm);
}

/* ============================================
   ABOUT SECTION
   ============================================ */
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.about-image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.about-image-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.about-image-badge-number {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 600;
  line-height: 1;
}

.about-image-badge-text {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.9;
}

.about-content {
  padding: var(--space-md) 0;
}

.about-text {
  margin-bottom: var(--space-md);
}

.about-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-sm);
  margin: var(--space-lg) 0;
}

.about-feature {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
}

.about-feature-icon {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: var(--color-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.about-feature-icon svg {
  width: 14px;
  height: 14px;
  color: var(--color-white);
}

.about-feature-text {
  font-size: var(--text-sm);
  color: var(--color-text-light);
}

/* ============================================
   TESTIMONIALS
   ============================================ */
.testimonials {
  background: var(--color-secondary);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

.testimonial-card {
  background: var(--color-white);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-family: var(--font-heading);
  font-size: 6rem;
  line-height: 1;
  color: var(--color-secondary-dark);
  opacity: 0.5;
}

.testimonial-text {
  font-size: var(--text-base);
  font-style: italic;
  color: var(--color-text);
  margin-bottom: var(--space-md);
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--color-primary);
}

.testimonial-name {
  font-weight: 600;
  color: var(--color-text);
}

.testimonial-role {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

/* ============================================
   CTA SECTION
   ============================================ */
.cta {
  background: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
  background-size: 30px 30px;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.cta-text {
  color: rgba(255,255,255,0.9);
  font-size: var(--text-lg);
  max-width: 600px;
  margin: 0 auto var(--space-lg);
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
  background: var(--color-text);
  color: var(--color-white);
  padding: var(--space-2xl) 0 var(--space-lg);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  color: var(--color-white);
  margin-bottom: var(--space-sm);
}

.footer-description {
  color: rgba(255,255,255,0.7);
  font-size: var(--text-sm);
}

.footer-title {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.footer-link {
  color: rgba(255,255,255,0.7);
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-primary-light);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: rgba(255,255,255,0.7);
  font-size: var(--text-sm);
}

.footer-contact-item svg {
  width: 18px;
  height: 18px;
  color: var(--color-primary-light);
  flex-shrink: 0;
}

.footer-social {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.footer-social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}

.footer-social-link:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
}

.footer-social-link svg {
  width: 18px;
  height: 18px;
  color: var(--color-white);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  align-items: center;
  text-align: center;
}

.footer-copyright {
  color: rgba(255,255,255,0.5);
  font-size: var(--text-sm);
}

.footer-legal {
  display: flex;
  gap: var(--space-md);
}

.footer-legal a {
  color: rgba(255,255,255,0.5);
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--color-primary-light);
}

/* ============================================
   PAGE HEADER
   ============================================ */
.page-header {
  padding-top: calc(var(--header-height) + var(--space-xl));
  padding-bottom: var(--space-xl);
  background: var(--color-secondary);
  text-align: center;
}

.page-header-title {
  margin-bottom: var(--space-sm);
}

.page-header-subtitle {
  color: var(--color-text-light);
  font-size: var(--text-lg);
}

/* ============================================
   CONTENT SECTIONS
   ============================================ */
.content-section {
  padding: var(--space-2xl) 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.content-sidebar {
  position: sticky;
  top: calc(var(--header-height) + var(--space-lg));
}

.sidebar-card {
  background: var(--color-white);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--space-md);
}

.sidebar-title {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
  color: var(--color-text-light);
  font-size: var(--text-sm);
  transition: all var(--transition-fast);
}

.sidebar-link:hover,
.sidebar-link.active {
  color: var(--color-primary);
}

.sidebar-link.active {
  font-weight: 600;
}

/* ============================================
   PRICING
   ============================================ */
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  position: relative;
  transition: all var(--transition-base);
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.pricing-card.featured {
  border: 2px solid var(--color-primary);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-xs) var(--space-md);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
}

.pricing-name {
  font-size: var(--text-xl);
  margin-bottom: var(--space-sm);
}

.pricing-price {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.pricing-price span {
  font-size: var(--text-base);
  color: var(--color-text-muted);
}

.pricing-description {
  color: var(--color-text-light);
  margin-bottom: var(--space-lg);
  font-size: var(--text-sm);
}

.pricing-features {
  text-align: left;
  margin-bottom: var(--space-lg);
}

.pricing-feature {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
  font-size: var(--text-sm);
  color: var(--color-text-light);
}

.pricing-feature svg {
  width: 18px;
  height: 18px;
  color: var(--color-success);
  flex-shrink: 0;
}

/* ============================================
   EVENTS / RETREATS
   ============================================ */
.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

.event-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.event-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.event-content {
  padding: var(--space-lg);
}

.event-date {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-secondary);
  color: var(--color-primary);
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-sm);
}

.event-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-sm);
}

.event-location {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: var(--space-md);
}

.event-description {
  color: var(--color-text-light);
  font-size: var(--text-sm);
  margin-bottom: var(--space-md);
}

/* ============================================
   BOOKING SECTION
   ============================================ */
.booking-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.booking-info {
  background: var(--color-white);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.booking-form {
  background: var(--color-white);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: 2px solid var(--color-secondary-dark);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-white);
  transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

/* ============================================
   ANIMATIONS
   ============================================ */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-delay-1 { transition-delay: 0.1s; }
.fade-in-delay-2 { transition-delay: 0.2s; }
.fade-in-delay-3 { transition-delay: 0.3s; }
.fade-in-delay-4 { transition-delay: 0.4s; }

/* ============================================
   SCROLL TO TOP
   ============================================ */
.scroll-top {
  position: fixed;
  bottom: var(--space-lg);
  right: var(--space-lg);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all var(--transition-base);
  z-index: 999;
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scroll-top:hover {
  background: var(--color-primary-dark);
  transform: translateY(-4px);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

/* Tablet (768px+) */
@media (min-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .about-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .content-grid {
    grid-template-columns: 2fr 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .nav-desktop {
    display: flex;
    align-items: center;
  }
  
  .nav-toggle {
    display: none;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
  
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .about-features {
    grid-template-columns: 1fr 1fr;
  }
}

/* Large Desktop (1280px+) */
@media (min-width: 1280px) {
  .hero-content {
    gap: var(--space-2xl);
  }
}

/* ============================================
   ACCESSIBILITY
   ============================================ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}

/* Focus styles */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  z-index: 10000;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--space-sm);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --color-primary: #8B6914;
    --color-text: #000000;
    --color-text-light: #333333;
  }
}

/* ============================================
   PRINT STYLES
   ============================================ */
@media print {
  .header,
  .nav-toggle,
  .nav-mobile,
  .scroll-top,
  .hero-bg-pattern,
  .floating-card,
  .footer-social {
    display: none !important;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
  }
  
  a {
    text-decoration: underline;
  }
  
  .section {
    padding: 20pt 0;
  }
}

/* ============================================
   CONTENT IMAGES
   ============================================ */
.content-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin: 1.5rem 0;
}

.content-image img {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  display: block;
}

.content-image-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}

.content-image-duo .content-image {
  margin: 0;
}

.content-image-duo .content-image img {
  height: 100%;
  max-height: 320px;
}

@media (max-width: 640px) {
  .content-image-duo {
    grid-template-columns: 1fr;
  }
}

/* ============================================
   TIMELINE (Qualifikationen)
   ============================================ */
.timeline {
  position: relative;
  margin: 2rem 0;
  padding-left: 2.5rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0.55rem;
  top: 0.4rem;
  bottom: 0.4rem;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-accent));
  opacity: 0.5;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -2.28rem;
  top: 0.3rem;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: var(--color-primary);
  border: 3px solid var(--color-white);
  box-shadow: 0 0 0 2px var(--color-primary);
}

.timeline-year {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  background: var(--color-secondary);
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  margin-bottom: 0.4rem;
}

.timeline-title {
  font-size: 1.15rem;
  margin: 0.3rem 0 0.3rem;
}

.timeline-category {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

.timeline-text {
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}
`;