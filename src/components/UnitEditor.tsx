import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, X, Plus, Trash2, Eye, EyeOff, Play, ExternalLink } from 'lucide-react';
import { Unit, UnitType, Question } from '../types/course';
import ReactMarkdown from 'react-markdown';

interface UnitEditorProps {
  unit: Unit;
  onSave: (unit: Unit) => void;
  onCancel: () => void;
}

const UnitEditor: React.FC<UnitEditorProps> = ({ unit, onSave, onCancel }) => {
  const [editedUnit, setEditedUnit] = useState<Unit>(unit);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

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

  const handleTypeChange = (type: UnitType) => {
    const newContent = { ...editedUnit.content };
    
    // Initialize content for new type
    switch (type) {
      case 'video':
        newContent.video = { url: '', provider: 'youtube' };
        break;
      case 'article':
        newContent.article = { markdown: '# New Article\n\nStart writing your content here...' };
        break;
      case 'quiz':
        newContent.quiz = {
          questions: [{
            id: `q_${Date.now()}`,
            type: 'multiple-choice',
            question: 'Enter your question here',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            correctAnswer: 0,
            explanation: 'Explanation for the correct answer'
          }],
          passingScore: 70
        };
        break;
      case 'file':
        newContent.file = { filename: 'document.pdf', url: '#', size: '2.1 MB' };
        break;
    }

    setEditedUnit({
      ...editedUnit,
      type,
      content: newContent
    });
  };

  const addQuestion = () => {
    if (!editedUnit.content.quiz) return;

    const newQuestion: Question = {
      id: `q_${Date.now()}`,
      type: 'multiple-choice',
      question: 'Enter your question here',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 0,
      explanation: 'Explanation for the correct answer'
    };

    setEditedUnit({
      ...editedUnit,
      content: {
        ...editedUnit.content,
        quiz: {
          ...editedUnit.content.quiz,
          questions: [...editedUnit.content.quiz.questions, newQuestion]
        }
      }
    });
  };

  const updateQuestion = (index: number, field: string, value: any) => {
    if (!editedUnit.content.quiz) return;

    const updatedQuestions = [...editedUnit.content.quiz.questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };

    setEditedUnit({
      ...editedUnit,
      content: {
        ...editedUnit.content,
        quiz: {
          ...editedUnit.content.quiz,
          questions: updatedQuestions
        }
      }
    });
  };

  const updateQuestionOption = (questionIndex: number, optionIndex: number, value: string) => {
    if (!editedUnit.content.quiz) return;

    const updatedQuestions = [...editedUnit.content.quiz.questions];
    const updatedOptions = [...(updatedQuestions[questionIndex].options || [])];
    updatedOptions[optionIndex] = value;
    updatedQuestions[questionIndex] = { ...updatedQuestions[questionIndex], options: updatedOptions };

    setEditedUnit({
      ...editedUnit,
      content: {
        ...editedUnit.content,
        quiz: {
          ...editedUnit.content.quiz,
          questions: updatedQuestions
        }
      }
    });
  };

  const removeQuestion = (index: number) => {
    if (!editedUnit.content.quiz) return;

    const updatedQuestions = editedUnit.content.quiz.questions.filter((_, i) => i !== index);

    setEditedUnit({
      ...editedUnit,
      content: {
        ...editedUnit.content,
        quiz: {
          ...editedUnit.content.quiz,
          questions: updatedQuestions
        }
      }
    });
  };

  const renderContentEditor = () => {
    switch (editedUnit.type) {
      case 'video':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Video URL
              </label>
              <input
                type="url"
                value={editedUnit.content.video?.url || ''}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    video: { ...editedUnit.content.video, url: e.target.value, provider: 'youtube' }
                  }
                })}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              {editedUnit.content.video?.url && (
                <div className="mt-3">
                  {getYouTubeEmbedUrl(editedUnit.content.video.url) ? (
                    <div className="space-y-2">
                      <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                        <Play className="w-4 h-4 mr-2" />
                        Valid YouTube URL - Video will embed properly
                      </div>
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <iframe
                          src={getYouTubeEmbedUrl(editedUnit.content.video.url)!}
                          title="Video Preview"
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center text-yellow-600 dark:text-yellow-400 text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Invalid YouTube URL - Please check the format
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Thumbnail URL (Optional)
              </label>
              <input
                type="url"
                value={editedUnit.content.video?.thumbnail || ''}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    video: { ...editedUnit.content.video, thumbnail: e.target.value, provider: 'youtube', url: editedUnit.content.video?.url || '' }
                  }
                })}
                placeholder="https://example.com/thumbnail.jpg"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        );

      case 'article':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Content (Markdown)
              </label>
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm flex items-center"
              >
                {isPreviewMode ? <Eye className="w-4 h-4 mr-1" /> : <EyeOff className="w-4 h-4 mr-1" />}
                {isPreviewMode ? 'Edit' : 'Preview'}
              </button>
            </div>
            
            {isPreviewMode ? (
              <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 bg-white dark:bg-gray-700 prose dark:prose-invert max-w-none">
                <ReactMarkdown>{editedUnit.content.article?.markdown || ''}</ReactMarkdown>
              </div>
            ) : (
              <textarea
                value={editedUnit.content.article?.markdown || ''}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    article: { markdown: e.target.value }
                  }
                })}
                rows={12}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
                placeholder="# Your Article Title&#10;&#10;Start writing your content here using Markdown..."
              />
            )}
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">Quiz Questions</h4>
              <button
                onClick={addQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Question
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Passing Score (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={editedUnit.content.quiz?.passingScore || 70}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    quiz: { ...editedUnit.content.quiz, passingScore: parseInt(e.target.value) || 70, questions: editedUnit.content.quiz?.questions || [] }
                  }
                })}
                className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {editedUnit.content.quiz?.questions.map((question, qIndex) => (
              <div key={question.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <h5 className="font-medium text-gray-900 dark:text-white">Question {qIndex + 1}</h5>
                  <button
                    onClick={() => removeQuestion(qIndex)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Question Type
                    </label>
                    <select
                      value={question.type}
                      onChange={(e) => updateQuestion(qIndex, 'type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="multiple-choice">Multiple Choice</option>
                      <option value="true-false">True/False</option>
                      <option value="fill-in-blank">Fill in the Blank</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Question Text
                    </label>
                    <textarea
                      value={question.question}
                      onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  {question.type === 'multiple-choice' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Options
                      </label>
                      <div className="space-y-2">
                        {(question.options || []).map((option, oIndex) => (
                          <div key={oIndex} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              checked={question.correctAnswer === oIndex}
                              onChange={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                              className="text-blue-600"
                            />
                            <input
                              type="text"
                              value={option}
                              onChange={(e) => updateQuestionOption(qIndex, oIndex, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder={`Option ${oIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {question.type === 'true-false' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Correct Answer
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`tf-${qIndex}`}
                            checked={question.correctAnswer === 'true'}
                            onChange={() => updateQuestion(qIndex, 'correctAnswer', 'true')}
                            className="text-blue-600 mr-2"
                          />
                          True
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`tf-${qIndex}`}
                            checked={question.correctAnswer === 'false'}
                            onChange={() => updateQuestion(qIndex, 'correctAnswer', 'false')}
                            className="text-blue-600 mr-2"
                          />
                          False
                        </label>
                      </div>
                    </div>
                  )}

                  {question.type === 'fill-in-blank' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Correct Answer
                      </label>
                      <input
                        type="text"
                        value={question.correctAnswer as string}
                        onChange={(e) => updateQuestion(qIndex, 'correctAnswer', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter the correct answer"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Explanation (Optional)
                    </label>
                    <textarea
                      value={question.explanation || ''}
                      onChange={(e) => updateQuestion(qIndex, 'explanation', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Explain why this is the correct answer..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'file':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File Name
              </label>
              <input
                type="text"
                value={editedUnit.content.file?.filename || ''}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    file: { ...editedUnit.content.file, filename: e.target.value, url: editedUnit.content.file?.url || '#' }
                  }
                })}
                placeholder="document.pdf"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File URL
              </label>
              <input
                type="url"
                value={editedUnit.content.file?.url || ''}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    file: { ...editedUnit.content.file, url: e.target.value, filename: editedUnit.content.file?.filename || '' }
                  }
                })}
                placeholder="https://example.com/file.pdf"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              {editedUnit.content.file?.url && editedUnit.content.file.url !== '#' && (
                <div className="mt-2 flex items-center text-green-600 dark:text-green-400 text-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  File URL is valid - Download will work in preview
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File Size
              </label>
              <input
                type="text"
                value={editedUnit.content.file?.size || ''}
                onChange={(e) => setEditedUnit({
                  ...editedUnit,
                  content: {
                    ...editedUnit.content,
                    file: { ...editedUnit.content.file, size: e.target.value, filename: editedUnit.content.file?.filename || '', url: editedUnit.content.file?.url || '#' }
                  }
                })}
                placeholder="2.1 MB"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            {/* File Preview */}
            {editedUnit.content.file?.filename && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">File Preview</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Download className="w-8 h-8 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {editedUnit.content.file.filename}
                      </p>
                      {editedUnit.content.file.size && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {editedUnit.content.file.size}
                        </p>
                      )}
                    </div>
                  </div>
                  {editedUnit.content.file.url && editedUnit.content.file.url !== '#' && (
                    <a
                      href={editedUnit.content.file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Test Download
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return <div>Unknown unit type</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="h-full bg-white dark:bg-gray-800 flex flex-col shadow-xl border-l border-gray-200 dark:border-gray-700"
    >
      <div className="border-b border-gray-200 dark:border-gray-700 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Unit</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Customize your unit content and settings</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onSave(editedUnit)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Unit
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Basic Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Unit Title
              </label>
              <input
                type="text"
                value={editedUnit.title}
                onChange={(e) => setEditedUnit({ ...editedUnit, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={editedUnit.duration}
                onChange={(e) => setEditedUnit({ ...editedUnit, duration: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={editedUnit.description}
              onChange={(e) => setEditedUnit({ ...editedUnit, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Unit Type Selector */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Unit Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(['video', 'article', 'quiz', 'file'] as UnitType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`p-3 rounded-lg border-2 transition-colors capitalize ${
                    editedUnit.type === type
                      ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-600 dark:text-blue-400 shadow-md'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:shadow-sm'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {editedUnit.type === 'video' && 'Video Settings'}
              {editedUnit.type === 'article' && 'Article Content'}
              {editedUnit.type === 'quiz' && 'Quiz Configuration'}
              {editedUnit.type === 'file' && 'File Settings'}
            </h3>
            {renderContentEditor()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UnitEditor;