"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  buildUtmQuery,
  mergeUtm,
  pickUtm,
  readUtmFromStorage,
} from "../../lib/utm";

export default function UtmLink({ href, className, children }) {
  const searchParams = useSearchParams();

  const finalHref = useMemo(() => {
    const fromUrl = pickUtm(searchParams);
    const fromStorage = readUtmFromStorage();
    const merged = mergeUtm(fromUrl, fromStorage);
    const query = buildUtmQuery(merged);
    return `${href}${query}`;
  }, [href, searchParams]);

  return (
    <Link href={finalHref} className={className}>
      {children}
    </Link>
  );
}
