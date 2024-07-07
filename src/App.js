import Header from "./components/Header";
import { Todos } from "./components/Todos";
import AddTodo from "./components/addTodo";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("It's onDelete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      task: "Brush",
      description: "Brush your teeth.",
    },

    {
      sno: 2,
      task: "Bath",
      description: "Take bath in the shower.",
    },

    {
      sno: 3,
      task: "Breakfast",
      description: "Have your breakfast.",
    },

    {
      sno: 4,
      task: "Ready",
      description: "Get ready for office.",
    },

    {
      sno: 5,
      task: "Cab",
      description: "Book and board your cab.",
    }
  ]);

  return (
    <>
      <Header title={"Todos List"} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
