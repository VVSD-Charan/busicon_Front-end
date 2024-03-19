import React from 'react'
import Header from './commons/Header'
import Footer from './commons/Footer'

import unionbank from './img/payment-logo/unionbank.png'
import sbi from './img/payment-logo/sbi.png'
import axis from './img/payment-logo/AXISBANK.BO.png'
import icici from './img/payment-logo/icici.png'
import hdfc from './img/payment-logo/hdfc.png'
import kotak from './img/payment-logo/kotak.png'
import canara from './img/payment-logo/canara bank.png'
import centralbank from './img/payment-logo/centralbank.png'
import fino from './img/payment-logo/fino.png'
import gayathri from './img/payment-logo/gayathri.png'
import bob from './img/payment-logo/Bank-of-Baroda.png'
import bom from './img/payment-logo/bank of maharashtra.png'
import uco from './img/payment-logo/uco.png'
import idbi from './img/payment-logo/idbi.png'
import punjab from './img/payment-logo/punjab national.png'
import rbl from './img/payment-logo/rbl.png'
import { bankdata } from './Data'

import bgimage from './img/hero/hero-bg-2.png'
import ctabg from './img/cta/cta-bg.jpg'

const Partners = () => {
  return (
    <div>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="breadcrumb__area breadcrumb-height-2 breadcrumb-overlay p-relative fix"
              style={{ background: `url(${bgimage})` }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="breadcrumb__content z-index-3 text-center">
                      <h3 className="breadcrumb__title tp-char-animation text-black">
                        Our Priority Lenders
                      </h3>
                      <div
                        className="breadcrumb__text wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".6s"
                      >
                        <p style={{ color: 'black' }}>
                          We have collaborations with multiple banks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-area pt-100 pb-90">
              <div className="container">
                <div className="row grid">
                  {bankdata.map((bank, index) => {
                    return (
                      <div
                        key={index}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat4 cat3 cat5"
                      >
                        <div className="inner-project-item mb-30">
                          <div
                            className="inner-project-img fix p-relative"
                            style={{ height: '200px', textAlign: 'center' }}
                          >
                            <img
                              src={require(`./img/payment-logo/${bank.img}.png`)}
                              alt=""
                              style={{
                                marginTop: '25px',
                                height: '130px',
                                width: '160px',
                              }}
                            />
                          </div>
                          <div className="inner-project-content">
                            <h4 className="inner-project-title">{bank.name}</h4>
                            <p>
                              Quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo.
                            </p>
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
                        <p>
                          Eyerything you need to accept cord payments and grow
                          your business <br />
                          anywhere on the planet.
                        </p>
                        <a
                          className="tp-btn-inner white-bg text-black"
                          href="/services"
                        >
                          Get Started Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
export default Partners
