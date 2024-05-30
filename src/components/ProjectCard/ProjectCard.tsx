import styles from './ProjectCard.module.css';

import Carousel from '../Carousel';
import { type Slide } from '../Carousel/Carousel';

type ProjectCardProps = {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  isReverse?: boolean;
  slides: Slide[];
};

function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
  slides,
  isReverse,
}: ProjectCardProps) {
  return (
    <article
      className={`${styles.project}`}
      data-reverse={isReverse ? true : undefined}
    >
      <div className={`${styles['project-img']}`}>
        <Carousel name={title} slides={slides} />
      </div>

      <div className={`${styles['project-info']} | stack`}>
        <h3 className={`${styles['project-title']} | h3`}>{title}</h3>
        <p>{description}</p>
        <div className={`${styles['project-links']} | cluster`}>
          <a href={liveLink} className={styles['project-link']}>
            Live <span className="visually-hidden">{title}</span>
          </a>
          <a href={githubLink} className={styles['project-link']}>
            Github <span className="visually-hidden">{title}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
