import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import Button from './ui/Button';

// Modal component amélioré
const Modal = ({ isOpen, onClose, title, company_name, description }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
          p-8 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto
          border border-gray-200 dark:border-gray-700"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {title}
            </h2>
            <p className="text-lg text-primary font-semibold">
              {company_name}
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </Button>
        </div>

        {/* Content */}
        <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
          <p className="whitespace-pre-line">{description}</p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">
          <Button onClick={onClose} variant="primary">
            Fermer
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Experience card component
const ExperienceCard = ({ experience, onOpenModal }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
      backdropFilter: 'blur(10px)',
      color: '#374151',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.2)',
    }}
    contentArrowStyle={{
      borderRight: '7px solid rgba(99, 102, 241, 0.8)',
    }}
    date={
      <div className="text-gray-600 dark:text-gray-300">
        <h3 className="text-[16px] font-bold font-poppins">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ 
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)'
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain filter brightness-0 invert"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-gray-800 dark:text-white text-[20px] font-bold mb-2">
        {experience.title}
      </h3>
      <p className="text-primary text-[16px] font-semibold mb-4">
        {experience.company_name}
      </p>
      
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points && experience.points.slice(0, 2).map((point, index) => (
          <li key={`experience-point-${index}`} 
            className="text-gray-600 dark:text-gray-300 text-[14px] pl-1">
            {point}
          </li>
        ))}
      </ul>
      
      <div className="mt-4">
        <Button
          onClick={() => onOpenModal(experience.title, experience.company_name, experience.description)}
          variant="primary"
          size="sm"
          icon="👀"
        >
          Voir les détails
        </Button>
      </div>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', company_name: '', description: '' });

  const openModal = (title, company_name, description) => {
    setModalData({ isOpen: true, title, company_name, description });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: '', company_name: '', description: '' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 
      py-20 relative">
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-600 dark:text-gray-400`}>
          Ce que j'ai fait jusqu'à présent
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-gray-800 dark:text-white`}>
          Expériences professionnelles
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onOpenModal={openModal}
            />
          ))}
        </VerticalTimeline>
      </div>

      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        company_name={modalData.company_name}
        description={modalData.description}
      />
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
