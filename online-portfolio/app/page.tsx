import HeroHome from "./components/homepage/hero"
import AboutHome from "./components/homepage/about"

const user_data = {
  "firstname" : "User", 
  "lastname" : "Name", 
  "summary" : "Here is some placeholder text for this section. This text serves simply, and only, as placeholder text. There is no purpose to this, but if you have read up to this point then I congratulate you my bookworm of a friend", 
}

const about_data = {
  "title" : "About Me"
}

export default function Home() {  
  return(
    <div>
      <HeroHome user_data={user_data}/>
      <AboutHome about_data={about_data}/>
    </div>
  );
}