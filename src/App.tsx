import { useRef, useState } from 'react';
import { Briefcase, Mail, MapPin, Globe2, Code, User, Phone, Linkedin, GraduationCap, LandPlot, Handshake, Printer } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import AngularIcon from './assets/angular.svg';
import AwsIcon from './assets/aws.svg';
import CssIcon from './assets/css.svg';
import HtmlIcon from './assets/html.svg';
import JavascriptIcon from './assets/javascript.png';
import NodejsIcon from './assets/nodejs.svg';
import PhpIcon from './assets/php.svg';
import ReactIcon from './assets/react.svg';
import SassIcon from './assets/sass.svg';
import ThreejsIcon from './assets/threejs.svg';
import TypescriptIcon from './assets/typescript.svg';
import SolidityIcon from './assets/solidity.svg';
import LaravelIcon from './assets/laravel.svg';
import ProfileCV from './assets/profilecv.jpg';
import WeKallShortLogo from './assets/wekall-short-logo.svg';
import SimplicaShortLogo from './assets/simplica-short-logo.png';
import MovierInstalacionesShortLogo from './assets/movier-instalaciones-short-logo.svg';
import CPROCShortLogo from './assets/cproc-short-logo.svg';

interface RoleExperience {
  position: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

interface ExperienceByCompany {
  company: string;
  icon?: JSX.Element;
  experience: RoleExperience[];
}

interface SideProject {
  projectName: string;
  period: string;
  description: string;
  techStack: string[];
}

interface ProfessionalReference {
  name: string;
  position: string;
  company: string;
  phone: string;
}

const translations = {
  en: {
    profile: "Profile",
    hardSkills: "Hard Skills",
    frameworks: "Frameworks && Others",
    languages: "Languages",
    softSkills: "Soft Skills",
    education: "Education",
    professionalUpdate: "Professional Update",
    experience: "Experience",
    sideProjects: "Side Projects",
    professionalReferences: "Professional References",
    printAsPDF: "Print as PDF",
    fullStackDeveloper: "Full-stack developer",
    email: "Email",
    phone: "Phone",
    linkedInProfile: "LinkedIn Profile",
    location: "Cali, Colombia (GMT-5)",
    english: "English",
    spanish: "Spanish",
    professional: "(Professional)",
    native: "(Native)",
    incredibleAbility: "Incredible ability to learn/adapt to any technology in record time 🏆",
    creativity: "<strong>Creativity:</strong> wherever I go, my mind vibrates with creativity and innovation. 🧠",
    empathy: "<strong>Empathy:</strong> I put myself in the consumer's perspective to develop the best possible UX (User Experience).",
    teamwork: "<strong>Teamwork:</strong> I love pair programming and teamwork when there is a goal and vision.",
    informationSystems: "(scheduled to finish in 2025) Information Systems Technologist, in Antonio Jose Camacho's university.",
    highSchool: "(2019) Corporación Educativa Adventista: High School degree with emphasis on programming.",
    udemy2022: "<strong>Udemy (2022):</strong> Rigging + IK (Inverse Kinematics) for ThreeJS.",
    threeJSJourney2022: "<strong>ThreeJS Journey (2022):</strong> create advanced 3D projects based on JavaScript and WebGL with ThreeJS.",
    platzi2022: "<strong>Platzi (2022):</strong> Time management and productivity for Startups course.",
    udemy2021: "<strong>Udemy (2021):</strong> Solidity / Smarts Contracts course for Blockchain projects.",
    voximplant2021: "<strong>Voximplant (2021):</strong> Basic Training Course, automate IVR call flow using VoIP services.",
    yearsExperience: "<strong>5+ years</strong> Full-Stack developer specializing in web and mobile development. Built <strong>25+ applications</strong> with a track record of rapid technology adaptation. Passionate about exploring emerging technologies including <strong>3D</strong>, <strong>Blockchain</strong>, and <strong>AI</strong>."
  },
  es: {
    profile: "Perfil",
    hardSkills: "Habilidades Técnicas",
    frameworks: "Frameworks && Otros",
    languages: "Idiomas",
    softSkills: "Habilidades Blandas",
    education: "Educación",
    professionalUpdate: "Actualización Profesional",
    experience: "Experiencia",
    sideProjects: "Proyectos Paralelos",
    professionalReferences: "Referencias Profesionales",
    printAsPDF: "Imprimir como PDF",
    fullStackDeveloper: "Desarrollador Full-stack",
    email: "Correo Electrónico",
    phone: "Teléfono",
    linkedInProfile: "Perfil de LinkedIn",
    location: "Cali, Colombia (GMT-5)",
    english: "Inglés",
    spanish: "Español",
    professional: "(Profesional)",
    native: "(Nativo)",
    incredibleAbility: "Increíble capacidad para aprender/adaptarse a cualquier tecnología en tiempo récord 🏆",
    creativity: "<strong>Creatividad:</strong> donde quiera que vaya, mi mente vibra con creatividad e innovación. 🧠",
    empathy: "<strong>Empatía:</strong> me pongo en la perspectiva del consumidor para desarrollar la mejor UX (Experiencia de Usuario) posible.",
    teamwork: "<strong>Trabajo en equipo:</strong> me encanta la programación en pareja y el trabajo en equipo cuando hay un objetivo y una visión.",
    informationSystems: "(programado para finalizar en 2025) Tecnólogo en Sistemas de Información, en la universidad Antonio José Camacho.",
    highSchool: "(2019) Corporación Educativa Adventista: Título de Bachiller con énfasis en programación.",
    udemy2022: "<strong>Udemy (2022):</strong> Rigging + IK (Cinemática Inversa) para ThreeJS.",
    threeJSJourney2022: "<strong>ThreeJS Journey (2022):</strong> crear proyectos 3D avanzados basados en JavaScript y WebGL con ThreeJS.",
    platzi2022: "<strong>Platzi (2022):</strong> Curso de gestión del tiempo y productividad para Startups.",
    udemy2021: "<strong>Udemy (2021):</strong> Curso de Solidity / Contratos Inteligentes para proyectos Blockchain.",
    voximplant2021: "<strong>Voximplant (2021):</strong> Curso de Capacitación Básica, automatizar el flujo de llamadas IVR utilizando servicios VoIP.",
    yearsExperience: "<strong>5+ años</strong> como desarrollador Full-Stack especializado en desarrollo web y móvil. Construí <strong>25+ aplicaciones</strong> con un historial de rápida adaptación tecnológica. Apasionado por explorar tecnologías emergentes, incluyendo <strong>3D</strong>, <strong>Blockchain</strong> y <strong>IA</strong>."
  }
};

const contentTranslations = {
  en: {
    experiences: [
      {
        company: 'WeKall',
        icon: <img src={WeKallShortLogo} alt="WeKall" className="w-24 pr-1 max-h-[30px] w-auto" />,
        experience: [
          {
            position: 'React.js Developer',
            period: 'Feb. 2022 - Present',
            achievements: [
              'Collaboration in the creation of a <strong>web phone (caller-like app)</strong> using best practices with <strong>10+</strong> integrations and <strong>70+</strong> components and functionalities.',
              'Collaboration in the creation of a <strong>chat/chatbot web app</strong> integrating WhatsApp, drag-and-drop customizable call flows and more.',
              'Redesign of a <strong>Contact Center</strong> main platform with more than <strong>200+ components</strong> and functionalities.',
              'Redesign of a <strong>AI Insights web app</strong> with more than <strong>50+ components</strong> and functionalities.',
              'Collaborated in the creation of an administration <strong>PBX portal</strong> with more than <strong>150+ components and functionalities</strong> in both React portals.',
              '<strong>7x</strong> times faster portal loading improvement.'
            ],
            techStack: ['React', 'TypeScript', 'SASS', 'AWS']
          },
          {
            position: 'WordPress + JavaScript Full-Stack Developer',
            period: 'Sep. 2020 - Feb. 2022',
            achievements: [
              'Created <strong>2 WordPress websites</strong> built from scratch: <a href="https://wekall.co/">wekall.co</a>, bidda.co (down).',
              'Redesigned <strong>2 knowledge base platforms</strong> with SASS.',
              'Collaboration in <strong>+20 integrations</strong> with multiple nodeJS APIs and front-end sites.',
              '<strong>120</strong> responsive and cross-browser compatible pages created / maintained.',
              '<strong>2.7x</strong> times faster WordPress page loading improvement (from <strong>5s</strong> to <strong>1.8s - 2s</strong> average).',
              'From <strong>10-15</strong> to <strong>99 points</strong> in PageSpeed Insights in 2 entire websites using multiple WPO techniques.',
              'From <strong>6k</strong> to <strong>28k impressions</strong> in <strong>6 months</strong> applying SEO techniques.'
            ],
            techStack: ['JavaScript', 'WordPress', 'SASS', 'PHP', 'AWS', 'nodeJS']
          },
          {
            position: 'Full-Stack Developer',
            period: 'Feb. 2020 - Sep. 2020',
            achievements: [
              '<strong>50+</strong> functionalities created and maintained in an <strong>Angular administration portal</strong>.',
              'Maintained more than <strong>20+</strong> nodeJS microservices in AWS environments.',
              'Created a successful <strong>Click-to-Call widget</strong> for making VoIP calls through web.',
              '<strong>+55 HUGO pages</strong> created / maintained.'
            ],
            techStack: ['Angular', 'TypeScript', 'nodeJS', 'JavaScript', 'AWS']
          },
          {
            position: 'Back-end Practitioner',
            period: 'Dec. 2019 - Feb. 2020',
            achievements: [
              'Created an <strong>Alexa Skill program</strong> that returns an extension based on a company worker\'s name.',
              'Built a <strong>Serverless REST API</strong> that requests for XML data to get the desired extension.'
            ],
            techStack: ['nodeJS', 'JavaScript', 'AWS', 'Amazon Alexa']
          }
        ]
      },
      {
        company: 'Simplica',
        icon: <img src={SimplicaShortLogo} alt="Simplica" className="w-24 ml-[-6px] pr-1 max-h-[40px] w-auto" />,
        experience: [
          {
            position: 'Full-Stack Developer (Freelance)',
            period: 'Mar. 2024 - Present',
            achievements: [
              'Created a <strong>Municipal Tax Management web app</strong> with more than <strong>50+ functionalities</strong>',
              'More than <strong>10+</strong> microservices created and maintained in AWS environments.',
              'Blocked <strong>100%</strong> traffic from DDOS attacks in AWS in less than <strong>2 hours</strong>.',
              'Maintained a <strong>Laravel platform</strong> and improved security against DDoS and Fuzzing technices.',
              'Up to <strong>3x</strong> times faster API response time improvement.'
            ],
            techStack: ['React', 'TypeScript', 'SASS', 'AWS', 'Laravel']
          }
        ]
      },
      {
        company: 'Movier Instalaciones',
        icon: <img src={MovierInstalacionesShortLogo} alt="Movier Instalaciones" className="w-24 pr-2 max-h-[40px] w-auto" />,
        experience: [
          {
            position: '3D Web Developer (Freelance)',
            period: 'Jul. 2023 - Feb. 2024',
            achievements: [
              'Designed from scratch an <strong>UI/UX website</strong> in Figma and Blender.',
              'Created a <strong>3D website</strong> from scratch with <strong>SEO optimizations</strong> (<a href="https://movier-instalaciones.com/">movier-instalaciones.com</a>).',
              '<strong>8</strong> scenes and more than <strong>15+</strong> 3D models implemented.',
              '<strong>2x</strong> times faster 3D website loading improvement.'
            ],
            techStack: ['ThreeJS', 'WordPress', 'SASS']
          }
        ]
      },
      {
        company: 'CPROC L.T.D.A',
        icon: <img src={CPROCShortLogo} alt="CPROC" className="w-24 max-h-[40px] pr-2 w-auto" />,
        experience: [
          {
            position: 'WordPress / Mobile Developer (Freelance)',
            period: 'Jan. 2023 - Jun. 2024',
            achievements: [
              'Designed from scratch an <strong>UI/UX website</strong> in Figma.',
              'Created an entire <strong>WordPress website</strong> from scratch with <strong>SEO optimizations</strong> (<a href="https://cproc.co">cproc.co</a>).',
              'Developed a private <strong>mobile app</strong> in Flutter for their new tool used to boost worker productivity.'
            ],
            techStack: ['WordPress', 'SASS', 'Flutter']
          }
        ]
      }
    ],
    sideProjects: [
      {
        projectName: 'L&D CORP',
        period: '2024',
        description: '<strong>3D website</strong> (Blender + Figma assets created by me). This is my own brand I am currently working. <br/> (<a href="https://lyd-corp.com">Check lyd-corp.com</a>)',
        techStack: ['React Native', 'Expo', 'ThreeJS', 'CannonJS', 'Blender']
      },
      {
        projectName: 'Tennis 3D',
        period: '2022',
        description: 'Sports <strong>3D</strong> multiplayer <strong>web</strong> and React Native (Expo) <strong>mobile game</strong> consuming <strong>WebGL</strong> technologies with <strong>ThreeJS</strong>. Uses physics simulation, advanced shadows, lighting and post-processing to give it a touch of realism with the help of self-built 3D custom Blender models.',
        techStack: ['React Native', 'Expo', 'ThreeJS', 'CannonJS', 'Blender']
      },
      {
        projectName: 'Rutas InterValle',
        period: '2019',
        description: '<strong>Uber-like app</strong> with real payments (Google Pay integration) for buses that allow you to reserve bus seats in real time, with bus geolocation functionality to determine what time your booked bus arrives according to the station closest to your location.',
        techStack: ['Java', 'Android Studio', 'Google Cloud']
      },
      {
        projectName: 'AI Image Recognizer',
        period: '2018',
        description: 'Web (PHP) and mobile (Android/Java) application that uses Google Cloud Vision to retrieve a list of found objects that GCV (Google Cloud Vision) reads giving an input image, with a percentage of certainty.',
        techStack: ['Java', 'Android Studio', 'Google Cloud Vision', 'PHP']
      }
    ],
    professionalReferences: [
      {
        name: 'David Esteban Erira',
        position: 'Senior Full Stack Developer',
        company: 'WeKall',
        phone: '+57 (314) 859 3795'
      },
      {
        name: 'Javier Cifuentes',
        position: 'Business Manager',
        company: 'CPROC',
        phone: '+57 (318) 313 8159'
      }
    ]
  },
  es: {
    experiences: [
      {
        company: 'WeKall',
        icon: <img src={WeKallShortLogo} alt="WeKall" className="w-24 pr-1 max-h-[30px] w-auto" />,
        experience: [
          {
            position: 'Desarrollador React.js',
            period: 'Feb. 2022 - Presente',
            achievements: [
              'Colaboración en la creación de un <strong>teléfono web (aplicación tipo llamador)</strong> utilizando mejores prácticas con <strong>10+</strong> integraciones y <strong>70+</strong> componentes y funcionalidades.',
              'Colaboración en la creación de una <strong>aplicación web de chat/chatbot</strong> integrando WhatsApp, flujos de llamadas personalizables con arrastrar y soltar y más.',
              'Rediseño de una plataforma principal de <strong>Centro de Contacto</strong> con más de <strong>200+ componentes</strong> y funcionalidades.',
              'Rediseño de una <strong>aplicación web de IA Insights</strong> con más de <strong>50+ componentes</strong> y funcionalidades.',
              'Colaboré en la creación de un <strong>portal PBX</strong> de administración con más de <strong>150+ componentes y funcionalidades</strong> en ambos portales React.',
              'Mejora de <strong>7x</strong> en la velocidad de carga del portal.'
            ],
            techStack: ['React', 'TypeScript', 'SASS', 'AWS']
          },
          {
            position: 'Desarrollador Full-Stack WordPress + JavaScript',
            period: 'Sep. 2020 - Feb. 2022',
            achievements: [
              'Creación de <strong>2 sitios WordPress</strong> desde cero: <a href="https://wekall.co/">wekall.co</a>, bidda.co (inactivo).',
              'Rediseño de <strong>2 plataformas de base de conocimiento</strong> con SASS.',
              'Colaboración en <strong>+20 integraciones</strong> con múltiples APIs de nodeJS y sitios front-end.',
              '<strong>120</strong> páginas responsive y compatibles con cross-browser creadas / mantenidas.',
              'Mejora de <strong>2.7x</strong> en la velocidad de carga de WordPress (de <strong>5s</strong> a <strong>1.8s - 2s</strong> en promedio).',
              'De <strong>10-15</strong> a <strong>99 puntos</strong> en PageSpeed Insights en 2 sitios web completos usando múltiples técnicas WPO.',
              'De <strong>6k</strong> a <strong>28k impresiones</strong> en <strong>6 meses</strong> aplicando técnicas SEO.'
            ],
            techStack: ['JavaScript', 'WordPress', 'SASS', 'PHP', 'AWS', 'nodeJS']
          },
          {
            position: 'Desarrollador Full-Stack',
            period: 'Feb. 2020 - Sep. 2020',
            achievements: [
              '<strong>50+</strong> funcionalidades creadas y mantenidas en un <strong>portal de administración Angular</strong>.',
              'Mantenimiento de más de <strong>20+</strong> microservicios nodeJS en entornos AWS.',
              'Creación de un exitoso <strong>widget Click-to-Call</strong> para realizar llamadas VoIP a través de la web.',
              '<strong>+55 páginas HUGO</strong> creadas / mantenidas.'
            ],
            techStack: ['Angular', 'TypeScript', 'nodeJS', 'JavaScript', 'AWS']
          },
          {
            position: 'Practicante Back-end',
            period: 'Dic. 2019 - Feb. 2020',
            achievements: [
              'Creación de un <strong>programa Alexa Skill</strong> que devuelve una extensión basada en el nombre de un trabajador de la empresa.',
              'Construcción de una <strong>API REST Serverless</strong> que solicita datos XML para obtener la extensión deseada.'
            ],
            techStack: ['nodeJS', 'JavaScript', 'AWS', 'Amazon Alexa']
          }
        ]
      },
      {
        company: 'Simplica',
        icon: <img src={SimplicaShortLogo} alt="Simplica" className="w-24 ml-[-6px] pr-1 max-h-[40px] w-auto" />,
        experience: [
          {
            position: 'Desarrollador Full-Stack (Freelance)',
            period: 'Mar. 2024 - Presente',
            achievements: [
              'Creación de una <strong>aplicación web de Gestión de Impuestos Municipales</strong> con más de <strong>50+ funcionalidades</strong>',
              'Más de <strong>10+</strong> microservicios creados y mantenidos en entornos AWS.',
              'Bloqueo del <strong>100%</strong> del tráfico de ataques DDOS en AWS en menos de <strong>2 horas</strong>.',
              'Mantenimiento de una <strong>plataforma Laravel</strong> y mejora de seguridad contra técnicas DDoS y Fuzzing.',
              'Mejora de hasta <strong>3x</strong> en el tiempo de respuesta de la API.'
            ],
            techStack: ['React', 'TypeScript', 'SASS', 'AWS', 'Laravel']
          }
        ]
      },
      {
        company: 'Movier Instalaciones',
        icon: <img src={MovierInstalacionesShortLogo} alt="Movier Instalaciones" className="w-24 pr-2 max-h-[40px] w-auto" />,
        experience: [
          {
            position: 'Desarrollador Web 3D (Freelance)',
            period: 'Jul. 2023 - Feb. 2024',
            achievements: [
              'Diseño desde cero de un <strong>sitio web UI/UX</strong> en Figma y Blender.',
              'Creación de un <strong>sitio web 3D</strong> desde cero con <strong>optimizaciones SEO</strong> (<a href="https://movier-instalaciones.com/">movier-instalaciones.com</a>).',
              '<strong>8</strong> escenas y más de <strong>15+</strong> modelos 3D implementados.',
              'Mejora de <strong>2x</strong> en la velocidad de carga del sitio web 3D.'
            ],
            techStack: ['ThreeJS', 'WordPress', 'SASS']
          }
        ]
      },
      {
        company: 'CPROC L.T.D.A',
        icon: <img src={CPROCShortLogo} alt="CPROC" className="w-24 max-h-[40px] pr-2 w-auto" />,
        experience: [
          {
            position: 'Desarrollador WordPress / Móvil (Freelance)',
            period: 'Ene. 2023 - Jun. 2024',
            achievements: [
              'Diseño desde cero de un <strong>sitio web UI/UX</strong> en Figma.',
              'Creación de un <strong>sitio web WordPress</strong> completo desde cero con <strong>optimizaciones SEO</strong> (<a href="https://cproc.co">cproc.co</a>).',
              'Desarrollo de una <strong>aplicación móvil</strong> privada en Flutter optimizando la gestión de inspecciones. Una nueva herramienta para aumentar la productividad de sus trabajadores.'
            ],
            techStack: ['WordPress', 'SASS', 'Flutter']
          }
        ]
      }
    ],
    sideProjects: [
      {
        projectName: 'L&D CORP (Actualmente en desarrollo)',
        period: '2024',
        description: '<strong>Sitio web 3D</strong> promocionando mi marca temprana. Actualmente se encuentra en desarrollo. Proyectos de Blender y Figma creados por mí. <br/> (<a href="https://lyd-corp.com">Visitar lyd-corp.com</a>)',
        techStack: ['React Native', 'ThreeJS', 'Blender']
      },
      {
        projectName: 'Tennis 3D',
        period: '2022',
        description: 'Juego <strong>3D</strong> multijugador para <strong>web</strong> y móvil en React Native (Expo) que consume tecnologías <strong>WebGL</strong> con <strong>ThreeJS</strong>. Utiliza simulación física, sombras avanzadas, iluminación y post-procesamiento para darle un toque de realismo con la ayuda de modelos 3D personalizados creados en Blender.',
        techStack: ['React Native', 'Expo', 'ThreeJS', 'CannonJS', 'Blender']
      },
      {
        projectName: 'Rutas InterValle',
        period: '2019',
        description: '<strong>Aplicación tipo Uber</strong> con pagos reales (integración Google Pay) para buses que permite reservar asientos en tiempo real, con funcionalidad de geolocalización para determinar a qué hora llega tu bus reservado según la estación más cercana a tu ubicación.',
        techStack: ['Java', 'Android Studio', 'Google Cloud']
      },
      {
        projectName: 'AI Image Recognizer',
        period: '2018',
        description: 'Aplicación web (PHP) y móvil (Android/Java) que utiliza Google Cloud Vision para obtener una lista de objetos encontrados que GCV (Google Cloud Vision) lee dando una imagen de entrada, con un porcentaje de certeza.',
        techStack: ['Java', 'Android Studio', 'Google Cloud Vision', 'PHP']
      }
    ],
    professionalReferences: [
      {
        name: 'David Esteban Erira',
        position: 'Desarrollador Full Stack Senior',
        company: 'WeKall',
        phone: '+57 (314) 859 3795'
      },
      {
        name: 'Javier Cifuentes',
        position: 'Gerente de Negocios',
        company: 'CPROC',
        phone: '+57 (318) 313 8159'
      }
    ]
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const c = contentTranslations[language];

  const experiences = c.experiences;
  const sideProjects = c.sideProjects;
  const professionalReferences = c.professionalReferences;

  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef
  });

  const mail = 'lea.dev.web@gmail.com';
  const phone = '+57 300 700 7525'
  const linkedin = 'https://www.linkedin.com/in/cesar-leandro-correa-gomez/';

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between mb-4">
        <button 
          onClick={() => handlePrint()} 
          className="flex items-center px-4 py-2 text-white rounded bg-[#2D3741]"
        >
          <Printer size={16} className="mr-2" />
          {t.printAsPDF}
        </button>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
          className="px-4 py-2 border rounded"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <div ref={printRef} className="print-no-shadow max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row relative"> { /* Print from here */ }
          
          {/* Profile Sidebar (absolute) */}
          <div className="profile-sidebar absolute bg-[#F6F6F6] flex w-full mt-8">
            <div className="flex items-center md:w-1/3 justify-center">
              <img 
                src={ProfileCV}
                alt="Profile"
                className="w-48 h-48 rounded-full border-4 border-black"
              />
            </div>
            <div className="flex items-center md:w-2/3">
              <header className="m-8">
                <h1 className="text-3xl font-bold text-[#2D3741] mb-2">César Leandro Correa Gómez</h1>
                <h2 className="text-xl text-gray-600 mb-4">{t.fullStackDeveloper}</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href={`mailto:${mail}`}>{mail}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href={`tel:${phone}`}>{phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin size={16} />
                    <a href={linkedin}>{t.linkedInProfile}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{t.location}</span>
                  </div>
                </div>
              </header>
            </div>
          </div>

          {/* Left Sidebar */}
          <div className="left-sidebar w-full md:w-1/3 bg-[#2D3741] text-white px-8 pt-[280px]">
            {/* Profile Section */}
            <section className="print-avoid-break">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <User size={20} />
                {t.profile}
              </h2>
              <p className="text-gray-300 text-[15px]" style={{ lineHeight: '160%' }} dangerouslySetInnerHTML={{ __html: t.yearsExperience }} />
            </section>

            {/* Hard Skills Section */}
            <section className="print-avoid-break pt-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Code size={20} />
                {t.hardSkills}
              </h2>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-2 py-[2px] bg-gray-100 rounded-[5px]">
                  {/* <JavascriptIcon /> */}
                  <img src={JavascriptIcon} alt="JavascriptIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium'>JavaScript</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-[2px] bg-gray-100 rounded-[5px]">
                  {/* <TypescriptIcon /> */}
                  <img src={TypescriptIcon} alt="TypescriptIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium'>TypeScript</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-[2px] bg-gray-100 rounded-[5px]">
                  {/* <PhpIcon /> */}
                  <img src={PhpIcon} alt="PhpIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium'>PHP</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-[2px] bg-gray-100 rounded-[5px]">
                  {/* <HtmlIcon /> */}
                  <img src={HtmlIcon} alt="HtmlIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium'>HTML</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-[2px] bg-gray-100 rounded-[5px]">
                  {/* <CssIcon /> */}
                  <img src={CssIcon} alt="CssIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium'>CSS</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-[2px] bg-gray-100 rounded-[5px]">
                  <img src={SolidityIcon} alt="CssIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium'>Solidity</span>
                </div>
              </div>
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 mt-8">
                <Code size={20} />
                {t.frameworks}
              </h2>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <NodejsIcon /> */}
                  <img src={NodejsIcon} alt="NodejsIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>nodeJS</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <ReactIcon /> */}
                  <img src={ReactIcon} alt="ReactIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>React</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <AngularIcon /> */}
                  <img src={AngularIcon} alt="AngularIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>Angular</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <SassIcon /> */}
                  <img src={SassIcon} alt="SassIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>SASS</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <AwsIcon /> */}
                  <img src={AwsIcon} alt="AwsIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>AWS</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <ThreejsIcon /> */}
                  <img src={ThreejsIcon} alt="ThreejsIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>ThreeJS</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 py-[2px] bg-black rounded-[5px]">
                  {/* <LaravelIcon /> */}
                  <img src={LaravelIcon} alt="LaravelIcon" style={{ maxHeight: 16 }} />
                  <span className='text-gray-700 text-sm font-medium text-white'>Laravel</span>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Globe2 size={20} />
                <h2 className="text-xl font-semibold">{t.languages}</h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center basis-1/2 gap-3 bg-[#D9D9D922] py-2 px-3 rounded-md">
                  <div className="px-1 py-1 rounded-lg flex bg-[#85FF00]"></div>
                  <div className='flex flex-col'>
                    <span className='font-bold'>{t.english}</span>
                    <span className='text-sm'>{t.professional}</span>
                  </div>
                </div>
                <div className="flex items-center basis-1/2 gap-3 bg-[#D9D9D922] py-2 px-3 rounded-md">
                  <div className="px-1 py-1 rounded-lg flex bg-[#FF9900]"></div>
                  <div className='flex flex-col'>
                    <span className='font-bold'>{t.spanish}</span>
                    <span className='text-sm'>{t.native}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Soft Skills Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Handshake size={20} />
                <h2 className="text-xl font-semibold">{t.softSkills}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-[15px] space-y-2">
                <li>{t.incredibleAbility}</li>
                <li dangerouslySetInnerHTML={{ __html: t.creativity }} />
                <li dangerouslySetInnerHTML={{ __html: t.empathy }} />
                <li dangerouslySetInnerHTML={{ __html: t.teamwork }} />
              </ul>
            </section>

            {/* Education Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} />
                <h2 className="text-xl font-semibold">{t.education}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-[15px] space-y-2">
                <li>{t.informationSystems}</li>
                <li>{t.highSchool}</li>
              </ul>
            </section>

            {/* Professional Update Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <LandPlot size={20} />
                <h2 className="text-xl font-semibold">{t.professionalUpdate}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-[15px] space-y-2">
                <li dangerouslySetInnerHTML={{ __html: t.udemy2022 }} />
                <li dangerouslySetInnerHTML={{ __html: t.threeJSJourney2022 }} />
                <li dangerouslySetInnerHTML={{ __html: t.platzi2022 }} />
                <li dangerouslySetInnerHTML={{ __html: t.udemy2021 }} />
                <li dangerouslySetInnerHTML={{ __html: t.voximplant2021 }} />
              </ul>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-2/3 px-8 pt-[280px] flex flex-col">

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#2D3741] mb-6 flex items-center gap-2">
                <Briefcase size={24} />
                {t.experience}
              </h2>
              {
                experiences.map((exp, index) => (
                  <div key={index} className={`border-l-2 border-gray-200 pl-4 ${index && 'pt-10'}`}>
                    <div className="flex items-center">
                      {exp.icon}
                      <h3 className="text-xl font-semibold ml-2">{exp.company}</h3>
                    </div>
                    {
                      exp.experience.map((role, idx) => (
                        <div key={idx} className="print-avoid-break pt-6">
                          <p className="text-gray-500 mb-2"><span className="font-semibold text-gray-700">{role.position}</span> • {role.period}</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {role.achievements.map((achievement, idx) => (
                              <li key={idx} className='text-[15px]' dangerouslySetInnerHTML={{ __html: achievement }} />
                            ))}
                          </ul>
                          { role.techStack.length > 0 && <p className="text-gray-500 text-[15px] mt-4">Tech Stack:</p> }
                          <div className="flex flex-wrap gap-2 mt-2">
                            {role.techStack.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 rounded-[5px] text-sm text-gray-500 font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </section>

            {/* Side Projects */}
            <section className='pt-8'>
              <h2 className="text-2xl font-bold text-[#2D3741] mb-6 flex items-center gap-2">
                <Briefcase size={24} />
                {t.sideProjects}
              </h2>
              {
                sideProjects.map((sp, index) => (
                  <div key={index} className={`print-avoid-break ${index && 'pt-8'}`}>
                    <p className="text-lg text-gray-500 mb-2"><span className="font-semibold text-gray-700">{sp.projectName}</span> • {sp.period}</p>
                    <p className="text-[15px]" dangerouslySetInnerHTML={{ __html: sp.description }} />
                    { sp.techStack.length > 0 && <p className="text-gray-500 text-[15px] mt-4">Tech Stack:</p> }
                    <div className="flex flex-wrap gap-2 mt-2">
                      {sp.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 rounded-[5px] text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              }
            </section>

            {/* Professional References */}
            <section className='py-8 print-avoid-break'>
              <h2 className="text-2xl font-bold text-[#2D3741] flex mb-6 items-center gap-2">
                {t.professionalReferences}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {professionalReferences.map((ref, index) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm">
                    <p className="text-lg font-semibold text-gray-700">{ref.name}</p>
                    <p className="text-gray-500">{ref.position} { language === 'es' ? 'en' : 'in' } {ref.company}</p>
                    <p className="text-gray-500">{ref.phone}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;