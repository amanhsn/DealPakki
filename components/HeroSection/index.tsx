import Hero1 from "./hero1";
import Hero2 from "./hero2";

const Hero = () => {    
    return (
    <div className="hero">
        <div className="hero__spacing"></div>
        <Hero1
            hero1Headline="new arrivals"
            hero1Title="new collection"
            hero1Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
            hero1Image={"image1.png"}
        />
        <Hero2
            hero2Title="new collection"
            hero2Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
            hero2Image={"image2.png"}
            />
    </div>
    );
}

export default Hero;