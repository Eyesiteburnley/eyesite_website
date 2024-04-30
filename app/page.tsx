import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import OCTSummary from "@/components/OCTSummary";
import Values from "@/components/Values";
import News from "@/components/News";
import BookingSection from "@/components/BookingSection";
// import the library

export default function Home() {
  return (
    <>
      <Hero />
      <BookingSection />
      <Services />
      <OCTSummary />
      <Values />
      <Contact />
      <News />
    </>
  );
}
