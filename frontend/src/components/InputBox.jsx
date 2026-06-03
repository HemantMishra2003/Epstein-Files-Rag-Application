function InputBox({
  question,
  setQuestion,
  askQuestion,
  loading,
}) {

  return (

    <div
      style={{

        position: "fixed",

        bottom: "10px",

        left: "0",

        right: "0",

        margin: "0 auto",
        marginLeft: "150px",

        width: "75%",

        maxWidth: "1200px",

        zIndex: 1000
      }}
    >

      <div
        style={{
          position: "relative",

          width: "100%"
        }}
      >

        <input

          type="text"

          value={question}

          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              askQuestion();
            }
          }}

          placeholder=
          "Ask anything from Epstein files..."

          style={{

            width: "100%",

            padding:
            "12px 170px 12px 20px",

            fontSize: "22px",

            borderRadius: "14px",

            border: "none",

            outline: "none",

            background:
"rgba(0,0,0,0.5)",
            backdropFilter:
"blur(0px)",

border:
"1px solid rgba(255,255,255,0.08)",

            color: "white",

            boxSizing: "border-box"
          }}

          disabled={loading}
        />



       <button
  onClick={() => askQuestion()}


  disabled={
    loading ||
    !question.trim()
  }

  style={{

    position: "absolute",

    right: "0.2px",

    top: "50%",

    transform:
    "translateY(-50%)",

    width: "90px",

    padding: "15px",

    fontSize: "17px",

    fontWeight: "700",

    borderRadius: "14px",

    border:
    "1px solid rgba(255,255,255,0.08)",

    background:
    "rgba(255,255,255,0.05)",

    backdropFilter:
    "blur(20px)",

    color:
    "#d6d6d6",

    boxShadow:
    "0px 0px 18px rgba(255,255,255,0.04)",

    cursor:
    loading
    ? "not-allowed"
    : "pointer",

    transition: "0.25s"
  }}
>

  {loading ? "..." : "⚡ Ask"}

</button>

      </div>

    </div>
  );
}

export default InputBox;