import ProductDetails from "./ProductDetails";

export default async function Page({ params }) {
  const { id } = await params; // ✅ unwrapping the promise
  console.log("PARAM ID:", id); // 🔎 watch your terminal output
  return <ProductDetails id={id} />;
}