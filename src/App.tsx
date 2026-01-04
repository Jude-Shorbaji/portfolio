import "./App.css";
import { useState } from "react";
import { Project } from "./Project";

function NavigationBar({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className="navigationbar">
        <div className="navLeft">
          <h2>Judes Portfolio</h2>
        </div>
        <div className="navRight">
          <button onClick={() => setPage(1)}>Home</button>
          <button onClick={() => setPage(2)}> Projects </button>
          <button onClick={() => setPage(3)}> Contact Me</button>
        </div>
      </div>
    </>
  );
}
function WelcomePanel() {
  return (
    <>
      <div className="welcome">
        <div className="welcomeLeft">
          <img src={"/ProfilePicture.jpg"} alt="" className="profilePic"></img>
        </div>
        <div className="welcomeRight">
          <h1>Jude Shorbaji</h1>
          <h3>Rutgers Undergraduate Computer Engineering Major </h3>
          <h3>Specializing in Robotics and Automation</h3>
        </div>
      </div>
    </>
  );
}

function IntroBlurb() {
  return (
    <>
      <div className="blurb">
        <p>
          Hi! My name is Jude Shorbaji, and I am currently pursuing a degree in
          Electrical and Computer Engineering at Rutgers University. Outside of
          my education, I am dedicated to learning more about robotics and
          software engineering through participation in the Rutgers VEXU
          robotics team, hackathons, and personal projects. I also enjoy working
          with my hands. Whether it's sculpting, painting, or crocheting, I love
          being creative. I hope to combine my creativity with technical
          expertise to help innovate the future of Robotics.
        </p>
      </div>
    </>
  );
}

function ContactMe() {
  return (
    <div className="contactCard">
      <div className="contactBlurb">
        <h2>Contact Information</h2>
        <h3>
          Email:{" "}
          <a href="mailto:jude.shorbaji@rutgers.edu">
            Jude.Shorbaji@rutgers.edu
          </a>
        </h3>
        <h3>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/judeshorbaji/">Jude Shorbaji</a>
        </h3>
      </div>
      <div className="contactBlurb">
        <h2>More Links</h2>
        <h3>
          Github: <a href="https://github.com/Jude-Shorbaji">Jude-Shorbaji</a>
        </h3>
        <h3>
          Resume:
          <a href=" https://docs.google.com/document/d/1RIdHsfMctJKorYG1OKhbxN7wm-Hgm8v6OVpAC1Uqte4/edit?tab=t.0">
            Judes Resume
          </a>
        </h3>
      </div>
    </div>
  );
}

function initializeProjects() {
  const front: Project = new Project(
    "Training a VLA with Lerobot",
    "Over the winter break, I obtained an open-source Visual Language Action model and robot arm produced by Lerobot. Using their prebuilt PyTorch tools, I collected data to fine-tune their VLA for my environment, enabling my robot arm to pick up a green LEGO block and place it into a box. Although the task seemed simple, this was my first time working on a project with physical limitations, and I quickly encountered several challenges regarding my setup. From a robot part breaking due to a servo motor failure, to creating lighting that prevented shadows and maintained homogeneity in the data I collected, troubleshooting my hardware took a large portion of my time, and I learned a lot about how resource-consuming data collection in robotics can be. This project was also a great introduction to some of the technical skills and terms in robotics and machine learning. I learned the difference between a locomotive and a manipulative robot, as well as the difference between imitation and reinforcement training. I also learned more about resources such as Hugging Face, a platform that makes it easy to store and share data and models, and Google Colab, which I used to borrow a more powerful GPU and speed up the training process. Overall, working with this robot arm was an informative and educational experience, and I hope to continue working with open source projects similar to Lerobot and to continue to expand my knowledge on VLAs and similar machine learning models. Attatched bellow are videos of my process and the result",
    null,
    null,
    ""
  );
  front.setNext(
    new Project(
      "Portfolio",
      "This portfolio project is the culmination of my previous technical skills and a learning experience on front-end and back-end development.This project was my introduction to React, building on my prior knowledge of HTML and CSS, and doubling as an opportunity to learn TypeScript. While I already had some experience with JavaScript, adapting to TypeScript syntax came with a learning curve. I also used this project to dive deeper into CSS flexbox, so the website is fully responsive—go ahead and resize the window to see it adjust in real time! Back End:Each project is stored using a Project class and organized within a Doubly Linked Circular List, applying concepts from my data structures coursework. I used this structure to create a rotating carousel that showcases my projects dynamically.",
      null,
      null,
      "jude.shorbaji.com"
    )
  );
  if (front.getNext() != null) {
    front
      .getNext()
      .setNext(
        new Project(
          "Method at HackRU Fall 2024",
          "Our team was inspired to create this because websites for studying spread resources across multiple websites and confused students on how to study. Our website solves the confusion of choosing a study method by creating a space where science-proven methods are combined in one workspace, with no distracting pop-ups, ads, or subscription services. Our website is designed to help its users study more effectively by implementing some of the most productive study methods, such as the Feynman technique, Mnemonic Technique, and Leitman technique. Additionally, it utilizes the Pomodoro method to help the user stay on task through 25 minute intervals. They can choose which study method they want and they will be taken to a new page where they can commence their studying using that technique.",
          front,
          front,
          "https://devpost.com/software/study-method"
        )
      );
  }
  front.setPrev(front.getNext()?.getNext() ?? front);
  return front;
}

function displayProjects(
  curr: Project | null,
  setCurr: React.Dispatch<React.SetStateAction<Project | null>>
) {
  return (
    <>
      <div className="projDisplay">
        <button
          onClick={() => {
            if (curr && curr.getPrev()) {
              setCurr(curr.getPrev());
            }
          }}
        >
          &lt;
        </button>
        <div className="project">
          <h2>{curr ? curr.getName() : ""}</h2>
          <p>{curr ? curr.getBlurb() : ""}</p>
          <a href={curr ? curr?.getLink() : ""}>Link for More</a>
        </div>
        <button
          onClick={() => {
            if (curr && curr.getNext()) {
              setCurr(curr.getNext());
            }
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

function App() {
  const [page, setPage] = useState<number>(1);
  const [curr, setCurr] = useState<Project | null>(initializeProjects());
  if (page == 1) {
    return (
      <>
        <NavigationBar setPage={setPage} />
        <WelcomePanel />
        <IntroBlurb />
      </>
    );
  } else if (page == 2) {
    return (
      <>
        <NavigationBar setPage={setPage} />

        {displayProjects(curr, setCurr)}
      </>
    );
  } else if (page == 3) {
    return (
      <>
        <NavigationBar setPage={setPage} />
        <ContactMe />
      </>
    );
  } else {
    return <></>;
  }
}

export default App;
