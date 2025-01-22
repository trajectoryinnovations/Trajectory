"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const TechSphereCanvas = dynamic(() => import("./TechSphereCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-[500px] h-[500px] flex items-center justify-center">
      <div className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function TechSphere() {
  return <TechSphereCanvas />;
}