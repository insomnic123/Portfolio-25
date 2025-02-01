"use client";

import React, { useCallback, useEffect } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrows";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("pointerDown", () => {
      document.querySelectorAll(".embla__slide a").forEach((link) => {
        link.style.pointerEvents = "none"; 
      });
    });

    emblaApi.on("pointerUp", () => {
      document.querySelectorAll(".embla__slide a").forEach((link) => {
        link.style.pointerEvents = "auto"; 
      });
    });
  }, [emblaApi]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="embla__slide"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`} 
                className="embla__slide__img"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
