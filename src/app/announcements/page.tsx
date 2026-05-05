import AnnouncementCard from '@/components/AnnouncementCard'

export default function Announcements() {
  const announcements = [
    {
      title: "Kemaskini Jadual Ramadan",
      date: "1 Mac 2026",
      content: "Waktu solat Ramadan dan susunan Iftar telah dikemaskini. Sila semak papan kenyataan untuk butiran lanjut.",
      image: "/images/ramadan-schedule.jpg"
    },
    {
      title: "Pengumuman Solat Sunat Raya",
      date: "15 Februari 2026",
      content: "Solat Sunat Raya Aidilfitri akan diadakan pada 8:00 AM di dewan solat utama. Sila datang awal untuk tempat letak kenderaan."
    },
    {
      title: "Kelas Al-Quran Baharu Akan Bermula",
      date: "20 Januari 2026",
      content: "Kelas Al-Quran peringkat permula untuk dewasa akan bermula minggu depan. Daftarlah di kaunter hadapan.",
      image: "/images/quran-class.jpg"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      {/* Page Header */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-copper/60" />
          <span className="font-sans text-xs uppercase tracking-widest text-copper/80">Berita Terkini</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
          Pengumuman
        </h1>
        <p className="text-slate font-sans font-light text-lg max-w-2xl">
          Dapatkan berita terkini dan pengumuman dari komuniti kami.
        </p>
      </div>

      {/* Announcements List */}
      <div className="space-y-8">
        {announcements.map((announcement, index) => (
          <AnnouncementCard key={index} {...announcement} index={index} />
        ))}
      </div>
    </div>
  )
}
