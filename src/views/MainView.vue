<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
    <header class="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-panel)]/95 backdrop-blur">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#hero" class="brand-lockup">
          <span class="brand-mark">KDM</span>
          <span class="brand-copy">
            <span class="brand-name">Kyle Mamplata</span>
            <span class="brand-role">Backend Developer</span>
          </span>
        </a>
        <div class="hidden items-center gap-6 text-sm md:flex">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="nav-link">{{ item.label }}</a>
        </div>
        <a :href="portfolio.hero.github" target="_blank" rel="noreferrer" class="button-secondary md:hidden">GitHub</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="section-shell overflow-hidden pt-12 sm:pt-16">
        <div class="hero-grid">
          <div class="space-y-8">
            <div class="space-y-5">
              <p class="eyebrow">Junior software developer based in Laguna, Philippines</p>
              <h1 class="font-display text-4xl font-bold leading-tight text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
                {{ portfolio.hero.name }}
              </h1>
              <p class="max-w-3xl text-xl font-semibold text-[var(--color-accent)] sm:text-2xl">
                {{ portfolio.hero.title }}
              </p>
              <p class="max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                {{ portfolio.hero.supporting }}
              </p>
              <p class="max-w-3xl text-base leading-7 text-[var(--color-text)]">
                {{ portfolio.hero.summary }}
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <a href="#case-studies" class="button-primary">View Case Studies</a>
              <a :href="portfolio.hero.github" target="_blank" rel="noreferrer" class="button-secondary">GitHub</a>
            </div>

            <ul class="grid gap-3 sm:grid-cols-3">
              <li v-for="point in portfolio.hero.quickPoints" :key="point" class="quick-point">
                {{ point }}
              </li>
            </ul>
          </div>

          <div class="hero-portrait-wrap">
            <div class="hero-portrait-card">
              <img :src="getImageUrl(portfolio.hero.portraitLink)" alt="Portrait of Kyle Deejay Mamplata" class="hero-portrait" />
              <div class="hero-meta">
                <p class="font-display text-xl font-semibold text-[var(--color-heading)]">{{ portfolio.hero.location }}</p>
                <p class="text-sm text-[var(--color-muted)]">
                  Backend development, SQL workflows, production support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section-shell">
        <div class="section-header">
          <p class="eyebrow">About</p>
          <h2 class="section-title">Production-focused backend work, grounded in real operational systems.</h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
          <div class="card space-y-5">
            <p v-for="paragraph in portfolio.about.paragraphs" :key="paragraph" class="text-base leading-8 text-[var(--color-text)]">
              {{ paragraph }}
            </p>
          </div>
          <aside class="card">
            <h3 class="font-display text-xl font-semibold text-[var(--color-heading)]">What I’m strongest in</h3>
            <ul class="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li class="feature-line">Backend development for production healthcare systems</li>
              <li class="feature-line">SQL queries, reporting, validation, and data quality work</li>
              <li class="feature-line">Deployment support, troubleshooting, and workflow improvements</li>
              <li class="feature-line">Client coordination and translating operations into software logic</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="case-studies" class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Featured Case Studies</p>
          <h2 class="section-title">Projects and systems that best represent my backend and database work.</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          <article v-for="study in portfolio.featuredCaseStudies" :key="study.title" class="case-card">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="case-label">{{ study.label }}</p>
                <h3 class="font-display text-2xl font-semibold text-[var(--color-heading)]">{{ study.title }}</h3>
              </div>
            </div>
            <p class="mt-4 text-sm leading-7 text-[var(--color-text)]">{{ study.summary }}</p>
            <div v-if="study.imageLink" class="mt-5 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <img :src="getImageUrl(study.imageLink)" :alt="study.title" class="h-52 w-full object-cover object-top" loading="lazy" />
            </div>
            <ul class="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li v-for="highlight in study.highlights" :key="highlight" class="feature-line">
                {{ highlight }}
              </li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="item in study.stack" :key="item" class="tag">{{ item }}</span>
            </div>
            <div v-if="study.links?.length" class="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              <a v-for="link in study.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer" class="text-[var(--color-accent)] hover:opacity-80">
                {{ link.label }}
              </a>
            </div>
            <p v-if="study.confidentiality" class="mt-5 rounded-2xl bg-[var(--color-panel-alt)] px-4 py-3 text-xs leading-6 text-[var(--color-muted)]">
              {{ study.confidentiality }}
            </p>
          </article>
        </div>
      </section>

      <section id="hmis-case-study" class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Primary Case Study</p>
          <h2 class="section-title">Healthcare Information Management System</h2>
        </div>
        <div class="card space-y-8">
          <div class="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 class="subheading">Overview</h3>
              <p class="body-copy">{{ portfolio.hmisCaseStudy.overview }}</p>
            </div>
            <div>
              <h3 class="subheading">My role</h3>
              <p class="body-copy">{{ portfolio.hmisCaseStudy.role }}</p>
            </div>
          </div>

          <div>
            <h3 class="subheading">Tech stack</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="item in portfolio.hmisCaseStudy.stack" :key="item" class="tag">{{ item }}</span>
            </div>
          </div>

          <div class="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 class="subheading">Key contributions</h3>
              <ul class="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                <li v-for="item in portfolio.hmisCaseStudy.contributions" :key="item" class="feature-line">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="subheading">Engineering challenges</h3>
              <ul class="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                <li v-for="item in portfolio.hmisCaseStudy.challenges" :key="item" class="feature-line">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div class="rounded-3xl border border-dashed border-[var(--color-border-strong)] bg-[var(--color-panel-alt)] px-5 py-4">
            <h3 class="subheading">Confidentiality note</h3>
            <p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {{ portfolio.hmisCaseStudy.confidentiality }}
            </p>
          </div>
        </div>
      </section>

      <section id="experience" class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Experience</p>
          <h2 class="section-title">Professional work with production systems, plus internship backend experience.</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          <article v-for="item in portfolio.experience" :key="`${item.role}-${item.company}`" class="card">
            <div class="flex flex-col gap-2">
              <p class="case-label">{{ item.period }}</p>
              <h3 class="font-display text-2xl font-semibold text-[var(--color-heading)]">{{ item.role }}</h3>
              <p class="text-base font-medium text-[var(--color-accent)]">{{ item.company }}</p>
              <p class="mt-2 text-sm leading-7 text-[var(--color-text)]">{{ item.summary }}</p>
            </div>
            <ul class="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li v-for="bullet in item.bullets" :key="bullet" class="feature-line">
                {{ bullet }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Skills</p>
          <h2 class="section-title">Backend, database, frontend, and automation-related tools I use.</h2>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article v-for="(items, category) in portfolio.skills" :key="category" class="card">
            <h3 class="font-display text-xl font-semibold text-[var(--color-heading)]">{{ category }}</h3>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="item in items" :key="item" class="tag">{{ item }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="education" class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Education & Certifications</p>
          <h2 class="section-title">Academic background and supporting certifications.</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article class="card">
            <p class="case-label">{{ portfolio.education.period }}</p>
            <h3 class="font-display text-2xl font-semibold text-[var(--color-heading)]">{{ portfolio.education.degree }}</h3>
            <p class="mt-2 text-base font-medium text-[var(--color-accent)]">{{ portfolio.education.school }}</p>
            <ul class="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li v-for="item in portfolio.education.achievements" :key="item" class="feature-line">
                {{ item }}
              </li>
            </ul>
          </article>
          <article class="card">
            <h3 class="font-display text-2xl font-semibold text-[var(--color-heading)]">Certifications</h3>
            <ul class="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li v-for="item in portfolio.education.certifications" :key="item" class="feature-line">
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" class="section-shell pb-20">
        <div class="contact-panel">
          <div class="space-y-4">
            <p class="eyebrow">Contact</p>
            <h2 class="section-title max-w-2xl">Open to junior backend, Laravel/PHP, web development, and software support opportunities.</h2>
            <p class="max-w-2xl text-base leading-8 text-[var(--color-text)]">
              Email is the best way to reach me for interviews, collaboration, or freelance conversations.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <a :href="`mailto:${portfolio.contact.email}`" class="contact-item">
              <span class="contact-label">Email</span>
              <span class="contact-value">{{ portfolio.contact.email }}</span>
            </a>
            <a :href="portfolio.contact.github" target="_blank" rel="noreferrer" class="contact-item">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">mamplata</span>
            </a>
            <a :href="portfolio.contact.linkedin" target="_blank" rel="noreferrer" class="contact-item">
              <span class="contact-label">LinkedIn</span>
              <span class="contact-value">kylemamplata</span>
            </a>
            <a :href="portfolio.contact.portfolio" target="_blank" rel="noreferrer" class="contact-item">
              <span class="contact-label">Portfolio</span>
              <span class="contact-value">Live site</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import portfolio from "../portfolio"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
]

const getImageUrl = (path) => new URL(`../assets/${path}`, import.meta.url).href

onMounted(() => {
  document.title = portfolio.meta.title

  let descriptionTag = document.querySelector('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement("meta")
    descriptionTag.name = "description"
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.content = portfolio.meta.description
})
</script>
