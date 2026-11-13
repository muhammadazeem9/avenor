import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b px-8 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AVENOR
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <span>
            <ThemeToggle />
          </span>
        </div>
      </nav>
    </header>
  );
}
