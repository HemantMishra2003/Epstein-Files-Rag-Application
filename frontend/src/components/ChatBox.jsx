const loaderAnimation = `
@keyframes spin {

  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

}
`;



function ChatBox({
  answer,
  loading,
  question,
  children
}) {
  return (
  <>
    <style>{loaderAnimation}</style>

    <div
      style={{
        height: "65vh",
        overflowY: "scroll",
        border: "1px solid #444",
        padding: "45px",
        borderRadius: "12px",
        background: "#1e1e1e",

        backgroundImage:
          answer.length > 0 || loading
            ? "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('/image.png')"
            : "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/image.png')",
        backgroundImage:
  answer.length > 0 || loading
    ? "none"
    : "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/image.png')",

backgroundColor:
  answer.length > 0 || loading
    ? "#111"
    : "#1e1e1e",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "none",
        background: "#000",

        marginTop: "0px",
        position: "relative",
      }}
    >
      {answer.length === 0 &&
 question.length < 5 && (
        <div
          style={{
            position: "sticky",

            top: "0",
            left: 0,

            width: "100%",
            height: "100%",

            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",

            textAlign: "flex-start",
            paddingTop: "30px",

            color: "rgba(220,220,220,0.92)",

            padding: "40px",
            borderRadius: "1px",

            boxSizing: "border-box",

            textShadow: "0px 0px 12px rgba(0,0,0,0.9)",
            fontSize: "20px",
            fontWeight: "650",
            lineHeight: "30px",
            whiteSpace: "pre-wrap",
          }}
        >
          {` " Yes ! I have destroyed the lives of more than 100 underage girls ....
              But I was not alone , many powerful and influential
                                          were also involved .....
               I want them to face punishment for their actions as well.
                Ask questions based on my email documents. The more you 
                                           investigate ......
             the more it will help you to detect the patterns and uncover  
                        the  people connected to this network ...... "
                                                       .......... Jeffrey Edward Epstein`}
        </div>
           
      )}

      {
  answer.length === 0 &&
  question.length >= 5 &&
  question.length < 15 && (

    <div
      style={{
        position: "absolute",

        top: 0,
        left: 0,

        width: "100%",
        height: "100%",

        background:
        "rgba(0,0,0,0.82)",

        backdropFilter:
        "blur(8px)",

        zIndex: 50,
      }}
    />
  )
}

        <div
  style={{
    position: "relative",
    zIndex: 100,
  }}
>
  {/* {children} */}
</div>

{loading && (
  <div
    style={{
      position: "absolute",

      top: "50%",

      left: "50%",

      transform: "translate(-50%, -50%)",

      zIndex: 9999,

      display: "flex",

      justifyContent: "center",

      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "38px",

        height: "38px",

        border: "10px solid #111",
boxShadow: "0 0 25px rgba(0,0,0,0.5)",

        borderTop: "8px solid #ffffff",

        borderRadius: "50%",

        animation: "spin 0.8s linear infinite",
      }}
    />
  </div>
)}

      <p
        style={{
          color: "#d1d5db",
          fontSize: "20px",
          lineHeight: "38px",
          whiteSpace: "pre-line",
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
      >
        {answer}
      </p>
    </div>

</>

);
}

export default ChatBox;