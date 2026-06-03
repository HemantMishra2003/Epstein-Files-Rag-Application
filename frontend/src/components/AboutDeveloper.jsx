function AboutDeveloper({ setShowAboutDeveloper }) {

  return (

    <div
      style={{
        padding: "40px",
        color: "white",
      }}
    >
        <button

  onClick={() => setShowAboutDeveloper(false)}

  style={{
    padding: "10px 18px",
    borderRadius: "10px",
    border: "none",
    background: "#2b2b2b",
    color: "white",
    cursor: "pointer",
    marginBottom: "30px",
  }}
>
  ← Back
</button>
      <h1>Hemant Mishra</h1>

      <p
  style={{
    color: "#e0e0e0",

    whiteSpace: "pre-line",

    fontSize: "20px",

    fontWeight: "400",

    lineHeight: "32px",

    letterSpacing: "0.2px",
  }}
>
  AI Engineer | @ Kaggle Expert 945 / 60,000
  <br />
  Contact : 9250243706
  <br />
  Email : hemantmishra1452968@gmail.com
  <br />
  <br />

  <a
    href="https://www.linkedin.com/in/hemant-mishra-8ba6b4317"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <br />

  <a
    href="https://github.com/HemantMishra2003"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <br />

  <a
    href="https://www.kaggle.com/vbeliever2003"
    target="_blank"
    rel="noreferrer"
  >
    Kaggle
  </a>
</p>
    </div>
  );
}

export default AboutDeveloper;