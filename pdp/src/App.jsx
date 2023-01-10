import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";



const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
