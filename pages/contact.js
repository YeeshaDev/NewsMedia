import React from 'react'

function contact() {
  return (
  <>
    <div className="contact-wrap mt-5 px-2 px-lg-1">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-sm-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Name *"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="email"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        aria-describedby="Subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        className="form-control textarea"
                        placeholder="Message"
                        id="message"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <a href="#" className="btn btn-lg btn-dark font-weight-bold"
                        >Submit</a>
                      
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 mb-2 mb-lg-2">
              <div className="contact-right-padding">
                <div className="row">
                  <div className="col-sm-12  mb-2 mb-lg-2">
                    <h1>GET IN TOUCH</h1>
                    <p className="mb-4 fs-15">
                      This text can be added in the category Description field
                      in dashboard
                    </p>
                    <p className="mb-0 font-weight-bold fs-14">
                      ADDRESS
                    </p>
                    <p className="mb-4 font-weight-medium fs-14">
                      329 South Street Court - Albany, NY 83741
                    </p>
                    <p className="mb-0 font-weight-bold fs-14">
                      PHONE
                    </p>
                    <p className="mb-4 font-weight-medium fs-14">
                      (123) 456 - 7890
                    </p>
                    <p className="mb-0 font-weight-bold fs-14">
                      EMAIL
                    </p>
                    <p className="mb-4 font-weight-medium fs-14">
                      info@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
  )
}

export default contact
