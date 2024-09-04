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
    <div className="w-[420px] md:w-full bg-[url('/bg.svg')] dark:bg-[url('/bg_dark.svg')] bg-cover">
      <Navbar />
      <main className="pt-20">
        <Hero/>
        <Program/>
        <Profil/>
        <Prestasi/>
        <Pengajar/>
        <Testimoni/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
