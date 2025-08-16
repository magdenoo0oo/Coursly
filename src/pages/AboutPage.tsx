import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Lightbulb, Target, Globe, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Educational Excellence',
      description: 'Built by educators, for educators. We understand the challenges of creating engaging online content.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description: 'Developed with feedback from thousands of instructors and content creators worldwide.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Made with Love',
      description: 'Every feature is crafted with care to provide the best course creation experience.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Constantly evolving with the latest in educational technology and user experience design.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Started with a vision to democratize online education' },
    { year: '2021', title: 'First 1K Users', description: 'Reached our first thousand course creators' },
    { year: '2022', title: 'Global Expansion', description: 'Launched in 50+ countries worldwide' },
    { year: '2023', title: 'AI Integration', description: 'Introduced smart course building features' },
    { year: '2024', title: '50K Courses', description: 'Celebrated 50,000 courses created on our platform' },
    { year: '2025', title: 'The Future', description: 'Continuing to innovate and transform education' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Coursly
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering educators and content creators to build amazing online courses 
            with an intuitive, powerful, and completely free platform.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At Coursly, we believe that knowledge should be accessible to everyone. Our mission is to 
              democratize online education by providing powerful, easy-to-use tools that enable anyone 
              to create professional-quality online courses.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you're a seasoned educator, subject matter expert, or passionate hobbyist, 
              Coursly gives you the tools to share your knowledge with the world in an engaging, 
              structured format that truly makes a difference.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-8">
            <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Journey
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What Drives Us
            </h2>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We're passionate about removing barriers to education. Every feature we build, every decision we make, 
              is guided by our commitment to making course creation accessible, enjoyable, and effective.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  For Educators
                </h4>
                <p className="text-blue-800 dark:text-blue-200">
                  We understand the challenges of modern education and provide tools that let you focus on what matters most - teaching.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                  For Learners
                </h4>
                <p className="text-green-800 dark:text-green-200">
                  Every course built with Coursly is designed to provide engaging, effective learning experiences that stick.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Old Mission Section - Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Coursly
            </h2>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              In a world full of complex course creation tools, we chose simplicity without sacrificing power. 
              Coursly combines enterprise-grade features with an interface so intuitive, you'll be creating 
              professional courses within minutes of signing up.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Our Promise
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We're committed to keeping Coursly accessible, powerful, and constantly evolving. 
                Your success as an educator is our success, and we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legacy Mission Section - Removed duplicate content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            At Coursly, we believe that knowledge should be accessible to everyone. Our mission is to 
            democratize online education by providing powerful, easy-to-use tools that enable anyone 
            to create professional-quality online courses.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Whether you're a seasoned educator, subject matter expert, or passionate hobbyist, 
            Coursly gives you the tools to share your knowledge with the world in an engaging, 
            structured format.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            The Coursly Story
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Coursly was born out of frustration with existing course creation platforms that were 
              either too complex for beginners or too limited for advanced users. We noticed that 
              many talented educators and experts had valuable knowledge to share but were held back 
              by technical barriers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our team of designers, developers, and educators came together with a simple goal: 
              create a course building platform that is both powerful and accessible. We wanted to 
              remove the technical complexity while maintaining the flexibility that serious course 
              creators need.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Today, Coursly serves thousands of educators worldwide, from university professors 
              creating supplementary materials to industry experts sharing their knowledge through 
              comprehensive training programs.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Values
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-r-lg py-4 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Accessibility First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe education should be accessible to everyone, regardless of technical skill 
                or budget. That's why Coursly is free and designed to be intuitive for users of all levels.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6 hover:bg-green-50 dark:hover:bg-green-900/10 rounded-r-lg py-4 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to helping creators build high-quality educational content that 
                truly makes a difference in learners' lives.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 hover:bg-purple-50 dark:hover:bg-purple-900/10 rounded-r-lg py-4 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The world of online education is constantly evolving, and so are we. We're always 
                looking for ways to improve and add new features that matter to our users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;