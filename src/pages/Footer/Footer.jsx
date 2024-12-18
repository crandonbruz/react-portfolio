import "../../App.css";

function Footer() {
  return (
    <div className="container">
      <ul className="list-group list-group-horizontal justify-content-md-center">
        <li className="list-group-item">
          <a href="https://github.com/crandonbruz">
            <img src="/github.png" alt="" />
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.linkedin.com/in/brandonjcruz12/">
            <img src="/linkedin.png" alt="" />
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://x.com/brandoncruz12_?s=11&t=bx6nhd_3zPnGCMX3sjlgZA">
            <img src="/twitter.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
