import { Route, Routes } from "react-router-dom";

import { Home, PageSign } from "../Pages";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign/:sign" element={<PageSign />} />
    </Routes>
  );
};
