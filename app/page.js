import Image from "next/image";
import localFont from "next/font/local";
import QAZI from "./Components/QAZI.js";
import TiltedCard from "./Components/TiltedCard/TiltedCard.jsx"
import LogoWall from "./Components/LogoWall/LogoWall.jsx"

const dongleFont = localFont({
  src: "fonts/Dongle-Regular.ttf"
})

const interFont = localFont({
  src: "fonts/Inter_24pt-Regular.ttf"
})

const himelodyFont = localFont({
  src: "fonts/HiMelody-Regular.ttf"
})

const logoImgs = [{imgURL: "/ProjectsTitle/1.png", alt: "test"}]

export default function Home() {
  return (
  <div className = "backgroundImage">
    <div className = "main">
      <div className = {`Test m-6 ${himelodyFont.className}`}>
         <h1>Hey! My name is</h1>
          <QAZI/>
      </div>
    </div>
    <div style={{height: '600px', width: '100%', position: 'relative'}}>
      <LogoWall
      items={logoImgs}
      direction='horizontal'
      pauseOnHover={false}
      size='clamp(8rem, 1rem + 20vmin, 25rem)'
      duration='60s'
      bgColor='#060606'
      bgAccentColor='#111111'
      /> 
    </div>
    <div>
      <TiltedCard
      imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text">
          Kendrick Lamar - GNX
        </p>
      }
    />
    </div>
    </div>
  );
}
