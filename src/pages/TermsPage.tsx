import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 2025
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              By accessing and using Coursly ("Service"), you accept and agree to be bound by the 
              terms and provision of this agreement. This is a demonstration application created 
              for portfolio purposes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              2. Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Permission is granted to temporarily use Coursly for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 ml-6">
              <li className="mb-2">modify or copy the materials</li>
              <li className="mb-2">use the materials for any commercial purpose or for any public display</li>
              <li className="mb-2">attempt to reverse engineer any software contained in the Service</li>
              <li className="mb-2">remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              3. Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The materials on Coursly are provided on an 'as is' basis. Coursly makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other 
              warranties including without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of 
              intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              4. Limitations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              In no event shall Coursly or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business 
              interruption) arising out of the use or inability to use the materials on Coursly, 
              even if Coursly or a Coursly authorized representative has been notified orally or 
              in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              5. Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your privacy is important to us. Coursly stores course data locally in your browser 
              using localStorage. We do not collect, store, or transmit any personal information 
              to external servers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              6. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              These terms and conditions are governed by and construed in accordance with the 
              laws of the jurisdiction in which the service is provided and you irrevocably 
              submit to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us through 
              our website or support channels.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;