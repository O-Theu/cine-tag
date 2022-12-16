import Container from "components/Container";
import { Footer } from "components/Footer";
import Header from "components/Header";
import { FavoritesProvider } from "context/Favorite";
import { Outlet } from "react-router-dom";

export function PageBase() {
    return(
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}