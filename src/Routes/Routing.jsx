import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages";
import { Loading } from "../Components/Loading/Loading";

const SignPage = lazy(() => import("../Pages/Sign/SignPage"));

export const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign/:sign" element={<SignPage />} />
      </Routes>
    </Suspense>
  );
};
