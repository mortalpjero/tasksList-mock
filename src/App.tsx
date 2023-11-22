import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskListWrapper from "./components/TasksListWrapper/TasksListWrapper";

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <TaskListWrapper />
        <Footer />
      </div>
    </>
  );
}

export default App;
