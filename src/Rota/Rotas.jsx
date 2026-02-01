import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import ProductListingPage from "../Page/ProductListingPage";
import ProductViewPage from "../Page/ProductViewPage";
import Layout from "../components/Layout";


const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/produtos" element={<ProductListingPage />} />
                        <Route path="/categoria" element={<ProductViewPage />} />
                    </Route>
                </Routes>
               
            </BrowserRouter>
        </>
    );
}

export default Rotas;