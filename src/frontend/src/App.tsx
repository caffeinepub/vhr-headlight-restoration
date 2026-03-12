import {
  Award,
  Car,
  CheckCircle,
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/+447880481408";
const _PHONE_URL = "tel:+447880481408";

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Prices", href: "#prices" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/v-1.png"
              alt="Vanko Headlight Restoration"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-ocid="nav.primary_button"
              className="px-5 py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white py-2 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-brand-blue text-white font-semibold rounded-full text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-headlight.dim_1920x1080.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/40 bg-brand-blue/10 text-brand-blue-glow text-sm font-medium mb-6 backdrop-blur-sm">
          <Zap size={14} />
          UK Mobile Headlight Restoration
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight text-balance mb-6">
          Professional Headlight{" "}
          <span className="text-brand-blue-light">Restoration</span>
          <br />
          We Come to You
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Fast, affordable &amp; long-lasting results.{" "}
          <span className="text-white/90 font-medium">
            12+ months UV protection.
          </span>
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { icon: <Car size={16} />, label: "Mobile Service" },
            { icon: <Zap size={16} />, label: "Same Day Available" },
            { icon: <Shield size={16} />, label: "UV Protected" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-white/80 text-sm font-medium bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
            >
              <span className="text-brand-blue-glow">{badge.icon}</span>
              <CheckCircle size={14} className="text-green-400" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-float">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function Services() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section
      id="prices"
      data-ocid="services.section"
      className="py-24 md:py-32 bg-brand-dark"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Professional headlight restoration at your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {[
            {
              icon: <Star size={24} />,
              title: "Premium 2K Clear Coat",
              price: "£60",
              description:
                "Includes full sanding, machine polishing & 2K high-gloss UV protective clear coat (12–24 months durability).",
              popular: true,
            },
            {
              icon: <Award size={24} />,
              title: "Full Car Package",
              price: "£100",
              description: "Headlights + taillights polishing & protection.",
              popular: false,
            },
          ].map((service, i) => (
            <div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              className={`section-reveal card-hover relative flex flex-col rounded-2xl border p-8 ${
                service.popular
                  ? "bg-brand-blue/10 border-brand-blue/50 shadow-blue-glow"
                  : "bg-brand-charcoal border-white/8 shadow-card-dark"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  service.popular
                    ? "bg-brand-blue text-white"
                    : "bg-white/5 text-brand-blue-glow"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2">
                {service.title}
              </h3>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display font-black text-5xl text-white">
                  {service.price}
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                {service.description}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                data-ocid={`services.primary_button.${i + 1}`}
                className={`w-full py-3 rounded-xl font-semibold text-center transition-all duration-200 hover:scale-[1.02] ${
                  service.popular
                    ? "bg-brand-blue hover:bg-brand-blue-light text-white"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="section-reveal mt-10 text-center">
          <p className="text-white/40 text-sm">
            ⏱ Average job time:{" "}
            <span className="text-white/70 font-medium">
              45–60 minutes for both headlights.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Before/After Slider ─────────────────────────────────────────────────────
function BeforeAfterSlider({
  imageSrc,
  label,
}: { imageSrc: string; label: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
  };
  const onMouseUp = () => {
    dragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };

  const onTouchStart = () => {
    dragging.current = true;
  };
  const onTouchEnd = () => {
    dragging.current = false;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (dragging.current) updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl cursor-col-resize select-none aspect-[8/5] shadow-card-dark border border-white/8"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      {/* After (full image) */}
      <img
        src={imageSrc}
        alt={`${label} After`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before (clipped left) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={imageSrc}
          alt={`${label} Before`}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
          draggable={false}
        />
        <div className="absolute inset-0 bg-amber-900/30" />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-white/80">
          <div className="flex gap-0.5">
            <div className="w-0 h-0 border-y-4 border-y-transparent border-r-[6px] border-r-brand-charcoal" />
            <div className="w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-brand-charcoal" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-widest">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-brand-blue/80 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-widest">
        After
      </div>
    </div>
  );
}

function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-24 md:py-32 bg-brand-charcoal"
    >
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
            Results
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Before &amp; After
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Drag the slider to compare. The difference speaks for itself.
          </p>
        </div>

        <div className="section-reveal">
          <BeforeAfterSlider
            imageSrc="/assets/generated/before-after-2.dim_800x500.jpg"
            label="Restoration"
          />
          <p className="text-white/40 text-sm text-center mt-3">
            Premium 2K Clear Coat Result
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 md:py-32 bg-brand-dark"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="section-reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/10 rounded-3xl blur-2xl" />
              <img
                src="/assets/generated/about-technician.dim_800x600.jpg"
                alt="Vanko Headlight Restoration Technician at work"
                className="relative rounded-2xl w-full object-cover shadow-blue-glow border border-white/5"
              />
            </div>
          </div>

          {/* Text */}
          <div className="section-reveal" style={{ transitionDelay: "150ms" }}>
            <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
              About
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-6">
              About Me
            </h2>
            <p className="text-white/65 leading-relaxed text-lg mb-10">
              I am an independent mobile headlight restoration technician based
              in the UK. I work personally on every vehicle, using professional
              equipment, multi-stage wet sanding, machine polishing and durable
              UV protection coatings to bring headlights back to a crystal-clear
              finish. My goal is simple: clean, safe, and like-new headlights —
              done with care, precision, and attention to detail.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "150+", label: "Cars Restored" },
                { value: "12-24", label: "Month Protection" },
                { value: "Mobile", label: "Service" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-brand-charcoal border border-white/5"
                >
                  <div className="font-display font-black text-2xl text-brand-blue-light mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const [form, setForm] = useState({
    name: "",
    carModel: "",
    postcode: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello! I'd like to book a headlight restoration.\n\nName: ${form.name}\nCar Model: ${form.carModel}\nPostcode: ${form.postcode}\n\nMessage: ${form.message}`,
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 md:py-32 bg-brand-charcoal"
    >
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-3 mb-4">
            Get In Touch
          </h2>
          <p className="text-white/50">
            Ready to restore your headlights? Reach out now.
          </p>
        </div>

        {/* Form */}
        <div className="section-reveal bg-brand-dark border border-white/5 rounded-2xl p-6 md:p-10 shadow-card-dark">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-white/60 text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  data-ocid="contact.input"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-brand-charcoal border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-carmodel"
                  className="block text-white/60 text-sm font-medium mb-2"
                >
                  Car Model
                </label>
                <input
                  type="text"
                  id="contact-carmodel"
                  placeholder="e.g. BMW 3 Series 2019"
                  value={form.carModel}
                  onChange={(e) =>
                    setForm({ ...form, carModel: e.target.value })
                  }
                  className="w-full bg-brand-charcoal border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-postcode"
                className="block text-white/60 text-sm font-medium mb-2"
              >
                Postcode
              </label>
              <input
                type="text"
                id="contact-postcode"
                placeholder="e.g. SW1A 1AA"
                value={form.postcode}
                onChange={(e) => setForm({ ...form, postcode: e.target.value })}
                className="w-full bg-brand-charcoal border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-white/60 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                data-ocid="contact.textarea"
                rows={4}
                placeholder="Tell us about your car and when you'd like the service..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-brand-charcoal border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              data-ocid="contact.submit_button"
              className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-3 text-lg"
            >
              <MessageCircle size={22} />
              Send via WhatsApp
            </button>
          </form>

          <p className="mt-6 text-center text-white/30 text-sm">
            📍 Serving all areas within 15 miles from your city
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-ocid="footer.panel"
      className="bg-brand-dark border-t border-white/5 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <img
                src="/assets/uploads/v-1.png"
                alt="Vanko Headlight Restoration"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Professional mobile headlight restoration across the UK.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">
              Quick Links
            </span>
            {[
              { label: "Home", href: "#home" },
              { label: "Prices", href: "#prices" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="footer.link"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <span className="text-white/60 text-xs font-semibold uppercase tracking-widest block mb-4">
              Follow Us
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-brand-charcoal border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-blue/50 transition-all duration-200"
              >
                <Facebook size={18} />
              </button>
              <button
                type="button"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-brand-charcoal border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-blue/50 transition-all duration-200"
              >
                <Instagram size={18} />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-brand-charcoal border border-white/8 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/50 transition-all duration-200"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-white/30 text-sm text-center">
            &copy; {year} Vanko Headlight Restoration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Reveal Hook ─────────────────────────────────────────────────────────────
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: ref.current is intentionally read inside effect
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    for (const t of targets) {
      observer.observe(t);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
