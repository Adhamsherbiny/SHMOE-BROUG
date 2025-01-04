import Homepage from "./(pages)/Homepage";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
export default function Home() {
  return (
    <div className="page-layout">
      <Nav />
      <div className="page">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
