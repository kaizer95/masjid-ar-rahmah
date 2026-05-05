'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-sans font-medium text-charcoal/80 mb-2 uppercase tracking-wide">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-0 py-3 border-0 border-b-2 border-charcoal/20 focus:border-copper focus:ring-0 bg-transparent font-sans text-charcoal placeholder:text-charcoal/40 transition-colors"
          placeholder="Nama anda"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-sans font-medium text-charcoal/80 mb-2 uppercase tracking-wide">
          Emel
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-0 py-3 border-0 border-b-2 border-charcoal/20 focus:border-copper focus:ring-0 bg-transparent font-sans text-charcoal placeholder:text-charcoal/40 transition-colors"
          placeholder="emel@anda.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-sans font-medium text-charcoal/80 mb-2 uppercase tracking-wide">
          Mesej
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-0 py-3 border-0 border-b-2 border-charcoal/20 focus:border-copper focus:ring-0 bg-transparent font-sans text-charcoal placeholder:text-charcoal/40 transition-colors resize-none"
          placeholder="Mesej anda..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-charcoal text-white font-sans font-semibold px-8 py-4 tracking-wider uppercase text-sm hover:bg-charcoal-light transition-all duration-300"
      >
        Hantar Mesej
      </button>
    </form>
  )
}
