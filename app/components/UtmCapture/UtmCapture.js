"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  mergeUtm,
  pickUtm,
  readUtmFromStorage,
  storeUtm,
} from "../../lib/utm";

export default function UtmCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fromUrl = pickUtm(searchParams);
    const fromStorage = readUtmFromStorage();
    const merged = mergeUtm(fromUrl, fromStorage);
    storeUtm(merged);
  }, [searchParams]);

  return null;
}
