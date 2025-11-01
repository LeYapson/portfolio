import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import axios from 'axios';
import { projects } from '../constants';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  index,
  active,
  handleClick,
  tags = [], // Ajout d'une valeur par défaut
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="group relative"
    >
      <div className="bg-white/30 dark:bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/40 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 sm:w-[360px] w-full">
        
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(repo, '_blank')}
              className="bg-black/80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/90 transition-colors duration-300"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-gray-800 dark:text-white font-bold text-[24px] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-medium px-3 py-1 rounded-full bg-gradient-to-r ${tag.color} text-white shadow-lg`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Effet de brillance au hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Nom d'utilisateur GitHub
  const username = "LeYapson";
  
  const fetchProjects = async (ignoreCache = false) => {
    // Vérifier si des données en cache existent et sont récentes
    const cachedData = localStorage.getItem('githubProjects');
    const cacheTimestamp = localStorage.getItem('githubProjectsTimestamp');
    const cacheAge = cacheTimestamp ? (Date.now() - Number(cacheTimestamp)) : Infinity;
    
    // Utiliser le cache sauf si ignoreCache est true
    if (!ignoreCache && cachedData && cacheAge < 3600000) {
      console.log("Utilisation du cache", JSON.parse(cachedData));
      const parsedData = JSON.parse(cachedData);
      if (parsedData.length > 0) {
        setGithubProjects(parsedData);
        setActive(parsedData[0].id);
        setLoading(false);
        return;
      }
    }
    
    try {
      setLoading(true);
      console.log("Récupération des projets depuis GitHub...");
      
      // Récupération des repos depuis l'API GitHub
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        params: {
          sort: 'updated',
          per_page: 5,
          type: 'owner'
        }
      });
      
      console.log("Réponse GitHub:", response.data);
      
      if (response.data.length === 0) {
        throw new Error("Aucun projet trouvé sur GitHub");
      }
      
      const formattedProjects = response.data
        .filter(repo => !repo.fork && !repo.archived)
        .map((repo, index) => {
          const previewImage = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;
          
          return {
            id: `project-${index + 1}`,
            name: repo.name,
            description: repo.description || "Pas de description disponible",
            image: previewImage,
            repo: repo.html_url,
            index: index
          };
        });
      
      console.log("Projets formatés:", formattedProjects);
      
      if (formattedProjects.length === 0) {
        throw new Error("Aucun projet valide trouvé après filtrage");
      }
      
      setGithubProjects(formattedProjects);
      setActive(formattedProjects[0].id);
      
      // Sauvegarder dans le cache
      localStorage.setItem('githubProjects', JSON.stringify(formattedProjects));
      localStorage.setItem('githubProjectsTimestamp', Date.now().toString());
    } catch (err) {
      console.error("Erreur lors de la récupération des projets:", err);
      setError(`Impossible de charger les projets: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProjects();
  }, [username]);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.span>
            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
              MES RÉALISATIONS
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-8 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mes{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              projets
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed bg-white/40 dark:bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Voici une sélection de mes projets qui reflètent ma passion pour le{' '}
            <span className="font-semibold text-blue-600">développement créatif</span>. 
            Chaque projet raconte une histoire unique et démontre mes compétences en{' '}
            <span className="font-semibold text-purple-600">résolution de problèmes</span> et{' '}
            <span className="font-semibold text-pink-600">innovation technique</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {githubProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

        {/* Section "Voir plus de projets" */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/40 dark:bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/40 inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p 
              className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              Envie de voir plus de projets ?
            </motion.p>
            
            <motion.button
              onClick={() => window.open('https://github.com/LeYapson', '_blank')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span>🔗</span>
                Voir sur GitHub
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
