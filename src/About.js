import React from 'react'
import Header from './commons/Header'
import Footer from './commons/Footer.js'
import { team } from './Data'

import ctabg from './img/cta/cta-bg.jpg'
import breadcrum2 from './img/breadcrumb/breadcrumb-2.jpg'

//banks
import hdfc from './img/payment-logo/hdfc.png'
import sbi from './img/payment-logo/sbi.png'
import bob from './img/payment-logo/Bank-of-Baroda.png'
import icici from './img/payment-logo/icici.png'
import axis from './img/payment-logo/AXISBANK.BO.png'
import bajaj from './img/payment-logo/bajaj.png'
import tata from './img/payment-logo/tatacapital.png'
import pnb from './img/payment-logo/pnb.png'
import union from './img/payment-logo/unionbank.png'

//about images
import about1 from './img/about/about-1.jpg'
import about2 from './img/about/about-2.jpg'
import about3 from './img/about/about-3.jpg'
import about5 from './img/about/about-5.png'
import aboutbg from './img/about/about-bg-shape.png'

const About = () => {
  return (
    <div>
      {/* tp-offcanvus-area-start */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            {/* tp-breadcrumb-area-start */}
            <div className="about-banner-area p-relative">
              <div className="about-banner p-relative z-index fix">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="about-banner-content z-index-5">
                        <h4
                          className="about-banner-title"
                          data-parallax='{"y": 1000, "smoothness": 10}'
                        >
                          <span>About</span> <br />
                          <span>Busicon</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-breadcrumb-area-end */}
            {/* tp-breadcrumb-header-area-start */}
            <div className="about-img-area mb-100 z-index-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="about-img about-img-height p-relative"
                      style={{ background: `url(${breadcrum2})` }}
                    >
                      <div className="about-img-content">
                        <h4
                          className="about-img-title"
                          data-parallax='{"y": 1000, "smoothness": 10}'
                        >
                          <span>About</span> <br />
                          <span>Busicon</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-breadcrumb-header-area-end */}
            {/*ab-brand-area-start */}
            <div className="ab-brand-area">
              <div className="container">
                <div className="ab-brand-border-bottom pb-90">
                  <div className="row">
                    <div className="col-12">
                      <div className="ab-brand-section-box text-center mb-50">
                        <h4 className="ab-brand-title">
                          Trusted by Hundreds of Banks
                        </h4>
                        <p>More than 100+ teams are using Busicon</p>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".2s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={hdfc}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".4s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={sbi}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".6s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={bob}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".8s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={icici}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay=".9s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={union}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={axis}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1.1s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={tata}
                              style={{ height: '80px', width: '160px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1.2s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={bajaj}
                              style={{ height: '80px', width: '160px' }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="col wow tpfadeUp"
                          data-wow-duration=".9s"
                          data-wow-delay="1.3s"
                        >
                          <div className="ab-brand-item mb-25">
                            <img
                              src={pnb}
                              style={{ height: '73px', width: '150px' }}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*ab-brand-area-end */}
            {/*ab-company-area-start */}
            <div className="ab-company-area pt-105 pb-100">
              <div className="container">
                <div className="row ab-company-section-space">
                  <div className="col-xl-6">
                    <div className="ab-company-section-box">
                      <h4 className="inner-section-subtitle">
                        ABOUT THE COMPANY
                      </h4>
                      <h3 className="tp-section-title">
                        Busicon is Made <br />
                        <p
                          className="tp-section-title"
                          style={{
                            fontSize: '30px',
                            letterSpacing: '1px',
                            lineHeight: '1.3',
                          }}
                        >
                          For Secure, Streamlined Lending Solutions.
                        </p>
                      </h3>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <div className="ab-company-right">
                      <div className="ab-company-section-text">
                        <p className="pb-10">
                          Busicon is a financial technology focused on
                          problem-solving solutions in lending by a financial
                          institution to a customer in India. Our stream-lined
                          services maximize lending to every individual and
                          avoid business loan rejections, scams, and frauds in
                          banking services in India.
                        </p>
                        <p className="pb-10">
                          We offer a one-stop solution that eliminates
                          rejections and ensures better lending services for
                          newly established businesses.
                        </p>
                        <p className="pb-10">
                          We ensure protection against third-party broker fraud
                          for all customers while providing increased access to
                          government schemes and benefits throughout the entire
                          process.
                        </p>
                        <p>
                          <span>
                            Our clean and simple APIs and transparent SaaS model
                            will give you complete peace of mind.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row align-items-center"
                  style={{ alignItems: 'center' }}
                >
                  <div className="col-xl-4">
                    <div className="ab-company-video"></div>
                  </div>
                  <div className="col-xl-8">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 mb-40">
                        <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                          <div className="ab-company-fun-fact">
                            <span>USED BY</span>
                            <h4>
                              200<em>+</em>
                            </h4>
                            <p>Users</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 mb-40">
                        <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                          <div className="ab-company-fun-fact">
                            <span>IN</span>
                            <h4>
                              20<em>+</em>
                            </h4>
                            <p>Banks using</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*ab-company-area-end */}
            {/* tp-about-area-start */}
            <div className="tp-about__area tp-about__pt-pb pb-160">
              <div className="container">
                <div className="row align-items-center">
                  <div
                    className="col-xl-6 col-lg-6 wow tpfadeLeft"
                    data-wow-duration=".9s"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                      <div className="tp-about__bg-shape">
                        <img src={aboutbg} alt="" />
                      </div>
                      <div className="tp-about__main-img z-index">
                        <img src={about2} alt="" />
                      </div>
                      <div className="tp-about__sub-img-1 d-none d-sm-block z-index-3">
                        <img src={about1} alt="" />
                      </div>
                      <div className="tp-about__sub-img-2 d-none d-sm-block">
                        <img src={about3} alt="" />
                      </div>
                      <div className="tp-about__sub-img-3 d-none d-sm-block z-index-3">
                        <img src={about5} alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-about__right">
                      <div className="tp-about__section-box">
                        <h4 className="tp-section-subtitle">
                          OVER 15K+ CLIENT
                        </h4>
                        <h3
                          className="tp-section-title mb-15"
                          style={{ fontSize: '30px' }}
                        >
                          Busicon: Empowering Financial Access
                        </h3>
                        <p>Unlocking Potential. Empowering Futures.</p>
                      </div>
                      <div className="tp-about__list">
                        <ul>
                          <li>
                            <i className="fal fa-check" />
                            Rural Banking Enhancement
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            Navigating Rapid Lender Growth
                          </li>
                          <li>
                            <i className="fal fa-check" />
                            Enhancing the Financial Ecosystem
                          </li>
                        </ul>
                      </div>
                      <div className="tp-about__btn">
                        <a
                          className="tp-btn tp-btn-inner tp-btn-hover alt-color-black"
                          href="/about"
                        >
                          <span>About Us</span>
                          <b />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-about-area-end */}
            {/* tp-team-area-start */}
            <div className="tp-team-area grey-bg pt-120 pb-95">
              <div className="container">
                <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
                  <div className="row align-items-end">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-team-section-box text-center text-sm-start">
                        <h5 className="inner-section-subtitle pb-10">
                          THE TEAM
                        </h5>
                        <h3 className="tp-section-title mb-0 text-black">
                          Our Leaders
                        </h3>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-team-top-content text-center text-md-end">
                        <a
                          className="tp-btn-inner tp-btn-hover alt-color-orange"
                          href="/careers"
                        >
                          <span>Join Team</span>
                          <b />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {team.map((item, index) => {
                    return (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-1 team-inner-border-right"
                        key={index}
                      >
                        <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                          <div className="tp-team-img">
                            <img
                              src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png"
                              alt=""
                            />
                          </div>
                          <div className="tp-team-content">
                            <h4 className="tp-team-title-sm">
                              <button>{item.name}</button>
                            </h4>
                            <span>{item.role}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="tp-cta-area p-relative">
              <div className="tp-cta-grey-bg grey-bg-2" />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="tp-cta-bg"
                      style={{ background: `url(${ctabg})` }}
                    >
                      <div className="tp-cta-content tp-inner-font text-center">
                        <h3 className="tp-section-title text-white">
                          Try our service now!
                        </h3>
                        <p>The Future Of Your Finance Is On Your Fingertips</p>
                        <a
                          className="tp-btn-inner white-bg text-black"
                          href="/services"
                        >
                          Try our services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-cta-area-end */}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About
