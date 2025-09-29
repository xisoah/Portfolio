"use client";

import { useEffect, PropsWithChildren } from "react";
import AOS from "aos";

export default function AOSProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  return <>{children}</>;
}


