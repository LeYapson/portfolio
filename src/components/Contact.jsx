import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Button from './ui/Button';
import Card from './ui/Card';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      alert('Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert('Veuillez entrer une adresse email valide');
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Théau Yapi',
          from_email: form.email,
          to_email: 'theau2002@live.fr',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Merci ! Je reviens vers vous dès que possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Une erreur est survenue, veuillez réessayer.');
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-blue-600/5 via-white to-amber-500/5 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      
      <div className={`${styles.padding} max-w-4xl mx-auto relative z-0 flex flex-col lg:flex-row gap-6`}>
        
        {/* Section gauche - Informations */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-1 p-4"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Prenons contact
          </p>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Contactez-moi
          </h3>

          <Card className="mt-4 p-4" gradient>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <label className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                  Votre nom
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="bg-gray-50 dark:bg-gray-700 py-2 px-3 placeholder:text-gray-400 
                    text-gray-800 dark:text-white rounded border border-gray-200 
                    dark:border-gray-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 
                    outline-none transition-all text-sm"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                  Votre email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="bg-gray-50 dark:bg-gray-700 py-2 px-3 placeholder:text-gray-400 
                    text-gray-800 dark:text-white rounded border border-gray-200 
                    dark:border-gray-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 
                    outline-none transition-all text-sm"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                  Votre message
                </span>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  className="bg-gray-50 dark:bg-gray-700 py-2 px-3 placeholder:text-gray-400 
                    text-gray-800 dark:text-white rounded border border-gray-200 
                    dark:border-gray-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 
                    outline-none resize-none transition-all text-sm"
                />
              </label>

              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={loading}
                icon={loading ? "⏳" : "📧"}
                className="w-full"
              >
                {loading ? 'Envoi...' : 'Envoyer'}
              </Button>
            </form>
          </Card>

          {/* Liens sociaux */}
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/theau-yapi', '_blank')}
              icon="💼"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/LeYapson', '_blank')}
              icon="👨‍💻"
            >
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Section droite - Animation ou image */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="flex-1 lg:h-auto md:h-[300px] h-[200px]"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-amber-500/10 
            rounded-lg flex items-center justify-center relative overflow-hidden">
            
            <div className="text-center z-10">
              <motion.div
                className="text-3xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📧
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Contactez-moi !
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');