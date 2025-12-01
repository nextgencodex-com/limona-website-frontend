import HeroSection from '@/components/Limona-Home/Hero-Section/hero-section';
import LatestArrivals from '@/components/Limona-Home/Latest-Arrivals/page';
import PhotoWall from '@/components/Limona-Home/Photo-Wall/PhotoWall';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestArrivals />
      <PhotoWall />
    </main>
  )
}