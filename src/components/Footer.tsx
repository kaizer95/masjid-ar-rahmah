export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 pt-20 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative top border */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-16 h-[1px] bg-copper/40" />
          <div className="mx-4 w-2 h-2 rotate-45 bg-copper/60" />
          <div className="w-16 h-[1px] bg-copper/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-xl text-copper mb-4">Masjid Ar Rahmah</h3>
            <p className="text-sm font-sans font-light leading-relaxed text-white/60">
              Tempat yang aman untuk beribadah dan bermasyarakat di tengah kota.
              مسجد الرحمة
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-copper/80 mb-6">Navigasi</h4>
            <ul className="space-y-3">
              {[
                ['Laman Utama', '/'],
                ['Tentang Kami', '/about'],
                ['Pengumuman', '/announcements'],
                ['Acara', '/events'],
                ['Hubungi Kami', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-sans font-light text-white/60 hover:text-copper transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-copper/80 mb-6">Hubungi Kami</h4>
              <address className="text-sm font-sans font-light not-italic text-white/60 space-y-2">
                <p>Kampung Sungai Buaya</p>
                <p>48010 Rawang, Selangor</p>
                <p className="mt-4">Telefon: 03-6028 1822</p>
                <p>Emel: info@masjidarrahmah.org</p>
              </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-copper/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans font-light text-white/40">
            &copy; {new Date().getFullYear()} Masjid Ar Rahmah. Hak Cipta Terpelihara.
          </p>
          <p className="text-xs font-sans font-light text-white/40">
            مسجد الرحمة — Rumah Rahmat
          </p>
        </div>
      </div>
    </footer>
  )
}
