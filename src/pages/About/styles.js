export const styles = {
  root: {
    color: "#f4f3ee",
    display: "flex", // Center the content horizontally
    flexDirection: "column", // Stack the children vertically
    alignItems: "center", // Center the content vertically
    justifyContent: "center",
  },
  title: {
    fontFamily: "Black Ops One, cursive",
  },
  img: {
    width: "clamp(100px, 30vw,300px)",
  },
  description: {
    fontSize: "clamp(1.5rem, 2vw, 3.5rem)",
    fontFamily: "Bricolage Grotesque, sans-serif",
  },
  paragraph: {
    border: "5px solid white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
};
