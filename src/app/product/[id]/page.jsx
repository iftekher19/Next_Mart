import ProductDetails from "./ProductDetails";

export default async function Page({ params }) {
  const { id } = await params; 
  console.log("PARAM ID:", id); 
  return <ProductDetails id={id} />;
}