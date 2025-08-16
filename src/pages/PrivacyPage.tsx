import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 2025
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Coursly is designed with privacy in mind. As a client-side application, we do not 
              collect or store any personal information on our servers. All course data you create 
              is stored locally in your browser's localStorage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. How We Use Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Since Coursly operates entirely in your browser, the information you enter (course 
              content, settings, etc.) is used solely to provide the course building functionality. 
              This data remains on your device and is not transmitted to any external servers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Data Storage and Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              All your course data is stored using your browser's localStorage feature. This means:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 ml-6">
              <li className="mb-2">Data remains on your device only</li>
              <li className="mb-2">No data is sent to our servers</li>
              <li className="mb-2">You have complete control over your data</li>
              <li className="mb-2">Clearing your browser data will remove stored courses</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Coursly may display content from third-party services (such as embedded videos from 
              YouTube). When you interact with such content, those third parties may collect 
              information according to their own privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. Cookies and Local Storage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Coursly uses localStorage to save your course data and theme preferences. We do not 
              use tracking cookies or any analytics services. The localStorage data includes:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 ml-6">
              <li className="mb-2">Course content and structure</li>
              <li className="mb-2">Theme preferences (light/dark mode)</li>
              <li className="mb-2">Application settings</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Since all data is stored locally on your device, you have complete control:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 ml-6">
              <li className="mb-2">You can export your course data at any time</li>
              <li className="mb-2">You can delete all stored data by clearing your browser storage</li>
              <li className="mb-2">You can use the application without creating any persistent data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We may update this privacy policy from time to time. Any changes will be reflected 
              on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please 
              contact us through our website.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Privacy by Design
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Coursly was built with privacy as a core principle. By keeping all data on your 
                device, we ensure that your course content and personal information remain private 
                and secure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;