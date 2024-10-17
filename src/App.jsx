import { useState } from "react";

import "./App.css";

import "./App.css";
import AgoraUIKit from "agora-react-uikit";
import { useSearchParams } from "react-router-dom";
function App() {
  const [videoCall, setVideoCall] = useState(true);
  const [searchParams] = useSearchParams();

  const username = searchParams.get("username");
  const aptCode = searchParams.get("aptCode");
  const user = searchParams.get("c");

  // const username = "user";
  // const aptCode = "123";
  // const user = "doctor";
  const rtcProps = {
    appId: "9252f7bacb35417e9effa179f879b90b",
    uid: username,
    channel: aptCode,
    role: user == "doctor" ? "host" : "audience",
    token: null,
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return (
    <>
      {videoCall ? (
        <div style={{ display: "flex", width: "100%", height: "100vh" }}>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
      ) : (
        <h3 onClick={() => setVideoCall(true)}>Join</h3>
      )}
    </>
  );
}

export default App;
