import { render, screen, fireEvent } from "@testing-library/react";

import Count from "../Count";
const puppeteer = require("puppeteer");
// test("rendaring all item", () => {
//   render(<Count />);

//   // title check
//   const title = screen.getByTestId("title");
//   expect(title).toHaveTextContent(/Count/i);

//   // count check
//   const number = screen.getByTestId("number");
//   expect(number).toHaveTextContent(0);

//   // input field value will be 100
//   const inputElements = screen.getByTestId("field");
//   expect(inputElements.value).toBe("100");

//   // increment button
//   const incrementBTN = screen.getByTestId("increment");
//   expect(incrementBTN).toHaveTextContent("+");

//   // decrement button
//   const decrementBTN = screen.getByTestId("decrement");
//   expect(decrementBTN.textContent).toBe("-");
// });

//  input field value change

// test("input value changing test", () => {
//   render(<Count />);
//   const inputField = screen.getByTestId("field");
//   expect(inputField.value).toBe("100");

//   // e.target.value
//   fireEvent.change(inputField, {
//     target: {
//       value: "5",
//     },
//   });
//   //   // console.log(inputElements.value);
//   expect(inputField.value).toBe("5");
// });
// test("increment and decrement func testing", () => {
//   render(<Count />);
//   const number = screen.getByTestId("number");

//   const incrementBTN = screen.getByTestId("increment");
//   fireEvent.click(incrementBTN);
//   expect(number).toHaveTextContent(100);

//   const decrementBTN = screen.getByTestId("decrement");
//   fireEvent.click(decrementBTN);
//   expect(number).toHaveTextContent(0);

//   // input field value change
//   const inputField = screen.getByTestId("field");

//   // e.target.value
//   fireEvent.change(inputField, {
//     target: {
//       value: "5",
//     },
//   });
//   fireEvent.click(incrementBTN);
//   //  console.log(number.className);
//   expect(number).toHaveTextContent(5);
// });

test("checking end to end puppeteer", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  // await page.focus("input#field");
  // await page.keyboard.press("Backspace");
  let field = await page.$("#field");
  await field.click({ clickCount: 3 });
  await page.keyboard.press("Backspace");
  // await page.click("input#field");
  await page.type("input#field", "100", { delay: 100 });
  await page.click("button#increment");
  await page.click("button#increment");
  await page.click("button#decrement");

  await field.click({ clickCount: 3 });
  await page.keyboard.press("Backspace");
  await page.type("input#field", "50", { delay: 100 });
  await page.click("button#increment");
  // await browser.close();
}, 16000);
