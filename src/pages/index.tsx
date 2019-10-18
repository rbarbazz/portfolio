import * as React from 'react';

import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import SEO from '../components/SEO';
import TechnoSection from '../components/TechnoSection';
import WorkSection from '../components/WorkSection';

const Index = () => (
  <>
    <SEO />
    <HomeSection />
    <TechnoSection />
    <WorkSection />
    <Footer />
  </>
);

export default Index;
