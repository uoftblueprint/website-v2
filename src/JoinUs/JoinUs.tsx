import { Image } from "@mantine/core";
import "../JoinUs/JoinUs.css";

export function JoinUs() {
  return (
    <div className="joinUsContainer">
      <div className="imageContainer">
        <Image
          radius="md"
          src="/PlaceholderImg.png"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </div>
      <div className="textContainer">
        <h2 className="whyJoin">Why Join?</h2>
        <p className="interested">
          Interested in making a change in the community around you? Want to
          gain experience working in a software development team? Join Us!
        </p>
      </div>
    </div>
  );
}
