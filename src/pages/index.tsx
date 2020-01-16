import React from 'react';

import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import SEO from '../components/SEO';
import StackSection from '../components/StackSection';
import WorkSection from '../components/WorkSection';

const Index: React.FC = () => (
  <>
    <SEO />
    <HomeSection />
    <StackSection />
    <WorkSection />
    <Footer />
  </>
);

export default Index;
