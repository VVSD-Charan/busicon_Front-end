import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import Faq from '../commons/Faq'
import businessimage from '../img/lono-services/business.jpg'

// Importing breadcrumb images
import breadcrumbshape1 from '../img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from '../img/breadcrumb/breadcrumb-shape-2.png'
import breadcrumbsub1 from '../img/breadcrumb/breadcrumb-sub-1.png'

// Importing service images
import svbg from '../img/service/sv-bg.jpg'

const Business = () => {
  return (
    <div>
      {/* tp-offcanvus-area-start */}

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
                      <h3 className="breadcrumb__title tp-char-animation">
                        Business Management
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
                        <span>Business Management</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-lg-4 text-center text-md-end">
                    <div className="breadcrumb__img p-relative text-start z-index">
                      <img className="z-index-3" src="/img/businesspage.jpeg" alt="" />
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
                            <li>
                              <a href="legalities">
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
                            <li className="active">
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
                      <div className="sv-details-thumb mb-45">
                        <img className="w-100" src={businessimage} alt="" />
                      </div>
                      <div className="sv-details-title-box mb-55">
                        <h4 className="sv-details-title">Service Overview</h4>
                        <p>
                          Choosing a business idea and establishing the right
                          business at the right place became a difficult task
                          for most entrepreneurs for all MSMEs. In fact, most of
                          the business fails here itself, and they shut down
                          after spending all the capital on the business over a
                          period of time. This makes most of the youngsters
                          avoid business and creates a fear of entering the
                          business. We also have many business opportunities in
                          different sectors of manufacturing, service,
                          automobiles, agriculture, and animal husbandry to meet
                          the needs of crores of people in India. To place the
                          right business in place. And to explore and develop
                          the different businesses, To solve these types of
                          problems, our company is coming up with a list of
                          business ideas and its establishment requirements in
                          different sectors to encourage and support all
                          entrepreneurs for growing our country's economy and
                          increasing the business success rate
                        </p>
                      </div>
                      <div className="sv-details-text mb-35">
                        <h4 className="sv-details-text-title pb-10">
                          Products
                        </h4>
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            <p>General Business</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Manufacturing Business</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Agriculture Business</p>
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            <p>Automobiles Business</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sv-details-text-2">
                        <h4 className="sv-details-text-title">The Challange</h4>
                        <p>
                          {' '}
                          Selecting and establishing a viable business idea
                          amidst numerous options while overcoming fear of
                          failure and uncertainty.
                        </p>
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
  )
}
export default Business
