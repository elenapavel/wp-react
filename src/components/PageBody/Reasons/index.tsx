import React, { useContext } from "react";
import { clsx } from "clsx";

import { animated, useInView, useTrail } from "@react-spring/web";
import { Reason } from "./Reason";

import { data } from "../../../data/reasons";
import { ThemeContext } from "../../../App";

export const Reasons = () => {
  const { theme } = useContext(ThemeContext);

  const title = [..."Acest curs este pentru tine..."];
  const [ref, isInView] = useInView();

  const trails = useTrail(data.length, {
    delay: 500,
    mass: 5,
    tension: 2000,
    friction: 200,
    from: isInView
      ? { opacity: 0, transform: "translate3d(0, -40px, 0)" }
      : { opacity: 1, transform: "translate3d(0, 0, 0)" },
    to: isInView
      ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
      : { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  });

  return (
    <>
      <div className="p-40 bg-white text-center">
        <h2 className={clsx("text-6xl font-extrabold", `text-${theme}`)}>
          {title}
        </h2>
        <div className="mt-20 w-1/2 mx-auto relative text-black">
          <div className="absolute h-full left-1/2" ref={ref}></div>
          {isInView
            ? trails.map(({ ...otherProps }, index) => (
                <animated.div
                  key={index}
                  style={{
                    ...otherProps,
                  }}>
                  <animated.div>
                    <div
                      className={clsx(
                        index % 2 === 1
                          ? "text-left ml-auto pl-10"
                          : "text-left mr-auto pr-10"
                        // "w-1/2"
                      )}>
                      <Reason description={data[index]} index={index} />
                    </div>
                  </animated.div>
                </animated.div>
              ))
            : data.map((reason, index) => (
                <div
                  className={clsx(
                    index % 2 === 1
                      ? "text-left ml-auto pl-10"
                      : "text-left mr-auto pr-10"
                    // "w-1/2"
                  )}>
                  <Reason description={reason} index={index} />
                </div>
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
