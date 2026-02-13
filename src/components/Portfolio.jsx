import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  Download,
  ArrowRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'about',
        'education',
        'experience',
        'projects',
        'publications',
        'skills'
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const projects = [
    {
    
  title: 'DocWeaver',
  subtitle: 'AI-Powered Clinical Documentation Orchestrator',
  badge: 'Gemini 3 Hackathon',
  description:
    'Multi-agent system using Gemini 2.0 for intelligent medical document fusion, automated clinical documentation, and care coordination - saving physicians 45+ minutes per patient.',
  fullDescription:
    'Built a sophisticated three-feature clinical AI orchestration system that processes fragmented medical records from multiple sources. The system employs 18+ specialized Gemini 2.0 agents working in parallel to: (1) intelligently fuse data from labs, imaging, visit notes, and discharge summaries using temporal analysis to detect causal relationships (e.g., "ER medication → Lab abnormality"), (2) generate complete SOAP notes with ICD-10/CPT billing codes from 30-second physician dictations, and (3) autonomously create referral letters, schedule follow-ups, and draft patient communications. Achieves true orchestration through async parallel processing, multi-step conditional workflows, and state management across documents - demonstrating the "Action Era" of AI beyond simple prompt wrappers.',
  tags: ['Google Gemini 2.0', 'Python', 'Streamlit', 'Async Processing', 'FastAPI', 'Healthcare AI', 'Multi-Agent System'],
  image: '/docweaver.jpg',
  link: 'https://youtu.be/vzvPgJDEwkU',
  color: 'emerald'
},
  
    {
      title: 'VoiceLegal AI',
      subtitle: 'Smart Legal Document Voice Assistant',
      description:
        'Chrome extension with AI-powered analysis and voice assistant for instant legal document understanding - no downloads needed.',
      fullDescription:
        'Built a three-part solution combining a Chrome extension, AI analysis engine, and voice assistant to make legal documents accessible. The extension automatically detects legal pages (terms, privacy policies, contracts) and provides instant risk assessment powered by Google Gemini 2.0 Flash. Features conversational AI via ElevenLabs for hands-free Q&A, structured risk categorization (HIGH/MEDIUM/LOW), and works seamlessly across any website. Achieves 4.8x faster analysis compared to traditional AI platforms by eliminating context switching and manual uploads.',
      tags: ['Chrome Extension', 'Google Vertex AI', 'FastAPI', 'ElevenLabs', 'React', 'Tailwind CSS', 'Docker'],
      image: '/voicelegal.png',
      link: 'https://voicelegal-ai-web-extension.vercel.app/',
      color: 'violet'
    },
    {
      title: 'Hoosier Helper',
      subtitle: 'AI Campus Assistant',
      description:
        'Intelligent chatbot for Indiana University serving 105+ buildings with natural language processing.',
      fullDescription:
        'Developed an intelligent chatbot for Indiana University Bloomington that helps students navigate campus with 105+ buildings, 20+ dining locations, and real-time information. Integrated Claude AI for natural language processing, context-aware conversations, and smart location-based recommendations for seamless campus navigation.',
      tags: ['React', 'Claude AI', 'NLP', 'Tailwind CSS', 'JavaScript', 'REST API'],
      image: '/hoosierhelper.jpg',
      link: 'https://hoosierhelperbyneeha.vercel.app/',
      color: 'emerald'
    },
    {
      title: 'PriceWatch',
      subtitle: 'Electronics Price Comparison',
      description: 'Multi-retailer price comparison platform tracking laptops, headphones, and monitors with real-time data.',
      fullDescription: 'Built a full-stack price comparison platform that aggregates product data from Best Buy, Amazon, and Newegg. Features include automated web scraping, price history tracking, multi-retailer comparison, and a modern responsive UI. Uses Next.js 15 with App Router, PostgreSQL for data persistence, and Prisma ORM for type-safe database operations.',
      tags: ['Web Scraping','Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      image: '/pricewatch.png', 
      link: 'https://pricewatch-pi.vercel.app/',
      color: 'violet'
    },
    {
      title: 'TrendWatch AI',
      subtitle: 'GitHub Trending Intelligence Platform',
      description:  'AI-powered newsletter system delivering personalized GitHub trending digests with automated daily emails and smart summaries.',
      fullDescription:  'Built a full-stack SaaS application that scrapes trending GitHub repositories daily, generates AI-powered summaries using OpenAI, and delivers personalized email digests to subscribers. Features include automated cron jobs, subscription management, multi-language filtering, beautiful gradient email templates, and unsubscribe functionality. Uses Next.js 15 with App Router, PostgreSQL for data persistence, Prisma ORM for type-safe database operations, and serverless functions for automation.',
      tags: ['AI Integration', 'Next.js 15', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Serverless', 'Email Automation', 'Tailwind CSS'],
      image: '/twai.png',
      link: 'https://github-trending-digest.vercel.app/',
      color: 'emerald'
    },
    {
      title: 'SmartCart Recommender System',
      subtitle: 'ML-Powered E-Commerce Personalization',
      description: 'Personalized product recommendation system achieving 120.9% CTR improvement through machine learning and A/B testing.',
      fullDescription: 'An end-to-end machine learning recommendation system that personalizes e-commerce product suggestions based on user behavior and purchase history. Implemented three algorithms (Collaborative Filtering, Content-Based, and Hybrid) and validated performance through rigorous A/B testing with 5,000 users. Features interactive Power BI dashboards visualizing KPIs, user engagement metrics, and statistical significance testing results. Achieved 16.30% precision@10 and statistically significant CTR improvement (p < 0.001).',
      tags: ['Statistical Analysis','Python', 'Scikit-learn', 'SQL', 'Power BI', 'A/B Testing', 'Machine Learning', 'Pandas'],
      image: 'sc.png',
      link: 'https://github.com/neagra12/smartcart-recommender',
      color: 'violet'
    },
    {
      title: 'Language Agnostic Visualization',
      subtitle: 'Full-Stack Web App',
      description: 'Execute data visualization scripts in Python or R with Docker isolation.',
      fullDescription:
        'A full-stack web application that allows users to write and execute data visualization scripts in either Python or R, supporting static, interactive, and 3D plots. It dynamically executes the script in Docker-isolated environments and displays the rendered output (via iframe) in the frontend.',
      tags: ['React', 'TypeScript', 'FastAPI', 'Docker', 'Matplotlib', 'Plotly', 'ggplot2'],
      image: '/Langviz.png',
      link: 'https://github.com/neagra12/LanguageAgnosticWebApp',
      color: 'cyan'
    },
    {
      title: 'HoosierHub',
      subtitle: 'Collaboration Platform',
      description:
        'Unified platform with instant chat, real-time notifications, and encrypted messaging.',
      fullDescription:
        'HoosierHub blends social engagement, professional networking, and a built-in marketplace with real-time features. It offers instant chat, real-time notifications, live polls, encrypted messaging, and monetization options, making it an essential tool for the Indiana University community.',
      tags: ['TypeScript', 'Spring Boot', 'AWS', 'PostgreSQL', 'Redis', 'Razorpay'],
      image: '/hoosierproj.jpg',
      link: 'https://github.com/IU-HoosierHub',
      color: 'violet'
    },
    {
      title: 'Amazon Sales Dashboard',
      subtitle: 'Power BI Analytics',
      description:
        'Comprehensive Power BI dashboard analyzing product performance with dynamic charts.',
      fullDescription:
        'A comprehensive Power BI dashboard built using Amazon sales data to visualize and analyze product performance. It includes insights on rating distribution, category-based product counts, discount trends, customer sentiment (via word cloud), and pricing analysis through dynamic and interactive charts.',
      tags: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence', 'Data Modeling'],
      image: '/Dataviz.jpg',
      link: 'https://github.com/neagra12/PowerBI_Dataviz',
      color: 'emerald'
    },
    {
      title: 'Netflix Content Analysis',
      subtitle: 'Tableau Dashboard',
      description:
        'Interactive Tableau dashboards analyzing Netflix data with filters and visualizations.',
      fullDescription:
        'Created an interactive set of 4 Tableau dashboards analyzing Netflix data including content type distribution, country-wise availability, genre trends, release year distribution, and top contributing directors. The dashboards include bar charts, word clouds, and filters for insightful exploration. Designed using Tableau Public and exported as a packaged workbook.',
      tags: ['Tableau', 'Data Visualization', 'Dashboard Design', 'Exploratory Analysis'],
      image: '/netflixdb.jpg',
      link: 'https://github.com/neagra12/Netflix-dashboard',
      color: 'cyan'
    },
    {
      title: 'Code Explanation Website',
      subtitle: 'AI-Powered Code Helper',
      description:
        'AI tool that explains code in any programming language with detailed insights.',
      fullDescription:
        'Created a platform that provides detailed explanations for code snippets in any programming language such as Python, JavaScript, and C++. Integrated AI-powered explanations using LLMs to improve understanding and learning for students and developers.',
      tags: ['Python', 'OpenAI', 'JavaScript', 'HTML', 'CSS'],
      image: '/codeweb.png',
      link: 'https://github.com/neagra12/Code-Explaining-Website',
      color: 'violet'
    },
    {
      title: 'Sentiment Analysis on Twitter Data & Emotes',
      subtitle: 'NLP with Emoticons',
      description: 'Analyzed 1.4M tweets to classify sentiment using advanced NLP.',
      fullDescription:
        'Developed a sentiment analysis tool using a dataset of 1.4 million tweets that included text, hashtags, and emoticons. Achieved 87% accuracy using advanced NLP techniques including tokenization, TF-IDF, logistic regression classifiers, and emoji sentiment mapping.',
      tags: ['Python', 'NLP', 'Scikit-learn', 'Pandas', 'Twitter API'],
      image: '/sentiment.png',
      link: 'https://github.com/neagra12/SentimentAnalysis',
      color: 'emerald'
    },
    {
      title: 'AI Plant Disease Detection',
      subtitle: 'Computer Vision',
      description: '92% accuracy detecting apple leaf diseases using Vision Transformers.',
      fullDescription:
        'Developed an AI-driven solution to analyze plant health using Vision Transformers (ViT) and classical deep learning models like ResNet and EfficientNet. This project focuses on accurately identifying apple leaf diseases such as cedar rust, apple scab, and black rot. Leveraging an enhanced dataset from the Plant Disease Dataset, the system ensures precise classification, aiding in early disease detection and sustainable agricultural practices.',
      tags: ['PyTorch', 'TensorFlow', 'Vision Transformers'],
      image: '/vit.png',
      link: 'https://your-project-link.com',
      color: 'cyan'
    },
    {
      title: 'Page Replacement Algorithms Website',
      subtitle: 'Interactive OS Learning Tool',
      description: 'Visualized FIFO, LRU, and Optimal algorithms interactively.',
      fullDescription:
        'Built an interactive website that simulates page replacement algorithms like FIFO, LRU, and Optimal. It helps students understand memory management concepts through animations, hit/miss tracking, and real-time visualization.',
      tags: ['JavaScript', 'Algorithms', 'Education', 'HTML', 'CSS'],
      image: '/pagereplacement.png',
      link: 'https://github.com/neagra12/PageReplacementAlgorithms',
      color: 'violet'
    },
    {
      title: 'IoT Fall Detection System',
      subtitle: 'Smart Safety for Seniors',
      description: 'IoT-enabled real-time fall detection using ESP8266 & sensors.',
      fullDescription:
        'Designed an innovative IoT system that detects falls among elderly individuals indoors using the ESP8266, MPU6050 accelerometer, and cloud alerts. The system instantly notifies caregivers via webhooks and stores event data in the cloud for further medical analysis.',
      tags: [
        'Python',
        'IoT',
        'MQTT',
        'ESP8266',
        'MPU6050',
        'Arduino IDE',
        'Webhooks',
        'API Integration',
        'Cloud Storage'
      ],
      image: '/iot.png',
      color: 'emerald'
    },
    {
      title: 'Enhanced Authentication System (ECC)',
      subtitle: 'Cryptography & Cloud Security',
      description: 'Improved ECC-based authentication for multi-server environments.',
      fullDescription:
        'Developed an improved authentication and key agreement scheme addressing vulnerabilities in the AMAKAS protocol. Using Elliptic Curve Cryptography (ECC), it prevents replay attacks, supports dynamic credential updates, and improves cloud, fog, and edge security.',
      tags: ['Elliptic Curve Cryptography', 'Python', 'Cloud Security', 'Cryptographic Protocols'],
      image: '/auth.png',
      color: 'cyan'
    }
  ];

  const experiences = [
    {
      role: 'Associate Instructor',
      company: 'Indiana University',
      period: 'Aug 2025 - Present',
      description:
        'Mentored 150+ students in Software Engineering, guiding teams through SDLC.',
      details: [
        'Mentored 150+ students for B535 Software Engineering',
        'Provided detailed feedback on code quality and design patterns',
        'Guided teams through SDLC including requirements, design, testing',
        'Developed assignments and labs focused on agile methodologies'
      ],
      icon: <Award className="w-6 h-6" />
      
    },
    {
      role: 'Data Science & Analytics Intern',
      company: 'Skechers USA',
      period: 'May 2025 - Aug 2025',
      description: 'Designed interactive dashboards, managed multi-terabyte datasets.',
      details: [
        'Designed interactive dashboards for sales and inventory',
        'Synthesized KPIs across 10+ data sources',
        'Achieved 99.8% data accuracy with Spark pipelines',
        'Introduced metric-driven flagging for anomaly detection'
      ],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      role: 'Software Developer',
      company: 'Nextun Technology',
      period: 'May 2023 - Jul 2024',
      description: 'Developed data analytics tool, reduced analysis delays by 28%.',
      details: [
        'Built analytics tool with Django, Python, and JavaScript',
        'Optimized data pipelines for multiple data sources',
        'Reduced analysis delays by 28%',
        'Implemented scalable data processing solutions'
      ],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      university: 'Indiana University Bloomington',
      location: 'Bloomington, Indiana, USA',
      period: 'Aug 2024 - May 2026',
      gpa: 'GPA: 3.8/4.0'
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      university: 'Pandit Deendayal Energy University',
      location: 'Gandhinagar, Gujarat, India',
      period: 'Aug 2020 - May 2024',
      gpa: 'GPA: 9.7/10.0'
    },
    {
      degree: 'High School Diploma',
      university: 'St. Xavier\'s High School',
      location: 'Ahmedabad, Gujarat, India',
      period: 'June 2008 - May 2020',
      gpa: 'GPA: 4.0/4.0'
    },
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript'] },
    { category: 'ML & AI', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'] },
    { category: 'Frameworks', items: ['React', 'Django', 'Flask', 'Spring Boot'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
    { category: 'Data Tools', items: ['Tableau', 'Power BI', 'Pandas', 'NumPy'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-text {
          background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ec4899);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        .cursor-glow {
          pointer-events: none;
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: 0;
        }
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div
        className="cursor-glow"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">Neeha</div>

            <div className="hidden md:flex items-center gap-2">
              {['home', 'about', 'education', 'experience', 'projects', 'publications', 'skills'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 rounded-full capitalize transition-all ${
                      activeSection === section
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
              <button
  onClick={() => scrollToSection('footer')}
  className="ml-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all"
>
  Contact
</button>


            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-6 py-4 space-y-2">
              {['home', 'about', 'education', 'experience', 'projects', 'publications', 'skills'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* HERO / HOME */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'center center'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>HELLO</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              I'm <span className="gradient-text">Neeha</span>
              <br />
              an Innovator
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming data into actionable insights and building scalable AI-powered
              solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
  onClick={() => window.open('/Neeha-Resume.pdf', '_blank')}
  className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
>
  <Download className="w-5 h-5" /> Resume
</button>

            </div>

            <div className="flex justify-center gap-4 pt-8">
              <a
                href="https://github.com/neagra12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/5 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/neeha-agrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/5 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:neagra@iu.edu"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/5 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex justify-center pt-12">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse pointer-events-none"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full pointer-events-none"></div>
                <img
                  src="neeha.jpg"
                  alt="Neeha Agrawal"
                  className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                My journey into technology began with an insatiable curiosity—one that turned
                into a relentless drive to build, innovate, and solve problems. Growing up, I
                was captivated by intelligent systems, inspired by movies like{' '}
                <span className="text-white font-semibold">Iron Man</span> and{' '}
                <span className="text-white font-semibold">Ex Machina</span>.
              </p>
              <p>
                The dream of creating something as intuitive as JARVIS led me to pursue a{' '}
                <span className="text-white font-semibold">
                  Master&apos;s in Computer Science at Indiana University
                </span>
                , where I now work on AI applications, data-driven solutions, and scalable
                software systems.
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                For me, technology isn&apos;t just about writing code—it&apos;s about crafting
                solutions that make an impact. Whether it&apos;s optimizing algorithms,
                designing user-friendly applications, or harnessing AI for real-world
                challenges, I thrive at the intersection of{' '}
                <span className="text-white font-semibold">creativity and logic</span>.
              </p>
              <p>
                When I&apos;m not immersed in tech, you&apos;ll find me lost in a sci-fi
                novel, experimenting with new recipes, or taking long walks where my best ideas
                often take shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="min-h-screen px-6 py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <div className="space-y-1 mb-2 text-sm">
                      <p className="text-cyan-400 font-semibold text-lg">{edu.university}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-gray-400">{edu.period}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-emerald-400 font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-screen px-6 py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Click on any card to see more details</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`flip-card cursor-pointer ${
                  flippedCard === idx ? 'flipped' : ''
                }`}
                onClick={() =>
                  setFlippedCard(flippedCard === idx ? null : idx)
                }
                style={{ minHeight: '400px' }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex flex-col">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl w-fit mb-4">
                        {exp.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                      <div className="space-y-1 mb-4 text-sm">
                        <p className="text-emerald-400 font-semibold">{exp.company}</p>
                        <p className="text-gray-500">{exp.period}</p>
                      </div>
                      <p className="text-gray-400 leading-relaxed flex-grow">
                        {exp.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <span>Click to view details</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <div className="h-full bg-gradient-to-br from-emerald-950/50 to-blue-950/50 border border-emerald-500/30 rounded-2xl p-6 flex flex-col">
                      <h3 className="text-lg font-bold text-emerald-400 mb-4">
                        Key Achievements
                      </h3>
                      <div className="space-y-3 overflow-y-auto flex-grow">
                        {exp.details.map((detail, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10 text-center text-sm text-gray-500">
                        Click to go back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-6 py-20 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4">Click on any project to see more details</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 text-left w-full"
              >
                <div
                  className={`h-2 bg-gradient-to-r from-${project.color}-500 to-${project.color}-600`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs">
  <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors">
    <span>Click to learn more</span>
    <ExternalLink className="w-3 h-3" />
  </div>

  {/* Hide "View Project" for last 2 projects */}
  {idx < projects.length - 2 && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
    >
      View Project →
    </a>
  )}
</div>

                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-black border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.image && (
                <div className="relative max-h-[90vh] overflow-hidden rounded-t-2xl bg-gray-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              <div className="relative p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-sm text-emerald-400 uppercase tracking-wider">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-emerald-400">
                    Project Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-emerald-400">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PUBLICATIONS */}
      <section
        id="publications"
        className="min-h-screen px-6 py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Publications <span className="gradient-text">&amp; Patents</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Cancer Detection With Machine Learning Approach: How Effective, How
                    Progressive
                  </h3>
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="text-emerald-400 font-semibold">IEEE</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Mar 19, 2024</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Machine learning is transforming cancer detection, diagnosis, and
                    treatment. This paper reviews existing research on ML applications in
                    oncology and explores the challenges of integrating AI into healthcare.
                  </p>
                  <a
                    href="https://ieeexplore.ieee.org/document/10461904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                  >
                    Read Paper
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300 font-semibold mb-3">
                    PATENT
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Contact-Less Authentication With Blockchain Integration for Access Logs
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The current invention demonstrates a contactless authentication system
                    integrating Blockchain with an ID card. It combines face detection, QR code
                    scanning, and Blockchain technology, resulting in a secure, time-efficient
                    authentication system with dynamic access control and log maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen px-6 py-20 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-white/[0.02] border border-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] hover:border-white/10 transition-all text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer"className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500">
              © 2025 Neeha Agrawal. Crafted with React &amp; Tailwind CSS.
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/neagra12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/neeha-agrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:neagra@iu.edu"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
