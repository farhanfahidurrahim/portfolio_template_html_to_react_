import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";


class Navbar extends Component{
    render(){
        return(

            <Router>
            <div>

                {/*<div id="preloader-active">
                    <div class="preloader d-flex align-items-center justify-content-center">
                    <div class="preloader-inner position-relative">
                    <div class="preloader-circle"></div>
                    <div class="preloader-img pere-text">
                    <img src="./assets/img/loder.jpg" alt=""/>
                    </div>
                    </div>
                    </div>
                </div>*/}

                <header>

                <div class="header-area">
                <div class="main-header  header-sticky">
                <div class="container-fluid">
                <div class="row align-items-center">

                <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="logo">
                <a href="https://preview.colorlib.com/theme/personalportfolio/index.html"><img src="./assets/img/logo.png" alt=""/></a>
                </div>
                </div>
                <div class="col-xl-10 col-lg-10 col-md-10">
                <div class="menu-main d-flex align-items-center justify-content-end">

                <div class="main-menu f-right d-none d-lg-block">
                <nav>
                <ul id="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/services.html">Services</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/portfolio.html">Portfolio</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/#">Page</a>
                <ul class="submenu">
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/blog.html">Blog</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/blog_details.html">Blog Details</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/elements.html">Element</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/portfolio_details.html">Portfolio Details</a></li>
                </ul>
                </li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/contact.html">Contact</a></li>
                </ul>
                </nav>
                </div>
                <div class="header-right-btn f-right d-none d-xl-block ml-20">
                <a href="https://preview.colorlib.com/theme/personalportfolio/#" class="btn header-btn">Get Free Consultent</a>
                </div>
                </div>
                </div>

                <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"><div class="slicknav_menu"><a href="https://preview.colorlib.com/theme/personalportfolio/#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu">
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/index.html" role="menuitem" tabindex="-1">Home</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/about.html" role="menuitem" tabindex="-1">About</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/services.html" role="menuitem" tabindex="-1">Services</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/portfolio.html" role="menuitem" tabindex="-1">Portfolio</a></li>
                <li class="slicknav_collapsed slicknav_parent"><a href="https://preview.colorlib.com/theme/personalportfolio/#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row"><a href="https://preview.colorlib.com/theme/personalportfolio/#" tabindex="-1">Page</a>
                <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true">
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/blog_details.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/elements.html" role="menuitem" tabindex="-1">Element</a></li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/portfolio_details.html" role="menuitem" tabindex="-1">Portfolio Details</a></li>
                </ul>
                </li>
                <li><a href="https://preview.colorlib.com/theme/personalportfolio/contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                </ul></div></div>
                </div>
                </div>
                </div>
                </div>
                </div>

                </header>

                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                </Routes>
            </div>
            </Router>
        )
    }
}

export default Navbar