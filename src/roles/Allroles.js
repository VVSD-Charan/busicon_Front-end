import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Allroles = () => {
  const [rolesData, setRolesData] = useState([])

  useEffect(() => {
    async function getJobs() {
      try {
        const response = await axios.get('http://localhost:3001/alljobs')
        const data = await response.data

        setRolesData(data)
      } catch (error) {
        console.log(error)
      }
    }

    getJobs()
  }, [])

  return (
    <div className="job-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="job-section-box text-center mb-40">
              <h3 className="tp-section-title">Open Positions</h3>
            </div>
          </div>
          {rolesData.map((item, index) => {
            return (
              <div className="job-post-box" key={index}>
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-4">
                    <div className="job-post-info d-flex justify-content-start align-items-center">
                      <div className="job-post-category">
                        <span>{item.jobTitle}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    <div className="job-post-wrapper d-flex align-items-center">
                      <div className="job-post-location d-flex align-items-center">
                        <svg
                          width={16}
                          height={18}
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                            stroke="#5F6168"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                            stroke="#5F6168"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span>{item.jobLocation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="job-post-apply-btn text-start text-md-end">
                      <a
                        className="tp-btn-inner tp-btn-hover alt-color-orange"
                        href={`/job/${item.jobId}`}
                      >
                        <span>Apply</span> <b />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Allroles
