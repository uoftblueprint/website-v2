"use client";
import WhiteSection from "../white-section/white-section.js";
import "./about.css"
import ImageBanner from "@/components/Banner/ImageBanner.tsx";

export default function About() {
  return  (
    <div>
      <ImageBanner src={"/about_page/blueprint-family-photo.png"}/>
      <WhiteSection/>
    </div>
  )
}
