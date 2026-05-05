import EventCard from '@/components/EventCard'

export default function Events() {
  const events = [
    {
      title: "Bulanan Kajian Al-Quran",
      date: "Setiap Hari Sabtu",
      time: "Selepas Solat Maghrib",
      location: "Dewan Solat Utama",
      description: "Sertailah kami untuk perbincangan menarik tentang ayat-ayat terpilih dari Al-Quran dengan aplikasi praktikal dalam kehidupan."
    },
    {
      title: "Iftar Masyarakat",
      date: "Setiap Jumaat sepanjang Ramadan",
      time: "Waktu Maghrib (Matahari Terbenam)",
      location: "Dewan Makan Masjid",
      description: "Berbukalah puasa bersama masyarakat. Semua dialu-alukan untuk bersama kami dalam Iftar dan solat Maghrib."
    },
    {
      title: "Bengkel Islam Remaja",
      date: "15 Mac 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Dewan Masyarakat",
      description: "Bengkel interaktif untuk remaja yang merangkumi ajaran Islam asas dan pembinaan sahsiah."
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      {/* Page Header */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-copper/60" />
          <span className="font-sans text-xs uppercase tracking-widest text-copper/80">Masyarakat</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
          Acara Akan Datang
        </h1>
        <p className="text-slate font-sans font-light text-lg max-w-2xl">
          Sertailah kami untuk perhimpunan, bengkel, dan acara kemasyarakatan yang akan datang ini.
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} index={index} />
        ))}
      </div>
    </div>
  )
}
