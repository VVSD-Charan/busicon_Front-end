import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Admin = () => {
  const [rolesData, setRolesData] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [deleteStatus, setDeleteStatus] = useState('')

  useEffect(() => {
    async function getJobs() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/alljobs`
        )
        const data = await response.data

        setRolesData(data)
      } catch (error) {
        console.log(error)
      }
    }

    getJobs()
  }, [])

  async function deleteJob(jobId) {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/deletejob/${jobId}`)
      setDeleteStatus('Job deleted successfully')
    } catch (error) {
      setDeleteStatus('Failed to delete job')
    }
  }

  async function handleLogin(e) {
    e.preventDefault()

    const password = e.target.adminPassword.value

    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setLoggedIn(true)
    } else {
      alert('Password is wrong!')
    }
  }

  return (
    <div className="job-area pt-120 pb-120">
      {deleteStatus && (
        <div className="popup">
          <span className="popuptext">{deleteStatus}</span>
        </div>
      )}
      {loggedIn ? (
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="job-section-box text-center mb-40">
                <h3 className="tp-section-title">Currently open positions</h3>
                <p>Click on delete in a particular job to delete it.</p>
              </div>
            </div>
            {rolesData.map((item, index) => (
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
                      <form
                        onSubmit={() => {
                          deleteJob(item.jobId)
                        }}
                      >
                        <button
                          type="submit"
                          className="tp-btn-inner tp-btn-hover alt-color-orange"
                        >
                          <span>Delete</span> <b />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="row gx-0">
          <div className="col-xl-7 col-lg-6">
            <div className="contact-form-right-warp">
              <div className="postbox__comment-form">
                <p style={{ textAlign: 'center', fontSize: '30px' }}>
                  Log In to Add a new job
                </p>
                <form className="box" onSubmit={handleLogin}>
                  <div className="row gx-20">
                    <div className="col-12">
                      <div className="postbox__comment-input mb-30">
                        <input
                          type="password"
                          name="adminPassword"
                          className="inputText"
                          required
                        />
                        <span className="floating-label">Admin password</span>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="postbox__btn-box">
                        <button type="submit" className="submit-btn w-100">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
