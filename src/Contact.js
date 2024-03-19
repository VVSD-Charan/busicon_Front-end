import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Header from './commons/Header'
import Footer from './commons/Footer'

// Importing breadcrumb images
import breadcrumbshape1 from './img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from './img/breadcrumb/breadcrumb-shape-2.png'

// Importing contact images
import contactbanner from './img/contact/contact-banner.jpg'
import ctabg from './img/cta/cta-bg.jpg'

import { MdMail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {
  const form = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    const service = process.env.REACT_APP_SERVICE_ID
    const template = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          e.target.reset()
          alert('Message sent successfully')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <div>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* tp-breadcrumb-area-start */}
            <div className="about-banner-area p-relative">
              <div className="about-shape-1 z-index-3">
                <img src={breadcrumbshape1} alt="" />
              </div>
              <div className="about-banner p-relative z-index fix">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="about-banner-content">
                        <h4
                          className="about-banner-title"
                          data-parallax='{"y": 1000, "smoothness": 10}'
                        >
                          <span>Get In</span> <br />
                          <span>Touch</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-img-area mb-100 z-index-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="about-img about-img-height p-relative"
                      style={{
                        background: `url(${contactbanner})`,
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="about-img-content">
                        <h4
                          className="about-img-title"
                          data-parallax='{"y": 1000, "smoothness": 10}'
                        >
                          <span>Get In</span> <br />
                          <span>Touch</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-area pb-120">
              <div className="container">
                <div className="row gx-0">
                  <div className="col-xl-5 col-lg-6">
                    <div className="contact-form-left">
                      <div className="contact-form-section-box pb-80">
                        <h5 className="inner-section-subtitle">CONTACT US</h5>
                        <h4 className="tp-section-title pb-10">
                          We'd love to <br /> hear From{' '}
                          <span>
                            <svg
                              width={44}
                              height={44}
                              viewBox="0 0 44 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <rect
                                width={44}
                                height={44}
                                fill="url(#pattern0)"
                              />
                              <defs>
                                <pattern
                                  id="pattern0"
                                  patternContentUnits="objectBoundingBox"
                                  width={1}
                                  height={1}
                                >
                                  <use
                                    xlinkHref="#image0_2106_35"
                                    transform="translate(-0.425532 -0.170213) scale(0.0212766)"
                                  />
                                </pattern>
                                <image
                                  id="image0_2106_35"
                                  width={83}
                                  height={66}
                                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABCCAYAAAArOOo+AAADcklEQVR4nO2bP0wTURzHP5RqQhyMtyJNTCcTnKCLnVhs4sRmHRk10U0WFhcXiQskuDPhxirRQZMagn8WB1gatTqQiMV/qRBM6nB99oDe9Y7+3mvf8T5j03u/yyfv97vvK8dQs9ls4hAh0+8bSBNOpiBOpiBOpiBOpiBOpiBOpiBOpiCnWma1AmvzUK/JrJeVWcYeqhWovoKnDw9/fu1e72ufCplhAhUXLsrUSa3MbgKD5IsyNVMlM4nAIF5Opr71Mk8qUFEoy92LlTJ7FRgkf7X3NRRDtvyeKSkwyKOvcmsN9M6UEuiNQf3z8c8lWxwGUKbkDvTGoHAzfC3JFocBkamjhfNFKC/Ag4no70jSN5m6ZiBAadY/0SxNR39PKhIpjMrUKRD8ti4v+jtubd6vF4b0vAQDMnULVOSLcHu1XbNbPel5CZqiUb0Gb57oF6hQba1qR81JhWQkUmjZmY+nO0cRaYJtrVi52/06HS0OmmTeWm239+sVHRUOt7Wi25z8f62GFgcDJ6B6TV5ssK0V1Ur3p7di7q38kxwMHyd7FduprdW6ceakQse8BBg6OPjbzGaH9aweQVKxndpasTQdr73Bn5flxfj3mYTMyxfv9KzcBS/nH/XKi37blRfCHwyl2XCRceekQte8BBg+N3Lp/tRUgTNn+3eyHDkPo1dg/LovdHTc/2zvB8wsh0uuVmDlTrJaM8u9328Y2efPNtjc/MDE5GV9VRLg5dq7Nop6Lf4DR6ErEiky29vfWF9/r7eKBuLkyaPobHFo/d18a+sjjcae3kqCJJ2TCulfiY6SAah92rZGZpxzdxg6smWQDMDOznd2d3/qrSRE0jmp0D0voSXzT2OP/f0D/dUEKM2e7Drd8xJaMqvVL/z+1dBfTYDJGye7rls6kMC6F7e8XPKWNdHiYKFMSP6SlYkWB0tlerlkMUd3JFJYKROglGB36o5ECmtl5ovxdpypeQkWywQoxHiym5qXYLnMWDvTQCRSWC3Ty0WHeJMtDpbLhOgQb7LFIQUyo0K8qUiksF4mhId4U5FIkQqZnUK86XkJKZEJx0O86XkJKZJ5NMSbjESK1MiEdojvR4tDymTmi61Xr/skcyBew5bCy8Fcf96pAFK2M/uNkymINf9UZQNuZwriZAriZAriZAriZAriZAriZAriZAryD4xxER8vOFEDAAAAAElFTkSuQmCC"
                                />
                              </defs>
                            </svg>
                          </span>
                          <br />
                          you.
                        </h4>
                        <p>
                          While we're good with smoke signals, there <br /> are
                          easier ways to get in touch.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="contact-form-right-warp">
                      <div className="postbox__comment-form">
                        <form
                          ref={form}
                          onSubmit={handleSubmit}
                          className="box"
                        >
                          <div className="row gx-20">
                            <div className="col-12">
                              <div className="postbox__comment-input mb-30">
                                <input
                                  type="text"
                                  name="user_name"
                                  className="inputText"
                                  required
                                />
                                <span className="floating-label">
                                  Full Name
                                </span>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="postbox__comment-input mb-30">
                                <input
                                  type="email"
                                  name="user_email"
                                  className="inputText"
                                  required
                                />
                                <span className="floating-label">
                                  Your Email
                                </span>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="postbox__comment-input mb-35">
                                <input
                                  type="text"
                                  name="user_contact"
                                  className="inputText"
                                  required
                                />
                                <span className="floating-label">
                                  Phone Number
                                </span>
                              </div>
                            </div>
                            <div className="col-xxl-12">
                              <div className="postbox__comment-input mb-30">
                                <textarea
                                  name="user_message"
                                  className="textareaText"
                                  required
                                />
                                <span className="floating-label-2">
                                  Message...
                                </span>
                              </div>
                            </div>
                            <div className="col-xxl-12">
                              <div className="postbox__btn-box">
                                <button
                                  type="submit"
                                  className="submit-btn w-100"
                                >
                                  Send your Request
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-inner-area pb-130">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-inner-title-sm-wrap text-center mb-50">
                      <h4 className="contact-inner-title-sm">
                        Connect with us!
                      </h4>
                      <p>We will reply back in 1 working day</p>
                    </div>
                  </div>
                </div>
                <div className="contact-inner-wrapper">
                  <div className="row gx-0">
                    <div className="col-xl-4 col-lg-4">
                      <div className="contact-inner-item d-flex align-items-center justify-content-center">
                        <div className="contact-inner-img contact-img-1">
                          <img
                            src="assets/img/contact/contact-icon-sm-1.png"
                            alt=""
                          />
                        </div>
                        <div className="contact-inner-link">
                          <a href="mailto:ceo@busicon.co.in">
                            <MdMail style={{ fontSize: '23px' }} />{' '}
                            bcs@busicon.co.in
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <div className="contact-inner-item d-flex align-items-center justify-content-center">
                        <div className="contact-inner-img contact-img-2">
                          <img
                            src="assets/img/contact/contact-icon-sm-2.png"
                            alt=""
                          />
                        </div>
                        <div className="contact-inner-link">
                          <a href="tel:7658934523">
                            <FaPhoneAlt /> +91 7658934523
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <div className="contact-inner-item d-flex align-items-center justify-content-center">
                        <div className="contact-inner-img contact-img-3">
                          <img
                            src="assets/img/contact/contact-icon-sm-3.png"
                            alt=""
                          />
                        </div>
                        <div className="contact-inner-link">
                          <a
                            href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z"
                            target="_blank"
                          >
                            <FaLocationDot style={{ fontSize: '20px' }} />{' '}
                            Siddipet , Telangana , India
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
    </div>
  )
}

export default Contact
