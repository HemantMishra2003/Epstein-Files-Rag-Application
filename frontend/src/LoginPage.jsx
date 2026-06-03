import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  provider
} from "./firebase";



function LoginPage({ setIsLoggedIn }) {

  const googleLogin = async () => {

    try {

      const result =
      await signInWithPopup(
        auth,
        provider
      );

      console.log(result.user);

      localStorage.setItem(
        "user",
        JSON.stringify(result.user)
      );

      setIsLoggedIn(true);

    } catch (error) {

      console.log(error);
    }
  };



  return (

    <div
      style={{
        height: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background:
        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.88)), url('/image.png')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        color: "white"
      }}
    >

      <div
        style={{
          width: "420px",

          padding: "30px",

          borderRadius: "20px",

          background:
          "rgba(20,20,20,0.1)",

          backdropFilter: "blur(1px)",

          border:
          "1px solid rgba(255,255,255,0.12)",

          boxShadow:
"0px 0px 40px rgba(0,0,0,0.5)",

          textAlign: "center"
        }}
      >

        <h1
          style={{
            marginBottom: "20px",

            letterSpacing: "1px"
          }}
        >
          The Epstein Files
        </h1>



        <p
          style={{
            color: "#cfcfcf",

            marginBottom: "39px",

            lineHeight: "28px"
          }}
        >
          Access the investigation archives
          and uncover hidden connections.
        </p>



        <button
  onClick={googleLogin}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
    "translateY(-4px)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
    "translateY(0px)";
  }}

  style={{
    // width: "100%",
    width: "300px",
    margin: "0 auto",

    padding: "5px",

    borderRadius: "5px",

    border:
    "1px solid rgba(255,255,255,0.18)",

    cursor: "pointer",

    fontSize: "18px",

    fontWeight: "bold",

    background:
    "rgba(255,255,255,0.10)",

    color: "white",

    transition: "0.3s",

    transform: "translateY(0px)",

    backdropFilter: "blur(8px)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "12px"
  }}
>

  <img
  src="/icons8-google-48.png"

  alt="Google"

  style={{
    width: "28px",

    height: "28px",

    objectFit: "contain",

    // background: "Black",

    borderRadius: "50%",

    padding: "2px"
  }}
/>

  <span>
    Continue with Google
  </span>

</button>
      </div>

    </div>
  );
}

export default LoginPage;