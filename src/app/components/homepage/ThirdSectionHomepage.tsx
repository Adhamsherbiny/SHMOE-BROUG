"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../../app/styles/homepage.scss";

export default function ThirdSectionHomepage() {
  return (
    <div className="third-section" id="About">
      <div className="container">
        <div className="why">
          <h1>Why Choose Us?</h1>
          <p>
            Experienced Professionals: A team of certified experts with proven
            track records.
          </p>
          <p>
            Customized Solutions: Services tailored to your unique business
            needs.
          </p>
          <p>
            Transparent Processes: Clear communication and detailed progress
            tracking.
          </p>
          <p>
            Commitment to Excellence: We prioritize quality and client
            satisfaction.
          </p>
        </div>

        <div className="howdowework">
          <h1>How Do We Work?</h1>
          <p>
            Initial Consultation: We start by understanding your needs and
            project requirements in detail.
          </p>
          <p>
            Developing a Plan: We create a comprehensive strategic plan to meet
            your expectations.
          </p>
          <p>
            Efficient Execution: We work with flexibility and professionalism to
            deliver the desired results.
          </p>
          <p>
            Evaluation and Optimization: We measure performance and provide
            continuous improvements for sustainable success.
          </p>
        </div>
        <div className="where">
          <h1>Where We Serve</h1>
          <p>
            Are you looking for a reliable partner to manage your restaurant,
            real estate, or business in the Middle East? Our company offers a
            comprehensive suite of services designed to optimize your operations
            and drive growth. With a strong presence in Egypt, Saudi Arabia, and
            the UAE, we have the local knowledge and expertise to navigate the
            complexities of each market. From developing effective marketing
            strategies to implementing efficient financial systems, our team is
            committed to delivering tailored solutions that meet your specific
            needs. Whether you are a small business owner or a large
            corporation, we can help you achieve your goals.
          </p>
        </div>
        <div className="ready">
          <p>
            Ready to Elevate Your Projects? Let’s bring your vision to life.
            Contact us today to discuss your project needs and discover how we
            can help you achieve success.
          </p>
        </div>
      </div>
    </div>
  );
}
