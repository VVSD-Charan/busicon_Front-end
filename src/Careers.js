import React from 'react'
import Header from './commons/Header';
import Footer from './commons/Footer';
import { rolesData } from './Data';
import Allroles from './roles/Allroles';

// Importing career Images
import image1 from './img/career/image-1.png'
import image2 from './img/career/image-2.png'
import image3 from './img/career/image-3.png'
import image4 from './img/career/image-4.png'

const Careers = () => {
    return (
        <div>
            <div className="body-overlay" />
            {/* tp-offcanvus-area-end */}
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* breadcrumb-area-start */}
                        <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
                            <div className="breadcrumb__shape-1">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-1.png" alt="" />
                            </div>
                            <div className="breadcrumb__shape-2">
                                <img src="assets/img/breadcrumb/breadcrumb-shape-2.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="breadcrumb__content-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <div className="breadcrumb__content text-center z-index-3 mb-60">
                                                <h3 className="breadcrumb__title">Build Your Career With <br /> Busicon</h3>
                                                <div className="breadcrumb__text">
                                                    <p>Work with us to impact lives of people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* breadcrumb-area-end */}
                        {/* carrer-banner-area-start */}
                        <div className="carrer-banner-area carrer-banner-space">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="carrer-banner-img-item">
                                            <img src={image1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="carrer-banner-img-item parallax-main">
                                            <img className="parallax-img" src={image2} alt="" data-parallax="{&quot;y&quot;: 300, &quot;smoothness&quot;: 10}" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="carrer-banner-img-item mb-20">
                                            <img src={image3} alt="" />
                                        </div>
                                        <div className="carrer-banner-img-item">
                                            <img src={image4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* carrer-banner-area-end */}
                        {/* tp-job-area-start */}
                        <Allroles/>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}


export default Careers