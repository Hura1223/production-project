// react
import { Suspense } from "react";
// react-router-dom
import { Route, Routes } from "react-router-dom";
// ui
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
