
import './App.css'
import { useState } from 'react';
import { Project } from './Project';


function NavigationBar({ setPage }: { setPage: React.Dispatch<React.SetStateAction<number>> }) {
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
  )
}
function WelcomePanel() {
  return (
    <>
      <div className='welcome'>
        <div className='welcomeLeft'>
          <img src='src/assets/ProfilePicture.jpg' className='profilePic'></img>
        </div>
        <div className='welcomeRight'>
          <h1>Jude Shorbaji</h1>
          <h2>Rutgers Undergraduate Computer Science Major </h2>
          <h3>With a Concentration in Psychology</h3>
        </div>
      </div>
    </>
  )
}

function IntroBlurb() {

  return (
    <>
      <div className="blurb">
        <p>
          Hi! My name is Jude and I  specialize in front-end development with
          a strong passion for creating user-friendly, accessible, and visually
          engaging web experiences. With my knowledge In a variety of languages,
          including React, Java and Python, I love combining creativity with code
          to bring ideas to life in the browser. Outside of tech, I’m deeply committe
          d to philanthropy and volunteer work. I believe in using my skills and time
          to make a positive impact both online and in my community. Whether designing
          interfaces or organizing local initiatives, I’m all about building things that matter.
        </p>
      </div>
    </>)

}

function ContactMe() {
  return (
    <div className='contactCard'>
      <div className='contactBlurb'>
        <h2>
          Contact Information
        </h2>
        <h3>Email: <a href="mailto:jude.shorbaji@rutgers.edu">Jude.Shorbaji@rutgers.edu</a></h3>
        <h3>Linkdin: <a href="https://www.linkedin.com/in/judeshorbaji/">Jude Shorbaji</a></h3>
      </div>
      <div className='contactBlurb'>
        <h2>
          More Links
        </h2>
        <h3>
          Github: <a href="https://github.com/Jude-Shorbaji">Jude-Shorbaji</a>
        </h3>
        <h3>
          Resume:<a href=" https://docs.google.com/document/d/1RIdHsfMctJKorYG1OKhbxN7wm-Hgm8v6OVpAC1Uqte4/edit?tab=t.0">Judes Resume</a>
        </h3>
      </div>
    </div>

  )
}

function initializeProjects(){
  let front: Project=new Project("Portfolio","This portfolio project is the culmination of my previous technical skills and a learning experience on front-end and back-end development.This project was my introduction to React, building on my prior knowledge of HTML and CSS, and doubling as an opportunity to learn TypeScript. While I already had some experience with JavaScript, adapting to TypeScript syntax came with a learning curve. I also used this project to dive deeper into CSS flexbox, so the website is fully responsive—go ahead and resize the window to see it adjust in real time! Back End:Each project is stored using a Project class and organized within a Doubly Linked Circular List, applying concepts from my data structures coursework. I used this structure to create a rotating carousel that showcases my projects dynamically.",null,null,"jude.shorbaji.com");
  front.setNext(new Project("Method at HackRU Fall 2024", "Our team was inspired to create this because websites for studying spread resources across multiple websites and confused students on how to study. Our website solves the confusion of choosing a study method by creating a space where science-proven methods are combined in one workspace, with no distracting pop-ups, ads, or subscription services. Our website is designed to help its users study more effectively by implementing some of the most productive study methods, such as the Feynman technique, Mnemonic Technique, and Leitman technique. Additionally, it utilizes the Pomodoro method to help the user stay on task through 25 minute intervals. They can choose which study method they want and they will be taken to a new page where they can commence their studying using that technique.",front,front,"https://devpost.com/software/study-method"));
  front.setPrev(front.getNext()?.getNext() ?? front);
  return front;
}

function displayProjects(curr: Project | null, setCurr: React.Dispatch<React.SetStateAction<Project | null>>) {
 
 return(
  <>
  <div className="projDisplay">
  <button onClick={() => { if (curr && curr.getPrev()) { setCurr(curr.getPrev()); } }}>&lt;</button>
  <div className='project'>
  <h2>{curr ? curr.getName() : ''}</h2>
  <h3 >{curr ? curr.getBlurb(): ""}</h3>
  <a href={curr ? curr?.getLink() : ""}>Link for More</a>
  </div>
   <button onClick={()=> {if(curr&&curr.getNext()){setCurr(curr.getNext())}}}>&gt;</button>
  </div>
  </>
 )
}

function App() {
  const [page, setPage] = useState<number>(1);
  const [curr, setCurr] = useState<Project | null>(initializeProjects());
  if (page==1) {
    return (
      <>
        <NavigationBar setPage={setPage} />
        <WelcomePanel />
        <IntroBlurb />

      </>
    )

  }
  else if(page==2){
    return(
      <>
      <NavigationBar setPage={setPage} />

      {displayProjects(curr, setCurr)}
      
      </>
    )
  }
  else if (page==3) {
    return (
      <>
        <NavigationBar setPage={setPage} />
        <ContactMe />
      </>
    )

  }
  else {
    return (
      <>
      </>
    )
  }

}

export default App
