import { useState, useEffect } from 'react';

export default function HappyDentistryLanding() {
  // WhatsApp booking handler
  const handleBookAppointment = (doctorName = "") => {
    const message = encodeURIComponent(
      doctorName
        ? `Hi, I want to book an appointment with ${doctorName} at Happy Dentistry.`
        : "Hi, I want to book an appointment at Happy Dentistry."
    );

    window.open(`https://wa.me/919585370733?text=${message}`, "_blank");
  };

  // Image URLs for slideshow
  const imageUrls = [
    "https://res.cloudinary.com/dmrvr0ieg/image/upload/v1767713158/WhatsApp_Image_2026-01-04_at_3.45.19_PM_eqbi78.jpg",
    "https://res.cloudinary.com/dmrvr0ieg/image/upload/v1767712215/WhatsApp_Image_2026-01-06_at_8.16.04_PM_g9rmrz.jpg",
    "https://res.cloudinary.com/dmrvr0ieg/image/upload/v1767761569/WhatsApp_Image_2026-01-06_at_8.56.14_PM_nbp0he.jpg" 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="bg-[#fffaf5] text-slate-900">
        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-[#fffaf5] z-50">
          <div className="font-serif text-xl font-bold">Happy Dentistry</div>

          <div className="hidden md:flex gap-8 font-medium">
            {[
              { label: "Services", href: "#services" },
              { label: "Team", href: "#team" },
              { label: "Testimonials", href: "#reviews" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 rounded-full hover:text-orange-500
                "
              >
                <span
                  className="
                    absolute inset-0 rounded-full bg-orange-400
                    scale-0 group-hover:scale-100
                    transition-transform duration-300 -z-10
                  "
                />
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}

            <button
              onClick={() => handleBookAppointment()}
              className="relative px-4 py-2 rounded-full cursor-pointer hover:text-orange-500"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => handleBookAppointment()}
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Book Appointment
          </button>
        </nav>

        {/* HERO */}
        <section className="grid md:grid-cols-2 lg:w-3/4 lg:mx-auto gap-10 px-10 py-16 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Your Best <br />
              <span className="text-orange-400">Smile</span> Starts Here
            </h1>

            <p className="mt-6 text-slate-600 max-w-lg">
              Gentle, professional dental care for the whole family. Experience
              comfort, trust, and beautiful smiles.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => handleBookAppointment()}
                className="bg-orange-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition"
              >
                Book Consultation
              </button>

              <a
                href="#services"
                className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition"
              >
                View Services
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              ⭐⭐⭐⭐⭐ <span className="ml-2">500+ Happy Patients</span>
            </div>
          </div>

          <div className="flex justify-center">
            {/* SLIDING IMAGES GALLERY */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl group">
              {/* Images Container */}
              <div className="relative h-100 w-full">
                {imageUrls.map((url, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentIndex
                        ? 'opacity-100 translate-x-0'
                        : index < currentIndex
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <picture>
                      <source
                        srcSet={url.replace('/upload/', '/upload/w_800,h_500,c_fill,f_webp,q_85/')}
                        type="image/webp"
                      />
                      <source
                        srcSet={url.replace('/upload/', '/upload/w_800,h_500,c_fill,q_85/')}
                        type="image/jpeg"
                      />
                      <img
                        src={url.replace('/upload/', '/upload/w_800,h_500,c_fill,q_85/')}
                        alt={`Dentist clinic image ${index + 1}`}
                        className="w-full h-full object-cover rounded-3xl"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </picture>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {imageUrls.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs z-10">
                {currentIndex + 1} / {imageUrls.length}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-10 py-20 w-3/4 mx-auto">
          <p className="text-orange-400 font-semibold mb-2">OUR EXPERTISE</p>
          <h2 className="text-3xl font-bold mb-10">
            Comprehensive Dental Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-slate-600 mt-2 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="px-10 py-20 w-3/4 mx-auto bg-[#f8fafc]">
          <p className="text-orange-400 font-semibold text-center mb-2">
            OUR PROFESSIONALS
          </p>
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet The Team
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-2xl transition"
              >
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-400 text-sm font-semibold mt-1">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 mt-3">
                  {member.specialization}
                </p>

                <button
                  onClick={() => handleBookAppointment(member.name)}
                  className="mt-5 px-4 py-2 text-sm font-semibold border border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="px-10 py-20 w-3/4 mx-auto">
          <p className="text-orange-400 font-semibold text-center mb-2">
            REVIEWS
          </p>

          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Patients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
              >
                <p className="italic text-slate-700">" {review.text}"</p>

                <div className="mt-4 flex justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-orange-400 font-semibold">
                    ⭐ {review.rating}/5
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            * Based on Google Reviews
          </p>
        </section>
      </div>
    </div>
  );
}

/* DATA */
const services = [
  {
    icon: "🛡️",
    title: "Preventive Care",
    desc: "Routine cleanings, exams, and digital X-rays.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers, and smile makeovers.",
  },
  {
    icon: "🦷",
    title: "Restorative Care",
    desc: "Implants, crowns, and bridges.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    desc: "Gentle care designed for children.",
  },
  {
    icon: "🚨",
    title: "Emergency Services",
    desc: "Same-day care for urgent dental needs.",
  },
  {
    icon: "📐",
    title: "Orthodontics",
    desc: "Braces and clear aligners for all ages.",
  },
];

const team = [
  {
    name: "Dr. P. Srivikram",
    role: "Chief Dental Doctor",
    specialization: "BDS, MOI • Implantologist & Laser Specialist",
  },
  {
    name: "Dr. Ponnar",
    role: "Orthodontist",
    specialization: "BDS, MDS • Braces & Aligners",
  },
  {
    name: "Dr. Harinath",
    role: "Prosthodontist",
    specialization: "BDS, MDS • Crowns & Implants",
  },
  {
    name: "Dr. Berlyn",
    role: "Pedodontist",
    specialization: "BDS, MDS • Child Dentistry",
  },
  {
    name: "Dr. Vardhini",
    role: "Periodontist",
    specialization: "BDS, MDS • Gum Specialist",
  },
  {
    name: "Dr. Dinesh",
    role: "General Dentist",
    specialization: "BDS • Family Dental Care",
  },
];

const reviews = [
  {
    name: "Anjali R",
    rating: 5,
    text: "Excellent treatment and very friendly doctors. The clinic is clean and modern.",
  },
  {
    name: "Rahul K",
    rating: 5,
    text: "Best dental experience I've ever had. Painless and professional care.",
  },
  {
    name: "Sneha M",
    rating: 4.8,
    text: "Doctors explained everything clearly. Highly recommended for implants.",
  },
  {
    name: "Vikram S",
    rating: 5,
    text: "Amazing staff and great results. My smile has completely changed.",
  },
];