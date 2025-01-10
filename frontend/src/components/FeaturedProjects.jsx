import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Animation from '../components/Animation';

const FeaturedProjects = () => {
  const { t } = useTranslation(); // Hook để lấy hàm t() từ i18next

  const projects = [
    {
      title: t('featured_projects.project1'),
      image: 'https://img.freepik.com/free-photo/portrait-female-pediatrician-work_23-2151686786.jpg?t=st=1736388494~exp=1736392094~hmac=94564228ec09f8576b94421d9f35d9a1934bd5748c001a50cf095ac8ec5ff6fa&w=1380',
    },
    {
      title: t('featured_projects.project2'),
      image: 'https://img.freepik.com/free-photo/hospital-doctor-nurse-successful-teamwork-asian-expert-person-smile-with-happiness-confident-with-clinic-background_609648-2388.jpg?t=st=1736390858~exp=1736394458~hmac=41cdeedb9518155b34eaefe38fa03500baa762ba3de4788a56a3f9cd58da7165&w=1380',
    },
    {
      title: t('featured_projects.project3'),
      image: 'https://img.freepik.com/free-photo/young-boy-is-waring-mask-feeling-chest-pain-sitting-hospital-meet-doctor_1150-21750.jpg?t=st=1736392848~exp=1736396448~hmac=c736652abe26c8073857bbefeb42cdac7a8294d00c5416afee8a3021596e6e87&w=1380',
    },
  ];

  return (
    <><Animation aosEffect="fade-up" aosDuration={1500}>
      <div className="bg-gray-800 text-white py-16" data-aos="fade-up">
        <h2 className="text-center text-4xl font-bold mb-12">{t('featured_projects.title')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
              <div
                  key={index}
                  className="relative w-full lg:w-[30%] h-[300px] bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${project.image})` }}
              >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/business">
              <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
              {t('featured_projects.more_projects')}
              </button>
          </Link>
        </div>
      </div>
    </Animation>
    </>
  );
};

export default FeaturedProjects;
