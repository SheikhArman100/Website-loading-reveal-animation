/* eslint-disable no-unused-expressions */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <HomePage />
      )}
    </AnimatePresence>
  );
}

export default App;
