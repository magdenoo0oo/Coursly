import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CourseProvider } from './contexts/CourseContext';
import { useScrollToTop } from './hooks/useScrollToTop';

// Pages
import LandingPage from './pages/LandingPage';
import CourseBuilder from './pages/CourseBuilder';
import CoursePreview from './pages/CoursePreview';
import ExportPage from './pages/ExportPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppContent() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/builder" element={<CourseBuilder />} />
        <Route path="/preview" element={<CoursePreview />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CourseProvider>
        <Router>
          <AppContent />
        </Router>
      </CourseProvider>
    </ThemeProvider>
  );
}

export default App;