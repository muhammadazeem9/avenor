import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Men's Collection",
    image: "/images/men.webp",
    href: "/collections/men",
  },
  {
    id: 2,
    title: "Women's Collection",
    image: "/images/women.webp",
    href: "/collections/women",
  },
  {
    id: 3,
    title: "Accessories",
    image: "/images/accessories.webp",
    href: "/collections/accessories",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full px-4 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Shop By Category
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explore our latest collections.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block overflow-hidden rounded-xl"
            >
              {/* Category Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
              </div>

              {/* Category Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-105 md:text-3xl">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
