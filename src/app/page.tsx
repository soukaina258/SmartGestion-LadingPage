import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
import { Industries } from "@/components/sections/industries";
import { About } from "@/components/sections/about";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div id="top" className="relative">
      <Hero />
      <About />
      <TrustBar />
      <Features />
      <Industries />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
