import React, { PropsWithChildren, useContext } from "react";
import { useScroll, animated, useSpring, useInView } from "@react-spring/web";

import { FullBlack } from "./icons/logos/FullBlack";

import { ThemeContext } from "./App";
import clsx from "clsx";

export const HomePage = ({ children }: PropsWithChildren) => {
  const containerRef = React.useRef<HTMLDivElement>(null!);

  const { theme } = useContext(ThemeContext);

  const [ref, isInView] = useInView();

  const [mottoStyles, mottoApi] = useSpring(() => ({
    opacity: 0,
  }));

  const [contentStyles, contentApi] = useSpring(() => ({
    y: "100%",
    opacity: 0,
  }));

  const [bgStyles, bgApi] = useSpring(() => ({
    opacity: 1,
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
      }

      if (scrollY / window.innerHeight < 1.5) {
        mottoApi.start({ opacity: 0 });
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
      <div
        ref={containerRef}
        className="relative overflow-y-auto overflow-x-hidden h-screen">
        <animated.div
          className={clsx("relative", `bg-${theme}`)}
          style={{ height: "150vh" }}>
          <animated.div
            className="absolute bottom-0 w-full left-[50%]"
            style={{
              ...bgStyles,
              top: `${window.innerHeight / 2}px`,
            }}>
            <animated.div
              className="sticky -translate-x-1/2 -translate-y-1/2"
              style={{
                width: isInView
                  ? 0
                  : scrollY.to(
                      (val) =>
                        `calc(${(val * 700) / window.innerHeight}% + 100px)`
                    ),
              }}>
              <FullBlack />
            </animated.div>
          </animated.div>
        </animated.div>

        <animated.div className="bg-black h-[200vh] relative z-0">
          <animated.h1
            style={{
              ...mottoStyles,
              top: isInView
                ? 0
                : scrollY.to(
                    (val) =>
                      `${
                        val - window.innerHeight > window.innerHeight / 2
                          ? val - window.innerHeight
                          : -(window.innerHeight - val)
                      }px`
                  ),
            }}
            className="text-6xl font-extrabold bg-black absolute w-1/2 m-auto left-0 right-0">
            Your way to the next level
          </animated.h1>
        </animated.div>

        <animated.div
          className="relative"
          style={{ ...contentStyles }}
          ref={ref}>
          {children}
        </animated.div>
      </div>
    </>
  );
};
