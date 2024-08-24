import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      "navbar": {
        "aboutme": "Sobre mí",
        "experience": "Conocimiento",
        "projects": "Proyectos",
        "contact": {
          "title": "Contacto",
          "options": {
            "email": "Correo",
            "linkedin": "Linkedin",
          },
        },
      },
      "aboutmeParagraph1":
        "Hola, soy Jonathan Gonzalo Díaz Bustos, un desarrollador de software con más de 4 años de experiencia. Me encanta sumergirme en el mundo del código y explorar todo lo que este ofrece. He trabajado en una variedad de proyectos para diferentes industrias, lo que me ha dado una perspectiva amplia y versátil sobre el desarrollo de software.",
      "aboutmeParagraph2":
        "Soy un entusiasta de las nuevas tecnologías y siempre estoy buscando aprender algo nuevo. Me fascina descubrir cómo implementar herramientas y técnicas innovadoras para resolver problemas de manera efectiva. En particular, disfruto creando servicios web y conectando soluciones con terceros, buscando siempre la forma de hacer las cosas más eficientes y fluidas.",
      "aboutmeParagraph3":
        "Si estás buscando a alguien con pasión por el código y una mentalidad abierta para enfrentar nuevos desafíos, ¡estoy aquí para ello!",
      "projects": {
        "title": "Proyectos",
        "pepper": {
          "title": "Pepper",
          "content":
            "Pepper es un software de análisis de datos y automatización que resuelve el problema de la integración y análisis de datos dispersos en distintas fuentes. Como desarrollador, he trabajado en la implementación de Pepper para simplificar la consolidación de datos y permitir a las empresas obtener información valiosa en tiempo real a partir de sus sistemas dispares. Con una plataforma intuitiva, Pepper facilita la creación de informes detallados y dashboards interactivos, optimizando la toma de decisiones estratégicas y mejorando la eficiencia operativa.",
          "url": "https://app.pepper.cl/",
          "visit": "Ir a Pepper",
        },
        "ots": {
          "title": "On Time Service",
          "content":
            "Beartrack es una plataforma avanzada diseñada para optimizar el seguimiento de paquetería y la gestión de envíos. Participé en la creación de esta solución, concentrándome en el desarrollo de características clave que mejoran la visibilidad y el control sobre los envíos. Beartrack resuelve el problema de la falta de transparencia en el proceso de seguimiento de paquetes, ofreciendo herramientas intuitivas para monitorear el estado de los envíos en tiempo real, gestionar rutas y coordinar entregas. Con su interfaz amigable y sus capacidades avanzadas, Beartrack ayuda a las empresas a mejorar la eficiencia logística y a mantener un control preciso sobre sus operaciones de paquetería.",
          "url": "https://ots.beartrack.cl",
          "visit": "Ir a Beartrack",
        },
        "pandita": {
          "title": "Pandita Estudio",
          "content":
            "La landing page de Pandita Estudio es una plataforma atractiva y funcional diseñada para presentar los servicios creativos y de diseño del estudio. Como creador de esta landing, me enfoqué en desarrollar una experiencia visualmente impactante que refleja la identidad única de Pandita Estudio. La página está diseñada para captar la atención de los visitantes y destacar la calidad y la creatividad de los servicios ofrecidos. Con un diseño intuitivo y un enfoque en la usabilidad, la landing page facilita la navegación y la conexión con clientes potenciales, resaltando de manera efectiva el valor del estudio y sus capacidades creativas.",
          "url": "https://panditaestudio.com/",
          "visit": "Ir a Pandita Estudio",
        },
      },
      "knowledge": {
        "title": "Conocimiento",
      },
      "contact": {
        "title": "Hablemos!",
      },
      "footer": "Todos los derechos reservados 2024 ©",
    },
  },
  en: {
    translation: {
      "navbar": {
        "aboutme": "About me",
        "experience": "Knowledge",
        "projects": "Projects",
        "contact": {
          "title": "Contact",
          "options": {
            "email": "Email",
            "linkedin": "Linkedin",
          },
        },
      },
      "aboutmeParagraph1":
        "Hi, I'm Jonathan Gonzalo Díaz Bustos, a software developer with over 4 years of experience. I love diving into the world of code and exploring everything it has to offer. I've worked on a variety of projects across different industries, giving me a broad and versatile perspective on software development.",
      "aboutmeParagraph2":
        "I'm passionate about new technologies and always looking to learn something new. I'm fascinated by discovering how to implement innovative tools and techniques to solve problems effectively. I particularly enjoy creating web services and integrating solutions with third parties, always looking for ways to make things more efficient and smooth.",
      "aboutmeParagraph3":
        "If you're looking for someone with a passion for coding and an open mindset to tackle new challenges, I'm here for it!",
      "projects": {
        "title": "Pojects",
        "pepper": {
          "title": "Pepper",
          "content":
            "Pepper is a data analysis and automation software that addresses the problem of integrating and analyzing data scattered across different sources. As a developer, I have worked on implementing Pepper to streamline the consolidation of data and enable businesses to gain valuable insights in real time from their disparate systems. With its intuitive platform, Pepper makes it easy to create detailed reports and interactive dashboards, optimizing strategic decision-making and enhancing operational efficiency.",
          "url": "https://app.pepper.cl/",
          "visit": "Go to Pepper",
        },
        "ots": {
          "title": "On Time Service",
          "content":
            "Beartrack is an advanced platform designed to optimize package tracking and shipment management. I was involved in the development of this solution, focusing on creating key features that enhance visibility and control over shipments. Beartrack addresses the challenge of transparency in the package tracking process by providing intuitive tools to monitor shipment status in real time, manage routes, and coordinate deliveries. With its user-friendly interface and advanced capabilities, Beartrack helps businesses improve logistics efficiency and maintain precise control over their parcel operations.",
          "url": "https://ots.beartrack.cl",
          "visit": "Go to Beartrack",
        },
        "pandita": {
          "title": "Pandita Estudio",
          "content":
            "The Pandita Estudio landing page is an engaging and functional platform designed to showcase the studio's creative and design services. As the creator of this landing page, I focused on developing a visually striking experience that reflects the unique identity of Pandita Estudio. The page is crafted to capture visitors' attention and highlight the quality and creativity of the services offered. With an intuitive design and a focus on usability, the landing page facilitates navigation and connection with potential clients, effectively showcasing the studio's value and creative capabilities.",
          "url": "https://panditaestudio.com/",
          "visit": "Go to Pandita Estudio",
        },
      },
      "knowledge": {
        "title": "Knowledge",
      },
      "contact": {
        "title": "Let's Talk!",
      },
      "footer": "All rights reserved 2024 ©",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
