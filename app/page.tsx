'use client'

import { Instagram, Linkedin, ChevronDown } from "lucide-react"
import Image from 'next/image';
import { useState } from "react"

export default function EnhancedLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOfficeBearers, setShowOfficeBearers] = useState(false)
  const [showCoreTeam, setShowCoreTeam] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-sky-900 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/images/main_logo[1].jpg" alt="IETE - MAIT Logo" className="w-28 h-auto rounded-full mr-4" width={112} height={112} />
              <h1 className="text-3xl font-bold text-sky-400">IETE - MAIT</h1>
            </div>
            <button
              className="md:hidden text-white ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <a href="#about" className="block mt-4 md:mt-0 md:inline-block text-white hover:text-sky-400 transition-colors">About</a>
              <a href="#events" className="block mt-4 md:mt-0 md:inline-block text-white hover:text-sky-400 transition-colors">Events</a>
              <a href="#projects" className="block mt-4 md:mt-0 md:inline-block text-white hover:text-sky-400 transition-colors">Projects</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-center text-sky-400">About IETE - MAIT</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            IETE - MAIT is a premier technical society dedicated to fostering innovation, knowledge sharing, and skill development in the field of electronics and telecommunications. Our mission is to empower students with cutting-edge technical expertise and provide a platform for growth and excellence.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-sky-400 cursor-pointer" onClick={() => setShowOfficeBearers(!showOfficeBearers)}>
              Office Bearers
            </h3>
            {showOfficeBearers && (
              <ul className="mt-2 text-gray-300">
                <li>Manasvi Sinha - Chairperson</li>
                <li>Ansh Tiwari - Vice Chairperson</li>
                <li>Dhvani Rana - General Secretary</li>
                <li>Ritika Gupta - Joint Secretary</li>
                <li>Priyanshu Raj - Finance Secretary</li>
              </ul>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-sky-400 cursor-pointer" onClick={() => setShowCoreTeam(!showCoreTeam)}>
              Core Team Leads
            </h3>
            {showCoreTeam && (
              <ul className="mt-2 text-gray-300">
                <li>Shrey and Prem Sai - Social Media and Graphics Head</li>
                <li>Dhwani and Vrishank - Content Head</li>
                <li>Pranav and Nishchay - PR Head</li>
                <li>Ishan and Ronit - Event Head</li>
                <li>Arjun - Technical Head</li>
              </ul>
            )}
          </div>
        </section>

        <section id="events" className="mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-center text-sky-400">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Engaging seminars",
              "Competitive coding challenges",
              "Cutting-edge technical webinars",
              "Hands-on tech competitions",
              "Collaborative events",
              "Insights into college life"
            ].map((event, index) => (
              <div key={index} className="bg-sky-900 p-6 rounded-lg shadow-md hover:shadow-sky-400 transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-sky-400">{event}</h3>
                <p className="text-gray-300">Stay tuned for more details!</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-center text-sky-400">Project Domains</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AI/ML innovations",
              "IoT development",
              "VLSI design",
              "Embedded systems",
              "Full stack development"
            ].map((domain, index) => (
              <div key={index} className="bg-sky-900 p-6 rounded-lg shadow-md hover:shadow-sky-400 transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-sky-400">{domain}</h3>
                <p className="text-gray-300">Join us in these exciting ventures!</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-6 text-center text-sky-400">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-900 p-6 rounded-lg shadow-md">
              <p className="text-gray-300 mb-4">&quot;IETE - MAIT has been instrumental in shaping my technical skills and career path. The exposure to cutting-edge technologies and networking opportunities are unparalleled.&quot;</p>
              <p className="text-sky-400 font-semibold">- Arjun, Speaker</p>
            </div>
            <div className="bg-sky-900 p-6 rounded-lg shadow-md">
              <p className="text-gray-300 mb-4">&quot;The projects and events organized by IETE - MAIT have given me practical experience that goes beyond classroom learning. It&apos;s a must-join for every tech enthusiast!&quot;</p>
              <p className="text-sky-400 font-semibold">- Aditya Roy, Current Member</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/iete_mait/?igsh=YXByZWs5b2V6Y3J1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/your_linkedin_handle" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center">&copy; 2023 IETE - MAIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
