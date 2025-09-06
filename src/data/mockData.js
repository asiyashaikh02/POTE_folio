export const students = [
  {
    id: 1,
    name: "Ananya Sharma",
    email: "ananya.sharma@potecollege.edu",
    branch: "Computer Engineering",
    year: "Final Year",
    profilePicture: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    bio: "Full-stack developer passionate about creating impactful digital solutions. Love working with React and Node.js.",
    skills: ["React", "Node.js", "MongoDB", "Python", "Machine Learning"],
    achievements: [
      {
        id: 1,
        title: "Winner - Smart India Hackathon 2024",
        description: "Developed an AI-powered student mentorship platform",
        date: "2024-03-15",
        type: "Competition",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 2,
        title: "Published Research Paper",
        description: "AI in Education: Personalized Learning Paths",
        date: "2024-02-20",
        type: "Research",
        image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    projects: [
      {
        id: 1,
        title: "EduConnect - Learning Management System",
        description: "A comprehensive LMS built with React and Firebase, featuring real-time collaboration and AI-powered recommendations.",
        techStack: ["React", "Firebase", "Node.js", "OpenAI API"],
        githubLink: "https://github.com/ananya/educonnect",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    badges: ["Top Performer", "Innovator", "Research Scholar"],
    likes: 124,
    followers: 89
  },
  {
    id: 2,
    name: "Rahul Patil",
    email: "rahul.patil@potecollege.edu",
    branch: "Mechanical Engineering",
    year: "Third Year",
    profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    bio: "Robotics enthusiast and automation expert. Building the future with mechanical innovations and IoT integration.",
    skills: ["CAD Design", "Arduino", "IoT", "3D Printing", "Python"],
    achievements: [
      {
        id: 3,
        title: "Best Innovation Award - TechFest Mumbai",
        description: "Developed an autonomous waste sorting robot",
        date: "2024-01-10",
        type: "Innovation",
        image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    projects: [
      {
        id: 2,
        title: "SmartBot - Autonomous Cleaning Robot",
        description: "IoT-enabled cleaning robot with computer vision and path optimization algorithms.",
        techStack: ["Arduino", "Python", "OpenCV", "IoT"],
        githubLink: "https://github.com/rahul/smartbot",
        image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    badges: ["Innovator", "Tech Leader"],
    likes: 98,
    followers: 67
  },
  {
    id: 3,
    name: "Priya Desai",
    email: "priya.desai@potecollege.edu",
    branch: "Information Technology",
    year: "Final Year",
    profilePicture: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    bio: "UI/UX designer and frontend developer. Creating beautiful, user-centric digital experiences.",
    skills: ["UI/UX Design", "Figma", "React", "JavaScript", "CSS"],
    achievements: [
      {
        id: 4,
        title: "UI/UX Design Contest Winner",
        description: "Designed award-winning mobile app interface for healthcare",
        date: "2024-02-05",
        type: "Design",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    projects: [
      {
        id: 3,
        title: "MedCare - Healthcare App Design",
        description: "Complete UI/UX design for a telemedicine application with focus on accessibility and user experience.",
        techStack: ["Figma", "React", "CSS", "JavaScript"],
        githubLink: "https://github.com/priya/medcare-ui",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    badges: ["Design Excellence", "Creative Thinker"],
    likes: 156,
    followers: 134
  },
  {
    id: 4,
    name: "Arjun Kumar",
    email: "arjun.kumar@potecollege.edu",
    branch: "Electrical Engineering",
    year: "Third Year",
    profilePicture: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200",
    bio: "Renewable energy advocate working on sustainable power solutions and smart grid technologies.",
    skills: ["Power Systems", "MATLAB", "Arduino", "Solar Energy", "Smart Grids"],
    achievements: [
      {
        id: 5,
        title: "Green Energy Innovation Award",
        description: "Developed efficient solar panel tracking system",
        date: "2024-01-25",
        type: "Innovation",
        image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    projects: [
      {
        id: 4,
        title: "Solar Tracker Pro",
        description: "Automated solar panel tracking system that increases energy efficiency by 30% using IoT sensors and machine learning.",
        techStack: ["Arduino", "MATLAB", "IoT", "Machine Learning"],
        githubLink: "https://github.com/arjun/solar-tracker",
        image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    badges: ["Green Innovator", "Sustainability Champion"],
    likes: 87,
    followers: 52
  },
  {
    id: 5,
    name: "Sakshi Joshi",
    email: "sakshi.joshi@potecollege.edu",
    branch: "Computer Engineering",
    year: "Second Year",
    profilePicture: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    bio: "Aspiring data scientist with a passion for machine learning and artificial intelligence applications in healthcare.",
    skills: ["Python", "Machine Learning", "Data Science", "TensorFlow", "SQL"],
    achievements: [
      {
        id: 6,
        title: "Best Data Science Project - College Symposium",
        description: "AI model for early disease prediction using medical data",
        date: "2024-03-01",
        type: "Research",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    projects: [
      {
        id: 5,
        title: "HealthPredict AI",
        description: "Machine learning model for early disease prediction using patient data and medical history analysis.",
        techStack: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
        githubLink: "https://github.com/sakshi/healthpredict",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ],
    badges: ["Rising Star", "Data Science Expert"],
    likes: 73,
    followers: 41
  }
];

export const currentUser = students[0]; // Ananya Sharma as the logged-in user

export const feedPosts = [
  {
    id: 1,
    studentId: 1,
    student: students[0],
    content: "Just won the Smart India Hackathon 2024! 🏆 Our AI-powered student mentorship platform impressed the judges. Thanks to my amazing team!",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 124,
    comments: 23,
    shares: 8,
    timestamp: "2024-03-15T10:30:00Z",
    type: "achievement"
  },
  {
    id: 2,
    studentId: 2,
    student: students[1],
    content: "Excited to share my latest project - SmartBot! An autonomous cleaning robot that uses computer vision and IoT. #Innovation #Robotics",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 98,
    comments: 15,
    shares: 12,
    timestamp: "2024-03-10T14:20:00Z",
    type: "project"
  },
  {
    id: 3,
    studentId: 3,
    student: students[2],
    content: "Thrilled to announce that my UI/UX design for a healthcare app won the design contest! User-centered design makes all the difference. 🎨",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 156,
    comments: 31,
    shares: 19,
    timestamp: "2024-03-05T09:15:00Z",
    type: "achievement"
  },
  {
    id: 4,
    studentId: 4,
    student: students[3],
    content: "Working on sustainable energy solutions! My solar tracking system increases efficiency by 30%. Let's build a greener future! 🌱⚡",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 87,
    comments: 12,
    shares: 6,
    timestamp: "2024-03-01T16:45:00Z",
    type: "project"
  },
  {
    id: 5,
    studentId: 5,
    student: students[4],
    content: "My AI model for disease prediction just won best project at the college symposium! Machine learning in healthcare has so much potential. 🧬🤖",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    likes: 73,
    comments: 18,
    shares: 5,
    timestamp: "2024-02-28T11:30:00Z",
    type: "achievement"
  }
];

export const branches = [
  "Computer Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Electronics Engineering"
];

export const years = [
  "First Year",
  "Second Year", 
  "Third Year",
  "Final Year"
];

export const skillCategories = [
  "Programming Languages",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "UI/UX Design",
  "DevOps",
  "Database",
  "Cloud Computing",
  "IoT",
  "Robotics",
  "CAD Design"
];