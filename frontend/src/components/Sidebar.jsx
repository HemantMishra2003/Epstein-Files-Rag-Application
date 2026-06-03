function Sidebar({
  openSidebar,
  setOpenSidebar,
  history,
  setAnswer,
  newChat,
}) {

  return (

    <div
      style={{
        width:
        openSidebar
        ? "100px"
        : "15px",

        transition: "0.3s",

        background:
        "#161616",

        padding: "14px",

        borderRight:
        "1px solid #2d2d2d",

        overflowY: "auto",

        height: "100vh"
      }}
    >

      {/* MENU */}
      <div
        onClick={() =>
          setOpenSidebar(
            !openSidebar
          )
        }

        style={{
          fontSize: "28px",

          cursor: "pointer",
          transform: "translateY(10px)",

          marginBottom: "25px",

          color: "white"
        }}
      >

        ☰

      </div>



      {/* NEW CHAT */}
      {openSidebar && (

        <button

          onClick={newChat}

          style={{

            width: "100%",

            padding: "12px",

            borderRadius: "12px",

            border: "none",

            background:
            "#2a2a2a",

            color: "white",

            cursor: "pointer",

            marginBottom: "25px",

            fontSize: "15px"
          }}
        >

          ✨ New Chat

        </button>

      )}



      {/* HISTORY TITLE */}
      {openSidebar && (

        <div
          style={{
            marginBottom: "16px",

            fontSize: "16px",

            fontWeight: "bold",

            color: "#bdbdbd"
          }}
        >

          History

        </div>

      )}



      {/* HISTORY ITEMS */}
      {openSidebar &&
        history.map((item, index) => (

          <div

            key={index}

            onClick={() =>
              setAnswer(
                item.answer
              )
            }

            style={{
              padding: "10px",

              marginBottom: "10px",

              background:
              "#242424",

              borderRadius: "10px",

              cursor: "pointer",

              fontSize: "14px",

              color: "white",

              border:
              "1px solid #333",

              transition: "0.2s"
            }}
          >

            {item.question}

          </div>

        ))}
    </div>
  );
}

export default Sidebar;