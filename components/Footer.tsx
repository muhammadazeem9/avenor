export default function Footer() {
  return (
    <footer className="border-t px-8 py-4">
      <p className="text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} AVENOR. All rights reserved.
      </p>
    </footer>
  );
}
