const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 40, suffix: "+", label: "Satisfied Clients" },
    { value: 50, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      imgPath: "/images/logos/react.png",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      imgPath: "/images/logos/python.svg",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      imgPath: "/images/logos/node.png",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      imgPath: "/images/logos/three.png",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      imgPath: "/images/logos/git.svg",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      company: "edit solution | Sweden (Hybrid)",
      title: "Odoo Developer & Frontend UI Lead",
      date: "May 2026 – Present",
      review: "Alfiya spearheaded our Transport Management System (TMS) frontend, transforming legacy templates with OWL (Odoo Web Library) and integrating European e-CMR protocols for seamless cross-border freight automation.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      responsibilities: [
        "Owned and led end-to-end development of an enterprise Transport Management System (TMS) for international logistics operations in Sweden.",
        "Completely re-architected the frontend by replacing default Odoo templates with a custom, high-performance UI built with OWL (Odoo Web Library).",
        "Integrated the European e-CMR (electronic Consignment Note) digital freight protocol, enabling paperless cross-border transit tracking and automated documentation.",
        "Engineered custom PostgreSQL data models, automated dispatch workflows, and dynamic QWeb reporting templates for freight billing and driver manifests.",
      ],
    },
    {
      company: "Iqra Technology | Maharashtra, India",
      title: "AI Developer & Full-Stack Engineer",
      date: "January 2025 – Present",
      review: "Alfiya engineered the entire UI/UX system for our Enterprise AI Chatbot & DMS, connecting LangChain, AstraDB Vector DB, and OpenAI with flawless citation streaming and sub-second query response times.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      responsibilities: [
        "Architected and engineered the complete frontend UI/UX architecture from the ground up for an Enterprise AI Chatbot & DMS, integrating LangChain, AstraDB, and OpenAI GPT-4.",
        "Served as lead engineer testing and hardening the in-browser Smart Compiler engine, isolating edge-case execution bugs across Python, JavaScript, and Java.",
        "Built full-stack corporate solutions including TravEx (Corporate Travel & Expense ERP) and Employee Leave Management System (LMS) with React 19, Tailwind CSS, and RESTful APIs.",
        "Engineered automated AI agent workflows using n8n for event orchestration, webhook triggers, and background ETL data pipelines.",
      ],
    },
    {
      company: "edit solution | Sweden (Hybrid)",
      title: "Java Software Engineer",
      date: "September 2025 – May 2026",
      review: "Alfiya delivered exceptional end-to-end results for our Swedish PPE compliance and tracking system. Her secure Java RESTful APIs and SQL schema optimizations significantly reduced latency under high concurrency.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      responsibilities: [
        "Managed the end-to-end delivery of an enterprise Personal Protective Equipment (PPE) compliance, allocation, and tracking platform for Swedish client operations.",
        "Developed secure Java RESTful APIs for real-time safety equipment inventory tracking, inspection audits, and employee allocation telemetry.",
        "Optimized complex SQL queries and relational schemas, significantly reducing query latency for high-concurrency safety compliance reports.",
        "Collaborated directly with international stakeholders in Sweden adhering to Agile/Scrum delivery milestones.",
      ],
    },
    {
      company: "Iqra Technology | Maharashtra, India",
      title: "Full-Stack Software Engineering Intern",
      date: "April 2024 – January 2025",
      review: "During her internship, Alfiya developed Shoppit, a full-stack e-commerce platform with Django REST Framework and React, proving her self-driven capability to ship complete production-ready products independently.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo2.png",
      responsibilities: [
        "Engineered Shoppit (Full-Stack E-Commerce Platform) featuring a decoupled React frontend, Django REST Framework backend, and PayPal Sandbox payments.",
        "Developed modular, reusable React UI components and integrated client-server REST APIs with token-based SimpleJWT authentication.",
        "Performed technical SEO audits, core web vitals speed optimization, and structured metadata schema markup.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Alfiya. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Alfiya was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend her for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Alfiya was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Alfiya's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Alfiya is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Alfiya was a pleasure to work with. She turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Alfiya’s expertise in web development is truly impressive. She delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. She’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Alfiya was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations. Her skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alfiya-khan-dev/",
      imgPath: "/images/linkedin.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/Alfiya2109",
      imgPath: "/images/code.svg",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917208048534",
      imgPath: "/images/whatsapp.svg",
    },
    {
      name: "Email",
      url: "mailto:alfiyakhan0921@gmail.com",
      imgPath: "/images/mail.svg",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };