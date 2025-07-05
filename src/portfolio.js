// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Kyle Deejay C. Mamplata",
    message: "Aspiring Backend Developer & Database Administrator focused on building full-stack web applications and managing structured data. Skilled in Laravel, Vue.js, Java, and SQL, with hands-on experience in API development, frontend integration, and database design. Passionate about clean code, data reliability, and continuous learning.",
    basedLocation: "Cabuyao, Laguna, Philippines",
    resumeLink: "https://drive.google.com/file/d/1OOgYfDJ4_A_wGbwQ8BFU1Oq9ahYLRPWV/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentportrait.png'
}

const socialMediaLinks = {
    github: "https://github.com/mamplata",
    linkedin: "https://linkedin.com/in/kylemamplata/",
    facebook: "https://www.facebook.com/kyle.mamplatac",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I am an aspiring backend developer and database administrator with experience in full-stack development using Laravel, Vue.js, Java, and SQL-based systems. During my internship at Pamantasan ng Cabuyao, I contributed to both frontend interfaces and backend API development, including database design and optimization. I hold a TESDA NC II certification in Computer System Servicing and am passionate about building reliable, data-driven systems."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Java",
        "Python",
        "JS",
        "Vue.js",
        "MySQL",
        "Express.js",
        "Django",
    ],
    photo1Link: "images/portrait1.jpg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.png"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Programming Intern",
        company: {
            name: "University of Cabuyao",
            link: "https://pnc.edu.ph/"
        },
        duration: "Jan 2025- April 2025",
        bulletPoints: [
            "Developed the ITAP system using Laravel (Breeze), Vue.js, Node.js, and MySQL.",
            "Worked in an Agile environment with weekly stand-ups, sprint planning, and regular presentations of progress.",
            "Collaborated closely with a partner developer—took lead on backend development, including API design and database structuring, while also contributing to frontend UI implementation.",
            "Used Git and GitHub for source control and collaboration, managing branches, code reviews, and pull requests to maintain code quality and team efficiency.",
            "Prioritized maintainable, modular code and efficient API communication to ensure smooth system performance and scalability."
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "JS",
            "Vue.js",
            "Node.js",
            "Tailwind"
        ]
    },
    {
        position: "Capstone Project: AgroConnect Cabuyao: Agricultural Information System with Seasonal Trends and Geotagging of Crops",
        company: {
            name: "University of Cabuyao",
            link: "https://pnc.edu.ph"
        },
        duration: "March 2023 - December 2024",
        bulletPoints: [
            "Participated in full-cycle system development using Laravel and jQuery, MySQL",
            "Integrated Leaflet.js for interactive geospatial visualizations, enabling users to view agricultural data and geotagged locations.",
            "Collaborated with team members via Git and GitHub, managing feature branches, resolving merge conflicts, and conducting peer reviews.",
            "Collaborated with a project partner to plan features, structure the database, and present the system to stakeholders."
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "Jquery",
            "MySQL",
            "Bootstrap",
            "Leaflet.js",
            "Weather API",
        ],
        links: [
          {
            linkName: "User Manual",
            linkSource: "https://drive.google.com/file/d/1rrAnNlee9LOPIDmi49w5lxd8RCnxGT99/view?usp=drivesdk"
          },
          {
            linkName: "Github Repo",
            linkSource: "https://github.com/mamplata/agroconnect_app"
          }
        ]
    }
]

// --- 💻 Work Section ---
const works = [
  {
    projectName: "Pizza Ordering System",
    yearCompleted: "2023",
    description:
      "A desktop application for managing pizza orders, built using Java Swing. Features include menu selection, order summary, and transaction recording.",
    techStack: "Java (Swing), Eclipse",
    links: [],
    imageLink1: "images/pizza1.jpeg",
    imageLink2: "images/pizza2.jpeg",
  },
  {
    projectName: "Agroconnect V2",
    yearCompleted: "2024",
    description:
      "An improved version of my agriculture information system. Includes updated UI, user roles, weather API integration, and optimized database design.",
    techStack: "Laravel Breeze, Blade, MySQL, Weather API, Bootstrap",
    links: [],
    imageLink1: "images/agroconnectv2.png",
    imageLink2: "images/agroconnectv2_1.png",
  },
  {
    projectName: "Library Management System",
    yearCompleted: "2025",
    description:
      "A web-based system for managing books, including CRUD operations, borrowing, and returning. Built with Django REST framework and a Bootstrap frontend.",
    techStack: "Python, Django REST API, MySQL, Bootstrap",
    links: [],
    imageLink1: "images/library1.png",
    imageLink2: "images/library2.png",
  },
]


const archiveLink = "https://github.com/mamplata?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Actively seeking full-time software development positions as a June 2025 graduate.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "deejaymamplata29@gmail.com", // email takes precedance
            other: ""
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}