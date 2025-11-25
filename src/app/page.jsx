"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch {
        setError("Could not load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- Swiper slides data ---
  const heroSlides = [
    {
      title: "Welcome to NextMart",
      text: "Your one-stop destination for quality digital products, premium gadgets, and unbeatable deals — delivered instantly to you.",
      image:
        "https://i.ibb.co.com/YTVGttkk/modern-stationary-collection-arrangement.jpg",
    },
    {
      title: "Exclusive Deals Every Day",
      text: "Shop smarter with our curated collections of trending tech and exclusive digital goods.",
      image:
        "https://i.ibb.co.com/xSYmymqw/hdphn.jpg",
    },
    {
      title: "Fast & Easy Shopping Experience",
      text: "Browse, buy, and enjoy seamless access to top-tier digital products and services.",
      image:
        "https://i.ibb.co.com/SwgQKQ9z/keyboard.jpg",
    },
  ];

  // ------------------------------------------------------------------
  // HOME PAGE
  // ------------------------------------------------------------------
  return (
    <main className="text-gray-800">

      {/*  HERO SECTION with Swiper */}
      <section className="relative w-full h-[70vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          effect="slide"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full flex items-center justify-center text-center text-white"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/70 via-teal-700/60 to-green-700/70"></div>

                <div className="relative z-10 px-6 max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-8 text-gray-100 leading-relaxed">
                    {slide.text}
                  </p>
                  <a
                    href="/product"
                    className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-green-200 transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SECTION 2 – FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-600">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Fast Delivery", desc: "Instant product access right after purchase." },
              { title: "Great Discounts", desc: "Exclusive limited‑time offers every week." },
              { title: "Quality Products", desc: "All items are verified and high‑quality." },
              { title: "24/7 Support", desc: "Our friendly team is always ready to help you." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – POPULAR PICKS  */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-500">Popular Picks</h2>

          {loading && (
            <p className="text-gray-500 text-lg">Loading products…</p>
          )}

          {error && (
            <p className="text-red-500 text-lg">{error}</p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Array.isArray(products) &&
                products.slice(0, 3).map((p) => (
                  <div
                    key={p._id}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {p.shortDescription}
                      </p>
                      <a
                        href={`/product/${p._id}`}
                        className="text-green-600 font-medium hover:underline"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/*  SECTION 4 – TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-green-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-600">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-green-600">
            {[
              { name: "Rahim", review: "Fantastic platform! Super fast deliveries and great prices." },
              { name: "Karim", review: "Everything worked perfectly. The support team rocks!" },
              { name: "Dulal", review: "Amazing all products and friendly behavior." },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 hover:-translate-y-1 transition"
              >
                <p className="text-gray-600 mb-3 italic">“{t.review}”</p>
                <h4 className="font-semibold text-green-600">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  SECTION 5 – BANNER CTA */}
      <section className="py-20 text-center text-white bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-500">
        <h2 className="text-4xl font-bold mb-3 drop-shadow-md">
          Ready to Experience NextMart?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Join thousands of happy customers nationwide.
        </p>
        <a
          href="/login"
          className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get Started →
        </a>
      </section>

      {/*  ABOUT SECTION */}
      <section className="relative py-24 bg-green-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl text-green-800 font-bold mb-6">
            About NextMart
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Welcome to NextMart — your one-stop destination for quality digital products,
            premium gadgets and unbeatable deals delivered instantly to you.
            We connect innovation, convenience and trust to bring you the best online shopping experience
            for the digital age. From smart tech to software essentials, NextMart makes finding what you need simple, secure and fast.
          </p>
          <div className="mt-10">
            <a
              href="/Products"
              className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-lime-100 transition"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px] text-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M985.66 83.19C906.67 62.66 823.78 38.27 739 44.9 647.75 52.24 562.56 94.66 471.3 104.27 386.81 113 301.12 92.05 219.82 69.21 146.26 48.24 76.48 26.91 0 37.29V120h1200V95.8c-69.04 9.75-142.79 8.22-214.34-12.61z" />
          </svg>
        </div>
      </section>
    </main>
  );
}