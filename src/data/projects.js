export const projects = [
    {
        id: "devdesk",
        title: "DevDesk — Full-Stack Project Management App",
        description: "A robust project management tool focusing on secure authentication, session persistence, and database cleanup.",
        techStack: ["React", "Bootstrap 5", "Node.js", "Express.js", "MongoDB", "JWT"],
        overview: "DevDesk builds a project/task manager with a secure auth flow using OTP verification, JWT tokens, ownership validation, pagination, and cleanup of unverified users. This makes it more robust and backend-oriented than typical MERN CRUD apps.",
        problem: "Many basic project management apps lack a secure authentication lifecycle, session persistence, and database cleanup.",
        solution: "Implemented a secure auth flow with OTP verification, JWT tokens, and ownership validation. Uses MongoDB TTL index to auto-delete unverified users, ensuring specific data cleanup.",
        architecture: "Organized into clear folders (controllers, routes, middleware, models). Centralized error handling ensures consistency. Auth flow is separated into middleware & protected routes.",
        security: [
            "Password hashing with bcrypt",
            "JWT token creation and verification",
            "Protected routes reject invalid tokens",
            "TTL index prevents database pollution",
            "Ownership validation for resources"
        ],
        challenges: "Ensuring session persistence and cleaning up unverified users.",
        fix: "Implemented auto-login via /auth/me after OTP verification and used MongoDB TTL indexes for automatic cleanup of unverified accounts.",
        screenshots: [
            "https://placehold.co/600x400/161b22/00f3ff?text=DevDesk+Dashboard",
            "https://placehold.co/600x400/161b22/00f3ff?text=Project+View",
            "https://placehold.co/600x400/161b22/00f3ff?text=Task+Management"
        ],
        githubLink: "https://github.com/abdulbasithibnhanifa/DevDesk",
        demoLink: "#"
    },
    {
        id: "instagram-clone",
        title: "Instagram Clone — Frontend UI",
        description: "A pixel-perfect frontend clone of the Instagram user interface using React and Vite.",
        techStack: ["React", "Vite", "CSS3", "React Router"],
        overview: "Built an Instagram-style interface with reusable components representing the feed, navigation, posts, and layout structure to practice modern React component composition.",
        problem: "To understand and practice modern React component composition and complex UI layout design.",
        solution: "Built a responsive Instagram-style interface with reusable components for the feed, navigation, and posts using a component-based architecture.",
        challenges: "Breaking down a complex UI into reusable, manageable components.",
        fix: "Decomposed the UI into small, reusable React components to avoid duplication and managed local interactions with React state.",
        screenshots: [
            "https://placehold.co/600x400/161b22/bc13fe?text=Instagram+Feed",
            "https://placehold.co/600x400/161b22/bc13fe?text=Profile+Page",
            "https://placehold.co/600x400/161b22/bc13fe?text=Post+Modal"
        ],
        githubLink: "https://github.com/abdulbasithibnhanifa/Instagram-clone",
        demoLink: "#"
    },
    {
        id: "todo-app",
        title: "To-Do App — Static Project",
        description: "A simple, straightforward static To-Do application focusing on DOM manipulation and local task management.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        overview: "A simple to-do interface with core task listing and management (CRUD operations) built with vanilla JavaScript.",
        problem: "To practice basic web development concepts and manual DOM manipulation without a framework.",
        solution: "Built a functional to-do interface using vanilla JavaScript for DOM manipulation to add, update, and delete tasks.",
        challenges: "Managing task state and UI updates purely through DOM manipulation.",
        fix: "Implemented efficient DOM event listeners and local state management to handle task operations smoothly.",
        screenshots: [
            "https://placehold.co/600x400/161b22/0afff0?text=Task+List",
            "https://placehold.co/600x400/161b22/0afff0?text=Add+Task",
            "https://placehold.co/600x400/161b22/0afff0?text=Filter+Tasks"
        ],
        githubLink: "https://github.com/abdulbasithibnhanifa/To-Do-app",
        demoLink: "#"
    }
];
