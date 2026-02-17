import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { Suspense,lazy } from "react";

const HomePage = lazy(() => import("../Page/HomePage"));
const ProductListingPage = lazy(() => import("../Page/ProductListingPage"));
const ProductViewPage = lazy(() => import("../Page/ProductViewPage"));
const NotFound = lazy(() => import("../Page/NotFound"));

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Carregando Página....</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/produtos" element={<ProductListingPage />} />
              <Route path="/categoria" element={<ProductViewPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
