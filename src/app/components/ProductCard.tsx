// src/components/ProductCard.tsx
import Image from "next/image";

type ProductCardProps = {
  imgSrc: string;
  title: string;
  api: string;
  desc: string;
  liters : string;
};

export default function ProductCard({
  imgSrc,
  title,
  api,
  desc,
  liters,
}: ProductCardProps) {
  return (
    <div
      className="
        group relative z-10 w-full max-w-[220px] sm:max-w-[240px] mx-auto
        rounded-2xl border border-white/10 bg-white/5 backdrop-blur
        p-4 shadow-xl shadow-black/30
        hover:border-peakyellow/40 hover:bg-white/7 hover:-translate-y-1
        transition
      "
    >
      {/* image wrapper = bigger image without enlarging the card */}
      <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 112px, 128px"
          className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="mt-2 text-center">
        <h3 className="text-sm sm:text-base font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-peakyellow mt-0.5">
          {api}
        </p>
         {/* Liters Badge */}
        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium text-slate-900 bg-peakyellow rounded-full">
          {liters}
        </span>

        <p className="text-xs text-white/90 leading-snug mt-1 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
