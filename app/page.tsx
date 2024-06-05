import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import OCTSummary from "@/components/OCTSummary";
import Values from "@/components/Values";
import News from "@/components/News";
import BookingSection from "@/components/BookingSection";
import Head from "next/head";
import CurrentOffers from "@/components/CurrentOffers";
// import the library

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo_blue.png" />
      </Head>
      <Hero />
      <BookingSection />
      <Services />
      {/* <CurrentOffers /> */}
      <OCTSummary />
      <Values />
      <News />
    </>
  );
}
