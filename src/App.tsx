import { useEffect, useState } from "react";
import { Background } from "./components/Background/Background";
import { Content } from "./components/Content/Content";
import { SplashScreen } from "./pages/SplashScreen";

export function App() {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <Background />
          <Content />
        </>
      )}
    </>
  );
}
