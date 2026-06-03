function LogoutPopup({
  showLogoutPopup,
  setShowLogoutPopup,
  confirmLogout,
}) {

  if (!showLogoutPopup) return null;

  return (

    <div
      style={{
        position: "fixed",

        top: 0,
        left: 0,

        width: "100%",
        height: "100%",

        background:
    
        "rgba(15,15,15,0.55)",

        backdropFilter:
        "blur(4px)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        zIndex: 99999,
      }}
    >

      <div
  style={{

    background:
    "rgba(255,255,255,0.01)",

    backdropFilter:
    "blur(8px)",

    border:
    "1px solid rgba(255,255,255,0.12)",

    boxShadow:
    "0px 8px 32px rgba(0,0,0,0.35)",

    borderRadius: "22px",

    padding: "42px",

    width: "430px",

    textAlign: "center"
  }}
>

        {/* ICON */}
        <div
          style={{
            fontSize: "58px",

            marginBottom: "28px"
          }}
        >

          🚪

        </div>



        {/* TITLE */}
        <h1
          style={{
            fontSize: "34px",

            marginBottom: "14px",

            color: "white"
          }}
        >

          Logout ?

        </h1>



        {/* TEXT */}
        <p
          style={{
            color: "rgb(189, 189, 189)",

            lineHeight: "28px",
            fontWeight: "800",

            fontSize: "20px"
          }}
        >

          Are u sure u want to Stop investigation !
                And want to log out ....

        </p>



        {/* BUTTONS */}
        <div
          style={{
            display: "flex",

            justifyContent: "center",

            gap: "28px",

            marginTop: "35px",
          }}
        >

          {/* CANCEL */}
          <button

            onClick={() =>
              setShowLogoutPopup(
                false
              )
            }

            style={{
              padding:
              "14px 30px",

              borderRadius: "12px",

              border: "none",

              fontWeight: "700",

              background:
"linear-gradient(135deg,#00a63e,#00a63e)",

              color: "white",

              cursor: "pointer",

              fontSize: "20px",

              transition: "0.5s"
            }}
          >

            Cancel

          </button>



          {/* LOGOUT */}
          <button

            onClick={confirmLogout}

            style={{
              padding:
              "14px 30px",

              borderRadius: "12px",

              fontWeight: "1200",

              border: "none",

              background:
"linear-gradient(135deg,#e50914,#e50914)",

              color: "white",

              cursor: "pointer",

              fontSize: "19px",

              
              // fontWeight: "bold",

              boxShadow:
              "0px 0px 20px rgba(255,0,0,0.25)"
            }}
          >

            Logout

          </button>

        </div>

      </div>

    </div>
  );
}

export default LogoutPopup;