import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover, linkedinIcon } from '../assets'; // Ajoutez votre icône LinkedIn ici

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_0gray19',
        'template_5zix17c',
        {
          from_name: form.name,
          to_name: 'Théau Yapi',
          from_email: form.email,
          to_email: 'theau2002@live.fr',
          message: form.message,
        },
        '-sHX4D7Usk3V6zpEv'
      )
      .then(
        () => {
          setLoading(false);
          alert('Merci, je reviens vers vous dès que possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Quelque chose s\'est mal passé, veuillez réessayer.');
        }
      );
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Prendre contact</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Ton nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est ton nom?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Ton e-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="c'est quoi ton e-mail?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Ton message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Quel est ton message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}
          >
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>

      <div className="flex flex-col items-center mt-10">
        <a
          href="https://www.linkedin.com/in/theau-yapi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img
            src={linkedinIcon} // Assurez-vous d'importer votre icône LinkedIn
            alt="LinkedIn"
            className="w-20 h-20 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
