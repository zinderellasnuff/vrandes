import Header from './components/layout/Header';
import Hero from './features/home/components/Hero';

export default function Home() {
  return (
    <main>
      <Header transparent />
      <Hero
        videoSrc="/videos/hero-background.mp4"
        title="Vive el Perú"
        description="No vendemos tours, creamos aventuras."
      />
    </main>
  );
}