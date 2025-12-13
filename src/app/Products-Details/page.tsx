import { Suspense } from "react";
import ProductDetails from "@/components/Limona-Products-Details/page";

export default function ProductDetailsPage() {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductDetails />
    </Suspense>
  );
}
