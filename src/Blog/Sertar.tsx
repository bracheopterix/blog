import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
// import {Link, Navigate} from "react-router-dom";
// import styles from './Sertar.module.css'
import MainHeader from "./MainHeader";
import Blog from "./Blog";
import Games from "./Gamez";
import MainBlogPage from "./MainBlogPage";
import Carpentory from "../Carpentory/Carpentory";
import Conspectus from "../Conspectus/Conspectus";


function Sertar() {
    return (
        <>


            {/* <Router> */}
                <MainHeader />

                <Routes> 
                    <Route path="/" element={<MainBlogPage />} />
                    <Route path="/main/" element={<MainBlogPage />} />
                    <Route path="/blog/" element={<Blog />} />
                    <Route path="/games/*" element={<Games />} />
                    <Route path="/conspectus/" element={<Conspectus/>} />
                    <Route path="/carpentory/" element={<Carpentory/>} />
                </Routes>
            {/* </Router> */}
        </>
    )

}

export default Sertar;