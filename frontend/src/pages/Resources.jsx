import React from 'react';
import CourseCard from '../components/CourseCard';
import courses from '../data/courses.json'; // Adjust the path as needed
import MyNavbar from '../components/MyNavbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component

const Resources = () => {
  return (
    <div>
      <MyNavbar /> {/* Add the Navbar */}
      <div className="max-w-4xl mx-auto my-8 p-4 pt-16"> {/* Add padding to avoid overlap */}
        <h1 className="text-4xl font-bold mb-6">Farming Resources</h1>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Footer /> {/* Add the Footer */}
    </div>
  );
};

export default Resources;
