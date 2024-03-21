import React from 'react'
import logo from '../img/busicon/logo.png'
import downlogo from '../img/busicon/down-logo.png'

const Header = () => {
  return (
    <header className="tp-header-height">
      {/* tp-header-area-start */}
      <div
        id="header-sticky"
        className="tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-6"
      >
        <div className="container-fluid g-0">
          <div className="row g-0 align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="tp-header-2__logo">
                <a className="white-logo" href="/">
                  <img src={logo} alt="" height={75} />
                </a>
                <a className="black-logo" href="/">
                  <img
                    src={downlogo}
                    alt=""
                    height={75}
                    style={{ marginBottom: '20px' }}
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 d-none d-lg-block">
              <div className="tp-header-2__main-menu text-center">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
                      <ul className="submenu">
                        <li>
                          <a href="/about">Who we are</a>
                        </li>
                        <li>
                          <a href="/partners">Priority Lenders</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                      <ul className="submenu">
                        <li>
                          <a href="/finance">Finance</a>
                        </li>
                        <li>
                          <a href="/insurance">Insurance</a>
                        </li>
                        <li>
                          <a href="/legalities">Legalities</a>
                        </li>
                        <li>
                          <a href="collaborations">Collaboration</a>
                        </li>
                        <li>
                          <a href="/business">Business Management</a>
                        </li>
                        <li>
                          <a href="/services">All services</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/careers">Careers</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-header-area-end */}
    </header>
  )
}

export default Header
