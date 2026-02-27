import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, CheckCircle, Star, Quote, ChevronDown, ExternalLink, X } from 'lucide-react';

const images = [
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/80c38a20-78c6-491f-a9f7-5088e690d678.png",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/0bf64e79-2c00-4f27-999b-b4c9f3b4d3b5.png",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e158276b-04fd-4842-a1d9-9eda539d00ed.png",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e181326f-6f8d-41fb-9b3e-e2fc6b2fbd9f.png",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/055411b1-3e5f-4ef0-9792-86436df6201d.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d92ecc74-b41e-4440-80c0-be654d5527c9.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/fbb3a5ad-ced9-4d0e-977c-7133f2ac1984.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/1c97d522-e9f7-43d3-a4fb-195b6e939c77.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ba944106-1ff1-4363-b152-5cfff6d7387b.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/c5405fe3-c96f-48f9-83ad-3b015a04af95.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/189db508-dbaf-43b4-a4de-e13389e88a20.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ae4bb5db-98da-445a-b6d3-d8943679bc78.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/65fc1630-61c2-4452-91b7-3cb26a1bf024.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/6b6ab3e0-f3c1-447a-b11d-e3803236e1be.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/8200406f-579c-43ce-93b5-48a6c15bb00f.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5bdf618d-7125-4ffa-8ff4-1658883ac9e6.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/444e24f0-50ba-4fd5-95bf-60f436f5617c.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/52cded0c-6c42-424a-8ec3-ac843541f832.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/6ce6ae77-dc76-4ddf-aba1-242ac00066cb.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/413890e6-ff4e-4fd0-977b-2f697fd0d507.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/3e1250e4-40a3-40b0-9a66-76fda3adbe5b.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/f802181b-902c-4f5e-a3ae-3485c5d70f57.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/20c6c250-f8c5-4c02-93d6-402e341b362d.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e37d7dfe-f2c0-42c4-ad60-ede4a19d2857.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/70a13dbc-1879-44ed-9464-2c5ddef06332.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/64ff7014-0ced-4fbe-a8af-589434c460c7.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/af866841-ed91-448c-8386-0788f2be1f4a.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/cd11ab7e-5b5f-40f3-bc45-7b271168cd50.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/f0ae21f7-1e44-4672-8010-860e78a00b47.jpg"
];

const reviews = [
  { name: "Sarah Jenkins", location: "New York, US", text: "Nitin's AI models completely transformed our e-commerce store. The realism is unmatched!", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Chen", location: "San Francisco, US", text: "Saved us thousands on photoshoots. The integration of our jewelry onto the AI models was flawless.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Emily Davis", location: "Chicago, US", text: "Incredible attention to detail. The lighting and shadows match perfectly.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "David Wilson", location: "Austin, US", text: "Fast turnaround and highly professional. Will definitely work with Nitin again.", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Jessica Taylor", location: "Miami, US", text: "The best AI product visualizer I've worked with. Highly recommended!", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  
  { name: "James Smith", location: "London, UK", text: "Absolutely brilliant work. The fashion models looked so real, our customers couldn't tell the difference.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Sophie Brown", location: "Manchester, UK", text: "Nitin is a wizard with AI and Photoshop. Our skincare line looks premium and luxurious.", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Oliver Jones", location: "London, UK", text: "Very impressed with the quick delivery and the quality of the scene matching.", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Charlotte Taylor", location: "Birmingham, UK", text: "A game-changer for our marketing campaigns. The versatile styles fit our brand perfectly.", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
  { name: "William Davies", location: "Edinburgh, UK", text: "Exceptional service and stunning visuals. Nitin understood exactly what we needed.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
  
  { name: "Rahul Sharma", location: "Mumbai, India", text: "Bohot hi badhiya kaam! The product integration was seamless and looked very natural.", avatar: "https://randomuser.me/api/portraits/men/82.jpg" },
  { name: "Priya Patel", location: "Delhi, India", text: "Nitin's work helped us launch our new clothing line without the hassle of a physical shoot.", avatar: "https://randomuser.me/api/portraits/women/89.jpg" },
  { name: "Amit Kumar", location: "Bangalore, India", text: "Top-notch quality and very responsive. The AI models are incredibly realistic.", avatar: "https://randomuser.me/api/portraits/men/71.jpg" },
  { name: "Sneha Gupta", location: "Hyderabad, India", text: "Great experience working with Nitin. He delivered exactly what was promised, on time.", avatar: "https://randomuser.me/api/portraits/women/76.jpg" },
  { name: "Vikram Singh", location: "Chennai, India", text: "Highly skilled professional. The shadows and lighting in the images were perfect.", avatar: "https://randomuser.me/api/portraits/men/64.jpg" },
  
  { name: "Robert Miller", location: "Seattle, US", text: "Stunning results! The tech accessories looked amazing in the AI-generated scenes.", avatar: "https://randomuser.me/api/portraits/men/17.jpg" },
  { name: "Emma Wilson", location: "London, UK", text: "Nitin's creativity and technical skills are outstanding. A true partner for our brand.", avatar: "https://randomuser.me/api/portraits/women/51.jpg" },
  { name: "Neha Reddy", location: "Pune, India", text: "We saw a significant increase in engagement after using Nitin's visuals.", avatar: "https://randomuser.me/api/portraits/women/62.jpg" },
  { name: "Daniel Anderson", location: "Boston, US", text: "Flawless execution. The editorial style images were exactly what we were looking for.", avatar: "https://randomuser.me/api/portraits/men/91.jpg" },
  { name: "Chloe Thomas", location: "Leeds, UK", text: "Professional, fast, and incredibly talented. Highly recommend Nitin's services.", avatar: "https://randomuser.me/api/portraits/women/9.jpg" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-gold/30 selection:text-gold">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-xl tracking-wider font-semibold">NITIN KUMAR</div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/70">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="border border-white/20 px-5 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A] z-10" />
          <img 
            src={images[0]} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeIn} className="text-gold uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              Creative Partner for AI-Powered Product Visuals
            </motion.p>
            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
              Stunning <span className="italic text-white/80">Realistic</span><br />
              AI Models & Scenes
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Seamlessly integrating your products into any scene or model using advanced AI tools and Photoshop techniques.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="bg-white text-black px-8 py-4 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">
                View Portfolio
              </a>
              <a href="#contact" className="border border-white/20 px-8 py-4 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeIn} className="font-serif text-4xl md:text-5xl mb-8">
                Hi, I'm <span className="italic">Nitin Kumar</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/70 text-lg leading-relaxed mb-8">
                I specialize in creating stunning, realistic AI-generated models and seamlessly integrating your products into any scene or model using advanced AI tools and Photoshop techniques.
              </motion.p>
              
              <motion.div variants={fadeIn} className="space-y-6 mb-12">
                <h3 className="text-xl font-serif italic text-gold">What I Do</h3>
                <ul className="space-y-4">
                  {[
                    "AI Model Creation – Realistic AI models wearing your clothing or showcasing your products (adults, children, all styles)",
                    "Product Integration – Place your product on any model or inside any scene – jewelry, fashion, skincare, tech, accessories & more",
                    "Scene Matching – Perfect shadows, lighting, colors & surfaces for natural-looking results",
                    "Versatile Styles – E-commerce, editorial, lifestyle, fashion – whatever your brand needs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn} className="bg-[#141414] p-10 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-serif mb-8 relative z-10">Why Work With Me?</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Save time & money</h4>
                    <p className="text-white/60 text-sm">No expensive photoshoots needed</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Fully customizable</h4>
                    <p className="text-white/60 text-sm">To match your exact brand vision</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">High-quality delivery</h4>
                    <p className="text-white/60 text-sm">Polished, professional, and realistic</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span className="text-xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Quick turnaround</h4>
                    <p className="text-white/60 text-sm">With meticulous attention to detail</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Selected <span className="italic">Works</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">A showcase of AI-generated models and seamless product integrations across various industries.</p>
          </motion.div>

          <div className="masonry-grid">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 5) * 0.1 }}
                className="masonry-item relative group cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Portfolio piece ${index + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Client <span className="italic">Testimonials</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">Hear what brands from the US, UK, India, and around the world have to say about my work.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="bg-[#141414] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full"
              >
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-medium text-sm">{review.name}</h4>
                    <p className="text-white/50 text-xs">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="font-serif text-5xl md:text-7xl mb-6">
              Let's <span className="italic text-gold">Create</span> Together
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/60 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
              Ready to elevate your product visuals? Get in touch to discuss your project requirements.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="tel:+918280132753" 
                className="flex items-center gap-4 bg-[#141414] border border-white/10 hover:border-gold/50 px-8 py-6 rounded-2xl transition-all w-full sm:w-auto group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-lg font-medium tracking-wide">+91 82801 32753</p>
                </div>
              </a>
              
              <a 
                href="mailto:nitinkumar56jk@gmail.com" 
                className="flex items-center gap-4 bg-[#141414] border border-white/10 hover:border-gold/50 px-8 py-6 rounded-2xl transition-all w-full sm:w-auto group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-lg font-medium tracking-wide">nitinkumar56jk@gmail.com</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Nitin Kumar. All rights reserved.</p>
      </footer>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged portfolio piece" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
