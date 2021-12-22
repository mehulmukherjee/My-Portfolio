import pdf from './resume.pdf';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mehulmukherjee.github.io/My-Portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mehul Mukherjee',
  role: 'Software Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: pdf,
  social: {
    linkedin: 'https://linkedin.com/in/mehulmukherjee',
    github: 'https://github.com/mehulmukherjee',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'JavaScript',
  'TypeScript',
  'React',
  'Java',
  'Angular',
  'SQL',
  'MySQL',
  'Git',
  'Jira',
  'Spring Framework',
  'Hibernate',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mehulshekharmukherjee@gmail.com',
}

export { header, about, projects, skills, contact }
