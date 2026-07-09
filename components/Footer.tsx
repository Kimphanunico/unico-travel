import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-wide">
              UNICO <span className="text-terracotta">TRAVEL</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Thoughtfully crafted journeys for travelers who want more than a
              checklist — real places, real people, real stories.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-cream/70">
              <a href="#" className="hover:text-terracotta">Instagram</a>
              <a href="#" className="hover:text-terracotta">Facebook</a>
              <a href="#" className="hover:text-terracotta">TikTok</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/services" className="text-cream/80 hover:text-terracotta">All Tours</Link></li>
              <li><Link href="/about" className="text-cream/80 hover:text-terracotta">About Us</Link></li>
              <li><Link href="/gallery" className="text-cream/80 hover:text-terracotta">Gallery</Link></li>
              <li><Link href="/blog" className="text-cream/80 hover:text-terracotta">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>admin@unicovisa.com.vn</li>
              <li>+84 376 792 974</li>
              <li>29A Nguyen Dinh Chieu, Saigon<br />Ho Chi Minh City</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Unico Travel. All rights reserved.</p>
          <p>Designed for travelers who wander with intention.</p>
        </div>
      </div>
    </footer>
  );
}
