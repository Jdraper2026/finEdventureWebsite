import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OurTeam from "./pages/OurTeam";
import Homepage from "./pages/Homepage";
import FinancialLiteracy from "./pages/FinancialLiteracy";
import Ranking from "./pages/Ranking";
import Benefits from "./pages/Benefits";
import Intro from "./pages/Intro";
import Issues from "./pages/Issues";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/financial-literacy":
        title = "";
        metaDescription = "";
        break;
      case "/ranking":
        title = "";
        metaDescription = "";
        break;
      case "/benefits":
        title = "";
        metaDescription = "";
        break;
      case "/intro":
        title = "";
        metaDescription = "";
        break;
      case "/issues":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OurTeam />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/financial-literacy" element={<FinancialLiteracy />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/issues" element={<Issues />} />
    </Routes>
  );
}
export default App;
