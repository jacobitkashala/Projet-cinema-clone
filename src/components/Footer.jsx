import React from "react";
import "@fortawesome/fontawesome-free";
import "./StyleFooter.css";

export default function Footer() {
  return (
    <div className="contenairefooter">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      className="form-control me-2"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <input type="button" value="Subscribe" className="btn  btn--color mb-4"/>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4 link-reseaux">
            <a
              className="btn  btn-floating m-1"
              href="#!"
            >
              <i class="fab fa-facebook fa-4x"></i>
            </a>
            <a
              className="btn  btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter fa-4x"></i>
            </a>
            <a
              className="btn  btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google fa-4x"></i>
            </a>
            <a
              className="btn  btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in fa-4x"></i>
            </a>
            <a
              className="btn  btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github fa-4x"></i>
            </a>
          </section>
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
        </div>
        <div
          className="text-center p-3  present">
          © 2020 Copyright:
          <a className="text-white" href="#">
            JacobitKashala.com
          </a>
        </div>
      </footer>
    </div>
  );
}
