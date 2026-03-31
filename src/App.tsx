/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Navbar, 
  Hero, 
  About, 
  Services, 
  Transformations, 
  Testimonials, 
  Pricing, 
  CTA, 
  Contact, 
  Footer 
} from './components/Sections';

export default function App() {
  return (
    <main className="bg-dark min-h-screen selection:bg-gold selection:text-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Transformations />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
