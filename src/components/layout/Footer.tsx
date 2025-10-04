export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/80 bg-black text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="h-6 w-6 rounded-sm bg-fuchsia-600" />
              <span className="text-sm font-semibold">Skill Vendor</span>
            </div>
            <p className="mt-3 text-xs leading-6 text-zinc-500">
              A one-stop platform offering premium courses, exclusive discounts and AI tools — all with a single subscription.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Important Pages</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#ai" className="hover:text-white">SkillX AI Terminal</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Social</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>Instagram</li>
              <li>X Twitter</li>
              <li>Youtube</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>support@theskillvendor.com</li>
              <li>Whatsapp: +91-7977948089</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-900/80 pt-6 text-xs text-zinc-600">
          © 2025 All Rights Reserved | Brand of Zenith IND 47 Labs LLP
        </div>
      </div>
    </footer>
  );
}


