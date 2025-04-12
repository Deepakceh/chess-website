
export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 pt-10 pb-6 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
          <img src="/assets/images/logo-white.png" alt="logo" className='w-40' />
          {/* <span className="text-xl font-bold text-white">The Chess Classes</span> */}
          </div>
          <p className="text-sm">
            Unlock your true potential in chess with expert guidance and live training sessions.
          </p>
          <div className="flex gap-3 mt-4">
            {/* <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-5" /></a> */}
            {/* <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-5" /></a> */}
            {/* <a href="#"><img src="/icons/youtube.svg" alt="YouTube" className="h-5" /></a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/refund" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Join Our Newsletter</h3>
          <p className="text-sm mb-3">Stay updated with training tips and new batches.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 px-4 py-2 rounded text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} The Chess Classes. All rights reserved.
      </div>
    </footer>
  );
}
