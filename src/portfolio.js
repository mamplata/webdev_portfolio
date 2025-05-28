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
    message: "I’m a full-stack developer with a Bachelor’s degree in Information Technology, currently serving as an IT Programming Intern at the University of Cabuyao. Alongside a fellow developer, I developed ITAP—a student gate entrance and attendance system powered by NFC technology. I am also pursuing a TESDA Computer System Servicing (CSS) certification while continuously expanding my technical skills through hands-on projects and self-driven learning.",
    basedLocation: "Cabuyao, Laguna, Philippines",
    resumeLink: "https://drive.google.com/file/d/18PepbgD2pkcOqVDPlGK_Ek8dHdiPebMk/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
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
        "I’m a full-stack developer who enjoys solving problems and building user-focused solutions. With a background in Information Technology and a certification in computer system servicing in progress, I’ve developed my skills through hands - on projects and internships.I work well with teams, communicate clearly, and stay focused on improving my skills and building reliable software."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Java",
        "Python",
        "JavaScript",
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
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "EdTech AI Tool",
        yearCompleted: "2024",
        description: "Developed an educational tool in collaboration with a peer, to rethink the college student and AI interaction. With a core principle to enhance learning and personal growth. Responsible for UI, UX, and DB management with ongoing goal to complete version 1.0 in December 2024.",
        techStack: "Python, Vue.js",
        links: [],
        imageLink: "images/version_edtech_pic.png",
        alignLeft: false
    },
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

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