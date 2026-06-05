import LoginPage from "./LoginPage";
import { useState, useEffect } from "react";

// import { askBackend } from "./services/api";
// import SuggestionBox from "./components/SuggestionBox";
import SuggestionPopup from "./components/SuggestionPopup";
import LimitPopup
from "./components/LimitPopup";
import LogoutPopup from "./components/LogoutPopup";
import PremiumPopup from "./components/PremiumPopup";
import Sidebar from "./components/Sidebar";
import InputBox from "./components/InputBox";
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";
import AboutDeveloper from "./components/AboutDeveloper";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("token")
);

  const confirmLogout = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  setIsLoggedIn(false);

  setShowLogoutPopup(false);
};


  // const API_URL = import.meta.env.VITE_API_URL;
  // console.log("API_URL =", import.meta.env.VITE_API_URL);
  const API_URL = "http://13.60.192.66:8000";
  const [showLimitPopup,setShowLimitPopup] = useState(false);

  const [showPremiumPopup,setShowPremiumPopup] = useState(false);

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const [user, setUser] = useState(null);

  const [openSidebar, setOpenSidebar] = useState(false);

  const [history, setHistory] = useState([]);

  useEffect(() => {

  const loadHistory = async () => {

    try {

      const user =
        JSON.parse(localStorage.getItem("user"));

      if (!user) return;

      const res = await fetch(
  `${API_URL}/history/${user.email}`
);
      const data = await res.json();

      setHistory(data);

    } catch (err) {

      console.error(err);
    }
  };

  loadHistory();

}, []);

  const [answer, setAnswer] = useState("");

  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  const showSuggestionPopup =

  question.trim().length >= 4 &&

  question.trim().length <= 8 &&

   !loading;

  const [showAboutDeveloper, setShowAboutDeveloper] =
  useState(false);

  const newChat = () => {

  setAnswer("");

  setQuestion("");

  setHistory((prev) => [
  {
    question: "New Chat",
    answer: "",
  },
  ...prev,
]);
};

  // const askQuestion = async () => {



  

    const askQuestion = async (customQuestion = null) => {

  console.log("ASK CLICKED");

  const currentQuestion =
    customQuestion || question.trim();

  console.log("CURRENT QUESTION =", currentQuestion);
  console.log("QUESTION STATE =", question);
  console.log("CUSTOM QUESTION =", customQuestion);

  if (!currentQuestion || loading) return;

  // const currentQuestion = question.trim();

  setQuestion("");
  setAnswer("");

  setLoading(true);

  setHistory((prev) => [
  {
    question: currentQuestion,
    answer: "",
  },
  ...prev,
]);

  try {

    const response = await fetch(
  `${API_URL}/ask`,
  {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "user-email": "test@gmail.com",
      },

      body: JSON.stringify({
        question: currentQuestion,
      }),

    });

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    let fullAnswer = "";

    while (true) {

      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      fullAnswer += chunk;

      setAnswer(fullAnswer);

      if (

  fullAnswer
  .toLowerCase()
  .includes("limit")

) {

  setShowLimitPopup(true);

  break;
}
    }

    setHistory((prev) => {

      const updated = [...prev];

      updated[0].answer = fullAnswer;

      return updated;
    });

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);
  }
};

if (!isLoggedIn) {

  return (
    <LoginPage
      setIsLoggedIn={setIsLoggedIn}
      setUser={setUser}
    />
  );
}

if (showAboutDeveloper) {

  return (
  <AboutDeveloper
    setShowAboutDeveloper={setShowAboutDeveloper}
  />
);
}

  return (
    <>
      <PremiumPopup

  showPremiumPopup={
    showPremiumPopup
  }

  setShowPremiumPopup={
    setShowPremiumPopup
  }
/>

<LimitPopup

  showLimitPopup={
    showLimitPopup
  }

  setShowLimitPopup={
    setShowLimitPopup
  }

  setShowPremiumPopup={
    setShowPremiumPopup
  }
/>

      <LogoutPopup
  showLogoutPopup={showLogoutPopup}
  setShowLogoutPopup={setShowLogoutPopup}
  confirmLogout={confirmLogout}
/>

      <div
        style={{
          display: "flex",
          height: "100vh",
          background: "#121212",
          color: "white",
        }}
      >
        <Sidebar
  openSidebar={openSidebar}
  setOpenSidebar={setOpenSidebar}
  history={history}
  setAnswer={setAnswer}
  newChat={newChat}
/>

        <div style={{ flex: 1, padding: "20px" }}>

          <Navbar
  logout={() => setShowLogoutPopup(true)}
  setShowPremiumPopup={setShowPremiumPopup}
  newChat={newChat}
  setShowAboutDeveloper={setShowAboutDeveloper}
  answer={answer}
/>

          {/* <h1>The Epstein Files</h1> */}

 <ChatBox
  answer={answer}
  loading={loading}
  question={question}
/>

<SuggestionPopup

  show={showSuggestionPopup}

  setQuestion={setQuestion}

  askQuestion={askQuestion}

/>

          <InputBox
            question={question}
            setQuestion={setQuestion}
            askQuestion={askQuestion}
            loading={loading}
          />

        </div>
      </div>
    </>
  );
}

export default App;