"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import Link from "next/link";


// Super simple index — add your real pages/sections here
const SEARCH_INDEX = [
  { title: "Home", url: "/", content: "premium engine oils hero see products" },
  { title: "Products", url: "/products", content: "X-Pro 5W-30 MaxGlow TurboMax specs" },
  { title: "About", url: "/about", content: "about company mission kpoil" },
  { title: "Contact", url: "/contact", content: "email phone address" },
  // Example product anchors:
  { title: "X-Pro 5W-30", url: "/products#xpro", content: "API SP modern engines" },
  { title: "TurboMax", url: "/products#turbomax", content: "API CK-4 heavy duty" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);

  const fuse = useMemo(
    () =>
      new Fuse(SEARCH_INDEX, {
        threshold: 0.35,            // lower = stricter
        includeScore: true,
        keys: ["title", "content"], // what to match on
      }),
    []
  );

  const results = q ? fuse.search(q).slice(0, 8) : [];

  // keyboard: Esc close, arrows navigate, Enter go
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") setI((x) => Math.min(x + 1, Math.max(results.length - 1, 0)));
      if (e.key === "ArrowUp") setI((x) => Math.max(x - 1, 0));
      if (e.key === "Enter") {
        const hit = results[i]?.item;
        if (hit) {
          setOpen(false);
          router.push(hit.url);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, i, router]);

  return (
    <><nav className="sticky top-0 z-50 h-20 w-full flex items-center justify-between px-4 py-4 
  bg-gradient-to-r from-slate-950 via-slate-900 to-[#FFCB08]/95 shadow-lg">


      
        <div className="flex items-center">
          <Image
            src="/logo-kp.png"
            alt="KPoil Logo"
            width={80}
            height={80}
            className="object-contain block"
            priority
          />
        </div>

        {/* Right: Links + Search */}
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 text-lg text-white font-medium">
          <li>
            <Link href="/" className="hover:text-peakblue transition-colors cursor-pointer">
              Home
            </Link>
          </li>
          <li>
           <Link href="/products" className="hover:text-peakblue transition-colors">
              Products
            </Link>
            </li>

            <li className="hover:text-peakblue transition-colors cursor-pointer">
              <Link href="/about" className="hover:text-peakblue transition-colors">
              About</Link>
              </li>
          </ul>

          <button
            aria-label="Search"
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-white/10 text-white"
          >
            <Search size={22} />
          </button>
        </div>
      </nav>

      {/* Search dialog */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-1/2 top-24 -translate-x-1/2 w-[92vw] max-w-xl rounded-2xl bg-[#0a1a39] ring-1 ring-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 border-b border-white/10">
              <input
                autoFocus
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setI(0);
                }}
                placeholder="Search pages, products…"
                className="w-full bg-transparent outline-none text-white placeholder-white/60 text-base px-2"
              />
            </div>

            <ul className="max-h-80 overflow-auto py-2">
              {results.length === 0 && q && (
                <li className="px-3 py-2 text-white/60">No results</li>
              )}
              {results.map((r, idx) => (
                <li
                  key={r.item.url + idx}
                  onMouseEnter={() => setI(idx)}
                  onClick={() => {
                    setOpen(false);
                    router.push(r.item.url);
                  }}
                  className={`px-3 py-2 cursor-pointer ${
                    idx === i ? "bg-white/10" : ""
                  }`}
                >
                  <div className="text-white">{r.item.title}</div>
                  {r.item.content && (
                    <div className="text-white/60 text-sm line-clamp-1">
                      {r.item.content}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between px-3 py-2 text-xs text-white/50 border-t border-white/10">
              <span>Enter to open • Esc to close</span>
              <span>↑↓ to navigate</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
