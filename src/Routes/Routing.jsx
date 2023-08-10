import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages";
import { Loader } from "../Components/Loader/Loader";

const SignPage = lazy(() => import("../Pages/Sign/SignPage"));

export const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign/:sign" element={<SignPage />} />
      </Routes>
    </Suspense>
  );
};
