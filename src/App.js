import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";
import Add from "./components/Add";
import Count from "./components/Count";

function App() {
  const Todos = [
    {
      id: 0,
      title: "C++",
      completed: false,
    },
    {
      id: 1,
      title: "Python",
      completed: false,
    },
    {
      id: 2,
      title: "Javascript",
      completed: true,
    },
  ];

  return (
    <section>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-2xl text-gray-600">Jest Testing with react</p>
          <p className="text-3xl font-bold" data-testid="prog-lang">
            Programming Language
          </p>
          {Todos.map((item, index) => {
            return <Todo key={index} content={item} />;
          })}
          <Count />
          {/*    <Add /> */}
        </header>
      </div>
    </section>
  );
}

export default App;
