import HeroHome from "./components/homepage/hero"
import AboutHome from "./components/homepage/about"

const user_data = {
  "firstname" : "User", 
  "lastname" : "Name", 
  "summary" : "Here is some placeholder text for this section. This text serves simply, and only, as placeholder text. There is no purpose to this, but if you have read up to this point then I congratulate you my bookworm of a friend", 
}

const about_data = {
  "title" : "About Me",
  "summary" : "I'm a business-minded engineer and entrepreneur with a passion for bridging the gap between strategy and execution. \n \n After launching my own company and helping businesses grow their digital presence, I dove deep into modern software development to fully understand what’s possible from the ground up. With hands-on experience in full-stack development, digital marketing, and product design, I bring a holistic approach to solving business problems through technology.\n \n Today, I focus on applying that technical knowledge to leadership teams, helping organizations build smarter systems, more scalable products, and stronger customer experiences. Whether you're building a new platform, optimizing digital workflows, or aligning tech decisions with business outcomes I bring the technical fluency and strategic thinking to move ideas from concept to reality."
}

export default function Home() {  
  return(
    <div>
      <HeroHome user_data={user_data}/>
      <AboutHome about_data={about_data}/>
    </div>
  );
}