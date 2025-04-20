
import './App.css'
import { useState } from 'react';


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

function App() {
  const [page, setPage] = useState<number>(1);
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
