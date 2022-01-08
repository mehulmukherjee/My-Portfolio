import pdf from "./resume.pdf";

const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: "https://mehulmukherjee.github.io/My-Portfolio",
    title: "JS.",
};

const about = {
    // all the properties are optional - can be left empty or deleted
    name: "Mehul Mukherjee",
    role: "Soccer Player.  Marvel Enthusiast. Software Engineer",
    description: "",
    resume: pdf,
    social: {
        linkedin: "https://linkedin.com/in/mehulmukherjee",
        github: "https://github.com/mehulmukherjee",
    },
};

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: "Thread Migrator",
        description: `Migrated a pthread from machine A to another machine B. The task that a pthread was performing in
      machine A, is resumed in machine B when a pthread is migrated from A to B.`,
        stack: ["C"],
        sourceCode: "https://github.com/mehulmukherjee/thread-migrator",
        livePreview: "",
    },
    {
        name: "Distributed Mutex Lock",
        description:
            "Machines with different IP addresses, compete for a lock for a common critical section by following Ricart-Agarwala distributed mutex lock algorithm. Machines communicate with each other using gRPC.",
        stack: ["C++"],
        sourceCode: "https://github.com/mehulmukherjee/distributed-mutex-lock",
        livePreview: "",
    },
    {
        name: "Information Retrieval System",
        description:
            "Implemented a record-level inverted index with a user interface for searching a word or a sentence in a set of documents. When searching a word or a phrase, the software returns the document links which contains the search key.",
        stack: ["Python", "Flask", "HTML", "CSS"],
        sourceCode:
            "https://github.com/mehulmukherjee/information-retrieval-system",
        livePreview: "",
    },
];

const experiences = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: "Lumen Technologies",
        title: "Software Engineer",
        tenure: "Aug 2019 to Jun 2021",
        description: `Developed REST APIs using spring framework and developed the front-end using Angular`,
        stack: [
            "Java",
            "TypeScript",
            "JavaScript",
            "Angular",
            "SQL",
            "HTML",
            "CSS",
        ],
    },
    {
        name: "Samsung R&D Institute Bangalore",
        title: "Software Engineer(intern)",
        tenure: "Jan 2019 to Jun 2019",
        description:
            "Developed an android app to detect objects in a live video stream using a pre-built YOLO classifier",
        stack: ["Android-Studio Bixby"],
    },
    {
        name: "Deloitte India",
        title: "Software Engineer(intern)",
        tenure: "May 2018 to Jul 2018",
        description:
            "Developed SQL and NoSQL queries for an Oracle and MongoDB databases respectively",
        stack: ["SQL", "MongoDB"],
    },
];

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    "Java",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "SQL",
    "MySQL",
    "Git",
    "Jira",
    "REST API",
];

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: "mehulshekharmukherjee@gmail.com",
};

export { header, about, projects, skills, contact, experiences };
