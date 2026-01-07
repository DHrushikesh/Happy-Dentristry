// components/Footer.jsx
export default function Footer() {
  const handleBookAppointment = () => {
    const message = encodeURIComponent(
      "Hi, I want to book an appointment at Happy Dentistry."
    );
    window.open(`https://wa.me/919585370733?text=${message}`, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-bold text-orange-400">
              Happy Dentistry
            </div>
            <p className="text-slate-300 text-sm max-w-xs">
              Providing gentle, professional dental care for the whole family. 
              Experience comfort, trust, and beautiful smiles.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <span>⭐⭐⭐⭐⭐</span>
              <span>500+ Happy Patients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Our Team", href: "#team" },
                { label: "Testimonials", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Preventive Care",
                "Cosmetic Dentistry",
                "Restorative Care",
                "Pediatric Dentistry",
                "Emergency Services",
                "Orthodontics",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <span className="text-orange-400 mt-0.5">📍</span>
                <span>201, Happy Dentistry, Opposite to Manipal, Anna Salai, Arcot, Arcot, Ranipet-632503, Tamil Nadu</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">📞</span>
                <a 
                  href="tel:+919585370733" 
                  className="hover:text-orange-400 transition-colors"
                >
                  +91 95853 70733
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-400">✉️</span>
                <a 
                  href="mailto:info@happydentistry.com" 
                  className="hover:text-orange-400 transition-colors"
                >
                  info@happydentistry.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-400 mt-0.5">🕒</span>
                <div>
                  <div>Mon-Sat: 9:00 AM - 8:00 PM</div>
                  <div>Sunday: 10:00 AM - 4:00 PM</div>
                  <div className="text-xs text-orange-300 mt-1">Emergency services available</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready for a Brighter Smile?</h3>
              <p className="text-slate-300">Book your consultation today!</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <button
                onClick={handleBookAppointment}
                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition flex items-center gap-2"
              >
                📱 Book on WhatsApp
              </button>
              <a
                href="tel:+919585370733"
                className="border border-slate-500 hover:border-orange-400 text-white px-6 py-3 rounded-full font-semibold transition hover:text-orange-400"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[
                { icon: "📘", label: "Facebook", href: "#" },
                { icon: "📸", label: "Instagram", href: "#" },
                { icon: "💼", label: "LinkedIn", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-slate-400 text-sm mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Happy Dentistry. All rights reserved.</p>
              <p className="mt-1 text-xs">
                Designed with ❤️ for healthy smiles
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2"
            >
              <span>↑</span> Back to Top
            </button>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-slate-400">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Cancellation Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">
              HIPAA Compliance
            </a>
          </div>

          {/* Certifications */}
          <div className="flex justify-center items-center gap-6 mt-8 text-xs text-slate-500">
            <span>🩺 ISO Certified Clinic</span>
            <span>•</span>
            <span>🏥 NABH Accredited</span>
            <span>•</span>
            <span>🦷 ADA Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
}