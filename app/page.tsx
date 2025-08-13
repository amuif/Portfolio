"use client";
import { DockNav } from "@/components/DockNav";
import Expreince from "@/components/Expreince";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Tools from "@/components/Skills";
import { useIsMobile } from "@/hooks/isMobile";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <NavBar />
      <div>
        {!isMobile && <DockNav />}
        <Hero />
        <Projects />
        <Expreince />
        <Tools />
        <Footer />
      </div>
    </>
  );
}
