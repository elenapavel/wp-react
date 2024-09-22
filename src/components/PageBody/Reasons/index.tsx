import React, { useEffect } from "react";
import { clsx } from "clsx";

import { animated, useInView, useSprings, useTrail } from "@react-spring/web";
import { Reason } from "./Reason";

import { data } from "../../../data/reasons";

export const Reasons = () => {
  const title = [..."Acest curs este pentru tine daca..."];
  const [ref, isInView] = useInView();

  const letters = useTrail(title.length, {
    mass: 5,
    tension: 2000,
    friction: 200,
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 10,
  });

  const trails = useTrail(data.length, {
    delay: 500,
    mass: 5,
    tension: 2000,
    friction: 200,
    from: isInView
      ? { opacity: 0, transform: "translate3d(0, -40px, 0)" }
      : { opacity: 1, transform: "translate3d(0, 40px, 0)" },
    to: isInView
      ? { opacity: 1, transform: "translate3d(0, 40px, 0)" }
      : { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  });

  return (
    <>
      <div className="p-40 bg-primary text-center">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-secondary-light via-secondary-light to-secondary inline-block text-transparent bg-clip-text">
          {letters.map((props, i) => (
            <animated.span style={props}>{title[i]}</animated.span>
          ))}
        </h2>
      </div>
      <div className="mt-20 px-40 pb-40">
        <div className="mx-auto relative">
          <div
            className="absolute top-0 bottom-0 h-full w-2 rounded-md bg-secondary left-1/2"
            ref={ref}></div>
          {isInView &&
            trails.map(({ ...otherProps }, index) => (
              <animated.div
                key={data[index].id}
                style={{
                  ...otherProps,
                }}>
                <animated.div>
                  <div
                    className={clsx(
                      index % 2 === 1
                        ? "text-right ml-auto pl-10"
                        : "text-left mr-auto pr-10",
                      "w-1/2"
                    )}>
                    <Reason {...data[index]} index={index} />
                  </div>
                </animated.div>
              </animated.div>
            ))}
          {/* {transitions((style, reason, _, index) => (
            <animated.div style={style} ref={ref}>
              <div
                className={clsx(
                  index % 2 === 1
                    ? "text-right ml-auto pl-10"
                    : "text-left mr-auto pr-10",
                  "w-1/2"
                )}>s
                <Reason {...reason} index={index} />
              </div>
            </animated.div>
          ))} */}
          {/* {data.map((reason, index) => (
              <div
                className={clsx(
                  index % 2 === 1
                    ? "text-right ml-auto pl-10"
                    : "text-left mr-auto pr-10",
                  "w-1/2"
                )}>
                <Reason {...reason} index={index} />
              </div>
            ))} */}
        </div>
      </div>
    </>
  );
};
