import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col">
          <span className="font-heading text-2xl tracking-wider text-white">MANASH <span className="text-gold">ELITE</span></span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 -mt-1">Fitness</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-dark px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-widest gold-glow hover:scale-105 transition-all"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg uppercase tracking-widest hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gold text-dark px-6 py-3 rounded-sm font-bold uppercase text-center tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-dark/40 via-dark/70 to-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold font-bold tracking-[0.4em] uppercase text-sm mb-4">
            Built in Silence. Dominates in Public.
          </span>
          <h1 className="font-montserrat text-5xl md:text-8xl font-black uppercase leading-tight mb-6">
            Transform Your <span className="text-gradient-gold">Body</span>.<br />
            Build Your <span className="text-gradient-gold">Legacy</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
            Join Manash Elite Fitness and unlock your strongest version. Elite training for those who refuse to be average.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-gold text-dark px-10 py-4 rounded-sm font-bold uppercase tracking-widest gold-glow gold-glow-hover transition-all hover:scale-105"
            >
              Join Now
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white/30 hover:border-gold px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
            >
              Start Transformation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-linear-to-b from-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-3/4 rounded-sm overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                alt="Coach Manash"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-sm border-gold/30 border hidden lg:block">
              <div className="text-4xl font-heading text-gold">90 DAYS</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Transformation Guarantee</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm">The Visionary</span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-black uppercase mt-4 mb-8 leading-tight">
              I Help Beginners Become <span className="text-gold">Elite Athletes</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              I help beginners and average individuals transform their body and mindset in 90 days using proven training systems. My approach isn't just about lifting weights; it's about building the discipline required to dominate every aspect of your life.
            </p>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              At Manash Elite Fitness, we don't do "easy." We do effective. If you're looking for a shortcut, you're in the wrong place. If you're looking for a legacy, welcome home.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-heading text-gold">500+</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Lives Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-heading text-gold">8+ YRS</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Elite Coaching</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Gym Membership",
      desc: "Access to our state-of-the-art facility with premium equipment and elite atmosphere.",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Personal Training",
      desc: "One-on-one sessions tailored specifically to your goals, biomechanics, and schedule.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Online Coaching",
      desc: "Elite guidance from anywhere in the world. Weekly check-ins and 24/7 support.",
      img: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2040&auto=format&fit=crop"
    },
    {
      title: "90-Day Transformation",
      desc: "Our flagship program designed to completely overhaul your physique and mindset.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Diet Plans",
      desc: "Customized nutrition protocols that fuel performance and accelerate fat loss.",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black uppercase mt-4">Premium Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-sm aspect-square md:aspect-auto md:h-[450px]"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-2xl font-montserrat font-bold uppercase mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-block text-gold text-xs font-bold uppercase tracking-[0.2em] border-b border-gold pb-1 hover:text-white hover:border-white transition-all"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformations = () => {
  const items = [
    { before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop", name: "Alex M." },
    { before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", name: "Sarah K." },
    { before: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2040&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", name: "John D." },
    { before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", name: "Mike R." }
  ];

  return (
    <section id="transformations" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-sm">The Proof</span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-black uppercase mt-4">Real Results. Real Discipline.</h2>
          </div>
          <p className="text-white/50 max-w-md text-right hidden md:block">
            Witness the physical manifestation of hard work and elite guidance. These aren't just photos; they're stories of reclaimed power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-sm"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative overflow-hidden aspect-3/4">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-dark/80 px-3 py-1 text-[10px] uppercase tracking-widest border border-white/20">Before</div>
                </div>
                <div className="relative overflow-hidden aspect-3/4">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-dark font-bold">After</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold font-bold uppercase tracking-widest">{item.name}</span>
                <p className="text-xs text-white/70">90-Day Transformation Program</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "David Chen", text: "Manash completely changed my perspective on training. I've gained 8kg of lean muscle and my confidence is through the roof.", role: "Entrepreneur" },
    { name: "Jessica Miller", text: "The 90-day program is intense but the results are undeniable. I've never felt stronger or more disciplined.", role: "Athlete" },
    { name: "Ryan Thompson", text: "Best decision I ever made for my health. The online coaching feels like having a pro in your pocket 24/7.", role: "Software Engineer" }
  ];

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-black uppercase">Elite Feedback</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-sm border-white/5 relative"
            >
              <div className="text-gold text-5xl font-serif absolute top-6 right-8 opacity-20">"</div>
              <p className="text-white/80 italic mb-8 relative z-10">
                {review.text}
              </p>
              <div>
                <div className="font-bold uppercase tracking-widest text-gold text-sm">{review.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-50">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "49",
      features: ["Gym Access", "Standard Equipment", "Locker Room", "Mobile App Access"],
      highlight: false
    },
    {
      name: "Pro",
      price: "99",
      features: ["All Basic Features", "Group Training", "Nutrition Guide", "Monthly Assessment", "Priority Support"],
      highlight: true
    },
    {
      name: "Elite Transformation",
      price: "199",
      features: ["All Pro Features", "Personal Coach", "Custom Meal Plans", "Weekly Check-ins", "Exclusive Workshops"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Investment</span>
          <h2 className="font-montserrat text-4xl md:text-5xl font-black uppercase mt-4">Choose Your Path</h2>
          <p className="text-gold font-bold mt-4 animate-pulse">Limited Slots Available for Elite Coaching</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-sm border transition-all duration-500 ${
                plan.highlight 
                ? 'bg-gold text-dark border-gold scale-105 z-10 gold-glow' 
                : 'bg-white/5 border-white/10 text-white hover:border-gold/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-dark text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-montserrat font-black uppercase mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black">$</span>
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-sm opacity-70 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm">
                    <span className={`mr-3 ${plan.highlight ? 'text-dark' : 'text-gold'}`}>✓</span>
                    <span className="opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-4 text-center font-black uppercase tracking-widest text-xs transition-all ${
                  plan.highlight 
                  ? 'bg-dark text-white hover:bg-dark/80' 
                  : 'bg-gold text-dark hover:scale-105'
                }`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark via-dark/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-montserrat text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Your <span className="text-gold">Transformation</span> Starts Today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="bg-gold text-dark px-10 py-4 rounded-sm font-bold uppercase tracking-widest gold-glow gold-glow-hover transition-all hover:scale-105 text-center"
            >
              Join Now
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-white/30 hover:border-gold px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Contact Us</span>
            <h2 className="font-montserrat text-4xl md:text-5xl font-black uppercase mt-4 mb-8">Get In Touch</h2>
            <p className="text-white/60 mb-12 text-lg">
              Ready to take the first step? Fill out the form or reach out directly via WhatsApp. Our elite team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mb-1">Follow Us</div>
                  <div className="font-bold">@manashelitefitness</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Youtube size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mb-1">Subscribe</div>
                  <div className="font-bold">Manash Elite Training</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-sm border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-gold outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-gold outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50">Your Goal</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
                  <option className="bg-dark">Weight Loss</option>
                  <option className="bg-dark">Muscle Gain</option>
                  <option className="bg-dark">Athletic Performance</option>
                  <option className="bg-dark">General Fitness</option>
                </select>
              </div>
              <button className="w-full bg-gold text-dark py-4 rounded-sm font-black uppercase tracking-widest text-xs gold-glow gold-glow-hover transition-all mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-heading text-xl tracking-wider text-white">MANASH <span className="text-gold">ELITE</span></span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-50">© 2026 All Rights Reserved</span>
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Youtube size={20} /></a>
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><MessageCircle size={20} /></a>
        </div>

        <div className="text-[10px] uppercase tracking-widest opacity-40">
          Built in Silence. Dominates in Public.
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, About, Services, Transformations, Testimonials, Pricing, CTA, Contact, Footer };
