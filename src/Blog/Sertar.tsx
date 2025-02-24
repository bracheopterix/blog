import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import styles from './Sertar.module.css'
import MainHeader from "./MainHeader";
import Blog from "./Blog";
import Games from "./Gamez";
import MainBlogPage from "./MainBlogPage";


function Sertar() {
    return (
        <>


            <Router>
                <MainHeader />

                <Routes>
                    <Route path="/" element={<MainBlogPage />} />
                    <Route path="/main" element={<MainBlogPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/games/*" element={<Games />} />
                </Routes>
            </Router>
        </>
    )

}

export default Sertar;