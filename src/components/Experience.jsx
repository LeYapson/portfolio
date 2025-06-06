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
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      
      {/* Points clés de l'expérience (optionnel) */}
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points && experience.points.slice(0, 2).map((point, index) => (
          <li key={`experience-point-${index}`} className="text-jetLight text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
      
      {/* Bouton explicite pour voir les détails */}
      <button 
        onClick={() => onOpenModal(experience.title, experience.company_name, experience.description)}
        className="mt-4 flex items-center gap-2 px-3 py-2 bg-jetLight text-white rounded-md hover:bg-battleGray transition duration-300 text-sm"
        aria-label={`Voir les détails de ${experience.title}`}
      >
        <span>Voir les détails</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
        </svg>
      </button>
    </div>
  </VerticalTimelineElement>
);

// Modal component amélioré
const Modal = ({ isOpen, onClose, title, company_name, description }) => {
  if (!isOpen) return null;

  // Animation et overlay améliorés
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300">
      <div className="absolute inset-0 bg-black bg-opacity-70" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto animate-modal-appear">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose} 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6 border-l-4 border-jetLight pl-4">
          <h2 className="text-3xl font-bold text-jetLight dark:text-white">{title}</h2>
          <h3 className="text-xl font-semibold text-dim dark:text-gray-300 mt-1">{company_name}</h3>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="whitespace-pre-line">{description}</p>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button 
            onClick={onClose} 
            className="bg-jetLight text-white py-2 px-6 rounded-md hover:bg-battleGray transition-colors duration-300 flex items-center gap-2"
          >
            <span>Fermer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Experience component
const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    company_name: '',
    description: '',
  });
  const [loadingResume, setLoadingResume] = useState(false);

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
                  setLoadingResume(true);
                  window.open(
                    'https://github.com/LeYapson/portfolio/blob/main/src/components/files/CVTheauYapi.pdf',
                    '_blank'
                  );
                  setTimeout(() => setLoadingResume(false), 1000);
                } catch (error) {
                  console.error('Error opening resume:', error);
                  setLoadingResume(false);
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
              {loadingResume ? 'Téléchargement...' : 'MY RESUME'}
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
