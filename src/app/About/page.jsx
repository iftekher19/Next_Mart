"use client";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      {/* HERO  ----------------------------------------------------------- */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-sm">About NextMart</h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Welcome to NextMart — your one‑stop destination for quality digital products,
          premium gadgets, and unbeatable deals delivered instantly. We connect innovation,
          convenience and trust to bring you a smarter way to shop online. From tech gear
          to software essentials, NextMart makes finding what you need simple, secure and fast.
        </p>
        <div className="mt-10">
          <a
            href="/Products"
            className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-lime-100 transition"
          >
            Explore Our Products
          </a>
        </div>
      </section>

      {/* MISSION / VALUES GRID ------------------------------------------ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-700">What Drives Us</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We’re more than a digital marketplace — we’re a community committed to providing
            authentic products, transparent customer service and instant accessibility for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "🛍️ Quality & Authenticity",
              desc: "Every product listed on NextMart is verified to meet our strict standards of quality and reliability.",
            },
            {
              title: "⚡ Speed & Efficiency",
              desc: "Instant delivery and seamless checkout mean you spend less time waiting and more time enjoying your purchase.",
            },
            {
              title: "💬 Customer First Support",
              desc: "Our support team is available 24/7 to help  you with any questions or concerns.",
            },
            {
              title: "🔒 Security & Trust",
              desc: "Cutting‑edge encryption and secure payment  solutions keep your data safe and confidential.",
            },
            {
              title: "🌱 Sustainability",
              desc: "We support responsible digital distribution to reduce  waste and promote eco-friendly tech.",
            },
            {
              title: "🤝 Global Reach",
              desc: "NextMart connects buyers and sellers worldwide through  our secure and reliable platform.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / ENDING ---------------------------------------------------- */}
      <section className="bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-500 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto opacity-90 mb-8">
          At NextMart, we believe technology should simplify life — not complicate it.
          We’re here to deliver innovation that’s accessible, secure, and beautifully designed
          to fit your everyday needs.
        </p>
        <a
          href="/Products"
          className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-lime-100 transition"
        >
          Browse Store
        </a>
      </section>
    </main>
  );
}