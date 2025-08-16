import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  FileText, 
  Brain, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Clock,
  User,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { useCourse } from '../contexts/CourseContext';
import { Unit, Section } from '../types/course';
import ReactMarkdown from 'react-markdown';
import LoadingSpinner from '../components/LoadingSpinner';

const CoursePreview = () => {
  const { course, isLoading } = useCourse();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
  const [completedUnits, setCompletedUnits] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, any>>({});
  const [showQuizResults, setShowQuizResults] = useState<Record<string, boolean>>({});

  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Helper function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : null;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!course || course.sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No Course Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Create a course in the builder to preview it here.
          </p>
          <a
            href="/builder"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Course Builder
          </a>
        </div>
      </div>
    );
  }

  const currentSection = course.sections[currentSectionIndex];
  const currentUnit = currentSection?.units[currentUnitIndex];

  const totalUnits = course.sections.reduce((total, section) => total + section.units.length, 0);
  const completedCount = completedUnits.length;
  const progressPercentage = totalUnits > 0 ? (completedCount / totalUnits) * 100 : 0;

  const getUnitIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'article':
        return <FileText className="w-4 h-4" />;
      case 'quiz':
        return <Brain className="w-4 h-4" />;
      case 'file':
        return <Download className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const markUnitComplete = () => {
    if (currentUnit && !completedUnits.includes(currentUnit.id)) {
      setCompletedUnits([...completedUnits, currentUnit.id]);
    }
  };

  const navigateToUnit = (sectionIndex: number, unitIndex: number) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentUnitIndex(unitIndex);
  };

  const navigateNext = () => {
    const currentSectionUnits = currentSection.units.length;
    
    if (currentUnitIndex < currentSectionUnits - 1) {
      setCurrentUnitIndex(currentUnitIndex + 1);
    } else if (currentSectionIndex < course.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentUnitIndex(0);
    }
  };

  const navigatePrevious = () => {
    if (currentUnitIndex > 0) {
      setCurrentUnitIndex(currentUnitIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      const prevSection = course.sections[currentSectionIndex - 1];
      setCurrentUnitIndex(prevSection.units.length - 1);
    }
  };

  const hasNext = currentSectionIndex < course.sections.length - 1 || currentUnitIndex < currentSection.units.length - 1;
  const hasPrevious = currentSectionIndex > 0 || currentUnitIndex > 0;

  const handleQuizAnswer = (questionId: string, answer: any) => {
    setQuizAnswers({
      ...quizAnswers,
      [`${currentUnit?.id}_${questionId}`]: answer
    });
  };

  const submitQuiz = () => {
    if (!currentUnit?.content.quiz) return;
    
    let correct = 0;
    currentUnit.content.quiz.questions.forEach((question) => {
      const userAnswer = quizAnswers[`${currentUnit.id}_${question.id}`];
      if (userAnswer === question.correctAnswer) {
        correct++;
      }
    });

    const score = (correct / currentUnit.content.quiz.questions.length) * 100;
    setShowQuizResults({
      ...showQuizResults,
      [currentUnit.id]: true
    });

    if (score >= (currentUnit.content.quiz.passingScore || 70)) {
      markUnitComplete();
    }
  };

  const getQuizScore = () => {
    if (!currentUnit?.content.quiz) return 0;
    
    let correct = 0;
    currentUnit.content.quiz.questions.forEach((question) => {
      const userAnswer = quizAnswers[`${currentUnit.id}_${question.id}`];
      if (userAnswer === question.correctAnswer) {
        correct++;
      }
    });

    return (correct / currentUnit.content.quiz.questions.length) * 100;
  };

  const renderUnitContent = () => {
    if (!currentUnit) return null;

    switch (currentUnit.type) {
      case 'video':
        return (
          <div className="space-y-4">
            {currentUnit.content.video?.url ? (
              <div className="space-y-4">
                {getYouTubeEmbedUrl(currentUnit.content.video.url) ? (
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={getYouTubeEmbedUrl(currentUnit.content.video.url)!}
                      title={currentUnit.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg mb-2">Video Player</p>
                      <p className="text-sm opacity-75 mb-4">Invalid YouTube URL</p>
                      <a
                        href={currentUnit.content.video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Original Link
                      </a>
                    </div>
                  </div>
                )}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Video Information
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {currentUnit.duration} minutes
                    </div>
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Provider: YouTube
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Play className="w-12 h-12 mx-auto mb-2" />
                  <p>No video URL provided</p>
                </div>
              </div>
            )}
            <button
              onClick={markUnitComplete}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark as Complete
            </button>
          </div>
        );

      case 'article':
        return (
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{currentUnit.content.article?.markdown || ''}</ReactMarkdown>
            </div>
            <button
              onClick={markUnitComplete}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark as Complete
            </button>
          </div>
        );

      case 'quiz':
        const quizResults = showQuizResults[currentUnit.id];
        const score = getQuizScore();

        return (
          <div className="space-y-6">
            {currentUnit.content.quiz?.questions.map((question, index) => (
              <div key={question.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {index + 1}. {question.question}
                </h4>

                {question.type === 'multiple-choice' && (
                  <div className="space-y-2">
                    {(question.options || []).map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={quizAnswers[`${currentUnit.id}_${question.id}`] === optionIndex}
                          onChange={() => handleQuizAnswer(question.id, optionIndex)}
                          disabled={quizResults}
                          className="text-blue-600 mr-3"
                        />
                        <span className={`${
                          quizResults && question.correctAnswer === optionIndex
                            ? 'text-green-600 font-medium'
                            : quizResults && quizAnswers[`${currentUnit.id}_${question.id}`] === optionIndex && question.correctAnswer !== optionIndex
                            ? 'text-red-600'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {question.type === 'true-false' && (
                  <div className="space-y-2">
                    {['true', 'false'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={quizAnswers[`${currentUnit.id}_${question.id}`] === option}
                          onChange={() => handleQuizAnswer(question.id, option)}
                          disabled={quizResults}
                          className="text-blue-600 mr-3"
                        />
                        <span className={`capitalize ${
                          quizResults && question.correctAnswer === option
                            ? 'text-green-600 font-medium'
                            : quizResults && quizAnswers[`${currentUnit.id}_${question.id}`] === option && question.correctAnswer !== option
                            ? 'text-red-600'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {question.type === 'fill-in-blank' && (
                  <input
                    type="text"
                    value={quizAnswers[`${currentUnit.id}_${question.id}`] || ''}
                    onChange={(e) => handleQuizAnswer(question.id, e.target.value)}
                    disabled={quizResults}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your answer"
                  />
                )}

                {quizResults && question.explanation && (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {!quizResults ? (
              <button
                onClick={submitQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Submit Quiz
              </button>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Quiz Results
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You scored {score.toFixed(1)}% ({Math.round(score * (currentUnit.content.quiz?.questions.length || 0) / 100)} out of {currentUnit.content.quiz?.questions.length} questions correct)
                </p>
                {score >= (currentUnit.content.quiz?.passingScore || 70) ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">Passed! You've completed this quiz.</span>
                  </div>
                ) : (
                  <div className="text-yellow-600">
                    <span className="font-medium">
                      You need {(currentUnit.content.quiz?.passingScore || 70)}% to pass. Try reviewing the material and retake the quiz.
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'file':
        return (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-600">
              <Download className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {currentUnit.content.file?.filename || 'Download File'}
              </h4>
              {currentUnit.content.file?.size && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Size: {currentUnit.content.file.size}
                </p>
              )}
              {currentUnit.content.file?.url && currentUnit.content.file.url !== '#' ? (
                <a
                  href={currentUnit.content.file.url}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={currentUnit.content.file.filename}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download File
                </a>
              ) : (
                <div className="space-y-3">
                  <button
                    disabled
                    className="bg-gray-400 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center cursor-not-allowed"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    No File Available
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    File URL not provided or is a placeholder
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={markUnitComplete}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark as Complete
            </button>
          </div>
        );

      default:
        return <div>Unknown unit type</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex h-screen">
        {/* Left Sidebar - Course Navigation */}
        <div className="w-1/3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 overflow-y-auto shadow-lg">
          <div className="p-6">
            {/* Course Header */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {course.instructor}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.sections.reduce((total, section) => 
                    total + section.units.reduce((sTotal, unit) => sTotal + unit.duration, 0), 0
                  )} min
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{completedCount}/{totalUnits} units</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Course Sections */}
            <div className="space-y-4">
              {course.sections.map((section, sectionIndex) => (
                <div key={section.id} className="space-y-2">
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                    Section {sectionIndex + 1}: {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.units.map((unit, unitIndex) => {
                      const isCurrentUnit = currentSectionIndex === sectionIndex && currentUnitIndex === unitIndex;
                      const isCompleted = completedUnits.includes(unit.id);
                      
                      return (
                        <button
                          key={unit.id}
                          onClick={() => navigateToUnit(sectionIndex, unitIndex)}
                          className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                            isCurrentUnit
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shadow-md'
                              : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:shadow-sm transition-all duration-200'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className="mr-3">
                              {getUnitIcon(unit.type)}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{unit.title}</p>
                              <p className="text-xs opacity-75">{unit.duration} min</p>
                            </div>
                          </div>
                          {isCompleted && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Content Header */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Section {currentSectionIndex + 1}: {currentSection?.title}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentUnit?.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {currentUnit?.description}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={navigatePrevious}
                  disabled={!hasPrevious}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={navigateNext}
                  disabled={!hasNext}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Unit Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <motion.div
              key={currentUnit?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            >
              {renderUnitContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;