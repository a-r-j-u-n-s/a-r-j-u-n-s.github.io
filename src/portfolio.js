const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://a-r-j-u-n-s.github.io/',
  title: 'A.S.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'arjun srivastava',
  role: 'software developer and musician',
  description:
    "here's some stuff i've been working on recently!",
  resume: 'https://www.linkedin.com/in/arjun-srivastava042701/overlay/1635480948987/single-media-viewer/',
  social: {
    linkedin: 'https://www.linkedin.com/in/arjun-srivastava042701/',
    github: 'https://github.com/a-r-j-u-n-s',
    youtube: 'https://www.youtube.com/channel/UCLj5djpva10jFLe6WB7WQrg',
    spotify: '',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SaveGame',
    description:
      'A save manager command-line interface for singleplayer PC videogames. Features include automatic save folder backups, custom labeled saves, reverting your game to previous saves, and more!',
    stack: ['Python', 'Batch'],
    sourceCode: 'https://github.com/a-r-j-u-n-s/SaveManager',
    // livePreview: 'https://github.com',
  },
  {
    name: 'MuseShare',
    description:
      'A clean and simple open-source song sharing web app for musicians! Built with React and hosted with Firebase.',
    stack: ['JavaScript', 'React', 'Firebase', 'Jest'],
    sourceCode: 'https://github.com/a-r-j-u-n-s/MuseShare-App',
    livePreview: 'https://museshare-5e6ed.web.app/',
  },
  {
    name: 'Data Migration - Firestore/Redis',
    description:
      'A bash CLI and Python script for local import/export jobs between Google Cloud Firestore and redis. Intended to be used for small projects where quick data transfer is needed.',
    stack: ['Python', 'Bash', 'Redis', 'Firestore'],
    sourceCode: 'https://github.com/a-r-j-u-n-s/data-migration-firestore-redis',
    // livePreview: 'https://github.com',
  },
]

const music = [
  {
    name: 'G.O.A.T - Polyphia (Ukulele Cover)',
    description:
      "My cover of Polyphia's 'G.O.A.T', but on a Uke",
    link: "https://www.youtube.com/watch/RkRrl2ozp8k",
    embedId: "RkRrl2ozp8k"
  },
  {
    name: 'Roz Roz / Magic (Mashup)',
    description:
      'A mashup I produced and played guitar on for my band, "Unplugged". We combined Roz Roz by Shilpa Rao and the Yellow Diary with Magic by Coldplay',
    link: "https://www.youtube.com/watch?v=UYcRUVlF9-E",
    embedId: "UYcRUVlF9-E"
  },
  {
    name: 'Death Note - Ichika Nito (Guitar Cover)',
    description:
      "One of the hardest covers I've ever attempted",
    link: 'https://www.youtube.com/watch?v=oqAoS5xQupw',
    embedId: "oqAoS5xQupw"
  },
  {
    name: 'Best Part - Daniel Caesar ft. H.E.R. (Cover)',
    description:
      "Fingerstyle guitar/vocal cover with a friend of one of my favorite songs.",
    link: 'https://www.youtube.com/watch?v=Zjtz8UDJ4lw',
    embedId: "Zjtz8UDJ4lw"
  },
  {
    name: 'moonrise - arjun (guitar playthrough)',
    description:
      "Me playing the first song I ever wrote!",
    link: 'https://www.youtube.com/watch?v=5w28hk2gG1A',
    embedId: "5w28hk2gG1A"
  },
  {
    name: 'Real - Unprocessed ft. Tim Henson (Solo Cover)',
    description:
      "Covering a great solo from one of my favorite guitarists",
    link: 'https://www.youtube.com/watch?v=_QyIU8uKn-4',
    embedId: "_QyIU8uKn-4"
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'JavaScript',
  'C',
  'Java',
  'React',
  'Django',
  'Git',
  'Redis',
  'Kafka',
  'SystemVerilog',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'arj1@uw.edu',
}

export { header, about, projects, skills, contact, music }