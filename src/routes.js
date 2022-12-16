import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Favorites } from "pages/Favorites";
import { Player } from "pages/Player";
import { NotFound } from "pages/NotFound";
import { PageBase } from "pages/PageBase";

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />} />
                    <Route path="favoritos" element={<Favorites />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;