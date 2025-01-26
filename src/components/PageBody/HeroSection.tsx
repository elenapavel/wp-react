import React, { useContext } from "react";

import { ThemeContext } from "../../App";

import { ColumnsCyan } from "../../icons/shapes";
import clsx from "clsx";

export const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex w-full min-h-screen bg-black px-40 pb-40 pt-60 relative flex-wrap items-center">
      <div className="absolute right-0 bottom-0 w-2/5 -mb-px">
        <ColumnsCyan />
      </div>
      <div className="flex flex-col justify-between relative">
        <div className="w-2/3">
          <h1 className={clsx("text-6xl mb-14  max-w-min", `text-${theme}`)}>
            Dezvoltare Personală Conștientă
          </h1>
          <p className="text-2xl">
            Un training complex format din 3 etape unite prin aceeași viziviune-
            noi în trei ipostaze ale vieții (în raport cu noi înșine, cu
            ceilalți și cu lumea în care traim). Acest training pune la
            dispoziție informații, tehnici și strategii pe care le poți integra
            în viața ta, pentru a o îmbunătăți, iar toate sunt livrate ludic,
            practic, experiențial, fiind utilizate metode moderne de predare
            (for real!).
          </p>
        </div>
      </div>
    </div>
  );
};
