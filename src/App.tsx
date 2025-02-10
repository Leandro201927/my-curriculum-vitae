import { Briefcase, Mail, MapPin, Globe2, GraduationCap, Code, User, Phone, Linkedin } from 'lucide-react';

interface RoleExperience {
  position: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

interface ExperienceByCompany {
  company: string;
  experience: RoleExperience[];
}

interface SideProject {
  projectName: string;
  period: string;
  description: string;
  techStack: string[];
}

function App() {
  const mail = 'lea.dev.web@gmail.com';
  const phone = '+57 300 700 7525'
  const linkedin = 'https://www.linkedin.com/in/cesar-leandro-correa-gomez/';

  const experiences: ExperienceByCompany[] = [
    {
      company: 'WeKall',
      experience: [
        {
          position: 'React Developer',
          period: 'Feb. 2022 - Present',
          achievements: [
            'Collaboration in the creation of a <strong> web phone (caller-like app)</strong>.',
            'Redesign of a <strong>Contact Center</strong> old platform with more than <strong>200+ components</strong>.',
            'Created/maintained administration <strong>PBX portal</strong> with more than <strong>80+ components</strong>.',
            'Improved portals loading speed up to <strong>7x</strong>.'
          ],
          techStack: ['React', 'TypeScript', 'AWS', 'nodeJS']
        },
        {
          position: 'Wordpress/Javascript Full-Stack Developer',
          period: 'Sep. 2020 - Feb. 2022',
          achievements: [
            'Created <strong> 2 WordPress websites </strong> built from scratch (<a href="https://wekall.co">wekall.co</a>, <a href="https://bidda.co">bidda.co</a>).',
            'I completely redesigned 2 knowledge base platforms with <strong>SASS</strong>.',
            'Collaboration in <strong>+20 integrations</strong> with multiple nodeJS APIs and front-end sites.',
            '<strong>+120</strong> responsive and cross-browser compatible pages created / maintained.',
            '<strong>2.7x</strong> times faster WordPress page loading improvement (from <strong>5s</strong> to <strong>1.8s - 2s</strong> average).',
            'From <strong>10-15</strong> to <strong>99</strong> Google PageSpeed Insights score in <strong>2</strong> entire websites using multiple WPO techniques.',
            'From <strong>6k</strong> to <strong>28k</strong> monthly visits in 6 months in <strong><a href="https://wekall.co">wekall.co</a></strong> using <strong>SEO</strong> techniques.',
          ],
          techStack: ['WordPress', 'SASS', 'PHP', 'AWS', 'nodeJS']
        },
        {
          position: 'Full-Stack Developer',
          period: 'Feb. 2020 - Sep. 2020',
          achievements: [
            '50+ functionalities created and maintained in an <strong>Angular administration portal</strong>.',
            'Maintained more than <strong>20+ nodeJS microservices</strong> in AWS environments.',
            'I created a successful <strong>Click-to-Call widget</strong> for making VoIP calls through web.',
            '<strong>+55 HUGO pages</strong> created / maintained.'
          ],
          techStack: ['Angular', 'TypeScript', 'nodeJS', 'JavaScript', 'AWS']
        },
        {
          position: 'Back-end Practitioner',
          period: 'Dec. 2019 - Feb. 2020',
          achievements: [
            'I created an <strong>Alexa Skill program</strong> that returns an extension based on a company worker\'s name.',
            'Built a <strong>Serverless REST API</strong> that requests for XML data to get the desired extension.'
          ],
          techStack: ['Amazon Alexa', 'nodeJS', 'JavaScript', 'AWS']
        }
      ]
    },
    {
      company: 'CPROC L.T.D.A',
      experience: [
        {
          position: 'WordPress/Flutter Developer (Freelance)',
          period: 'Jan. 2023 - Jun. 2024',
          achievements: [
            'Designed from scratch a <strong>UI/UX</strong> website/mobile app in Figma.',
            'Created an entire <strong>WordPress website</strong> from scratch with <strong>SEO optimizations</strong>. <a href="https://cproc.co">(cproc.co)</a>',
            'Improved portal loading speed by <strong>7x</strong>.'
          ],
          techStack: ['React', 'TypeScript', 'AWS', 'nodeJS']
        },
      ]
    },
  ]

  const sideProjects: SideProject[] = [
    {
      projectName: 'Tennis 3D',
      period: '2022',
      description: 'Sports 3D multiplayer web and React Native (Expo) mobile game consuming WebGL technologies with ThreeJS. Uses physics simulation, advanced shadows, lighting and post-processing to give it a touch of realism with the help of self-built 3D custom Blender models.',
      techStack: ['React Native', 'Expo', 'ThreeJS', 'CannonJS', 'Blender']
    },
    {
      projectName: 'Rutas InterValle',
      period: '2019',
      description: 'Uber-like application with real payments (Google Pay integration) for buses that allow you to reserve bus seats in real time, with bus geolocation functionality to determine what time your booked bus arrives according to the station closest to your location.',
      techStack: ['Java', 'Android Studio', 'Google Cloud Platform']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row relative">
          
          {/* Profile Sidebar (absolute) */}
          <div className="absolute bg-[#F6F6F6] flex w-full mt-8">
            <div className="flex items-center md:w-1/3 justify-center">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-48 h-48 rounded-full border-4 border-white"
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
          <div className="w-full md:w-1/3 bg-[#2D3741] text-white px-8 pt-[280px]">

            {/* Profile Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <User size={20} />
                Profile
              </h2>
              <p className="text-gray-300">
                5+ years of proven experience as a Full-stack developer. Created/maintained more than 10+ portals, with development achievements by the use of good practices, clean code, performance being an important one.
              </p>
            </section>

            {/* Hard Skills Section */}
            <section className="mb-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Code size={20} />
                Hard Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'nodeJS', 'AWS', 'PHP'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe2 size={16} />
                  <span>English (Professional)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={16} />
                  <span>Spanish (Native)</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-2/3 px-8 pt-[280px] gap-16 flex flex-col">

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#2D3741] mb-6 flex items-center gap-2">
                <Briefcase size={24} />
                Experience
              </h2>
              {
                experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4 mt-8">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    {
                      exp.experience.map((role, idx) => (
                        <div key={idx} className="mt-6">
                          <p className="text-gray-500 mb-2"><span className="font-semibold text-gray-700">{role.position}</span> • {role.period}</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {role.achievements.map((achievement, idx) => (
                              <li key={idx} className='text-[15px]' dangerouslySetInnerHTML={{ __html: achievement }} />
                            ))}
                          </ul>
                          { role.techStack.length > 0 && <p className="text-gray-500 text-[15px] mt-4">Tech Stack:</p> }
                          <div className="flex flex-wrap gap-2 mt-2">
                            {role.techStack.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 rounded-[5px] text-sm">
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

            {/* Education Section */}
            {/* <section>
              <h2 className="text-2xl font-bold text-[#2D3741] mb-6 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h2>
              
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="text-xl font-semibold">Information Systems Technologist</h3>
                <p className="text-gray-600">Antonio Jose Camacho's university • 2025 (Expected)</p>
              </div>
            </section> */}

            {/* Side Projects */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2D3741] mb-6 flex items-center gap-2">
                <Briefcase size={24} />
                Side Projects
              </h2>
              {
                sideProjects.map((sp, index) => (
                  <div key={index} className="mt-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;