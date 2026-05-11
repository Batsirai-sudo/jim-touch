import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

import Hero from "@/app/sections/hero";
import About from "@/app/sections/about";
import Services from "@/app/sections/services";
import Projects from "@/app/sections/projects";
import Contact from "@/app/sections/contact";

export const metadata: Metadata = {
  title: "JIM TOUCH — Coming Soon",
  description: "We're building something powerful.",
};

export default function Home() {
  return (
      <>
          <Header />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
      </>
  );
}
