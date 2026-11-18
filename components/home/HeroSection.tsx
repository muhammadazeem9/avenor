import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              The Avenor Collection
            </span>

            {/* <h1 className="text-5xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"> */}
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Everyday essentials.
              <span className="mt-2 block text-muted-foreground">
                Elevated.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              Discover a curated collection of thoughtfully selected products
              that bring quality, style, and simplicity into your everyday life.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-sm font-medium text-background transition hover:opacity-80"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="px-5 py-4 text-sm font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-7">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Curated Selection
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Quality over quantity
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Thoughtful Design
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Made for everyday living
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/fashion-hero.jpg"
                alt="Avenor featured collection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden bg-background p-5 shadow-xl sm:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Discover
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                The Avenor Edit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
