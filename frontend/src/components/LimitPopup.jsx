function LimitPopup({

  showLimitPopup,

  setShowLimitPopup,

  setShowPremiumPopup

}) {

  if (!showLimitPopup)
    return null;

  return (

    <div
      style={{
        position: "fixed",

        top: 0,
        left: 0,

        width: "100%",
        height: "100%",

        background:
        "rgba(0,0,0,0.65)",

        backdropFilter:
        "blur(8px)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        zIndex: 99999,
      }}
    >

      {/* POPUP */}
      <div
        style={{

          width: "520px",

          padding: "28px",

          borderRadius: "24px",

          background:
          "rgba(20,20,20,0.92)",

          border:
          "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
          "blur(20px)",

          textAlign: "center",

          boxShadow:
          "0px 0px 40px rgba(0,0,0,0.45)"
        }}
      >

        {/* ICON */}
        <div
          style={{
            fontSize: "40px",

            marginBottom: "15px"
          }}
        >

          😔

        </div>



        {/* TITLE */}
        <h1
          style={{
            color: "white",

            fontSize: "30px",

            marginBottom: "14px"
          }}
        >

          You Reached Ur Request Limit  !

        </h1>



        {/* TEXT */}
<p
  style={{
    color: "#bdbdbd",

    lineHeight: "32px",

    fontSize: "18px",

    whiteSpace: "pre-line",

    fontWeight: "500"
  }}
>

{` Since we have to manage infrastructure and pay expensive API costs ...
it’s becoming very difficult for us to keep this platform
completely free ...... Even if you support us with the minimum plan ......
it would help us not only survive,but continue improving and growing this investigation platform .....
                Please consider subscribing ❤️`}

</p>




        {/* BUTTONS */}
        <div
          style={{
            display: "flex",

            justifyContent: "center",

            gap: "14px",

            marginTop: "30px"
          }}
        >

          {/* WAIT */}
          <button

            onClick={() =>
              setShowLimitPopup(
                false
              )
            }

            style={{

              padding:
              "12px 24px",

              borderRadius: "14px",

              border:
              "1px solid rgba(255,255,255,0.08)",

              background:
              "rgba(255,255,255,0.06)",

              color: "white",

              fontWeight: "700",

              cursor: "pointer",

              fontSize: "15px"
            }}
          >

            Later

          </button>



          {/* SUBSCRIBE */}
          <button

            onClick={() => {

              setShowLimitPopup(
                false
              );

              setShowPremiumPopup(
                true
              );
            }}

            style={{

              padding:
              "12px 24px",

              borderRadius: "14px",

              border: "none",

              background:
              "linear-gradient(135deg,#FFD700,#ffb300)",

              color: "black",

              fontWeight: "800",

              cursor: "pointer",

              fontSize: "15px",

              boxShadow:
              "0px 0px 25px rgba(255,215,0,0.25)"
            }}
          >

            Subscribe

          </button>

        </div>

      </div>

    </div>
  );
}

export default LimitPopup;