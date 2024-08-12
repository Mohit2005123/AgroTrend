import React from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, AccordionItem } from '@nextui-org/react'; // Importing NextUI's Accordion component
import courses from '../data/courses.json'; // Adjust the path as needed
import MyNavbar from '../components/MyNavbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <MyNavbar /> {/* Add the Navbar */}
      <div className="max-w-3xl mx-auto my-8 p-4 pt-24"> {/* Adjust the top padding */}
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-xl mb-4">{course.description}</p>
        <p className="text-gray-500 mb-4">Language: {course.language}</p> {/* Display the language */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Course Content</h2>
          <p>{course.content}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Related Videos</h2>
          <Accordion>
            {course.videoIds.map((videoId, index) => (
              <AccordionItem key={index} title={`Video ${index + 1}`}>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${course.title} Video ${index + 1}`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer /> {/* Add the Footer */}
    </div>
  );
};

export default CourseDetails;
