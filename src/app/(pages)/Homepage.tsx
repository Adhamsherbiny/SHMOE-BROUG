import React from "react";
import FirstSectionHomepage from "../components/homepage/FirstSectionHomepage";
import SecondSectionHomepage from "../components/homepage/SecondSectionHomepage";
import ThirdSectionHomepage from "../components/homepage/ThirdSectionHomepage";

export default function Homepage() {
  return (
    <div>
      <FirstSectionHomepage />
      <SecondSectionHomepage />
      <ThirdSectionHomepage />
    </div>
  );
}
