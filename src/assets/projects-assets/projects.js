import QuickQuiz from "./quick-quiz.png";
import PPLSplit from "./pplsplit-logo.png";
import WeddingSite from "./wedding-rings.png";

export const projects = [
  {
    title: "Wedding RSVP App",
    href: "https://emilyandnick.netlify.app/",
    github: "https://github.com/nwebb123/wedding-site-react",
    img: WeddingSite,
    imgWidth: 90,
    imgClass: "project-img",
    description:
      "Full-stack RSVP application built with React, ASP.NET Core, and SQL Server. Scaled from free to paid tier supporting up to 150 requests over a 60-day period. Send me a message for a demo/walkthrough.",
  },
  {
    title: "Quick Quiz",
    href: "https://quick-quiz-reactjs.netlify.app/",
    github: "https://github.com/nwebb123/quiz-app-react",
    img: QuickQuiz,
    imgWidth: 90,
    imgClass: "project-img-small",
    description:
      "Interactive quiz application built with React demonstrating state management and component lifecycle practices. Features multiple choice questions, a scoring system, and responsive mobile-first design.",
  },
  {
    title: "PPL Workout Generator",
    href: "https://pplsplit.netlify.app/",
    github: "https://github.com/nwebb123/workout-app-vanilla",
    img: PPLSplit,
    imgWidth: 220,
    imgClass: "project-img",
    description:
      "Randomized workout routine generator built with vanilla JavaScript and CSS. Helps users create varied Push/Pull/Legs workout splits to avoid workout plateaus and maximize training effectiveness.",
  },
];
