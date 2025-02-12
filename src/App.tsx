import { useRef } from 'react';
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

function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef
  });

  const mail = 'lea.dev.web@gmail.com';
  const phone = '+57 300 700 7525'
  const linkedin = 'https://www.linkedin.com/in/cesar-leandro-correa-gomez/';

  const experiences: ExperienceByCompany[] = [
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
            'Up to <strong>3x</strong> times faster API response time improvement.' // ley de 1 query, proxies, etc
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
  ]

  const sideProjects: SideProject[] = [
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
  ];

  const professionalReferences: ProfessionalReference[] = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button 
        onClick={() => handlePrint()} 
        className="flex items-center mb-4 px-4 py-2 text-white rounded bg-[#2D3741]"
      >
        <Printer size={16} className="mr-2" />
        Print as PDF
      </button>
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
                <h2 className="text-xl text-gray-600 mb-4">Full-stack developer</h2>
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
                    <a href={linkedin}>LinkedIn Profile</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Cali, Colombia (GMT-5)</span>
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
                Profile
              </h2>
              <p className="text-gray-300 text-[15px]" style={{ lineHeight: '160%' }}>
              <strong>5+ years</strong> Full-Stack developer specializing in web and mobile development. Built <strong>25+ applications</strong> with a track record of rapid technology adaptation. Passionate about exploring emerging technologies including <strong>3D</strong>, <strong>Blockchain</strong>, and <strong>AI</strong>.              </p>
            </section>

            {/* Hard Skills Section */}
            <section className="print-avoid-break pt-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Code size={20} />
                Hard Skills
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
                Frameworks <span className='text-[#90BBFB]'>&&</span> Others
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
                <h2 className="text-xl font-semibold">Languages</h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center basis-1/2 gap-3 bg-[#D9D9D922] py-2 px-3 rounded-md">
                  <div className="px-1 py-1 rounded-lg flex bg-[#85FF00]"></div>
                  <div className='flex flex-col'>
                    <span className='font-bold'>English</span>
                    <span className='text-sm'>(Professional)</span>
                  </div>
                </div>
                <div className="flex items-center basis-1/2 gap-3 bg-[#D9D9D922] py-2 px-3 rounded-md">
                  <div className="px-1 py-1 rounded-lg flex bg-[#FF9900]"></div>
                  <div className='flex flex-col'>
                    <span className='font-bold'>Spanish</span>
                    <span className='text-sm'>(Native)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Soft Skills Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Handshake size={20} />
                <h2 className="text-xl font-semibold">Soft Skills</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-[15px] space-y-2">
                <li>Incredible ability to learn/adapt to any technology in record time 🏆</li>
                <li> <strong>Creativity:</strong> wherever I go, my mind vibrates with creativity and innovation. 🧠</li>
                <li> <strong>Empathy:</strong> I put myself in the consumer's perspective to develop the best possible UX (User Experience).</li>
                <li> <strong>Teamwork:</strong> I love pair programming and teamwork when there is a goal and vision.</li>
              </ul>
            </section>

            {/* Education Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} />
                <h2 className="text-xl font-semibold">Education</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-[15px] space-y-2">
                <li>(scheduled to finish in 2025) Information Systems Technologist, in Antonio Jose Camacho's university.</li>
                <li>(2019) Corporación Educativa Adventista: High School degree with emphasis on programming.</li>
              </ul>
            </section>

            {/* Professional Update Section */}
            <section className="print-avoid-break pt-8">
              <div className="flex items-center gap-2 mb-4">
                <LandPlot size={20} />
                <h2 className="text-xl font-semibold">Professional Update</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-[15px] space-y-2">
                <li> <strong>Udemy (2022):</strong> Rigging + IK (Inverse Kinematics) for ThreeJS.</li>
                <li> <strong>ThreeJS Journey (2022):</strong> create advanced 3D projects based on JavaScript and WebGL with ThreeJS.</li>
                <li> <strong>Platzi (2022):</strong> Time management and productivity for Startups course.</li>
                <li> <strong>Udemy (2021):</strong> Solidity / Smarts Contracts course for Blockchain projects.</li>
                <li> <strong>Voximplant (2021):</strong> Basic Training Course, automate IVR call flow using VoIP services.</li>
              </ul>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-2/3 px-8 pt-[280px] flex flex-col">

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#2D3741] mb-6 flex items-center gap-2">
                <Briefcase size={24} />
                Experience
              </h2>
              {
                experiences.map((exp, index) => (
                  <div key={index} className={`print-avoid-break border-l-2 border-gray-200 pl-4 ${index && 'pt-10'}`}>
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
                Side Projects
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
                Professional References
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {professionalReferences.map((ref, index) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm">
                    <p className="text-lg font-semibold text-gray-700">{ref.name}</p>
                    <p className="text-gray-500">{ref.position} in {ref.company}</p>
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