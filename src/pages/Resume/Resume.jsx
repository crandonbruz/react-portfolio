import { styles } from "./styles";
function Resume() {
  const { root, title, link, listContent, listHeader } = styles;
  return (
    <div className="mx-5" style={root}>
      <h1 style={title} className="content-name">
        Resume
      </h1>
      <h3 style={listHeader}>
        Download my{" "}
        <a style={link} href="/Cruz_Brandon-Resume.docx" download={{}}>
          Resume
        </a>{" "}
        here!
      </h3>
      <div className="my-5">
        <h2 style={listHeader}>Front-end Proficiencies</h2>
        <ul style={listContent}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuerry</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="my-5">
        <h2 style={listHeader}>Back-end Proficiencies</h2>
        <ul style={listContent}>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySql, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
