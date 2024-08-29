import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Watch from "./components/Watch";
import Footer from "./components/Footer";
import Program from "./components/Program";
import Prestasi from "./components/Prestasi";
import Pengajar from "./components/Pengajar";
import Profil from "./components/Profil";

function App() {
  return (
    <div className="bg-[url('/bg.svg')] dark:bg-[url('/bg_dark.svg')] bg-cover">
      <div className="container m-auto">
        <Navbar />
        <Hero />
        <Program />
        <Profil/>
        <Prestasi />
        <Pengajar />
        <Watch />
        <Footer />
      </div>
    </div>
  );
}

export default App;