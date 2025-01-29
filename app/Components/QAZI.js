"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomImage(letter) {
  const Qs = ["/Letters/Qs/1.png", "/Letters/Qs/2.png", "/Letters/Qs/3.png", "/Letters/Qs/4.png"];
  const As = ["/Letters/As/5.png", "/Letters/As/6.png", "/Letters/As/7.png", "/Letters/As/8.png"];
  const Zs = ["/Letters/Zs/9.png", "/Letters/Zs/10.png", "/Letters/Zs/11.png", "/Letters/Zs/12.png"];
  const Is = ["/Letters/Is/13.png", "/Letters/Is/14.png", "/Letters/Is/15.png", "/Letters/Is/16.png"];

  if (letter === "Q") return randomChoice(Qs);
  if (letter === "A") return randomChoice(As);
  if (letter === "Z") return randomChoice(Zs);
  if (letter === "I") return randomChoice(Is);
}


export default function QAZI() {
  const [images, setImages] = useState({
    Q: getRandomImage("Q"),
    A: getRandomImage("A"),
    Z: getRandomImage("Z"),
    I: getRandomImage("I"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
        setImages({
        Q: getRandomImage("Q"),
        A: getRandomImage("A"),
        Z: getRandomImage("Z"),
        I: getRandomImage("I"),
      });
    }, 1000); 


    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={`Test m-6`}>
      <div className="coloumn">
        <Image src={images.Q} alt="Q" width="100" height="100" />
      </div>
      <div className="coloumn">
        <Image src={images.A} alt="A" width="100" height="100" />
      </div>
      <div className="coloumn">
        <Image src={images.Z} alt="Z" width="100" height="100" />
      </div>
      <div className="coloumn">
        <Image src={images.I} alt="I" width="100" height="100" />
      </div>
    </div>
  );
}
