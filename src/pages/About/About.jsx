import { styles } from "./styles";
function About() {
  const { root, title, img, description } = styles;
  return (
    <div className="container-fluid" style={root}>
      <h1 style={title}>About Me</h1>
      <img style={img} src="/brandon_formal.jpg" alt="me" />
      <article style={description}>
        Hello, my name is Brandon Cruz and I am a student in the University of
        Central Florida bootcamp. I am taking this course to enhance my skills
        as a web developer. I would like to do this as a career and I felt this
        was the best route to take. Here I have some of the projects I have made
        as well as links to my information. One of my passions is baseball. I
        have been playing since I was 3 years old and I am currently training to
        play professional baseball. I love the challenge of the game. I work
        very hard every single day to be as successful as I have become in this
        sport. I know my time will come. My perserverence throughout this sport
        will guide me through my career in the software engineering field. As
        long as I work hard like I do with my passion, I can achieve anything.
      </article>
    </div>
  );
}
export default About;
