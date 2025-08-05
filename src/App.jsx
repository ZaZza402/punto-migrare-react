import React, { useEffect, Suspense, lazy } from 'react'; // 1. IMPORT Suspense and lazy
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import AnimatedPage from './components/AnimatedPage';
import LoadingSpinner from './components/LoadingSpinner'; // 2. IMPORT THE SPINNER

// 3. LAZILY LOAD ALL PAGE COMPONENTS
// This tells React to only download the code for a page when it's first needed.
const Home = lazy(() => import('./pages/Home'));
const ImmigrationServices = lazy(() => import('./pages/ImmigrationServices'));
const CafPatronatoServices = lazy(() => import('./pages/CafPatronatoServices'));
const DomesticWorkersServices = lazy(() => import('./pages/DomesticWorkersServices'));
const DocumentsPage = lazy(() => import('./pages/DocumentsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });
  }, []);

  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      {/* 4. WRAP THE ENTIRE ROUTE SYSTEM WITH <Suspense> */}
      {/* The 'fallback' prop is what React will render while waiting for a lazy component to load. */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/servizi-immigrazione" element={<AnimatedPage><ImmigrationServices /></AnimatedPage>} />
            <Route path="/servizi-caf-patronato" element={<AnimatedPage><CafPatronatoServices /></AnimatedPage>} />
            <Route path="/servizi-collaboratori-domestici" element={<AnimatedPage><DomesticWorkersServices /></AnimatedPage>} />
            <Route path="/documenti" element={<AnimatedPage><DocumentsPage /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;