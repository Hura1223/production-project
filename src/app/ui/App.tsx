// react
import { Suspense, useContext, useState } from "react";
// routing
import { AppRouter } from "../providers/router";
// helper
import { classNames } from "../../shared/helpers";
import { useTheme } from "../../theme/useTheme";
// ui
import { Navbar } from "../../widgets/Navbar";
// styles
import "../../styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <button onClick={toggleTheme}>Toggle theme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};
