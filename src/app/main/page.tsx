"use client"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from "@/app/components/header";
import Modelcanvas from "@/app/components/3dmodel";

export default function Main() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Header></Header>
      <Modelcanvas></Modelcanvas>
    </>
  );
}