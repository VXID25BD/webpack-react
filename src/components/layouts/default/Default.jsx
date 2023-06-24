import Header from "./header/Header";
import Footer from "./footer/Footer";

const Default = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Default;