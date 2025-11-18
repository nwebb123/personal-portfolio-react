import PPLSplit from "./pplsplit-logo.png";
import QRCode from "./qr-code-project.png";
import MightGuy from "./might-guy.png";
import QuickQuiz from "./quick-quiz.png";
import WeddingSite from "./wedding-rings.png";

export const projects = [
  {
    title: "Wedding RSVP App",
    href: "https://emilyandnick.netlify.app/",
    img: WeddingSite,
    imgWidth: 90,
    imgClass: "project-img",
    description:
      "A full-stack RSVP application built with React, .NET Web API, & SQL. Contact me for access to a test account!",
  },
  {
    title: "Quick Quiz",
    href: "https://quick-quiz-reactjs.netlify.app/",
    img: QuickQuiz,
    imgWidth: 90,
    imgClass: "project-img-small",
    description:
      "A React quiz application while on the go.",
  },
  {
    title: "PPL Workout Generator",
    href: "https://pplsplit.netlify.app/",
    img: PPLSplit,
    imgWidth: 220,
    imgClass: "project-img",
    description:
      "Generates a randomized Push/Pull/Legs workout routine for daily workouts. Built with HTML, CSS, and JavaScript.",
  },
  {
    title: "QR Code Generator",
    href: "https://ineedaqrcode.netlify.app/",
    img: QRCode,
    imgWidth: 90,
    imgClass: "project-img-small",
    description:
      "Create QR codes for events or websites with a simple, clean interface.",
  },
  {
    title: "Inspire Me Might Guy!",
    href: "https://mighty-might-guy.netlify.app/",
    img: MightGuy,
    imgWidth: 80,
    imgClass: "project-img-centered",
    description:
      "A FreeCodeCamp tribute page built using Vue.js to provide inspirational quotes.",
  },
];
