import { Project } from "../src/types";

const projects: Project[] = [
  {
    title: "Martellone Alexa Skill",
    description: [
      "Amazon Alexa Skill created as a tribute to the mythological Nando Martellone, character of the TV Show Boris.",
    ],
    logo: "https://sirlisko.com/imgs/martellone.png",
    links: {
      "Amazon UK store":
        "https://www.amazon.co.uk/sirLisko-Martellone-Boris/dp/B08C7SHW3T/",
      "Amazon IT store":
        "https://www.amazon.it/sirLisko-Martellone-Boris/dp/B08C7SHW3T/",
      Github: "https://github.com/sirLisko/martellone-alexa-skill",
    },
    tech: ["Alexa skill", "AWS", "Lambda", "Serverless"],
  },
  {
    title: "ZoomMEME",
    description: [
      "Super simple zoom-in meme generator. Drag and drop an image and then create your meme.",
      "PWA (Progressive Web App) powered by pure and sweet Vanilla Javascript.",
    ],
    logo: "https://sirlisko.com/imgs/zoommeme.png",
    links: {
      Website: "https://zoomme.me",
      Github: "https://github.com/sirlisko/zoommeme",
    },
    tech: ["PWA", "Vanilla JS", "Webpack", "Jest"],
  },
  {
    title: "Audible RSS",
    description: [
      "Get an RSS feed of the latest audiobook relases on Audible.",
      "RSS Feed powered by Node/Express, created scraping Audible website.",
    ],
    logo: "https://sirlisko.com/imgs/audible-rss.png",
    links: {
      Website: "https://audiblerss.sirlisko.com",
      Github: "https://github.com/sirlisko/audible-rss",
    },
    tech: ["Node", "Express", "React", "Web Scraping"],
  },
  {
    title: "Should I listen it",
    description: [
      "Create a playlist with the most probable songs that are going to be played to a given artist gig.",
      "Next.js app that proxies external APIs (Setlist.fm, Spotify and Songkick) and mashes them up and creates a Spotify playlist for you.",
    ],
    logo: "https://sirlisko.com/imgs/ticket.png",
    links: {
      Website: "https://shouldilistenit.sirlisko.com",
      Github: "https://github.com/sirLisko/shouldilistenit",
    },
    tech: ["Next.js", "3rd party APIs", "Spotify Auth", "Vercel CI/CD"],
  },
  {
    title: "Shazamify (a.k.a. Zamify)",
    description: [
      "Shazamify allows you to play your Shazams in Spotify, directly from the browser, by adding a small Spotify icon to every Shazam track page.",
      "Chrome Extension powered by Spotify OAuth and Web API.",
    ],
    logo: "https://sirlisko.com/blog/content/images/2015/04/icon.png",
    links: {
      Chrome_extension:
        "https://chrome.google.com/webstore/detail/zamify/foilfgbdcipbajipeodmjjnkflkfocin",
      Blog: "https://sirlisko.com/blog/shazamify",
      Github: "https://github.com/sirLisko/shazamify",
    },
    tech: ["Chrome Extension", "Spotify OAuth", "Spotify API"],
  },
  {
    title: "Deliverance Improved",
    description: [
      "Little Node/Angular webapp that scraps the original website menu of deliverance.co.uk and it shows it in a more functional way.It adds the possibility to filter, order and search in the menu.",
    ],
    logo: "https://sirlisko.com/imgs/archive/dlogo.jpg",
    links: {
      Website: "http://deliverance.herokuapp.com",
      Github: "https://github.com/sirLisko/deliverance",
    },
    tech: ["Node", "Angular JS", "Web Scraping", "Bootstrap", "Heroku"],
  },
  {
    title: "Gulp Blacklist Marker",
    description: [
      "Chrome Extension that marks blacklisted gulp modules when browsing NPM and GitHub.",
    ],
    logo: "https://sirlisko.com/blog/content/images/2015/03/icon128-1.png",
    links: {
      Chrome_extension:
        "https://chrome.google.com/webstore/detail/gulp-blacklist-marker/kifhpjdagaiganbdabkpepncopmbfbal",
      Blog: "https://sirlisko.com/blog/gulp-blacklist-marker/",
      Github: "https://github.com/sirLisko/gulp-blacklist-marker",
    },
    tech: ["Chrome Extension", "Gulp", "NPM"],
  },
  {
    title: "Pizza Club",
    description: [
      "Static site generated by Gatsby and hosted as GitHub Page where I collect all the pizzas that I enjoyed around the World.(work in progress)",
    ],
    logo: "https://sirlisko.com/imgs/pizza.png",
    links: {
      Website: "http://pizzaclub.sirlisko.com/",
      Github: "https://github.com/sirLisko/pizzaclub",
    },
    tech: ["Gatsby", "React", "GitHub Pages"],
  },
  {
    title: "Sproxify - deprecated",
    description: [
      "Sproxify intercepts Spotify links and let you choose where to play them. Through a fancy-looking button, Sproxify redirects you in the desiderated environment where you can finally play your music.Just where you want!",
    ],
    logo: "https://sirlisko.com/blog/content/images/2015/03/icon128.png",
    links: {
      Blog: "https://sirlisko.com/blog/sproxify/",
      Github: "https://github.com/sirLisko/sproxify",
    },
    tech: ["Chrome Extension", "User Script"],
  },
  {
    title: "POMOfy - deprecated",
    description: [
      "POMOfy introduces the productivity of the Pomodoro Technique in Spotify. Basically a Spotify app that allows you to use songs as timer for the Pomodoro.",
    ],
    logo: "https://raw.githubusercontent.com/sirLisko/apps-pomofy/master/img/pomodoro.png",
    links: {
      Screenshot: "https://sirlisko.com/imgs/archive/pomofy.png",
      Github: "https://github.com/sirLisko/apps-pomofy",
    },
    tech: ["Spotify App"],
  },
];

export default projects;
