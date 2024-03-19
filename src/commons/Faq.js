import React from 'react'

// Importing faq image
import faq from '../img/busicon/faq.png'

const Faq = () => {
  return (
    <div className="tp-faq-area pt-20 pb-120 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-faq-left-wrapper p-relative">
              <div className="tp-faq-section-box pb-20">
                <h3 className="tp-section-title-lg">
                  Frequently <br /> Asked Questions
                </h3>
                <p>
                  Check out the frequently asked questions and if you have a new
                  query then send us one.
                </p>
              </div>
              <div className="tp-faq-btn">
                <a className="tp-btn-green" href="/contact">
                  Write a query
                </a>
              </div>
              <div
                className="tp-faq-img"
                data-parallax='{"x": -50, "smoothness": 30}'
              >
                <img src={faq} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-custom-accordion">
              <div className="accordion" id="accordionExample">
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{ lineHeight: '1.3' }}
                    >
                      Why should I choose Busicon?
                      <span className="accordion-btn" />
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Choose us for cutting-edge technological solutions
                      addressing global financial issues. We're a one-stop shop
                      for customer and financial institution needs, ensuring
                      speed, safety, and legality through dedication,
                      perfection, and trust.
                    </div>
                  </div>
                </div>
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      style={{ lineHeight: '1.3' }}
                    >
                      Do you believe you're ineligible for a loan after being
                      declined by one or two banks?
                      <span className="accordion-btn" />
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Difficulty in effectively communicating needs and careless
                      actions can lead to rejections. Unconventional factors may
                      also play a role. We assist you in navigating the process
                      successfully.
                    </div>
                  </div>
                </div>
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style={{ lineHeight: '1.3' }}
                    >
                      Why is there a need for diversified services to obtain
                      financing?
                      <span className="accordion-btn" />
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Currently, customers must navigate various professionals
                      for documentation, making the process time-consuming. We
                      provide a one-stop solution, streamlining registration,
                      legal requirements, and more for efficient processing.
                    </div>
                  </div>
                </div>
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      style={{ lineHeight: '1.3' }}
                    >
                      Why are people unaware of government benefit schemes?
                      <span className="accordion-btn" />
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Despite numerous programs launched by the Indian
                      government, many remain unaware. This ignorance leads to
                      rejection by banks. We aid citizens in accessing and
                      maximizing these benefits, ensuring eligibility criteria
                      are met.
                    </div>
                  </div>
                </div>
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                      style={{ lineHeight: '1.3' }}
                    >
                      Is there any support available for customers facing
                      financial fraud?
                      <span className="accordion-btn" />
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      With the rapid growth of financial lending, client scams
                      have increased. Many face challenges repaying debts due to
                      lack of knowledge. We ensure safety through our technology
                      solutions, protecting clients from fraud and legal issues.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
