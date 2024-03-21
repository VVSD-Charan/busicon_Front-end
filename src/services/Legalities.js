import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import Faq from '../commons/Faq'
import legalitiesimage from '../img/lono-services/legalities.jpg'
// Importing breadcrumb images
import breadcrumbshape1 from '../img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from '../img/breadcrumb/breadcrumb-shape-2.png'
import breadcrumbsub1 from '../img/breadcrumb/breadcrumb-sub-1.png'
import breadcrumb3 from '../img/breadcrumb/breadcrumb-3.png'

// Importing service images
import svdashboard from '../img/service/sv-dashbord.png'
import svbg from '../img/service/sv-bg.jpg'

const Legalities = () => {
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
                        Legalities
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
                        <span>Legalities</span>
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
                            <li>
                              <a href="/insurance">
                                <span>Insurance</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                            <li className="active">
                              <a href="/legalities">
                                <span>Legalities</span>
                                <i className="fal fa-angle-right" />
                              </a>
                            </li>
                            <li>
                              <a href="collaborations">
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
                        className="tp-service__dashboard "
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
                        <img className="w-100" src={legalitiesimage} alt="" />
                      </div>
                      <div className="sv-details-title-box mb-55">
                        <h4 className="sv-details-title">Service Overview</h4>
                        <p>
                          Customers must contact several professionals to obtain
                          the necessary documents and agreements, including
                          registration certificates, legal requirements, tax
                          filings, and compliances, in order to process each
                          loan. The organisation is coming up with a solution
                          where all these needs are processed in one place
                          because it got tough and time-consuming to process all
                          these requirements.
                        </p>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Documentation
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>Service level agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Franchise Agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Shareholders Agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Joint venture agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Founders agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Vendor agreement consultancy agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Scope of work agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Trade license agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Finance agreement</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Real Estate
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>Rental agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Sale deed</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Gift deed</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Employment agreement</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Legal notice</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Legal Registrations
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>Business registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Private limited company</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Limited Liability partnership</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>One person company</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Sole proprietorship</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Nidhi company</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Producer company</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Partnership firm</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Startup India registration</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Licenses& registrations
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>Digital signature certificate</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Udyam registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>MSME registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>ISO certification</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>FSSAI(food License)</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>IEC(import/export code)</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Tax & compliance{' '}
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>GST registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>GST filing</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Tax filing</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Provident fund (PF) registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>ESI Registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Shops & established license</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Professional tax registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>TDS return filing</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Accounting’s and book keeping</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Trade mark registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Patent registration</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Property registrations</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text-2">
                        <h4 className="sv-details-text-title">The Challange</h4>
                        <p>
                          Streamlining the cumbersome process of gathering
                          various documents and agreements for loans by
                          centralizing them into one accessible platform.
                        </p>
                      </div>
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
  )
}
export default Legalities
