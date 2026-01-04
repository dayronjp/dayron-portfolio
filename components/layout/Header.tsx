import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
            <Image
              src="/images/boku.jpeg"
              alt="Dayron Anjos"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="text-sm">
            <div className="font-semibold">Dayron Anjos</div>
            <div className="text-xs text-slate-500">
              Software Engineering • Automation
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/projects" className="text-slate-700 hover:text-slate-900">
            Projects
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-slate-900">
            About
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-block px-3 py-2 border rounded text-sm hover:bg-slate-50"
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/dayron-anjos-566b02323/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-block px-3 py-2 bg-brand text-white rounded font-medium text-sm"
          >
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
