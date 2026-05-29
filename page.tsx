export default function InfiniteSoldierHomepage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521417531039-43f7f6f9b1d1?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase leading-tight">
            Infinite Soldier
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300">
            Discipline • Dedication • Victory
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            India&apos;s powerful learning platform for Army GD, NDA, SSC GD,
            Physical Preparation, GK/GS Notes, PYQs and Motivation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-green-700 hover:bg-green-600 rounded-2xl text-lg font-semibold shadow-lg transition">
              Start Learning
            </button>

            <button className="px-8 py-4 border border-white hover:bg-white hover:text-black rounded-2xl text-lg font-semibold transition">
              Download Notes
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Why Choose Infinite Soldier?</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything a future soldier needs in one platform.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-zinc-900 p-8 rounded-3xl shadow-xl border border-zinc-800 hover:scale-105 transition">
              <div className="text-5xl">📚</div>
              <h3 className="text-2xl font-semibold mt-4">Study Notes</h3>
              <p className="text-gray-400 mt-3">
                High-quality GK, GS, Maths and Reasoning notes specially
                designed for defence exams.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl shadow-xl border border-zinc-800 hover:scale-105 transition">
              <div className="text-5xl">🎯</div>
              <h3 className="text-2xl font-semibold mt-4">PYQ Practice</h3>
              <p className="text-gray-400 mt-3">
                Solve previous year questions and improve accuracy with smart
                practice sets.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl shadow-xl border border-zinc-800 hover:scale-105 transition">
              <div className="text-5xl">🔥</div>
              <h3 className="text-2xl font-semibold mt-4">Daily Motivation</h3>
              <p className="text-gray-400 mt-3">
                Stay disciplined with daily routines, mindset training and
                motivational content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-green-500">10K+</h3>
            <p className="text-gray-400 mt-2">Students</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-500">500+</h3>
            <p className="text-gray-400 mt-2">PYQ Sets</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-500">1000+</h3>
            <p className="text-gray-400 mt-2">GK Notes</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-500">24/7</h3>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Popular Courses</h2>
            <p className="text-gray-400 mt-4">
              Start your preparation with our top-rated courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Army GD"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">Army GD Master Course</h3>
                <p className="text-gray-400 mt-3">
                  Complete preparation with notes, mock tests and PYQs.
                </p>

                <button className="mt-6 w-full py-3 bg-green-700 hover:bg-green-600 rounded-2xl font-semibold transition">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="NDA"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">NDA Preparation</h3>
                <p className="text-gray-400 mt-3">
                  Maths, English and General Ability complete preparation.
                </p>

                <button className="mt-6 w-full py-3 bg-green-700 hover:bg-green-600 rounded-2xl font-semibold transition">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="SSC GD"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">SSC GD Booster</h3>
                <p className="text-gray-400 mt-3">
                  Fast-track batches for SSC GD and defence exams.
                </p>

                <button className="mt-6 w-full py-3 bg-green-700 hover:bg-green-600 rounded-2xl font-semibold transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-green-800 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Become Stronger Every Day
        </h2>

        <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto">
          Join Infinite Soldier and prepare yourself mentally, physically and
          academically for success.
        </p>

        <button className="mt-10 px-10 py-4 bg-black hover:bg-zinc-900 rounded-2xl text-lg font-semibold transition shadow-xl">
          Join The Mission
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold uppercase">Infinite Soldier</h3>
            <p className="text-gray-500 mt-2">
              Built for India&apos;s future warriors.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Courses
            </a>
            <a href="#" className="hover:text-white transition">
              Notes
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
