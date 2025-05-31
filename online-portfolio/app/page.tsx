import HeroHome from "./components/homepage/hero"
import AboutHome from "./components/homepage/about"
import ProjectHome from "./components/homepage/projects"

const user_data = {
  "firstname" : "Kevin", 
  "lastname" : "Nerio", 
  "summary" : "I'm a business-minded engineer and entrepreneur with a passion for leveraging technology to bridge the gap between strategy and execution.", 
}

const about_data = {
  "title" : "About Me",
  "summary" : "After launching my own company and helping businesses grow their digital presence, I dove deep into modern software development to fully understand what’s possible from the ground up. With hands-on experience in full-stack development, digital marketing, and product design, I bring a holistic approach to solving business problems through technology.\n \n Today, I focus on applying that technical knowledge to leadership teams, helping organizations build smarter systems, more scalable products, and stronger customer experiences. Whether you're building a new platform, optimizing digital workflows, or aligning tech decisions with business outcomes I bring the technical fluency and strategic thinking to move ideas from concept to reality."
}

const project_data = {
  "title" : "Projects",  
  "projects" : [
    {
      "url" : "https://react-online-portfolio.vercel.app/", 
      "name" : "Personal Portfolio", 
      "description" : "Next.js, React, & Typescript"
    }, 
    {
      "url" : "https://n.thetriviaquest.com/", 
      "name" : "The Trivia Quest",
      "description" : "Next.js, React, & Typescript"
    },
    {
      "url" : "https://laravel-cloud-repo-main-smg5jd.laravel.cloud/", 
      "name" : "Pub Trivia",
      "description" : "Laravel + Postgres on Laravel Cloud"
    },
    {
      "url" : "https://www.theashleyhoffmangroup.com/", 
      "name" : "The Ashley Hoffman Group",
      "description" : "Wordpress | PHP, jQuery, Bootstrap, AJAX"
    },
    {
      "url" : "https://drakensecurity.com/", 
      "name" : "Draken Security ",
      "description" : "Wordpress | PHP, Beaver Builder, Reactjs"
    },
    {
      "url" : "https://www.getsatdeals.com/", 
      "name" : "Dish Satellite Offers",
      "description" : "Laravel, Bootstrap, & Blade"
    },  
    {
      "url" : "https://popctrivia.com/", 
      "name" : "Popular Culture Trivia",
      "description" : "Wordpress | PHP, jQuery, Bootstrap, AJAX"
    },
  ]
}

export default function Home() {  
  return(
    <div>
      <HeroHome user_data={user_data} />
      <ProjectHome project_data={project_data}/>
      <AboutHome about_data={about_data}/>
    </div>
  );
}