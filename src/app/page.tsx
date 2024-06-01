import Contacts from '@/components/Contacts';
import styles from './page.module.css';
import Button from '@/components/Button';
import HeroSvg from '@/components/HeroSvg';
import ProjectCard from '@/components/ProjectCard';

import {
  HTMLSvg,
  CSSSvg,
  JavascriptSvg,
  ReactSvg,
  SassSvg,
  ViteSvg,
  PrismaSvg,
  FigmaSvg,
  TypescriptSvg,
  AccessibilitySvg,
  FramerMotionSvg,
  GitSvg,
  NextjsSvg,
  ReactRouterSvg,
  ReduxSvg,
  SupabaseSvg,
} from '@/components/icons';
import * as slides from '@/data/slides';

import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Arthur Badin's Personal Website",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={`${styles.hero} | section`}>
        <div className={styles.composition}>
          <HeroSvg />
        </div>

        <div className="wrapper stack" data-type="super-narrow">
          <h1 className="h1 text-center font-weight-bold underline">
            Hey, I&apos;m Arthur
          </h1>
          <p className="text-center">
            I&apos;m a frontend developer that likes to create fun, dynamic and
            accessible websites.
          </p>
          <div
            className="cluster"
            style={
              {
                '--horizontal-space': 'var(--space-r-5)',
                '--vertical-space': 'var(--space-r-4)',
                '--justify-content': 'center',
              } as React.CSSProperties
            }
          >
            <Button variant="secondary" as="link" href={'#projects'}>
              Projects
            </Button>
            <Button as="link" href={'#contact'}>
              Contact
            </Button>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrapper stack" data-stack-type="big">
          <h2 className="h2 underline" id="skills">
            Skills
          </h2>
          <ul className={`${styles['skill-list']} | cluster`} role="list">
            <li className={`${styles['skill-item']} | stack`}>
              <HTMLSvg />
              HTML
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <CSSSvg />
              CSS
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <JavascriptSvg />
              Javascript
            </li>

            <li className={`${styles['skill-item']} | stack`}>
              <TypescriptSvg />
              Typescript
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <AccessibilitySvg />
              Accessibility
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <GitSvg />
              Git
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <ReactSvg />
              React
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <NextjsSvg />
              Next.js
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <ReactRouterSvg />
              React Router
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <ReduxSvg />
              Redux
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <SassSvg />
              Sass
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <FramerMotionSvg />
              Framer Motion
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <SupabaseSvg />
              Supabase
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <FigmaSvg />
              Figma
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <ViteSvg />
              Vite
            </li>
            <li className={`${styles['skill-item']} | stack`}>
              <PrismaSvg />
              Prisma
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrapper stack" data-stack-type="big">
          <h2 className="h2 underline" id="projects">
            Projects
          </h2>

          <div className={`${styles.projects} | stack`}>
            <ProjectCard
              title="Audiophile e-commerce website"
              description=" The site lets users view optimal layouts on any device, see hover
          states, manage their cart, and complete a validated checkout process
          with order summaries. I prioritized accessibility and user experience
          with features like real-time notifications via ARIA live regions."
              liveLink="https://audiophile-liard.vercel.app/"
              githubLink="https://github.com/akherousin/audiophile"
              slides={slides.audiophile}
            />

            <ProjectCard
              title="Product feedback app"
              description="Full-stack project, built with Prisma and MongoDB. Key features
              include filtering and sorting of feedbacks, an accessible combobox for selecting options, a
              mobile-friendly tabs component, and efficient form validations."
              liveLink="https://product-feedback-steel.vercel.app/"
              githubLink="https://github.com/Akherousin/Product-feedback"
              slides={slides.feedback}
              isReverse
            />

            <ProjectCard
              title="Designo multi-page website"
              description='The site features responsive layouts, interactive hover states,
              and form validation with error messages. Notable features
              include accessible client-side navigation with aria-current="page", accessible form attributes, and interactive maps
              using Leaflet JS.'
              liveLink="https://designo-one-lake.vercel.app/"
              githubLink="https://github.com/Akherousin/Designo"
              slides={slides.designo}
            />

            <ProjectCard
              title="Photosnap multi-page website"
              description="Key highlights include: using radio buttons to create an
              accessible toggle switch for pricing plans, improved click area
              for small elements without affecting design using a utility
              class."
              liveLink="https://photosnap-nine-teal.vercel.app/"
              githubLink="https://github.com/Akherousin/Photosnap"
              slides={slides.photosnap}
              isReverse
            />
          </div>
        </div>
      </section>

      <Contacts />
    </main>
  );
}
