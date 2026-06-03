const bloodAnimation = `

@keyframes bloodSpread {

  0% {

    transform:
    scaleY(0);

    opacity: 0;
  }

  8% {

    opacity: 1;
  }

  60% {

    opacity: 1;
  }

  100% {

    transform:
    scaleY(1);

    opacity: 0;
  }
}
`;

function Navbar({
  logout,
  setShowPremiumPopup,
  newChat,
  setShowAboutDeveloper,
  answer,
}) {

  return (

<>
<style>{bloodAnimation}</style>

<div
  style={{
    width: "100%",
    display: "flex",
    position: "relative",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2px 2px",
    boxSizing: "border-box",
  }}
>

  {/* LEFT */}
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

<button

  onClick={() =>
    setShowAboutDeveloper(true)
  }

  style={{

    padding: "12px 22px",

    borderRadius: "14px",

    border:
    "1px solid rgba(0,140,255,0.12)",

    background:
    "#1f1f1f",

    color:
    "#3ea6ff",

    cursor: "pointer",

    fontWeight: "800",

    fontSize: "15px",
    transform: "translateY(-10px)",

    display: "flex",

    alignItems: "center",

    gap: "8px",

    boxShadow:
    "0px 0px 18px rgba(0,140,255,0.08)"
  }}
>

  💻 About Developer

</button>
</div>

  {/* CENTER */}
<div
  style={{

    position: "absolute",

    left: "50%",

    transform: "translateX(-50%)",
    

    overflow: "visible",

    zIndex: 1,
  }}
>

  <h1
    style={{

      fontSize: "35px",
fontWeight: "700",
letterSpacing: "0px",
margin: 0,
color: "#f5f5f5",

textShadow:
  "0px 0px 20px rgba(255,0,0,0.18)",

display: "flex",

alignItems: "flex-start",

gap: "8px",

position: "relative",

transform: "translate(-40px, -10px)"
    }}
  >


    <span
      style={{

        position: "relative",
        zIndex: 1,

        display: "inline-block"
      }}
    >

      The Epstein Files

    </span>



    {/* REAL BLOOD LAYER */}
<div
  style={{

    position: "absolute",

    top: "100%",

    left: "50%",

    transform:
    "translateX(-50%)",

    width: "100vw",

    height: "80vh",

    overflow: "hidden",

    pointerEvents: "none",

    zIndex: -1,

    display: answer?.length > 0 ? "none" : "block",
  }}
>

  {/* MAIN BLOOD */}
  <div
    style={{

      position: "absolute",

      top: "-20px",

      left: "50%",

      transform:
      "translateX(-50%)",

      width: "220px",

      height: "90px",

      background:
      "rgb(20,0,0)",

      borderRadius:
      "45% 55% 40% 60%",

      animation:
      "bloodSpread 24s ease-in-out infinite"
    }}
  />



  {/* SMALL BLOOD PARTICLES */}
{[
  { top: "8%", left: "12%" },
  { top: "15%", left: "28%" },
  { top: "10%", left: "45%" },
  { top: "22%", left: "60%" },
  { top: "18%", left: "78%" },

  { top: "35%", left: "8%" },
  { top: "42%", left: "24%" },
  { top: "38%", left: "42%" },
  { top: "48%", left: "58%" },
  { top: "40%", left: "76%" },

  { top: "62%", left: "14%" },
  { top: "70%", left: "32%" },
  { top: "64%", left: "50%" },
  { top: "72%", left: "68%" },
  { top: "60%", left: "84%" }
].map((item, i) => (
  <div
    key={i}
    style={{
      position: "absolute",

      top: item.top,
      left: item.left,

      width: "120px",
      height: "120px",

      background: `
        radial-gradient(
          circle at center,
          rgba(40,0,0,0.92) 0%,
          rgba(20,0,0,0.75) 55%,
          rgba(0,0,0,0) 100%
        )
      `,

      borderRadius: "50%",

      filter: "blur(5px)",

      opacity: 0.8,

      animation: `bloodSpread ${
        18 + i
      }s ease-in-out infinite`
    }}
  />
))}
</div>

  </h1>

</div>

  {/* RIGHT */}
  <div
    style={{
      display: "flex",
      gap: "15px",
    }}
  >
        <button

  onClick={() =>
    setShowPremiumPopup(true)
  }

  style={{

    padding: "12px 22px",

    borderRadius: "14px",

    border:
    "1px solid rgba(255,215,0,0.12)",
    transform: "translateY(-10px)",

    background:
    "#1f1f1f",

    color:
    "#FFD700",

    cursor: "pointer",

    fontWeight: "800",

    fontSize: "15px",

    display: "flex",

    alignItems: "center",

    gap: "8px",

    boxShadow:
    "0px 0px 18px rgba(255,215,0,0.08)"
  }}
>

  👑 Premium

</button>

        <button

  onClick={logout}

  style={{

    padding: "12px 22px",

    borderRadius: "14px",

    border:
    "1px solid rgba(255,0,0,0.12)",
    transform: "translateY(-10px)",

    background:
    "#1f1f1f",

    color:
    "#ff4d4d",

    cursor: "pointer",

    fontWeight: "800",

    fontSize: "15px",

    display: "flex",

    alignItems: "center",

    gap: "8px",

    boxShadow:
    "0px 0px 18px rgba(255,0,0,0.08)"
  }}
>

  🚪 Logout

</button>
      </div>
    </div>

</>
  );
}

export default Navbar;