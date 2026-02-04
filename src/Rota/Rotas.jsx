import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import ProductListingPage from "../Page/ProductListingPage";
import ProductViewPage from "../Page/ProductViewPage";
import Layout from "../components/Layout";
import NotFound from "../Page/NotFound";


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
                    <Route path="*" element={<NotFound/>}/>
                   
                </Routes>
               
            </BrowserRouter>
        </>
    );
}

export default Rotas;