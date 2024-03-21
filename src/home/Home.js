import React from 'react'

// Importing busicon logo
import homebg1 from '../img/busicon/homebg1.png'

// Importing logos
import downlogo from '../img/busicon/down-logo.png'

// importing hero images
import herouser from '../img/hero/hero-user.jpg'
import herobg2 from '../img/hero/hero-bg-2.png'

// importing payment
import hand from '../img/payment/hand.png'
import coin1 from '../img/payment/coin-1.png'
import coin2 from '../img/payment/coin-2.png'
import mobile from '../img/payment/mobile.png'
import payment3 from '../img/payment/payment-3.png'
import message from '../img/payment/message.png'
import background from '../img/payment/background.png'
import getpaid from '../img/payment/get-paid.png'
import securebanking from '../img/payment/secure banking.png'

// importing payment logo
import unionbank from '../img/payment-logo/unionbank.png'
import sbi from '../img/payment-logo/sbi.png'
import axis from '../img/payment-logo/AXISBANK.BO.png'
import icici from '../img/payment-logo/icici.png'
import hdfc from '../img/payment-logo/hdfc.png'
import kotak from '../img/payment-logo/kotak.png'
import canara from '../img/payment-logo/canara bank.png'
import centralbank from '../img/payment-logo/centralbank.png'
import fino from '../img/payment-logo/fino.png'
import gayathri from '../img/payment-logo/gayathri.png'
import bob from '../img/payment-logo/Bank-of-Baroda.png'
import bom from '../img/payment-logo/bank of maharashtra.png'
import uco from '../img/payment-logo/uco.png'
import idbi from '../img/payment-logo/idbi.png'
import punjab from '../img/payment-logo/punjab national.png'
import rbl from '../img/payment-logo/rbl.png'

// Importing service images
import servbg21 from '../img/service/sv-bg-2-1.jpg'
import Header from '../commons/Header'
import finance from '../img/service/finance.png'
import insurance from '../img/service/insurance.png'
import legalities from '../img/service/legalities.png'
import collaborations from '../img/service/collaborations.png'

// Importing account images
import Footer from '../commons/Footer'
import Faq from '../commons/Faq'

// Importing cta images
import ctabg from '../img/cta/cta-bg.jpg'

const Home = () => {
  return (
    <div>
      {/* back-to-top-start  */}
      <button
        className="scroll-top scroll-to-target tp-style-green"
        data-target="html"
      >
        <i className="far fa-angle-double-up" />
      </button>
      {/* back-to-top-end  */}
      <Header />
      {/* tp-offcanvus-area-start */}
      <div className="body-overlay" />
      {/* tp-offcanvus-area-end */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            {/* tp-hero-area-start */}
            <div
              className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
              style={{ backgroundImage: `url(${herobg2})` }}
            >
              <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
                <svg
                  width={238}
                  height={159}
                  viewBox="0 0 238 159"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="line-2"
                    d="M234.344 52.0221C223.737 68.476 166.957 94.3438 103.492 41.3862C75.8453 16.8451 105.128 -10.4919 114.849 24.3323C124.571 59.1564 92.7914 100.54 68.4537 105.873C44.1161 111.206 27.3149 102.11 30.0997 91.4562C34.0369 76.394 74.0714 111.53 2.64231 134.089"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <path
                    className="line-2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.0625 133.958C2.41561 133.237 3.42407 131.16 3.56794 130.842C3.9652 129.948 4.03834 129.444 4.05489 128.923C4.06249 128.505 4.01353 128.07 4.12522 127.291C4.19178 126.861 3.87842 126.464 3.44849 126.405C3.01856 126.345 2.62947 126.648 2.56291 127.077C2.47204 127.784 2.47586 128.238 2.48453 128.637C2.48792 129.095 2.47134 129.451 2.12998 130.203C1.96731 130.57 0.83986 132.515 0.507014 133.501C0.331505 134.015 0.368942 134.416 0.454587 134.597C0.576866 134.857 0.815639 135.113 1.20469 135.308C1.70511 135.556 2.55838 135.75 3.5093 135.988C4.40364 136.21 5.40968 136.481 6.2686 136.942C6.98849 137.334 7.59496 137.863 7.84287 138.677C7.96607 139.092 8.3949 139.33 8.81178 139.207C9.22866 139.084 9.47003 138.645 9.34683 138.23C8.99025 137 8.10724 136.153 7.01332 135.56C6.04391 135.035 4.91164 134.714 3.88939 134.463C3.27915 134.309 2.71001 134.182 2.27274 134.041C2.20216 134.019 2.13233 133.988 2.0625 133.958Z"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="container-fluid g-0">
                <div className="row g-0 align-items-end">
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-hero-2__title-box">
                      <h3 className="tp-hero-2__title tp-char-animation">
                        Busicon Services{' '}
                        <p
                          style={{
                            fontSize: '30px',
                            letterSpacing: '1px',
                            color: 'white',
                            lineHeight: '1.3',
                            marginBottom: '20px',
                            marginTop: '25px',
                          }}
                        >
                          Start your business with zero money Safeguard
                          your finance
                        </p>
                      </h3>
                    </div>
                    <div
                      className="tp-hero-2__btn"
                      style={{ marginBottom: '250px' }}
                    >
                      <a
                        className="tp-btn-green wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                        href="/services"
                      >
                        Check out our services
                      </a>
                    </div>
                    <div className="tp-hero-2__user p-relative">
                      <h4 className="tp-char-animation-2">
                        Over<span>5Ok+ Client</span> all over the world
                      </h4>
                      <div className="tp-hero-2__user-img">
                        <img src={herouser} alt="" />
                      </div>
                      <div className="tp-hero-2__shape-1">
                        <svg
                          width={101}
                          height={15}
                          viewBox="0 0 101 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.336934 5.24122C16.3707 0.583948 58.7418 -4.19312 99.9564 13.9568"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-hero-2__right text-end p-relative">
                      <div
                        className="tp-hero-2__main-img wow tpfadeRight"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                      >
                        <img
                          src={homebg1}
                          alt=""
                          style={{
                            height: '1000px',
                            width: '700px',
                            paddingBottom: '350px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-hero-area-end */}
            {/* tp-payment-area-start */}
            <div id="payment-method" className="tp-payment__area pt-110 pb-110">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7">
                    <div className="tp-payment__title-box text-center mb-55">
                      <h3 className="tp-section-title-lg">
                        You'll love our <br /> powerful payments.
                      </h3>
                      <p>We've got all your payments covered</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-md-6 mb-30">
                        <div
                          className="tp-payment__item tp-payment__bg-color-2 p-relative z-index wow tpfadeLeft"
                          data-wow-duration=".9s"
                          data-wow-delay=".3s"
                        >
                          <div className="tp-payment__shape-4">
                            {/* <img src={qrcode} alt="" /> */}
                          </div>
                          <div className="tp-payment__shape-5">
                            <img src={mobile} alt="" />
                          </div>
                          <div className="tp-payment__shape-6">
                            <img src={hand} alt="" />
                          </div>
                          <div className="tp-payment__shape-7">
                            <img src={coin1} alt="" />
                          </div>
                          <div className="tp-payment__shape-8">
                            <img src={coin2} alt="" />
                          </div>
                          <div className="tp-payment__content">
                            <h3 className="tp-payment__title">
                              Why 99% Business loan Rejection
                            </h3>
                            <p>
                              we make your business funding and business
                              establishment easy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div
                          className="tp-payment__item tp-payment__bg-color-3 p-relative z-index wow tpfadeRight"
                          data-wow-duration=".9s"
                          data-wow-delay=".5s"
                        >
                          <div className="tp-payment__shape-9">
                            <img src={payment3} alt="" />
                          </div>
                          <div className="tp-payment__shape-11">
                            <img src={message} alt="" />
                          </div>
                          <div className="tp-payment__content">
                            <h3 className="tp-payment__title">
                              Maximize Loan Benefits Efficiently{' '}
                            </h3>
                            <p>
                              Missing your ideal lender for your loan due to{' '}
                              <br />
                              rapid expansion in Financial institutions.
                              <br />
                              now make it easy and save your money with <br />{' '}
                              lowest intrest rates and government benifits.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-30">
                    <div
                      className="tp-payment__item p-relative z-index wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <div className="tp-payment__shape-1">
                        <img src={background} alt="" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tp-payment__content tp-payment__content-space">
                            <h3 className="tp-payment__title">
                              Secure Banking Technology Solution
                            </h3>
                            <p>
                              Avoid scams and frauds in Banking by any Third
                              party brokers,
                              <br /> Banks & NBFCs employees we are here to keep
                              this process <br /> safe and secure through our
                              technology solution
                            </p>
                            {/* <a href="service-details.html">Explore Invoicing Tools<i className="far fa-arrow-right" /></a> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-payment__shape-2">
                            <img
                              src={securebanking}
                              style={{ height: '400px', width: '400px' }}
                              alt=""
                            />
                          </div>
                          <div className="tp-payment__shape-3 d-none d-sm-block">
                            <img src={getpaid} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-payment-area-end */}
            {/* tp-payment-method-area-start */}
            <div className="tp-payment-method__area tp-payment-method__space">
              <div className="container-fluid g-0">
                <div className="row g-0 justify-content-center">
                  <div className="col-xl-7">
                    <div className="tp-payment-method__title-box text-center mb-20">
                      <h3 className="tp-section-title-lg pb-10">
                        All major <br />
                        Banking Partners
                      </h3>
                      <p>We've got all your payments covered</p>
                    </div>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-12">
                    <div className="tp-payment-method__wrapper text-center p-relative">
                      <div className="tp-payment-method__main-circle p-relative z-index">
                        <div className="tp-payment-method__main-img z-index-3">
                          <img
                            src={downlogo}
                            style={{
                              height: '150px',
                              width: '150px',
                              backgroundColor: 'white',
                            }}
                            alt=""
                          />
                        </div>
                        <div className="tp-payment-method__line-1">
                          <div className="tp-payment-method__circle circle-1" />
                          <span>
                            <img
                              src={unionbank}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-2 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-2" />
                          <span>
                            <img
                              src={axis}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-3">
                          <div className="tp-payment-method__circle circle-3" />
                          <span>
                            <img
                              src={sbi}
                              style={{
                                height: '50px',
                                width: '70px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-4 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-4" />
                          <span>
                            <img
                              src={kotak}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-5">
                          <div className="tp-payment-method__circle circle-5" />
                          <span>
                            <img
                              src={icici}
                              style={{
                                height: '50px',
                                width: '80px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-6 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-6" />
                          <span>
                            <img
                              src={hdfc}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-7">
                          <div className="tp-payment-method__circle circle-7" />
                          <span>
                            <img
                              src={bom}
                              style={{
                                height: '60px',
                                width: '60px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-8 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-8" />
                          <span>
                            <img
                              src={rbl}
                              style={{
                                height: '40px',
                                width: '40px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-9">
                          <div className="tp-payment-method__circle circle-9" />
                          <span>
                            <img
                              src={centralbank}
                              style={{
                                height: '55px',
                                width: '90px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-10 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-10" />
                          <span>
                            <img
                              src={bob}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-11">
                          <div className="tp-payment-method__circle circle-11" />
                          <span>
                            <img
                              src={punjab}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-12 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-12" />
                          <span>
                            <img
                              src={uco}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-13">
                          <div className="tp-payment-method__circle circle-13" />
                          <span>
                            <img
                              src={idbi}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-14 d-none d-lg-block">
                          <div className="tp-payment-method__circle circle-14" />
                          <span>
                            <img
                              src={gayathri}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-15">
                          <div className="tp-payment-method__circle circle-15" />
                          <span>
                            <img
                              src={fino}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="tp-payment-method__line-16">
                          <div className="tp-payment-method__circle circle-16" />
                          <span>
                            <img
                              src={canara}
                              style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: 'white',
                              }}
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-payment-method-area-end */}
            {/* tp-service-area-end */}
            <div className="tp-service-2__area p-relative pt-70 pb-10">
              <div className="tp-service-2__shape">
                <img src={servbg21} alt="" />
              </div>
              <div className="container z-index-5">
                <div className="row align-items-center mb-50">
                  <div className="col-xl-6 col-lg-6">
                    <div className="tp-service-2__section-box">
                      <h3 className="tp-section-title-lg pb-20">
                        We provide the <br />
                        best service for you
                      </h3>
                      <p>
                        We operate with dedication, perfection, responsibility,
                        and trust.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-service-2__user-box p-relative d-flex flex-wrap justify-content-lg-start justify-content-lg-end align-items-center">
                      <div className="tp-service-2__user-shape">
                        <svg
                          width={470}
                          height={18}
                          viewBox="0 0 470 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M199.614 1.72387C177.533 2.31462 155.712 3.04101 134.432 3.83514C104.309 4.95854 74.1969 6.12068 44.2665 7.96073C34.8451 8.5418 25.2775 8.90979 15.915 9.63613C10.0378 10.0913 2.24477 10.7401 1.22204 10.8757C0.687102 10.9531 0.453729 11.0695 0.37832 11.1082C-0.151901 11.3794 -0.0551557 11.6407 0.244125 11.8441C0.364308 11.9313 0.668216 12.1444 1.51186 12.1735C57.9321 14.1588 115.625 10.285 172.113 9.87824C270.075 9.18096 371.005 11.9507 468.189 17.9938C469.037 18.0423 469.862 17.8001 469.98 17.4418C470.121 17.0931 469.508 16.7542 468.66 16.7057C371.312 10.6529 270.216 7.87347 172.066 8.58044C119.421 8.95813 65.7369 12.3575 13.0188 11.1953C14.2301 11.0985 15.4178 11.0016 16.5018 10.9144C25.8267 10.1881 35.3541 9.8298 44.7379 9.24873C74.6046 7.40868 104.655 6.24654 134.739 5.13282C172.066 3.73826 211.02 2.53737 250.28 1.97567C264.325 2.06283 278.322 2.15003 292.32 2.25656C322.602 2.48899 353.025 3.16691 383.236 4.07725C392.332 4.3581 401.428 4.64861 410.524 4.9004C413.541 4.98757 421.317 5.23932 422.401 5.21995C423.745 5.20058 424.004 4.73577 424.027 4.65829C424.098 4.48397 424.051 4.24185 423.391 4.03847C423.32 4.00942 422.896 3.91251 421.953 3.8544C367.023 0.426098 308.368 -0.145196 250.327 0.677985C189.104 0.319659 127.646 0.164636 66.5783 0C65.704 0 64.99 0.290577 64.9829 0.648903C64.9782 1.00723 65.6827 1.29782 66.557 1.3075C110.775 1.42371 155.217 1.53986 199.614 1.72387Z"
                            fill="url(#paint0_linear_552_4801)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_552_4801"
                              x1={0}
                              y1={9}
                              x2={470}
                              y2={9}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#491EB8" stopOpacity={0} />
                              <stop offset={1} stopColor="#DA2A51" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="tp-service-2__user">
                        <span
                          data-purecounter-duration={0}
                          data-purecounter-end={35}
                          className="purecounter"
                        >
                          5
                        </span>
                        <p>Active Users</p>
                      </div>
                      <div className="tp-service-2__user">
                        <span>
                          20<i>+</i>
                        </span>
                        <p>Trusted Companies</p>
                      </div>
                      <div className="tp-service-2__user">
                        <span>
                          1<i>k</i>
                        </span>
                        <p>Customer care</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-60">
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-service-2__item-wrapper p-relative">
                      <div className="tp-service-2__item d-flex justify-content-between flex-column">
                        <div className="tp-service-2__icon">
                          <img
                            src={finance}
                            style={{ height: '50px', width: '50px' }}
                            alt=""
                          />
                        </div>
                        <div className="tp-service-2__text">
                          <h4 className="tp-service-2__title-sm">
                            <a href="service-details.html">Finance</a>
                          </h4>
                          <a className="tp-service-2__link" href="/finance">
                            Explore
                            <i className="far fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-service-2__bg-shape" />
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".6s"
                  >
                    <div className="tp-service-2__item-wrapper p-relative">
                      <div className="tp-service-2__item d-flex justify-content-between flex-column">
                        <div className="tp-service-2__icon">
                          <img
                            src={insurance}
                            style={{ height: '50px', width: '50px' }}
                            alt=""
                          />
                        </div>
                        <div className="tp-service-2__text">
                          <h4 className="tp-service-2__title-sm">
                            <a href="service-details.html">Insurance</a>
                          </h4>
                          <a className="tp-service-2__link" href="/insurance">
                            Explore
                            <i className="far fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-service-2__bg-shape tp-service-2__color-2" />
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".8s"
                  >
                    <div className="tp-service-2__item-wrapper p-relative">
                      <div className="tp-service-2__item d-flex justify-content-between flex-column">
                        <div className="tp-service-2__icon">
                          <img
                            src={legalities}
                            style={{ height: '50px', width: '50px' }}
                            alt=""
                          />
                        </div>
                        <div className="tp-service-2__text">
                          <h4 className="tp-service-2__title-sm">
                            <a href="service-details.html">Legalities</a>
                          </h4>
                          <a className="tp-service-2__link" href="/legalities">
                            Explore
                            <i className="far fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-service-2__bg-shape tp-service-2__color-3" />
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <div className="tp-service-2__item-wrapper p-relative">
                      <div className="tp-service-2__item  d-flex justify-content-between flex-column">
                        <div className="tp-service-2__icon">
                          <img
                            src={collaborations}
                            style={{ height: '50px', width: '50px' }}
                            alt=""
                          />
                        </div>
                        <div className="tp-service-2__text">
                          <h4 className="tp-service-2__title-sm">
                            <a href="service-details.html">Collaboration</a>
                          </h4>
                          <a
                            className="tp-service-2__link"
                            href="/collaborations"
                          >
                            Explore
                            <i className="far fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="tp-service-2__bg-shape tp-service-2__color-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-service-area-end */}
            {/* tp-faq-area-start */}
            <Faq />
            {/* tp-faq-area-end */}
            {/* tp-cta-area-start */}
            <div className="tp-cta-area p-relative">
              <div className="tp-cta-grey-bg grey-bg-2" />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="tp-cta-bg"
                      style={{ background: `url(${ctabg})` }}
                    >
                      <div className="tp-cta-content text-center">
                        <h3 className="tp-section-title-lg text-white">
                          Try our service now!
                        </h3>
                        <p>
                          Eyerything you need to accept cord payments and grow
                          your business <br />
                          anywhere on the planet.
                        </p>
                        <a className="tp-btn-green" href="/services">
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
        </div>
      </div>

      <Footer />
      {/* JS here */}
    </div>
  )
}

export default Home
