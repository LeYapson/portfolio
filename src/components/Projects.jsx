import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import axios from 'axios';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
          </div>
        </>
      )}
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
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Études de cas</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Ces projets démontrent mon expertise avec des exemples pratiques de mon travail,
          y compris de brèves descriptions et des liens vers les dépôts de code.
          Ils illustrent ma capacité à relever des défis complexes et à m'adapter à diverses technologies.
        </motion.p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => fetchProjects(true)}
            className="px-4 py-2 bg-jetLight text-white rounded-md hover:bg-battleGray transition-colors"
          >
            Réessayer sans utiliser le cache
          </button>
        </div>
      ) : githubProjects.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-yellow-400 mb-4">Aucun projet trouvé sur GitHub</p>
          <button 
            onClick={() => fetchProjects(true)}
            className="px-4 py-2 bg-jetLight text-white rounded-md hover:bg-battleGray transition-colors"
          >
            Réessayer
          </button>
        </div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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
        </motion.div>
      )}
      
      {/* Bouton GitHub séparé des conditions de chargement */}
      <div className="w-full flex justify-center mt-10">
        <motion.button
          variants={fadeIn('up', 'spring', 0.5, 1)}
          className="bg-jetLight hover:bg-battleGray text-white font-beckman py-3 px-8 rounded-lg flex items-center gap-3 transition-colors duration-300"
          onClick={() => window.open(`https://github.com/${username}`, '_blank')}
        >
          <img src={github} alt="GitHub" className="w-6 h-6" />
          <span>Voir tous mes projets sur GitHub</span>
        </motion.button>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
