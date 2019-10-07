import React, { Suspense } from "react";
import Joi from "joi-browser";
import serverData from "../../data/carousel-data.js";
import LandingCarousel from "../template/util/ServicesCarousel";
import Form from "../form/Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./signup.css";
import "../form/form.css";

class Signup extends Form {
  constructor(props) {
    super(props);
    this.state = {
      landingCarousel: [],
      data: {
        firstname: "Joshua",
        lastname: "Bakare",
        email: "josh.baakery@gmail.com",
        password: "international1"
      },
      errors: {}
    };
  }

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    firstname: Joi.string()
      .required()
      .min(3)
      .max(20),
    lastname: Joi.string()
      .required()
      .min(3)
      .max(20),
    password: Joi.string()
      .required()
      .label("Password")
  };

  getDatas() {
    this.setState({ landingCarousel: serverData.listService });
  }
  componentDidMount() {
    this.getDatas();
  }

  doSubmit = async () => {};
  render() {
    const { landingCarousel } = this.state;

    return (
      <React.Fragment>
        <div id="" className="container-fluid">
          <div className="row">
            <div className="col-md-5 closeDiv">
              <Suspense
                fallback={
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
              >
                <LandingCarousel data={landingCarousel} />
              </Suspense>
            </div>
            <div className="col-md-7">
              <div className="col-md-10 offset-md-1 pt-5">
                <h3>Create your free account</h3>
                <div className="pt-3">
                  <span className="">Already Registered?</span>
                  <span className="signinBackground ml-1">Signin</span>
                </div>
                <div className="pt-4">
                  <div className="card shadow-sm  addBorder">
                    <div className="col-md-10 offset-md-1 ">
                      <form onSubmit={this.handleSubmit} className="pt-4 ">
                        <div className="row">
                          <div className="col-md-6">
                            {this.renderInput(
                              "firstname",
                              "Fist Name",
                              "text",
                              true,
                              "removeBorder",
                              "/images/user.svg"
                            )}
                          </div>
                          <div className="col-md-6">
                            {this.renderInput(
                              "lastname",
                              "Last Name",
                              "text",
                              false,
                              "removeBorder",
                              "/images/user.svg"
                            )}
                          </div>
                        </div>
                        {this.renderInput(
                          "email",
                          "Email",
                          "email",
                          false,
                          "removeBorder",
                          "/images/at.svg"
                        )}
                        {this.renderInput(
                          "password",
                          "Password",
                          false,
                          "password",
                          "removeBorder",
                          "/images/eye.svg"
                        )}
                        {this.renderButton(
                          "Continue",
                          `btn col-md-4 btn-block btn-lg btn-success  my-3 float-right`
                        )}
                        {/* {this.renderButton(
                        "Continue",
                        ` btn btn-block btn-lg btn-primary btn-rounded my-3`,
                        "submit"
                      )} */}
                      </form>
                    </div>
                  </div>
                </div>

                <div class=" addCss ">
                  <div class="row">
                    <ul>
                      <p id="copyrightText">
                        By signing up, you agree to our Terms and Privacy Policy
                      </p>
                    </ul>
                    <ul id="footerMobile" class="ml-auto">
                      <div class="copyText">
                        © 2019 Tinylabs. All right reserved
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
