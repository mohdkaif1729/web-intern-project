import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Section1 from "@/src/components/Section1";
import Section2 from "@/src/components/Section2";
import Section3 from "@/src/components/Section3";
import Section4 from "@/src/components/Section4";
import Section5 from "@/src/components/Section5";
import Section6 from "@/src/components/Section6";


export default function Home() {
  return (
    <div className="w-full m-auto font-poppins overflow-hidden">
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
}
