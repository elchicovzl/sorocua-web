import { destinations } from "@/data/destinations";
import SectionHeading from "@/components/ui/SectionHeading";
import PolaroidCard from "@/components/ui/PolaroidCard";
import Icon from "@/components/ui/Icon";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function Destinations() {
  return (
    <ParallaxBackground
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBqFxcDElyctIvnCsUJ50ukwwvK7xkup8UP7LUXr94bH9F_0s637nel8xaglCzH4zT1XzrIJPyLa9xqbfSyBOqYzBZMFNKjT-IjFItYmy7WnpD-WKeqFjtdp9VD5tYAUfsOnwXuxMIV3yGz-YFL6eC-76zNlIBINMRiFKrfwgZUiPWu0CJn6hoYC7mVT-zeccUZqW90aDkt3IF2tLwSk96Medk6wbod4e7P0_beamvGgCaEk8F9RxEduDEbsGM6ElkdoLpSCSGovBw"
      overlayClassName="bg-theme-forest/90"
      topGradient="bg-gradient-to-b from-theme-forest to-transparent"
      bottomGradient="bg-gradient-to-t from-theme-desert to-transparent"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <SectionHeading
              label="Explora lo Salvaje"
              title="Destinos Populares"
              description="Desde cumbres neblinosas hasta playas cristalinas. Encuentra tu próxima gran aventura."
            />
            <a
              href="#"
              className="flex items-center gap-2 text-slate-900 font-bold hover:gap-4 transition-all group bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg border border-slate-100 shrink-0"
            >
              Ver todos los destinos
              <Icon name="arrow_forward_ios" className="text-sm" />
            </a>
          </div>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 pb-8">
          {destinations.map((destination) => (
            <StaggerItem key={destination.id}>
              <PolaroidCard destination={destination} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </ParallaxBackground>
  );
}
