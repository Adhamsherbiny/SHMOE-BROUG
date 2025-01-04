"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import "@/app/styles/homepage.scss";
import { gsap } from "gsap";
export default function FirstSectionHomepage() {
  const time = gsap.timeline();
  useEffect(() => {
    time.to(".pic", {
      opacity: 1,
      duration: 0.5,
    });

    time.to(".text", {
      opacity: 1,
      duration: 1,
    });
  });
  return (
    <div className="first-section" id="Home">
      <div className="container">
        <div className="text">
          <div className="head">
            <h2>Discover Our Services With Us</h2>
            <p>
              At SHMOE & BROUG, we offer a wide range of project management and
              support services designed to help you achieve your goals
              efficiently and effectively. Our team of experts brings years of
              experience, cutting-edge tools, and a commitment to excellence to
              every project we undertake.
            </p>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                window.location.href = "#About";
              }}
            >
              Read More
            </button>
            <button
              className="active-btn"
              onClick={() => {
                window.location.href = "#Services";
              }}
            >
              Browse Our Services
            </button>
          </div>
          <div className="analysis">
            <div className="small-widget">
              <h2>200K+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="small-widget">
              <h2>10K+</h2>
              <p>Properties For Clients</p>
            </div>
            <div className="small-widget">
              <h2>16+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="pic">
          <img className="image" src="/pic 2.webp" alt="homepage Image" />
        </div>
      </div>
    </div>
  );
}
