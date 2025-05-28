import Image from "next/image";
import HeroHome from "./components/homepage/hero"

const user_data = {
  "firstname" : "User", 
  "lastname" : "Name", 
  "summary" : "Here is some placeholder text for this section. This text serves simply, and only, as placeholder text. There is no purpose to this, but if you have read up to this point then I congratulate you my bookworm of a friend", 
}

export default function Home() {  
  return(
    <HeroHome user_data={user_data}/>
  );
}