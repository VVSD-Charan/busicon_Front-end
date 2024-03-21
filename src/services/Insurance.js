import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import insuranceimage from '../img/lono-services/insurance.jpg'

// Importing breadcrumb images
import breadcrumbshape1 from '../img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from '../img/breadcrumb/breadcrumb-shape-2.png'
import breadcrumbsub1 from '../img/breadcrumb/breadcrumb-sub-1.png'
import breadcrumb3 from '../img/breadcrumb/breadcrumb-3.png'

// Importing service images
import svdashboard from '../img/service/sv-dashbord.png'
import svbg from '../img/service/sv-bg.jpg'
import Faq from '../commons/Faq'

const Insurance = () => {
  return (
    <div>
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
                      <h3 className="breadcrumb__title tp-char-animation">
                        Insurance
                      </h3>
                      <div className="breadcrumb__list tp-title-anim">
                        <span className="child-one">
                          <a href="/">Home</a>
                        </span>
                        <span className="dvdr">
                          <i className="fal fa-angle-right" />
                        </span>
                        <span className="child-one">
                          <a href="/services">Services</a>
                        </span>
                        <span className="dvdr">
                          <i className="fal fa-angle-right" />
                        </span>
                        <span>Insurance</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                    <div className="breadcrumb__img p-relative text-start z-index">
                      <img className="z-index-3" src={breadcrumb3} alt="" />
                      <div
                        className="breadcrumb__sub-img wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".4s"
                      >
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
                          <h4 className="sv-details-title-sm">
                            Service Category
                          </h4>
                        </div>
                        <div className="sv-details-category-list">
                          <ul>
                            <li>
                              <a href="/finance">
                                <span>Finance</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                            <li className="active">
                              <a href="/insurance">
                                <span>Insurance</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                            <li>
                              <a href="/legalities">
                                <span>Legalities</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                            <li>
                              <a href="/collaborations">
                                <span>Collaboration</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                            <li>
                              <a href="/business">
                                <span>Business Management</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="tp-service__dashboard"
                        data-background={svbg}
                      >
                        <div className="tp-service__top-content">
                          <h3 className="tp-service__title-white">
                            Data Analysis <br /> Tools &amp; Methods
                          </h3>
                          <a
                            className="tp-btn-orange tp-btn-hover alt-color-white"
                            href="/careers"
                          >
                            <span>Work with Us</span>
                            <b />
                          </a>
                        </div>
                        <div className="tp-service__dashdboard-sm-img">
                          <img
                            className="wow tpfadeRight"
                            data-wow-duration=".9s"
                            data-wow-delay=".3s"
                            src={svdashboard}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="sv-details-wrapper">
                      <div className="sv-details-thumb mb-45">
                        <img className="w-100" src={insuranceimage} alt="" />
                      </div>
                      <div className="sv-details-title-box mb-55">
                        <h4 className="sv-details-title">Service Overview</h4>
                        <p>
                          Many institutions commit fraud by providing insurance
                          to customers for a variety of reasons. While
                          processing a loan, many of the lenders add additional
                          insurance and collect interest on your insurance too.
                          To choose the right insurance and to avoid such
                          frauds, we are here to offer the right insurance for
                          the right loan. We also offer the best insurance for
                          your different types of needs, such as life insurance,
                          property insurance, vehicle insurance, business
                          insurance, health insurance, term insurance, etc . We
                          are ready to support you in every aspect of fraud and
                          scams related to your needs.
                        </p>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Products
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>Life insurance</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Term insurance</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>property insurance</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Business insurance</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>vehicle insurance</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Health insurance</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>General insurance</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text-2">
                        <h4 className="sv-details-text-title">The Challange</h4>
                        <p>
                          Safeguarding against fraudulent insurance practices
                          during loan processing, ensuring customers receive
                          appropriate insurance tailored to their needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* service-details-area-end */}
            <Faq />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Insurance
