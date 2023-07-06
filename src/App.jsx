import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./Pages/Movie";
import Details from "./Component/Details";
import Series from "./Pages/Series";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import UpBtn from "./Component/upBtn";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Search from "./Pages/Search";
import Favorite from "./Pages/Favorite";
import Language from "./Context/Language";

function App() {
  let [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#01579b",
      },
      secondary: {
        main: "#b71c1c",
      },
    },
  });
  return (
    <>
      {loading ? (
        <>
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{
              height: "100vh",
              background: "#18222b",
            }}
          >
            <HashLoader color={"#2196f3"} loading={loading} size={150} />
          </div>
        </>
      ) : (
        <ThemeProvider theme={theme}>
          <Language.Provider value={{ lang, setLang }}>
            <Router>
              <div className="App">
                <div
                  className={lang === "ar" ? "text-right" : "text-left"}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                >
                  <NavBar />
                  <div className="Content ">
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/About">
                        <About />
                      </Route>
                      <Route path="/Movie">
                        <Movie />
                      </Route>
                      <Route path="/Series">
                        <Series />
                      </Route>
                      <Route path="/Search">
                        <Search />
                      </Route>
                      <Route path="/Favorite">
                        <Favorite />
                      </Route>
                      <Route path="/Boxing/:type/:id">
                        <Details any="ahmed" />
                      </Route>
                      <Route path="*">
                        <NotFound />
                      </Route>
                    </Switch>
                  </div>
                  <UpBtn />
                  <Footer />
                </div>
              </div>
            </Router>
          </Language.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
