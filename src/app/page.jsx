export default function HomePage() {
  return (
    <section className="text-center pt-20">
      <h1 className="text-4xl font-bold mb-3">Welcome to <span className="text-blue-600">NextMart</span></h1>
      <p className="text-gray-600 mb-6">Your one-stop shop for amazing digital products!</p>
      <a href="/Products" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">Explore Now</a>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* 4 sample section cards */}
        {["Fast Delivery", "Great Discounts", "Quality Products", "24/7 Support"].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">{item}</h3>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        ))}
      </div>
    </section>
  )
}