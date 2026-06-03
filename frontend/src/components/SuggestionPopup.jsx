function SuggestionPopup({
  show,
  setQuestion,
  askQuestion
}) {

  if (!show) return null;

  const questions = [
    "Who were Epstein's closest associates?",
    "Which politicians are mentioned in the files?",
    "Show suspicious flight logs.",
    "Which names appear most frequently?",
    "What patterns exist in the email network?",

    "Who flew the most times on the Lolita Express?",
    "Connections with Bill Clinton or Prince Andrew?",
    "What did Ghislaine Maxwell know?",
    "Were there any intelligence agency links?",
    "Most mentioned celebrities in the documents?"
  ];

  const leftQuestions = questions.slice(0, 5);
  const rightQuestions = questions.slice(5, 10);

  return (
    <>

      {/* BACKGROUND BLUR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,

          width: "100vw",
          bottom: "60px",

          background: "rgba(0,0,0,0.35)",

          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",

          zIndex: 99990,
        }}
      />

      {/* POPUP */}
      <div
        style={{
          position: "fixed",

          bottom: "85px",

          left: "50%",

          transform: "translateX(-50%)",

          width: "750px",

          padding: "20px",

          borderRadius: "20px",

          background: "rgba(15,15,15,0.96)",

          border: "1px solid rgba(255,255,255,0.08)",

          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",

          zIndex: 99999,
        }}
      >

        <h2
          style={{
            color: "#e5e5e5",
            textAlign: "center",
            marginBottom: "18px",
            fontSize: "18px",
          }}
        >
          🔥 Trending Questions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >

          {/* LEFT */}
          <div>
            {leftQuestions.map((q, i) => (
              <div
                key={i}
                onClick={() => {
                setQuestion(q);
                askQuestion(q);
                }}
                style={{
                  padding: "10px 12px",

                  marginBottom: "10px",

                  borderRadius: "12px",

                  cursor: "pointer",

                  color: "#d6d6d6",

                  background: "rgba(255,255,255,0.04)",

                  transition: "0.2s",
                }}
              >
                🔍 {q}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            {rightQuestions.map((q, i) => (
              <div
                key={i}
                onClick={() => {
  setQuestion(q);
  askQuestion(q);
}}
                style={{
                  padding: "10px 12px",

                  marginBottom: "10px",

                  borderRadius: "12px",

                  cursor: "pointer",

                  color: "#d6d6d6",

                  background: "rgba(255,255,255,0.04)",

                  transition: "0.2s",
                }}
              >
                🔍 {q}
              </div>
            ))}
          </div>

        </div>

      </div>

    </>
  );
}

export default SuggestionPopup;