import { useState } from "react";

function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-[#cfdacf] text-[#2e2e2e] px-4 py-2 rounded-xl hover:brightness-95 transition text-sm">
      {children}
    </button>
  );
}

export default function App() {
  const handleViewProfile = (name) => {
    alert(`Opening profile for ${name}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f2ef] text-[#4c3f35] p-8 font-serif">
      <header className="flex items-center justify-between border-b border-[#dcd6cf] pb-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🌙</div>
          <h1 className="text-3xl font-bold tracking-wide">Lyara</h1>
        </div>
        <nav className="flex gap-4 text-lg items-center relative">
          <button className="hover:bg-[#cfdacf] hover:text-[#2e2e2e] px-3 py-1 rounded-lg transition">Home</button>
          <button className="hover:bg-[#cfdacf] hover:text-[#2e2e2e] px-3 py-1 rounded-lg transition">Browse Healers</button>
          <div className="relative group">
            <button className="hover:bg-[#cfdacf] hover:text-[#2e2e2e] px-3 py-1 rounded-lg transition">Services</button>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white text-[#4c3f35] shadow-md rounded-md mt-1 w-64 p-2 z-10">
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Reiki & Energy Healing</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Psychic + Intuitive Readings</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Tarot & Oracle Sessions</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Spiritual Coaching</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Chakra Balancing</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Astrology / Human Design</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-[#cfdacf] rounded">Animal Healing</button>
            </div>
          </div>
          <button className="hover:bg-[#cfdacf] hover:text-[#2e2e2e] px-3 py-1 rounded-lg transition">Free Offerings</button>
          <button className="hover:bg-[#cfdacf] hover:text-[#2e2e2e] px-3 py-1 rounded-lg transition">About</button>
          <Button>Sign Up / Log In</Button>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Welcome to Lyara</h2>
          <p className="text-xl mb-6">
            A sacred space where authentic energy healers, intuitives, and seekers connect.
          </p>
          <Button>Explore Practitioners</Button>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">✨ Reiki & Energy Healing Practitioners</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Ayla Moon', 'River Sol', 'Saffron Lune'].map(name => (
              <div key={name} className="bg-white shadow rounded-xl p-4 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#cfdacf] mb-4" />
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm mb-2">Reiki Practitioner</p>
                <Button onClick={() => handleViewProfile(name)}>View Profile</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-[#dcd6cf] pt-6 text-sm text-center">
        © 2025 Lyara. All rights reserved.
      </footer>
    </div>
  );
}
