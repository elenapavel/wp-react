import React, { createContext } from "react";

import {
  Header,
  HeroSection,
  Experiences,
  Creators,
  Reasons,
} from "./components";
import { HomePage } from "./HomePage";
import { Trainings } from "./components/PageBody/Trainings";

export type ThemeColor = { theme: "purple" | "cyan" | "pink" };

export const ThemeContext = createContext<ThemeColor>({ theme: "cyan" });

export const App = ({ theme }: ThemeColor) => {
  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <HomePage>
          <Header />
          <HeroSection />
          <Trainings />
          <Experiences />
          <Creators />
          <Reasons />
        </HomePage>
      </ThemeContext.Provider>
    </>
  );
};
