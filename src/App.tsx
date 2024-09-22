import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { useScroll, animated, useSpring } from "@react-spring/web";

import {
  Header,
  HeroSection,
  Experiences,
  Creators,
  Reasons,
} from "./components";

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat:400,800"],
      },
    });
  }, []);

  const containerRef = React.useRef<HTMLDivElement>(null!);

  const [mottoStyles, mottoApi] = useSpring(() => ({
    opacity: 0,
  }));

  const [textStyles, textApi] = useSpring(() => ({
    opacity: 0,
  }));

  const [contentStyles, contentApi] = useSpring(() => ({
    y: "100%",
    opacity: 0,
  }));

  const [bgStyles, bgApi] = useSpring(() => ({
    opacity: 0,
  }));

  const { scrollY } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollY } }) => {
      if (scrollY / window.innerHeight < 0.3) {
        bgApi.start({
          opacity: 1,
        });
      } else if (scrollY / window.innerHeight < 0.5) {
        bgApi.start({
          opacity: (1 - scrollY / window.innerHeight) * 2,
        });
      } else {
        // bgApi.start({
        //   opacity: 0,
        // });
      }

      if (scrollY / window.innerHeight < 1.5) {
        mottoApi.start({ opacity: 0 });
        // } else if (scrollY / window.innerHeight < 1.5) {
        //   mottoApi.start({ opacity: 1 });
        // } else if (scrollY / window.innerHeight < 2.1) {
        //   mottoApi.start({ opacity: 0 });
        //   textApi.start({ opacity: 0 });
      } else if (scrollY / window.innerHeight < 2.75) {
        mottoApi.start({ opacity: 1 });
      } else {
        mottoApi.start({ opacity: 0 });
      }

      if (scrollY / window.innerHeight > 3.25) {
        contentApi.start({ y: "0%", opacity: 1 });
      } else {
        contentApi.start({ y: "100%", opacity: 0 });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <>
      <div ref={containerRef} className="relative overflow-y-auto h-screen">
        <animated.div
          className="relative bg-accent"
          style={{ height: "150vh" }}>
          <animated.div
            className="absolute bottom-0 w-full bg-no-repeat bg-top"
            style={{
              ...bgStyles,
              top: scrollY.to((val) => `${window.innerHeight / 2 - val}px`),
              backgroundImage: "url(/wp-content/uploads/2024/09/Asset-12.png)",
              backgroundSize: scrollY.to(
                (val) => `calc(${(val * 700) / window.innerHeight}% + 100px)`
              ),
            }}></animated.div>
        </animated.div>

        <animated.div className="bg-white h-[200vh] relative z-0">
          <animated.h1
            style={{
              ...mottoStyles,
              top: scrollY.to(
                (val) =>
                  `${
                    val - window.innerHeight > window.innerHeight / 2
                      ? val - window.innerHeight
                      : -(window.innerHeight - val)
                  }px`
              ),
            }}
            className="text-6xl font-bold text-black absolute w-1/2 m-auto left-0 right-0">
            Your way to the next level
          </animated.h1>

          {/* <animated.h1
            style={{
              ...textStyles,
              top: scrollY.to(
                (val) =>
                  `${
                    val - window.innerHeight > window.innerHeight / 2
                      ? val - window.innerHeight
                      : -(window.innerHeight - val)
                  }px`
              ),
            }}
            className="text-6xl font-bold text-black absolute w-1/2 m-auto left-0 right-0">
            Inca putin si ai ajuns
          </animated.h1> */}
        </animated.div>

        <animated.div className="relative" style={{ ...contentStyles }}>
          <Header />
          <HeroSection />
          <Experiences />
          <Creators />
          <Reasons />
        </animated.div>
      </div>
    </>
  );
};
