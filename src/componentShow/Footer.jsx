import React from "react";
//import { IoCallSharp } from "react-icons/fa";
//import { FaBeer } from "react-icons/fa";
import "@fortawesome/fontawesome-free";
//<IoCallSharp/> Telephone:

export default function footer() {
  return (
    <div>
      <hr className="mt-5" style={{ borderTop: " 2px solide #5a606b" }}></hr>
      <div className="row mt-3">
        <div className="col-md-7 col-sm-6" style={{ color: "#5a606b" }}>
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis itaque quae harum dignissimos blanditiis temporibus
            culpa repudiandae iure, eum laudantium vero sunt optio, voluptatibus
            inventore sapiente at voluptas dolorum molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            vitae id amet accusantium unde expedita quisquam veritatis delectus
            ullam dolorum tempore nisi repellendus porro ipsum? Error nulla
            quisquam temporibus pariatur.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/" style={{ color: "#f4c10f" }}>
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#f4c10f" }}>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-5" style={{ color: "#5a606b" }}>
          <i className="fa fa-map-market-alt"></i>
          <h3>KEEP TOUCH</h3>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong>
                  <i className="fa fa-map-market-alt"></i>Address:Kinshasa
                </strong>
              </p>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong></strong>
              </p>
              <i class="svg-inline--fa fa-facebook-f fa-w-10"></i>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li>
              <p>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone-alt"
                  class="svg-inline--fa fa-phone-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="30px"
                >
                  <path
                    fill="#f4c10f"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
                <strong> :+453 554</strong>
              </p>
              <p>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  class="svg-inline--fa fa-facebook-f fa-w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="30px"
                >
                  <path
                    fill="#f4c10f"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
                <strong> :JacobitKashala</strong>
              </p>
              <p>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github-square"
                  class="svg-inline--fa fa-github-square fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="40px"
                >
                  <path
                    fill="#f4c10f"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                  ></path>
                </svg>
                <strong> :JacobitKashala</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
