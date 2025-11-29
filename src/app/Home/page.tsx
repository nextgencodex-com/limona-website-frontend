import LatestArrivals from '@/components/Limona-Home/Latest-Arrivals/page';
import WhatWeProvide from '@/components/Limona-Home/WhatWeProvide/page';
import PhotoWall from '@/components/Limona-Home/Photo-Wall/page';
import Footer from '@/components/Limona-Footer/page';

export default function Home() {
  return (
    <main>
      <LatestArrivals />
      <WhatWeProvide />
      <PhotoWall />
      <Footer />
    </main>
  )
}