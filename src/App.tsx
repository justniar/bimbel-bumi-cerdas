import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Program from "./components/Program";
import Prestasi from "./components/Prestasi";
import Pengajar from "./components/Pengajar";
import Profil from "./components/Profil";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <div className="bg-[url('/bg.svg')] dark:bg-[url('/bg_dark.svg')] bg-cover">
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to avoid overlap with fixed navbar */}
        <Hero id="home" />
        <Program id="program" />
        <Profil id="profil" />
        <Prestasi id="prestasi" />
        <Pengajar id="pengajar" />
        <Testimoni id="testimoni" />
        <Footer id="tentang" />
      </main>
    </div>
  );
}

export default App;
