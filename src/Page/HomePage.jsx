
import Categorias from "../components/Categorias";
import ColecaoDestaque from "../components/ColecaoDestaque";
import Hero from "../components/Hero";
import OfertaEspecial from "../components/OfertaSpecial";
import ProductListing from "../components/ProductList";

const HomePage = () => {
    return (
        <>
            <Hero />
            <ColecaoDestaque />
            <Categorias />
            <ProductListing />
            <OfertaEspecial />
        </>
    );
}

export default HomePage;