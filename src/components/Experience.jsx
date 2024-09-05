import React, { useState } from 'react'; // Import useState
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

// Modal component
const Modal = ({ isOpen, onClose, title, company_name, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-8 relative z-10 w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <h3 className="text-lg font-semibold mb-2">{company_name}</h3>
        <p className="text-gray-700 mb-6">{description}</p> {/* Affiche la description */}
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">
          Fermer
        </button>
      </div>
    </div>
  );
};

// Experience card component
const ExperienceCard = ({ experience, onOpenModal }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      {/* Titre cliquable */}
      <h3
        className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px] cursor-pointer"
        onClick={() => onOpenModal(experience.title, experience.company_name, experience.description)} // Ajout de l'événement onClick ici
      >
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      <div
        className="text-taupe text-[16px] font-poppins mt-2"
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
    </div>
  </VerticalTimelineElement>
);

// Main Experience component
const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    company_name: '',
    description: '',
  });

  const openModal = (title, company_name, description) => {
    setModalData({ title, company_name, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Ce que j'ai fait jusqu'à présent
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Expérience professionnelle.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              onOpenModal={openModal} // Passe la fonction pour ouvrir le modal
            />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => {
                try {
                  window.open(
                    'https://github.com/LeYapson/portfolio/blob/main/src/components/files/CVTheauYapi.pdf', //paste the link to your resume here
                    '_blank'
                  );
                } catch (error) {
                  console.error('Error opening resume:', error);
                }
              }}
              
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalData.title}
          company_name={modalData.company_name}
          description={modalData.description}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
