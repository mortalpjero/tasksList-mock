import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskAdder from "./components/TaskAdder/TaskAdder";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-5 md:px-20 lg:px-48 ">
          <TaskAdder />
          <Divider />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
