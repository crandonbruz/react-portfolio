import { styles } from "./styles";
function About() {
  const { root, title, img, description, paragraph } = styles;
  return (
    <div className="container-fluid" style={root}>
      <h1 style={title}>About Me</h1>
      <img style={img} src="/brandon_formal.jpg" alt="me" />
      <div style={paragraph}>
        <article style={description}>
          Hello, my name is Brandon Cruz and I am a recent graduate with a
          Bachelor's degree in Business Administration and a strong passion for
          software engineering. I am a former Right-Handed Pitcher for
          Bethune-Cookman University's baseball program, demonstrating
          discipline and teamwork. I am eager to leverage my diverse educational
          background and coding skills gained from the Full Stack Coding
          Bootcamp at the University of Central Florida to launch a career in
          software engineering. I am currently persuing my Masters in
          Information Technology with a concentration in software development.
          As a dedicated and adaptable individual, I am excited to apply my
          academic achievements and coding skills to a junior software
          engineering role. I am committed to continuous learning and
          contributing positively to dynamic teams. Connect with me to explore
          opportunities for collaboration and growth.
        </article>
      </div>
    </div>
  );
}
export default About;
