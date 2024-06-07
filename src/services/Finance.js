import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import Faq from '../commons/Faq'
import financeimage from '../img/lono-services/finance.jpg'

// Importing breadcrumb images
import breadcrumbshape1 from '../img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from '../img/breadcrumb/breadcrumb-shape-2.png'
import breadcrumbsub1 from '../img/breadcrumb/breadcrumb-sub-1.png'

// Importing service images
import svbg from '../img/service/sv-bg.jpg'

const Finance = () => {
  return (
    <div>
      {/* tp-offcanvus-area-start */}
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
                      <h3 className="breadcrumb__title tp-char-animation">
                        Finance
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
                        <span>Finance</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                    <div className="breadcrumb__img p-relative text-start z-index">
                      <img className="z-index-3" src="/img/financepage.jpeg" alt="" />
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
            <div className="sv-details-area sv-details-space pt-100">
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
                            <li className="active">
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
                            src="/img/work.jpeg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="sv-details-wrapper">
                      <div className="sv-details-thumb mb-10">
                        <img className="w-100" src={financeimage} alt="" />
                      </div>
                      <div className="sv-details-title-box mb-55">
                        <h4 className="sv-details-title">Service Overview</h4>
                        <p>
                          Don't get fooled by your home loan, property loan,
                          business loan, personal loan, vehicle loan and credit
                          card processing without our pre-check approval. Due to
                          the rapid increase in financial institutions, many of
                          the banks are enforcing fraudulent terms and
                          conditions and making customers pay interest on their
                          capital. Some of the banks are even making interest on
                          your insurance, which increases your capital payment
                          and keeps you at risk of debt for years.
                          <br />
                          Most people struggle to effectively communicate their
                          needs and abilities when applying for loans. Some of
                          the banks were rejected because of their careless
                          actions. A few unconventional factors could be the
                          reason for rejection at some banks. This does not
                          imply that you are ineligible for financing. We make
                          sure not to lose your money and can help you out at
                          any time with our support team.
                        </p>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Products
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>Business Loan</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Home Loan</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Property Loan</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>vehicle Loan</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Personal Loan</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Credit Card</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text-2">
                        <h4 className="sv-details-text-title">The Challange</h4>
                        <p>
                          {' '}
                          Effectively communicating financial needs and
                          abilities during loan applications to avoid rejection
                          due to unconventional factors.
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
export default Finance
