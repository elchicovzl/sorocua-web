import HeroCarousel from "@/components/sections/HeroCarousel";
import Destinations from "@/components/sections/Destinations";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

export default function HomePage() {
  return (
    <>
      {/* Hero + Search */}
      <HeroCarousel />

      {/* Destinations with forest parallax */}
      <Destinations />

      {/* Testimonials + FAQ with desert parallax */}
      <ParallaxBackground
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAMXVGtH-dQcaThHd7b_AXNIeB62TGpQQW7bFggjnvKpEkhXRL_63qE9aYG1NVPih6uU6MetIbKVI1BEoRkAwyMfqhhz0qzx69PveyEWgUVqLRsE8MuA50ZaKwZnnnZt2p2M9CRUXwRWcix9IFBAycTMbC1LNF3DW-pO9xCJa_c0x0pHF7Ik2bpRsejW-0e93g46kGvbSK5zzeI4oTJtZU_KSBfQ6fbjqY5kOaJV1Q53XmW0EZ8W46J0z3VHXwGiScMG3xlfIaXY"
        overlayClassName="bg-theme-desert/90"
        topGradient="bg-gradient-to-b from-theme-desert to-transparent"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
          <FAQ />
        </div>
      </ParallaxBackground>
    </>
  );
}
