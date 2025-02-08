import Image from "next/image";
import localFont from "next/font/local";
import QAZI from "./Components/QAZI.js";
import TiltedCard from "./Components/TiltedCard/TiltedCard.jsx"
import LogoWall from "./Components/LogoWall/LogoWall.jsx"
import TechnicalSkillButtons from './Components/TechnicalSkillButtons/TechnicalSkillButtons.jsx'
import BackgroundWaves from "./Components/BackgroundWaves/BackgroundWaves.js"
import EmblaCarousel from "./Components/Carousel/Carousel.jsx";
import NavigationBar from "./Components/NavBar/NavigationBar.jsx";
import SkillButton from "./Components/SkillsSection/SkillButton.jsx"

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

const projectImgs = [
  { imgUrl: "/ProjectsTitle/1.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/2.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/3.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/1.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/2.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/3.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/1.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/2.png", altText: "Projects" },
  { imgUrl: "/ProjectsTitle/3.png", altText: "Projects" }
];

const skillImages = [
  { imgUrl: "/SkillsImages/4.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/5.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/6.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/4.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/5.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/6.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/4.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/5.png", altText: "Skills" },
  { imgUrl: "/SkillsImages/6.png", altText: "Skills" }
];

const contactImages = [
  { imgUrl: "/ContactImages/7.png", altText: "Contact" },
  { imgUrl: "/ContactImages/8.png", altText: "Contact" },
  { imgUrl: "/ContactImages/9.png", altText: "Contact" },
  { imgUrl: "/ContactImages/7.png", altText: "Contact" },
  { imgUrl: "/ContactImages/8.png", altText: "Contact" },
  { imgUrl: "/ContactImages/9.png", altText: "Contact" },
  { imgUrl: "/ContactImages/7.png", altText: "Contact" },
  { imgUrl: "/ContactImages/8.png", altText: "Contact" },
  { imgUrl: "/ContactImages/9.png", altText: "Contact" }
];

const otherProjectImgs = [
  {imgURL: "/ProjectImages/SPOT-IT.png", altText: "Spot-It"},
  {imgUrl: "/ProjectsTitle/3.png", altText: "WalkEasy"},
  {imgUrl: "/ProjectsTitle/3.png", altText: "Cheater Checker"},
  {imgUrl: "/ProjectsTitle/3.png", altText: "HTS Quiz Bot"}
]

const sliderData = [
  {
    id: 1,
    image: "/ProjectImages/SPOT-IT.png",
    altText: "Spot-It",
    url: "https://github.com/insomnic123/Java-Spot-It"
  },
  {
    id: 2,
    image: "/ProjectImages/Walkeasy.png",
    altText: "WalkEasy",
    url: "https://walkeasyparkinsons.my.canva.site/"
  },
  {
    id: 3,
    image: "/ProjectImages/HackTheSkies.png",
    altText: "HTS Quiz Bot",
    url: "https://hacktheskies.com",
  },
];


export default function Home() {
  return (
  <>
  <div className="mobile-warning">Sorry! The site is not optimized for mobile yet.</div>
  <div className="main-content">
  <NavigationBar/>
    <div className = "main">
      <div id = "home" className = {`Test ${himelodyFont.className}`}>
         <h1>Hey! My name is</h1>
         <div className = "qaziComponent"><QAZI/></div>
         <div>
          <p className = {`aboutMeText ${himelodyFont.className}`}>I'm a Gr. 11 Student in Toronto, Canada who started 
            programming for fun in Gr. 6. Since then, I've made countless projects, picked up new languages such as Java, 
            and have continued learning new skills which range from Game Development, Web Development, to even making bots for 
            online events!
          </p>
        </div>
          <Image className = "scrollForMore" src="/SFMArrow.png" width="150" height="150" alt="scroll for more"/>
      </div>
      <BackgroundWaves
        lineColor="rgba(98, 98, 98, 0.5)"
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
      items={projectImgs}
      direction='horizontal'
      pauseOnHover={false}
      size='clamp(15rem, 1rem + 20vmin, 25rem)'
      duration='30s'
      bgColor='#060606'
      bgAccentColor='#060606'
      /> 
    </div>
      <div id = "projects" className="ProjectsTitleCard">
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
            <button className = "buttonNormal button4">NextJS</button>
            <button className = {`buttonNormal button3 ${interFont.className}`}>Spring Boot</button>
            <button className = "buttonNormal button1">MongoDB</button>
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
            <span className="inline-block"><button className = {`buttonNormal button2 ${interFont.className}`}>Python</button></span>
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
          
          // overlayContent={
          //   <p className="tilted-card-text">
          //     SolaraVision
          //   </p>
          // }
        />
            
          <div className="ProjectTitlesWrapper">
          <h1 className={`ProjectTitles m-6 ${montesrratBoldFont.className}`}>
            SolaraVision
          </h1>
          <div className="button-alignment">
            <button className = {`buttonNormal button3 ${interFont.className}`}>Figma</button>
            <button className = "buttonNormal button4">DaVinci</button>
            <button className = "buttonNormal button2">Arduino</button>
          </div>
          <p className = "ParagraphStuff">SolaraVision was a project submitted to the global Climate Change Makers Hackathon in 2023, and was 
            tied for fourth out of thirty projects. It was revolutionary concept solar panel which had three degrees of motion and had multiple
            additional features to maximize solar output. In addition, it came with an app which helped maintain upkeep with the panels and potenially 
            provide individuals with tax breaks. We made a physical prototype of the panel using an Arduino kit, and a mockup of the app using Figma.  
          </p>
          
        </div>
      </div>
      <h1 className = {`GenericTitle ${montesrratBoldFont.className}`}>Other Projects:</h1>
      <p className="text-center text-[24px]">Here are some other projects I've been working on, click to see more!</p>
      <EmblaCarousel
        slides={sliderData}
        options={{ loop: true }}
    />

    <div style={{height: '100%', width: '100%', position: 'relative'}}>
      <LogoWall
      items={skillImages}
      direction='horizontal'
      pauseOnHover={false}
      size='clamp(15rem, 1rem + 10vmin, 25rem)'
      duration='30s'
      bgColor='#060606'
      bgAccentColor='#060606'
      /> 
    </div>
    <div id = "skills" >
      <h1 className = {`GenericTitle ${montesrratBoldFont.className}`}>Tech Stack <span>🔥</span></h1>
      <p className = "text-center text-[24px]">Over the years, I have developed my skills in the following programming languages and libraries:</p>
        <div className = "SkillsSections">
          <SkillButton txt="Python" src="./Logos/pythonUpdated.svg" alt="Python"/>
          <SkillButton txt="Java" src="./Logos/icons8-java-500.svg" alt="Java Icon from Icons8"/>
          <SkillButton txt="JavaScript" src="./Logos/icons8-javascript.svg" alt="JavaScript Icon from Icons8"/>
          <SkillButton txt="HTML" src="./Logos/icons8-html.svg" alt="HTML Icon from Icons8"/>
          <SkillButton txt="CSS" src="./Logos/icons8-css.svg" alt="CSS Icon from Icons8"/>
          <SkillButton txt="OpenCV" src="./Logos/icons8-opencv.svg" alt="OpenCV Icon from Icons8"/>
          <SkillButton txt="VSCode" src="./Logos/icons8-visual-studio.svg" alt="VSCode Icon from Icons8"/>
          <SkillButton txt="IntelliJ IDEA" src="./Logos/icons8-intellij-idea.svg" alt="IntelliJ IDEA Icon from Icons8"/>
          <SkillButton txt="Git" src="./Logos/icons8-git.svg" alt="Git Icon from Icons8"/>
          <SkillButton txt="React" src="./Logos/icons8-react.svg" alt="React Icon from Icons8"/>
          <SkillButton txt="MongoDB" src="./Logos/mongodb-svgrepo-com.svg" alt="MongoDB Icon from SVGRepo"/>
          <SkillButton txt="Spring Boot" src="./Logos/icons8-spring-boot.svg" alt="Spring Boot Icon from Icons8"/>
          <SkillButton txt="NextJS" src="./Logos/icons8-nextjs.svg" alt="NextJS Icon from Icons8"/>
          <SkillButton txt="GitHub" src="./Logos/icons8-github.svg" alt="GitHub Icon from Icons8"/>
          <SkillButton txt="Discord API" src="./Logos/icons8-discord.svg" alt="Discord Icon from Icons8"/>
          <SkillButton txt="Tailwind CSS" src="./Logos/icons8-tailwindcss.svg" alt="Tailwind Icon from Icons8"/>
        </div>
      </div>
      <h1 className = {`GenericTitle ${montesrratBoldFont.className}`}>Other Softwares <span>🧑‍🚀</span></h1>
      <p className = "text-center text-[24px]">I've also developed proficiency in the following softwares:</p>
        <div className = "SkillsSections">
          <SkillButton txt="DaVinci Resolve" src="./Logos/icons8-davinci-resolve.svg" alt="DaVinci Resolve Icon from Icons8"/>
          <SkillButton txt="Canva" src="./Logos/icons8-canva-app.svg" alt="Canva Icon from Icons8"/>
          <SkillButton txt="Photoshop" src="./Logos/icons8-photoshop.svg" alt="Photoshop Icon from Icons8"/>
          <SkillButton txt="Microsoft Office 365" src="./Logos/icons8-microsoft.svg" alt="Microsoft Icon from Icons8"/>
          <SkillButton txt="Google Workspace" src="./Logos/icons8-google.svg" alt="Google Icon from Icons8"/>
          <SkillButton txt="Premiere Pro" src="./Logos/icons8-adobe-premiere-pro.svg" alt="Premiere Pro Icon from Icons8"/>
          <SkillButton txt="Notion" src="./Logos/icons8-notion.svg" alt="Notion Icon from Icons8"/>
        </div>

        </div>
    </>
  );
}
