
import LatestArrivals from '@/components/Limona-Home/Latest-Arrivals/page';
import WhatWeProvide from '@/components/Limona-Home/WhatWeProvide/page';
import PhotoWall from '@/components/Limona-Home/Photo-Wall/page';
import Footer from '@/components/Limona-Footer/page';
import Hero from '@/components/Limona-Home/Hero - home/page';


export default function Home() {
  return (
    <main>
      <Hero />
      <LatestArrivals />
      <WhatWeProvide />
      <PhotoWall />
      <Footer />
     
    </main>
  );
}
