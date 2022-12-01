/* eslint-disable no-unused-expressions */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div key="home">
          <HomePage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
