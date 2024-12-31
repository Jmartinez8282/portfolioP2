'use client';
import Clients from "@/components/Clients";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/ui/Hero";
import { MatrixCard } from "@/components/ui/MatrixCard";

import { navItems } from "@/data";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function Home() {
  return (
    // <TracingBeam>


    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full ">
      <Suspense fallback="loading">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <MatrixCard />
        <Footer />
    </Suspense>
      </div>
    </main>
  );
}
