
import Categorias from "../components/Categorias";
import ColecaoDestaque from "../components/ColecaoDestaque";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OfertaEspecial from "../components/OfertaSpecial";
import ProductListing from "../components/ProductList";

const HomePage = () => {
    return ( 
        <>
            <Header/>
            <main>
                <Hero/>
                <ColecaoDestaque/>
                <Categorias/>
                <ProductListing/>
                <OfertaEspecial/>
               
            </main>
        </>
     );
}
 
export default HomePage;