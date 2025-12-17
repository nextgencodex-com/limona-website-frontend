import { Suspense } from "react";
import Header from "@/components/Limona-Header/page";
import LimonaProducts from "@/components/Limona-Products/page";
import Footer from "@/components/Limona-Footer/page";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading products...</div>}>
        <LimonaProducts />
      </Suspense>
      <Footer />
    </div>
  );
}
