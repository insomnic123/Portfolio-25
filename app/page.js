import Image from "next/image";
import localFont from "next/font/local";

const dongleFont = localFont({
  src: "fonts/Dongle-Regular.ttf"
})

const interFont = localFont({
  src: "fonts/Inter_24pt-Regular.ttf"
})

const himelodyFont = localFont({
  src: "fonts/HiMelody-Regular.ttf"
})


export default function Home() {
  return (
  <div className = "backgroundImage">
    <div className = "main">
      <div className = {`Test m-6 ${himelodyFont.className}`}>
         <h1>Hey! My name is</h1>
         <div className = "coloumn"> <Image src="/Letters/Qs/1.png" alt="testtest" width="100" height="100"/> </div>
         <div className = "coloumn"> <Image src="/Letters/As/5.png" alt="test2" width="100" height="100"/></div>
         <div className = "coloumn"> <Image src="/Letters/Zs/9.png" alt="test3" width="100" height="100"/></div>
         <div className = "coloumn"> <Image src="/Letters/Is/13.png" alt="test4" width="100" height="100"/></div>
      </div>
    </div>
    </div>
  );
}
