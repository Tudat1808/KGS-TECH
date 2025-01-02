import React from 'react';
import { FaTrophy } from 'react-icons/fa'; // Import icon từ react-icons

const MilestoneProgress = () => {
  const milestones = [
    { title: 'Start', description: 'Journey begins', date: 'Jan 2023', completed: true, image: 'https://www.shutterstock.com/image-photo/excited-company-boss-team-leader-600nw-1206996322.jpg' },
    { title: 'Achievement 1', description: 'Completed first task', date: 'Mar 2023', completed: true, image: 'https://thecheapaccountingway.co.uk/wp-content/uploads/2024/01/joyful-multiracial-business-team-at-work-in-modern-2023-11-27-05-01-17-utc-1024x700.jpg' },
    { title: 'Achievement 2', description: 'Reached 100 points', date: 'Jun 2023', completed: false, image: 'https://img.lovepik.com/photo/50771/5496.jpg_wh860.jpg' },
    { title: 'Final Milestone', description: 'Completed the journey', date: 'Dec 2023', completed: false, image: 'https://s7d9.scene7.com/is/image/roberthalfintl/how_to_create_a_healthy_workplace_environment:Large-1x?fmt=webp-alpha' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl text-center font-semibold mb-8">Milestone Tracker</h2>
        <div className="relative">
          {/* Đoạn thẳng (line) thể hiện tiến trình */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

          {/* Flex column to organize milestones */}
          <div className="flex flex-col items-center space-y-8">
            {/* Cột mốc bên trái */}
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center space-x-8 w-full">
                {/* Cột mốc bên trái */}
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-300 ease-in-out ${
                    milestone.completed
                      ? 'border-green-500 bg-green-200 shadow-xl transform scale-110'
                      : 'border-gray-400 bg-gray-200 shadow-md'
                  } z-10 cursor-pointer`}
                >
                  <FaTrophy className={`text-xl ${milestone.completed ? 'text-green-600' : 'text-gray-500'}`} />
                </div>

                {/* Nội dung thành tựu bên trái */}
                <div className="flex flex-col items-start w-full md:w-2/3">
                  {/* Tiêu đề thành tựu */}
                  <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                  <p className="text-sm text-gray-500">{milestone.date}</p>

                  {/* Mô tả thành tựu nếu hoàn thành */}
                  {milestone.completed && (
                    <p className="text-lg text-gray-600">{milestone.description}</p>
                  )}
                </div>

                {/* Thêm ảnh bên phải */}
                <div className="w-1/3 hidden md:block">
                  <img
                    src={milestone.image} // Sử dụng image từ dữ liệu milestone
                    alt={milestone.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneProgress;
