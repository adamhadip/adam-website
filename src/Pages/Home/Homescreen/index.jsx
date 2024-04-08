import HeroSection from "../HeroSection";
import Myskills from "../skill";
import Experience from "../experience";
import MyProjects from "../projects";
import AboutMe from "../Aboutme";
import ContactMe from "../contactme";
import Footer from "../footer";

export default function Home() {
    return (
    <>
        <HeroSection />
        <Myskills/>
        <Experience/>
        <AboutMe/>
        <MyProjects/>
        <Footer/>
    </>
    );
}