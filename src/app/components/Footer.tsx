export default function Footer() {
  return (
    <footer id="site-footer" className="w-full bg-[#001A39] border-t border-yellow py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand */}
        <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <span className="text-2xl md:text-3xl font-extrabold text-white">KPoill</span>
        </div>

        {/* Links & Info */}
        <div className="w-full md:flex-1 flex flex-col gap-6">

          {/* Contact Information */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

            {/* Ghana Office */}
            <div className="flex flex-col gap-1 text-white/90 text-sm md:text-base">
              <span className="font-semibold text-yellow-400">Ghana Office</span>
              <span>Address: Plot No8, Spintex, Accra</span>
              <span>Phone: +233245643503</span>
            </div>

            {/* Turkey Office */}
            <div className="flex flex-col gap-1 text-white/90 text-sm md:text-base">
              <span className="font-semibold text-yellow-400">Turkey Office</span>
              <span>Address: Fatih Mahallesi Çamlık Cadde No:2</span>
              <span className="pl-16">İç Kapı No:18 Gaziemir İzmir TÜRKİYE</span>
              <span>Phone: +90 546 885 7563</span>
            </div>
          </div>

          {/* Email */}
          <div className="text-white/90 text-sm md:text-base">
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
