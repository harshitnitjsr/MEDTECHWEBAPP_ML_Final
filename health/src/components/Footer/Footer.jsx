import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Footer() {
  return (
    <footer className="bg-white text-dark">
      <div
        className="container py-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="row justify-content-between">
          <div className="mb-4 mb-md-0">
            <Link to="/" className="d-flex align-items-center">
              <img
                src="src/components/Header/logo.jpeg"
                className="h-12 mr-3"
                alt="FlowBite Logo"
              />
              <span className="text-2xl font-semibold">NEURON</span>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <h2 className="mb-4 text-uppercase font-weight-bold">Resources</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-dark">
                  NEURON
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-dark">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h2 className="mb-4 text-uppercase font-weight-bold">Follow us</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-dark">
                  Github
                </Link>
              </li>
              <li>
                <Link to="/" className="text-decoration-none text-dark">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h2 className="mb-4 text-uppercase font-weight-bold">Legal</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-decoration-none text-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-decoration-none text-dark">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <div
        className="row justify-content-between align-items-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="mt-4" s>
          <a href="#" className="text-dark mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-dark mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-dark mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-dark mx-2">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <span className="text-muted small" style={{ marginLeft: "500px" }}>
        © 2024 "
        <Link to="/" className="text-decoration-none">
          NEURON™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
