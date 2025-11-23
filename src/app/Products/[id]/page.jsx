export default function ProductDetails({ params }) {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <img src="https://via.placeholder.com/400" alt="Product" className="w-full rounded-md mb-4" />
      <h1 className="text-2xl font-bold mb-2">Product #{params.id}</h1>
      <p className="text-gray-600 mb-4">This is a detailed description of product #{params.id}.</p>
      <p className="font-semibold">Price: $299</p>
      <a href="/Products" className="inline-block mt-4 text-blue-600 hover:underline">← Back</a>
    </div>
  )
}