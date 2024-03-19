import React from 'react'
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import Faq from '../commons/Faq'
import legalitiesimage from '../img/lono-services/legalities.jpg'
// Importing breadcrumb images
import breadcrumbshape1 from '../img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from '../img/breadcrumb/breadcrumb-shape-2.png'
import breadcrumbsub1 from '../img/breadcrumb/breadcrumb-sub-1.png'
import breadcrumb3 from '../img/breadcrumb/breadcrumb-3.png'

// Importing service images
import svdashboard from '../img/service/sv-dashbord.png'
import svdetails from '../img/service/sv-details-1.jpg'
import svbg from '../img/service/sv-bg.jpg'

const Legalities = () => {
    return (
        <div>
            {/* back-to-top-start  */}
            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="far fa-angle-double-up" />
            </button>
            {/* back-to-top-end  */}
            {/* tp-offcanvus-area-start */}
            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times" /></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <a href="index.html">
                            <img src="assets/img/logo/logo-white.png" alt="" />
                        </a>
                    </div>
                    <div className="mobile-menu" />
                    <div className="tpoffcanvas__instagram text-center">
                        <div className="tpoffcanvas__instagram-title">
                            <h4>instagram</h4>
                        </div>
                        <a href="#"><img src="assets/img/project/project-inner-4.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-5.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-6.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-7.jpg" alt="" /></a>
                    </div>
                    <div className="tpoffcanvas__info text-center">
                        <h4 className="offcanva-title">we are here</h4>
                        <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
                            27 Division St, New York, <br />
                            NY 10002, USA
                        </a>
                    </div>
                    <div className="tpoffcanvas__social">
                        <div className="social-icon text-center">
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-facebook-square" /></a>
                            <a href="#"><i className="fab fa-dribbble" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay" />
            {/* tp-offcanvus-area-end */}
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* breadcrumb-area-start */}
                        <div className="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
                            <div className="breadcrumb__shape-1">
                                <img src={breadcrumbshape1} alt="" />
                            </div>
                            <div className="breadcrumb__shape-2">
                                <img src={breadcrumbshape2} alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="breadcrumb__content">
                                            <h3 className="breadcrumb__title tp-char-animation">Legalities</h3>
                                            <div className="breadcrumb__list tp-title-anim">
                                                <span className="child-one"><a href="/">Home</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span className="child-one"><a href="/services">Services</a></span>
                                                <span className="dvdr"><i className="fal fa-angle-right" /></span>
                                                <span>Legalities</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                                        <div className="breadcrumb__img p-relative text-start z-index">
                                            <img className="z-index-3" src={breadcrumb3} alt="" />
                                            <div className="breadcrumb__sub-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
                                                <img src={breadcrumbsub1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* breadcrumb-area-end */}
                        {/* service-details-area-start */}
                        <div className="sv-details-area sv-details-space pt-100 pb-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="sv-details-widget">
                                            <div className="sv-details-category mb-30">
                                                <div className="sv-details-category-title">
                                                    <h4 className="sv-details-title-sm">Service Category</h4>
                                                </div>
                                                <div className="sv-details-category-list">
                                                    <ul>
                                                        <li>
                                                            <a href="/finance"><span>Finance</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/insurance"><span>Insurance</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li className='active'>
                                                            <a href="#"><span>Legalities</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="collaborations"><span>Collaboration</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/business"><span>Business Management</span><i className="fal fa-angle-right" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tp-service__dashboard " data-background={svbg}>
                                                <div className="tp-service__top-content">
                                                    <h3 className="tp-service__title-white">Data Analysis <br /> Tools &amp; Methods</h3>
                                                    <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                                                    <a className="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                                                        <span>Work with Us</span>
                                                        <b />
                                                    </a>
                                                </div>
                                                <div className="tp-service__dashdboard-sm-img">
                                                    <img className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" src={svdashboard} alt="" />
                                                </div>
                                            </div>
                                            {/* <div className="sv-details-social-box mb-30">
                                                <h4 className="sv-details-title-sm">Share it.</h4>
                                                <div className="sv-details-social-link">
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                    <a href="#"><i className="fab fa-youtube" /></a>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-8">
                                        <div className="sv-details-wrapper">
                                            <div className="sv-details-thumb mb-45">
                                                <img className="w-100" src={legalitiesimage} alt="" />
                                            </div>
                                            <div className="sv-details-title-box mb-55">
                                                <h4 className="sv-details-title">Service Overview</h4>
                                                <p>Customers must contact several professionals to obtain the necessary documents and agreements,
                                                    including registration certificates, legal requirements, tax filings, and compliances, in order to
                                                    process each loan. The organisation is coming up with a solution where all these needs are
                                                    processed in one place because it got tough and time-consuming to process all these requirements.</p>
                                            </div>
                                            <div className="sv-details-text mb-35">
                                                <h4 className="sv-details-text-title pb-10">Documentation</h4>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                          Service level agreement   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Franchise Agreement  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Shareholders Agreement
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Joint venture agreement  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Founders agreement  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Vendor agreement consultancy agreement 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Scope of work agreement 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Trade license agreement 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Finance agreement
                                                        </p>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="sv-details-text mb-35">
                                                <h4 className="sv-details-text-title pb-10">Real Estate</h4>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Rental agreement  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Sale deed 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Gift deed
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Employment agreement    
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Legal notice  
                                                        </p>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="sv-details-text mb-35">
                                                <h4 className="sv-details-text-title pb-10">Legal Registrations</h4>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Business registration  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Private limited company 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Limited Liability partnership  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        One person company  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Sole proprietorship   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Nidhi company    
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Producer company 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Partnership firm
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Startup India registration
                                                        </p>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="sv-details-text mb-35">
                                                <h4 className="sv-details-text-title pb-10">Licenses& registrations</h4>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Digital signature certificate  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Udyam registration   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        MSME registration
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        ISO certification 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        FSSAI(food License) 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        IEC(import/export code)
                                                        </p>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="sv-details-text mb-35">
                                                <h4 className="sv-details-text-title pb-10">Tax & compliance </h4>
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        GST registration  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        GST filing  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Tax filing   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Provident fund (PF) registration   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        ESI Registration   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Shops & established license   
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Professional tax registration 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        TDS return filing  
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Accounting’s and book keeping 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Trade mark registration 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Patent registration 
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        <p>
                                                        Property registrations  
                                                        </p>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="sv-details-text-2">
                                                <h4 className="sv-details-text-title">The Challange</h4>
                                                <p>Streamlining the cumbersome process of gathering various documents and agreements for loans by centralizing them into one accessible platform.</p>
                                            </div>
                                            {/* <div className="tp-faq-area pt-50">
                                                <div className="container p-0">
                                                    <div className="row g-0">
                                                        <div className="col-xl-12">
                                                            <h4 className="sv-details-title">Any Questions find here.</h4>
                                                            <div className="tp-custom-accordion">
                                                                <div className="accordion tp-inner-font" id="accordionExample">
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingOne">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                Why should I choose Softec?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items tp-faq-active">
                                                                        <h2 className="accordion-header" id="headingTwo">
                                                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                Do I need to change banks?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingThree">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                                How can I order equipment?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingFour">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                                Do you offer volume discounts?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-items">
                                                                        <h2 className="accordion-header" id="headingFive">
                                                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                                How does signing up work?
                                                                                <span className="accordion-btn" />
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                The Softec Shop is built right into your account dashboard, and is accessible
                                                                                immediately after signing up.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Faq />
                        {/* service-details-area-end */}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default Legalities