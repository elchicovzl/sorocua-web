import { notFound } from "next/navigation";
import Image from "next/image";
import { destinationDetails } from "@/data/destination-details";
import Icon from "@/components/ui/Icon";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const destination = destinationDetails[id];

  if (!destination) return notFound();

  return (
    <div className="pt-24 pb-16 bg-paper-cream min-h-screen overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT: Main polaroid image */}
          <div className="lg:col-span-5 pt-4">
            <div className="lg:sticky lg:top-28">
              <div className="relative w-full max-w-sm sm:max-w-lg mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Tape */}
                <div className="tape-effect absolute -top-5 left-1/2 w-32 sm:w-40 h-8 sm:h-10 -translate-x-1/2 -rotate-1 z-20 opacity-90" />

                {/* Polaroid frame */}
                <div className="bg-white p-3 pb-10 sm:pb-12 shadow-polaroid hover:shadow-polaroid-hover transition-shadow">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={destination.heroImage}
                      alt={destination.heroImageAlt}
                      fill
                      className="object-cover brightness-105 contrast-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                  </div>
                  <div className="mt-3 sm:mt-4 flex justify-between items-baseline px-1 sm:px-2">
                    <p className="font-handwriting text-2xl sm:text-3xl text-slate-700 -rotate-1">
                      {destination.polaroidCaption}
                    </p>
                    <span className="text-xs text-slate-400 italic font-luxury">
                      Ago 2023
                    </span>
                  </div>
                </div>

                {/* Mini sticker - hidden on small mobile */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white p-1.5 sm:p-2 shadow-lg transform rotate-6 z-20 hidden sm:block">
                  <div className="w-full h-full border border-slate-100 flex items-center justify-center bg-slate-50">
                    <Icon
                      name="local_activity"
                      className="text-2xl sm:text-4xl text-primary/40"
                    />
                  </div>
                  <div className="tape-effect absolute -top-2 left-1/2 w-10 sm:w-12 h-5 sm:h-6 -translate-x-1/2 opacity-70" />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: Content */}
          <div className="lg:col-span-4 flex flex-col pt-4">
            {/* Title */}
            <div className="mb-8 sm:mb-10 relative">
              <div className="absolute -left-4 sm:-left-6 top-2 w-1 h-20 sm:h-24 bg-primary/30" />
              <h1 className="relative font-luxury text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight z-10">
                {destination.name}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-12 bg-slate-300" />
                <h2 className="font-handwriting text-3xl sm:text-4xl text-primary font-medium">
                  {destination.region}
                </h2>
              </div>
              <p className="mt-6 sm:mt-8 font-luxury text-base sm:text-lg leading-relaxed text-slate-600 first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                {destination.description}
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="relative bg-white p-4 sm:p-5 shadow-sm border border-slate-100 hover:border-primary/30 transition-all overflow-hidden">
                <div className="tape-effect absolute -top-3 left-1/2 w-16 h-6 -translate-x-1/2 rotate-1 z-10 opacity-60" />
                <div className="flex flex-col items-center text-center">
                  <Icon name="wb_sunny" className="text-2xl sm:text-3xl text-primary mb-2" />
                  <h3 className="font-luxury text-base sm:text-lg font-bold text-slate-900">
                    Clima
                  </h3>
                  <p className="font-handwriting text-2xl sm:text-3xl text-slate-500 mt-1">
                    {destination.climate.temp}
                  </p>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mt-1">
                    {destination.climate.type}
                  </span>
                </div>
              </div>
              <div className="relative bg-white p-4 sm:p-5 shadow-sm border border-slate-100 hover:border-primary/30 transition-all overflow-hidden">
                <div className="tape-effect absolute -top-3 left-1/2 w-16 h-6 -translate-x-1/2 -rotate-1 z-10 opacity-60" />
                <div className="flex flex-col items-center text-center">
                  <Icon
                    name="calendar_month"
                    className="text-2xl sm:text-3xl text-primary mb-2"
                  />
                  <h3 className="font-luxury text-base sm:text-lg font-bold text-slate-900">
                    Mejor época
                  </h3>
                  <p className="font-handwriting text-2xl sm:text-3xl text-slate-400 mt-1">
                    {destination.bestSeason.months}
                  </p>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mt-1">
                    {destination.bestSeason.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Experiences */}
            <div className="relative bg-white p-5 sm:p-8 shadow-sm border border-dashed border-slate-300 overflow-hidden">
              {/* Corner dots - hidden on mobile to prevent overflow */}
              <div className="absolute -top-3 -left-3 size-6 rounded-full bg-slate-200 border-4 border-white shadow-sm hidden sm:block" />
              <div className="absolute -top-3 -right-3 size-6 rounded-full bg-slate-200 border-4 border-white shadow-sm hidden sm:block" />
              <div className="absolute -bottom-3 -left-3 size-6 rounded-full bg-slate-200 border-4 border-white shadow-sm hidden sm:block" />
              <div className="absolute -bottom-3 -right-3 size-6 rounded-full bg-slate-200 border-4 border-white shadow-sm hidden sm:block" />

              <h3 className="font-handwriting text-3xl sm:text-4xl text-slate-900 mb-6 text-center transform -rotate-1">
                Experiencias Exclusivas
              </h3>

              <ul className="space-y-5 sm:space-y-6 relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-px border-l border-dashed border-slate-300" />
                {destination.experiences.map((exp) => (
                  <li
                    key={exp.title}
                    className="relative flex items-start gap-3 sm:gap-4 group pl-2"
                  >
                    <div className="relative z-10 rounded-full bg-white p-1 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform shrink-0">
                      <Icon
                        name={exp.icon}
                        className="text-primary text-xl sm:text-2xl"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-luxury font-bold text-slate-900 text-base sm:text-lg">
                        {exp.title}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        {exp.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Booking card */}
          <div className="lg:col-span-3 pt-4">
            <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
              {/* Price card */}
              <div className="relative bg-white p-5 sm:p-6 shadow-xl border border-slate-100 lg:rotate-1">
                <div className="tape-effect absolute -top-4 left-1/2 w-28 sm:w-32 h-7 sm:h-8 -translate-x-1/2 -rotate-2 opacity-80 z-20" />

                <div className="text-center border-b border-slate-100 pb-4 mb-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                    Precio por noche
                  </p>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <span className="font-luxury text-3xl sm:text-4xl font-bold">
                      ${destination.pricePerNight.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium self-start mt-2">
                      {destination.currency}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 p-2 border border-slate-100 text-center rounded-lg">
                      <span className="block text-xs text-slate-400 uppercase">
                        Check-in
                      </span>
                      <span className="font-luxury font-bold text-slate-900 text-sm sm:text-base">
                        15 Nov
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2 border border-slate-100 text-center rounded-lg">
                      <span className="block text-xs text-slate-400 uppercase">
                        Check-out
                      </span>
                      <span className="font-luxury font-bold text-slate-900 text-sm sm:text-base">
                        22 Nov
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 border border-slate-100 flex justify-between items-center rounded-lg">
                    <span className="text-sm text-slate-500">Huéspedes</span>
                    <span className="font-medium text-slate-900 text-sm">
                      2 Adultos
                    </span>
                    <Icon
                      name="expand_more"
                      className="text-slate-400 text-sm"
                    />
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white font-luxury py-3.5 sm:py-4 px-6 hover:bg-primary hover:text-slate-900 transition-colors duration-300 shadow-md flex items-center justify-center gap-2 group rounded-lg text-sm sm:text-base">
                  <span className="font-bold">Reservar Experiencia</span>
                  <Icon
                    name="arrow_forward"
                    className="text-sm group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <div className="mt-3 flex items-center justify-center gap-2 text-slate-400">
                  <Icon name="verified" className="text-sm" />
                  <span className="text-[10px] uppercase tracking-wider">
                    Mejor precio garantizado
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative lg:-rotate-2">
                <div className="bg-primary/10 p-4 border border-primary/20 shadow-sm">
                  <div className="flex gap-2">
                    <Icon name="format_quote" className="text-primary shrink-0" />
                    <p className="font-handwriting text-lg sm:text-xl text-slate-600 leading-tight">
                      {destination.quote.text} - {destination.quote.author}
                    </p>
                  </div>
                </div>
                <div className="tape-effect absolute -top-2 right-4 w-12 h-6 opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="mt-16 sm:mt-20 mb-12 overflow-hidden">
          <h3 className="font-handwriting text-3xl sm:text-4xl text-slate-900 mb-8 sm:mb-12 ml-4 sm:ml-8 -rotate-1">
            Notas visuales...
          </h3>

          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-12 flex-wrap px-2">
            {destination.gallery.map((photo, index) => (
              <div
                key={photo.alt}
                className="relative hover:rotate-0 hover:z-20 hover:scale-105 transition-all duration-300 group"
                style={{
                  rotate: `${photo.rotation}deg`,
                  marginTop: index === 1 ? "1.5rem" : 0,
                }}
              >
                <div className="tape-effect absolute -top-3 left-1/2 w-16 sm:w-20 h-6 sm:h-8 -translate-x-1/2 opacity-70 z-10" />
                <div className="bg-white p-2 sm:p-3 pb-6 sm:pb-8 shadow-polaroid w-28 sm:w-48 lg:w-56">
                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      className="object-cover brightness-110"
                      sizes="(max-width: 640px) 112px, 224px"
                    />
                  </div>
                  <p className="font-handwriting text-base sm:text-xl text-center mt-1 sm:mt-2 text-slate-500 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}

            {/* "Your memory" placeholder */}
            <div
              className="relative hover:rotate-0 hover:z-20 hover:scale-105 transition-all duration-300 hidden lg:block"
              style={{ rotate: "3deg", marginTop: "3rem" }}
            >
              <div className="tape-effect absolute -top-3 left-1/2 w-20 h-8 -translate-x-1/2 opacity-50 z-10" />
              <div className="bg-white p-3 pb-8 shadow-polaroid w-48 lg:w-56">
                <div className="aspect-square overflow-hidden bg-slate-50 flex items-center justify-center">
                  <Icon
                    name="camera_alt"
                    className="text-4xl text-slate-300"
                  />
                </div>
                <p className="font-handwriting text-xl text-center mt-2 text-slate-500">
                  Tu recuerdo aquí
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
