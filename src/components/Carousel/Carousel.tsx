'use client';

import styles from './Carousel.module.css';
import { useId, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowLeftSvg, ArrowRightSvg } from '@/components/icons';
import React from 'react';
import Image, { type StaticImageData } from 'next/image';

type CarouselProps = {
  name: string;
  slides: Slide[];
};

export type Slide = {
  name: string;
  image: string | StaticImageData;
};

function Carousel({ name, slides }: CarouselProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = slides.length;
  const id = useId();

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <MotionConfig transition={{ duration: 0.6, type: 'spring', bounce: 0 }}>
      <div
        className={styles.carousel}
        role="group"
        aria-roledescription="carousel"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <span id={`carousel-heading-${id}`} className="visually-hidden">
          {name}
        </span>

        <motion.div
          className={styles.slides}
          animate={{
            x: `-${currentStep * 100}%`,
          }}
        >
          {slides.map((slide, index) => {
            return (
              <Slide
                key={slide.name}
                name={slide.name}
                isInert={currentStep !== index}
              >
                <Image alt={slide.name} src={slide.image} />
              </Slide>
            );
          })}
        </motion.div>

        <div className={styles.controls}>
          <button
            onClick={handlePrevious}
            aria-disabled={currentStep === 0 ? true : undefined}
            className={`${styles.control} | click-target-helper`}
          >
            <span className="visually-hidden">Previous Slide</span>
            <ArrowLeftSvg />
          </button>
          <p aria-live="polite" className={styles['slide-info']}>
            <span className="font-weight-bold">
              {slides[currentStep].name}{' '}
            </span>
            Image {currentStep + 1} of {totalSteps}
          </p>
          <button
            onClick={handleNext}
            aria-disabled={currentStep === totalSteps - 1 ? true : undefined}
            className={`${styles.control} | click-target-helper`}
          >
            <span className="visually-hidden">Next Slide</span>
            <ArrowRightSvg />
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}

type SlideProps = {
  name: string;
  isInert: boolean;
  children: React.ReactNode;
};

function Slide({ name, isInert, children }: SlideProps) {
  const id = useId();

  return (
    <div
      className={styles.slide}
      role="group"
      aria-roledescription="slide"
      aria-labelledby={`slide-${id}`}
      // @ts-ignore
      inert={isInert ? '' : undefined}
    >
      <span id={`slide-${id}`} className="visually-hidden">
        {name}
      </span>
      {children}
    </div>
  );
}

export default Carousel;
