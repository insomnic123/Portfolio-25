import Image from "next/image";
import localFont from "next/font/local";
import QAZI from "./Components/QAZI.js";
import TiltedCard from "./Components/TiltedCard/TiltedCard.jsx"
import LogoWall from "./Components/LogoWall/LogoWall.jsx"
import TechnicalSkillButtons from './Components/TechnicalSkillButtons/TechnicalSkillButtons.jsx'
import BackgroundWaves from "./Components/BackgroundWaves/BackgroundWaves.js"

const dongleFont = localFont({
  src: "fonts/Dongle-Regular.ttf"
})

const interFont = localFont({
  src: "fonts/Inter_24pt-Regular.ttf"
})

const himelodyFont = localFont({
  src: "fonts/HiMelody-Regular.ttf"
})

const montesrratBoldFont = localFont({
  src: "fonts/Montserrat-Bold.ttf"
})

const logoImgs = [
  { imgUrl: "/ProjectsTitle/1.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/2.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/3.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/1.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/2.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/3.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/1.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/2.png", altText: "React Bits Logo" },
  { imgUrl: "/ProjectsTitle/3.png", altText: "React Bits Logo" }
];

export default function Home() {
  return (
  <div>
    <div className = "main">
      <div className = {`Test ${himelodyFont.className}`}>
         <h1>Hey! My name is</h1>
          <QAZI/>
      </div>
      <BackgroundWaves
        lineColor="rgb(98, 98, 98)"
        backgroundColor="rgba(34, 33, 33, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.8}
        tension={0.01}
        maxCursorMove={150}
        xGap={12}
        yGap={36}
        className="BGWaves"
      />
    </div>
    <div style={{height: '100%', width: '100%', position: 'relative'}}>
      <LogoWall
      items={logoImgs}
      direction='horizontal'
      pauseOnHover={false}
      size='clamp(15rem, 1rem + 20vmin, 25rem)'
      duration='30s'
      bgColor='#060606'
      bgAccentColor='#060606'
      /> 
    </div>
      <div className="ProjectsTitleCard">
        <TiltedCard
          imageSrc="/ProjectImages/ChronoSync.png"
          altText="ChronoSync"
          captionText="ChronoSync"
          containerHeight="425px"
          containerWidth="425px"
          imageHeight="425px"
          imageWidth="425px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          // overlayContent={
          //   <p className="tilted-card-text">
          //     ChronoSync
          //   </p>
          // }
        />
            
          <div className="ProjectTitlesWrapper">
          <h1 className={`ProjectTitles m-6 ${montesrratBoldFont.className}`}>
            ChronoSync
          </h1>
          <div className="button-alignment">
            <button className = {`buttonNormal button2 ${interFont.className}`}>Spring Boot</button>
            <button className = "buttonNormal">NextJS</button>
            <button className = "buttonNormal">MongoDB</button>
          </div>
          <p className = "ParagraphStuff">Chronosync was my first attempt at making a webapp, and it is a product aimed at helping 
            high school students maximize their productivity by scheduling their full day for them, including things such as 
            breaking down assignment tasks, ensuring they meet all their
             deadlines and goals. This project involved *a lot* of learning– all of which felt incredibly rewarding once 
            everything began functioning as intended. Although I was unable to complete it to the extent that I had initially set
             out to, I am still quite pleased with how it turned out and wish to develop it further in the future :)  
          </p>
          
        </div>
      </div>
    <div className="ProjectsTitleCard">
      <TiltedCard
        imageSrc="/ProjectImages/PushingPeopleOver.jpg"
        altText="Pushing People Over -- In The Name of Science!"
        captionText="Pushing People Over -- In The Name of Science!"
        containerHeight="425px"
        containerWidth="425px"
        imageHeight="425px"
        imageWidth="425px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-text">
            Pushing People Over -- In the Name of Science!
          </p>
        }
      />
            
          <div className="ProjectTitlesWrapper">
          <h1 className={`ProjectTitles m-6 ${montesrratBoldFont.className}`}>
            Pushing People Over, In The Name of Science!
          </h1>
          <div className="button-alignment">
            <span className="inline-block"><button className = {`buttonNormal button2 ${interFont.className}`}><Image src="./Logos/python.svg" width = "10" height= "10" alt = "Python Logo"/>Python</button></span>
            <button className = "buttonNormal">OpenCV</button>
          </div>
          <p className = "ParagraphStuff">"Pushing People Over, In The Name of Science!" was a project developed in 2023 for the Grade 9 SNC1WP Science course. At it's 
            core, it is a camera-vision system which uses <b>OpenCV</b> and a variety of custom-made <b>Python</b> algorithms to determine whether a person has 
            fallen, with the goal of being implemented as software on security cameras within care homes to prevent tens of thousands
            of annual deaths which occur due to individuals falling over. 
          </p>
          
        </div>
      </div>

      <div className="ProjectsTitleCard">
        <TiltedCard
          imageSrc="/ProjectImages/SolaraVision (4).png"
          altText="SolaraVision"
          captionText="SolaraVision"
          containerHeight="425px"
          containerWidth="425px"
          imageHeight="425px"
          imageWidth="425px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-text">
              SolaraVision
            </p>
          }
        />
            
          <div className="ProjectTitlesWrapper">
          <h1 className={`ProjectTitles m-6 ${montesrratBoldFont.className}`}>
            SolaraVision
          </h1>
          <div className="button-alignment">
            <button className = {`buttonNormal button2 ${interFont.className}`}>Figma</button>
            <button className = "buttonNormal">DaVinci</button>
            <button className = "buttonNormal">Arduino</button>
          </div>
          <p className = "ParagraphStuff">SolaraVision was a project submitted to the global Climate Change Makers Hackathon in 2023, and was 
            tied for fourth out of thirty projects. It was revolutionary concept solar panel which had three degrees of motion and had multiple
            additional features to maximize solar output. In addition, it came with an app which helped maintain upkeep with the panels and potenially 
            provide individuals with tax breaks. We made a physical prototype of the panel using an Arduino kit, and a mockup of the app using Figma.  
          </p>
          
        </div>
      </div>


    </div>



  );
}
