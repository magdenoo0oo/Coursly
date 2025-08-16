import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { 
  Plus, 
  Save, 
  FileText, 
  Play, 
  Brain, 
  Download,
  Edit3,
  Trash2,
  GripVertical,
  Eye,
  Upload
} from 'lucide-react';
import { useCourse } from '../contexts/CourseContext';
import { Section, Unit, UnitType } from '../types/course';
import UnitEditor from '../components/UnitEditor';
import LoadingSpinner from '../components/LoadingSpinner';

const CourseBuilder = () => {
  const { course, isLoading, courseType, saveCourse, updateCourse, createNewCourse, switchCourse } = useCourse();
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [isEditingUnit, setIsEditingUnit] = useState(false);
  const [isEditingCourse, setIsEditingCourse] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No Course Found
          </h2>
          <button
            onClick={createNewCourse}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Create New Course
          </button>
        </div>
      </div>
    );
  }

  const getUnitIcon = (type: UnitType) => {
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

  const addNewSection = () => {
    const newSection: Section = {
      id: `section_${Date.now()}`,
      title: 'New Section',
      description: 'Section description',
      order: course.sections.length,
      units: []
    };

    updateCourse({
      sections: [...course.sections, newSection]
    });
  };

  const addNewUnit = (sectionId: string) => {
    const newUnit: Unit = {
      id: `unit_${Date.now()}`,
      title: 'New Unit',
      description: 'Unit description',
      type: 'article',
      duration: 5,
      order: 0,
      content: {
        article: {
          markdown: '# Welcome to your new unit\n\nStart writing your content here...'
        }
      }
    };

    const updatedSections = course.sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          units: [...section.units, { ...newUnit, order: section.units.length }]
        };
      }
      return section;
    });

    updateCourse({ sections: updatedSections });
  };

  const deleteSection = (sectionId: string) => {
    const updatedSections = course.sections.filter(section => section.id !== sectionId);
    updateCourse({ sections: updatedSections });
  };

  const deleteUnit = (sectionId: string, unitId: string) => {
    const updatedSections = course.sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          units: section.units.filter(unit => unit.id !== unitId)
        };
      }
      return section;
    });

    updateCourse({ sections: updatedSections });
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, type } = result;

    if (type === 'section') {
      const newSections = Array.from(course.sections);
      const [removed] = newSections.splice(source.index, 1);
      newSections.splice(destination.index, 0, removed);

      // Update order values
      const updatedSections = newSections.map((section, index) => ({
        ...section,
        order: index
      }));

      updateCourse({ sections: updatedSections });
    } else if (type === 'unit') {
      const sectionIndex = course.sections.findIndex(s => s.id === source.droppableId);
      if (sectionIndex === -1) return;

      const newUnits = Array.from(course.sections[sectionIndex].units);
      const [removed] = newUnits.splice(source.index, 1);
      newUnits.splice(destination.index, 0, removed);

      // Update order values
      const updatedUnits = newUnits.map((unit, index) => ({
        ...unit,
        order: index
      }));

      const updatedSections = [...course.sections];
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        units: updatedUnits
      };

      updateCourse({ sections: updatedSections });
    }
  };

  const handleUnitSave = (unit: Unit) => {
    const updatedSections = course.sections.map(section => ({
      ...section,
      units: section.units.map(u => u.id === unit.id ? unit : u)
    }));

    updateCourse({ sections: updatedSections });
    setSelectedUnit(null);
    setIsEditingUnit(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex h-screen">
        {/* Left Sidebar - Course Structure */}
        <div className="w-1/3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 overflow-y-auto shadow-lg">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Course Builder</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Design your course structure</p>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={courseType}
                  onChange={(e) => switchCourse(e.target.value as 'nextjs' | 'javascript')}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="nextjs">Next.js Course</option>
                  <option value="javascript">JavaScript Course</option>
                </select>
                <button
                  onClick={() => saveCourse(course)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </button>
              </div>
            </div>

            {/* Course Info */}
            <div className="mb-6">
              {isEditingCourse ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={course.title}
                    onChange={(e) => updateCourse({ title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <textarea
                    value={course.description}
                    onChange={(e) => updateCourse({ description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  />
                  <input
                    type="text"
                    value={course.instructor}
                    onChange={(e) => updateCourse({ instructor: e.target.value })}
                    placeholder="Instructor name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsEditingCourse(false)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditingCourse(false)}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="group cursor-pointer" onClick={() => setIsEditingCourse(true)}>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    by {course.instructor}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {course.description}
                  </p>
                  <Edit3 className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
          </div>

          {/* Sections */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sections</h3>
              <button
                onClick={addNewSection}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Section
              </button>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="sections" type="section">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {course.sections.map((section, sectionIndex) => (
                      <Draggable key={section.id} draggableId={section.id} index={sectionIndex}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <div {...provided.dragHandleProps}>
                                  <GripVertical className="w-4 h-4 text-gray-400 mr-2" />
                                </div>
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                  {section.title}
                                </h4>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => addNewUnit(section.id)}
                                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteSection(section.id)}
                                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <Droppable droppableId={section.id} type="unit">
                              {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                                  {section.units.map((unit, unitIndex) => (
                                    <Draggable key={unit.id} draggableId={unit.id} index={unitIndex}>
                                      {(provided) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          className="bg-white dark:bg-gray-800 rounded-lg p-3 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
                                          onClick={() => {
                                            setSelectedUnit(unit);
                                            setIsEditingUnit(true);
                                          }}
                                        >
                                          <div className="flex items-center">
                                            <div {...provided.dragHandleProps}>
                                              <GripVertical className="w-3 h-3 text-gray-400 mr-2" />
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400 mr-2">
                                              {getUnitIcon(unit.type)}
                                            </div>
                                            <div>
                                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {unit.title}
                                              </p>
                                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {unit.duration} min • {unit.type}
                                              </p>
                                            </div>
                                          </div>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              deleteUnit(section.id, unit.id);
                                            }}
                                            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </button>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>

        {/* Right Panel - Unit Editor or Welcome */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {selectedUnit && isEditingUnit ? (
            <UnitEditor
              unit={selectedUnit}
              onSave={handleUnitSave}
              onCancel={() => {
                setSelectedUnit(null);
                setIsEditingUnit(false);
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Edit3 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Build Your Course?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Select a unit from the left panel to start editing, or create new sections and units to structure your course.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={addNewSection}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Your First Section
                  </button>
                  <a
                    href="/preview"
                    className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-200 dark:border-gray-600"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Preview Course
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseBuilder;