export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/80 bg-black text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <a href="/" className="cursor-target flex items-center gap-2 text-white">
              <div className="h-7 w-7 rounded-sm bg-fuchsia-600" />
              <span className="text-base font-semibold">Skill Vendor</span>
            </a>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              A one-stop platform offering premium courses, exclusive discounts and AI tools — all with a single subscription.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Important Pages</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/about" className="cursor-target hover:text-white transition-colors">About Us</a></li>
              <li><a href="/courses" className="cursor-target hover:text-white transition-colors">Courses</a></li>
              <li><a href="/contact" className="cursor-target hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Social</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#instagram" className="cursor-target hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#youtube" className="cursor-target hover:text-white transition-colors">Youtube</a></li>
              <li><a href="#linkedin" className="cursor-target hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#facebook" className="cursor-target hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-white">Contact Us</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:support@theskillvendor.com" className="cursor-target hover:text-white transition-colors">support@theskillvendor.com</a></li>
              <li><a href="https://wa.me/917977948089" className="cursor-target hover:text-white transition-colors">Whatsapp: +91-7977948089</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-900/80 pt-6 text-sm text-zinc-600">
          © 2025 All Rights Reserved | Brand of Zenith IND 47 Labs LLP
        </div>
      </div>
    </footer>
  );
}


