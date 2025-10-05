export default function Footer() {
  return (
    <footer id="site-footer" className="w-full bg-[#001A39] border-t border-yellow py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand */}
        <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <span className="text-2xl md:text-3xl font-extrabold text-white">KPoill</span>
        </div>

        {/* Links & Info */}
        <div className="w-full md:flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Address & Contact */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-white/90 text-sm md:text-base">
            <span>Address: 2364 Lubricant Ln</span>
            <span>Phone: (123) 456-7880</span>
            <span>Email: info@peaklube.com</span>
          </div>
        </div>

        {/* Call Us Button */}
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="tel:+233500010666"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-2 rounded-xl transition-all shadow-md"
          >
            Call Us
          </a>
        </div>

      </div>
    </footer>
  );
}
