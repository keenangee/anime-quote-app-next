"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuoteSection from "@/components/QuoteSection";
import SearchSection from "@/components/SearchSection";
import { useState } from "react";

export default function Home() {
  const [quotePath, setQuotePath] = useState<string[]>([]);
  return (
    <>
      <section className=" min-h-[95vh]">
        <Header />
        <QuoteSection quotePath={quotePath} />
        <SearchSection setQuotePath={setQuotePath} />
      </section>
      <Footer />
    </>
  );
}
