import React, { useState, useEffect } from 'react';
import coursesData from './course.json';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  // Function to handle button click
  const handleButtonClick = (courseId) => {
    alert(`Button clicked for course with ID ${courseId}`);
    // You can perform any action you want here
  };

  return (
    <div className="course-list-container" style={{ display: 'flex', justifyContent: 'center'}}>
      <div className="course-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <h2 style={{ textAlign: 'center', width: '100%' }}>Computer Science Courses</h2>
        {courses.map(course => (
          <div key={course.id} className="course" style={{ border: '1px solid black', padding: '20px', margin: '10px', textAlign: 'center', width: '22%', minWidth: '200px' }}>
            <h3>{course.course_name}</h3>
            <p>{course.course_description}</p>
            <button
              onClick={() => handleButtonClick(course.id)}
              style={{ backgroundColor: 'blue', color: 'white' }}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
