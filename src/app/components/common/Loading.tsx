"use client";
import "../../styles/loading.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export default function Loading() {
  useGSAP(() => {
    gsap.to(".logo", {
      opacity: 1,
      duration: 2,
    });
    gsap.to(".text", {
      delay: 1,
      opacity: 1,
      duration: 2,
    });
    gsap.to(".loading", {
      delay: 5,
      opacity: 0,
      duration: 2,
    });
  });
  return (
    <div className="loading">
      <div className="loader">
        <div className="logo">
          <h1>SHMOE & BROUG</h1>
        </div>
        <p className="text">Loading , Please wait a few moments</p>
      </div>
    </div>
  );
}
