import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";
import App from "../../App";
afterEach(() => {
  cleanup();
});

test("Should render todo component", () => {
  render(<App />);
  const Element = screen.getByTestId("prog-lang");
  expect(Element).toBeInTheDocument();
  expect(Element).toHaveTextContent("Programming Language");
});
test("Should render non-completed todo", () => {
  const todo = {
    id: 2,
    title: "Javascript",
    completed: true,
  };
  render(<Todo content={todo} />);
  //   getting element  by test id
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  //   text testing
  expect(todoElement).toHaveTextContent(todo.title);
  //    tag testing
  // expect(todoElement).toContainHTML();
});

test("matches snapshot", () => {
  const todo = {
    id: 2,
    title: "Javascript",
    completed: true,
  };
  const tree = renderer.create(<Todo content={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
  //   console.log(tree);
});
