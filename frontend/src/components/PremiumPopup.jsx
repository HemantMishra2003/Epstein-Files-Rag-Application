const API_URL = "http://13.60.192.66:8000";
console.log("API_URL =", API_URL);
const handlePayment = async (amount) => {

  try {

    const response = await fetch(
    `${API_URL}/create-order`,
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      amount: amount,
    }),
  }
);

    const data = await response.json();

    console.log("ORDER =", data);

  const options = {
  key: "rzp_test_SvaNXZtWGAnJwn",

  amount: amount * 100,

  currency: "INR",

  name: "Epstein Investigation AI",

  description: "Premium Subscription",

  order_id: data.order_id,

  handler: function (response) {

    alert("Payment Successful!");

    console.log(response);

  },

  theme: {
    color: "#FFD700",
  },
};

const rzp = new window.Razorpay(options);

rzp.open();

  } catch (err) {

    console.error(err);

  }

};


function PremiumPopup({

  showPremiumPopup,

  setShowPremiumPopup

}) {

  if (!showPremiumPopup)
    return null;

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,

        top: 0,
        left: 0,
        zIndex: 9999999,

        width: "100%",
        height: "100%",

        background:
"rgba(15,15,15,0.55)",

backdropFilter:
"blur(6px)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        zIndex: 99999,
      }}
    >

      {/* MAIN POPUP */}
      <div
        style={{

          width: "750px",

          borderRadius: "28px",

          padding: "24px",

          background:
"rgba(255,255,255,0.01)",

backdropFilter:
"blur(6px)",

border:
"1px solid rgba(255,255,255,0.12)",

boxShadow:
"0px 8px 32px rgba(0,0,0,0.35)"
        }}
      >

        {/* HEADER */}
        <div
          style={{
            textAlign: "center",

            marginTop: "10px",

            marginBottom: "22px"
          }}
        >

          <h1
            style={{
              fontSize: "40px",

              color: "white",

              marginBottom: "18px",
              marginLeft: "30px",
            }}
          >

            👑 Premium Plans

          </h1>

          <p
            style={{
              color: "#bdbdbd",
              marginLeft: "140px",

              fontSize: "16px"
            }}
          >

               Unlock your full investigation power !

          </p>

        </div>



        {/* PLANS */}
        <div
          style={{
            display: "flex",

            gap: "18px"
          }}
        >

          {/* BASIC */}
          <div
            style={{
              flex: 1,

              background:
              "#1f1f1f",

              borderRadius: "22px",

              padding: "18px",

              border:
              "1px solid #333"
            }}
          >

            <h2
              style={{
                color: "white",

                fontSize: "22px"
              }}
            >

              Basic

            </h2>

            <h1
              style={{
                color: "#4CAF50",

                marginTop: "12px",

                fontSize: "32px"
              }}
            >

              ₹299

            </h1>

            <p
              style={{
                color: "#aaa",

                marginBottom: "20px"
              }}
            >

              / month

            </p>

            <div
              style={{
                color: "#d1d1d1",

                lineHeight: "30px",

                fontSize: "15px"
              }}
            >

              ✓ Unlimited Questions  
              ✓ Faster AI Answers  
              ✓ History Access  
              ✓ Smart Recommendations

            </div>

            <button
            onClick={() => handlePayment(299)}
              style={{
                marginTop: "24px",

                width: "100%",

                padding: "11px",

                borderRadius: "14px",

                border: "none",

                background:
                "#4CAF50",

                color: "white",

                fontSize: "15px",

                fontWeight: "700",

                cursor: "pointer"
              }}
            >

              Buy Plan

            </button>

          </div>



          {/* PRO */}
          <div
            style={{
              flex: 1,

              background:
              "linear-gradient(145deg,#1f1f1f,#252525)",

              borderRadius: "22px",

              padding: "18px",

              border:
              "1px solid #FFD700",

              transform:
              "scale(1.02)",

              boxShadow:
              "0px 0px 35px rgba(255,215,0,0.18)"
            }}
          >

            <div
              style={{
                background:
                "#FFD700",

                color: "black",

                padding:
                "6px 12px",

                borderRadius: "999px",

                width: "fit-content",

                fontWeight: "700",

                marginBottom: "16px",

                fontSize: "13px"
              }}
            >

              MOST POPULAR

            </div>

            <h2
              style={{
                color: "white",

                fontSize: "22px"
              }}
            >

              Pro

            </h2>

            <h1
              style={{
                color: "#FFD700",

                marginTop: "12px",

                fontSize: "35px"
              }}
            >

              ₹999

            </h1>

            <p
              style={{
                color: "#aaa",

                marginBottom: "20px"
              }}
            >

              / month

            </p>

            <div
              style={{
                color: "#d1d1d1",

                lineHeight: "30px",

                fontSize: "15px"
              }}
            >

              ✓ Everything in Basic  
              ✓ AI Memory  
              ✓ Deep Investigation Mode  
              ✓ Faster Responses  
              ✓ Premium UI  
              ✓ Future Features Access

            </div>

            <button
            onClick={() => handlePayment(999)}
              style={{
                marginTop: "24px",

                width: "100%",

                padding: "11px",

                borderRadius: "14px",

                border: "none",

                background:
                "#FFD700",

                color: "black",

                fontSize: "15px",

                fontWeight: "800",

                cursor: "pointer"
              }}
            >

              Upgrade Now

            </button>

          </div>

        </div>



        {/* CLOSE */}
        <div
          style={{
            textAlign: "center",

            marginTop: "18px"
          }}
        >

          <button

            onClick={() =>
              setShowPremiumPopup(
                false
              )
            }

            style={{

              padding:
              "11px 30px",

              borderRadius: "14px",

              border:
              "1px solid rgba(255,255,255,0.08)",

              background:
              "rgba(255,255,255,0.06)",

              backdropFilter:
              "blur(10px)",

              color: "white",

              cursor: "pointer",

              fontSize: "15px",

              fontWeight: "700",

              boxShadow:
              "0px 0px 20px rgba(255,255,255,0.05)"
            }}
          >

            Close

          </button>

        </div>

      </div>

    </div>
  );
}

export default PremiumPopup;