import React from "react";

const OurProjects = () => {
  const projects = [
    {
      img: "https://plus.unsplash.com/premium_photo-1664372145543-d60ba2756a7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D", // Thay đường dẫn ảnh tương ứng
      title: "Project 1",
      description:
        "Details 1",
    },
    {
      img: "https://img.freepik.com/premium-photo/woman-learn-teach-tutor-concept-education-helping-each-other-sitting-table-class-room_1423-3503.jpg", // Thay đường dẫn ảnh tương ứng
      title: "Project 2",
      description:
        "Details 2",
    },
    {
      img: "https://img.freepik.com/premium-photo/students-campus-helps-friend-catching-up-learning_1421-2728.jpg?semt=ais_hybrid", // Thay đường dẫn ảnh tương ứng
      title: "Project 3",
      description:
        "Details 3",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-72"> {/* Thay đổi padding tại đây */}
      <div className="text-left">
        <h2 className="text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Projects
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-center mb-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-80 h-80"
              />
            </div>
            <div className="text-left w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
