// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-2">{course.description}</p>
      <p className="text-gray-500 mb-2">Language: {course.language}</p>
      <Link
        to={`/courses/${course.id}`}
        className="text-blue-500 hover:underline"
      >
        Learn More
      </Link>
    </div>
  );
};

export default CourseCard;
