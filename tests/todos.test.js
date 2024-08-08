import { test, expect  } from "@playwright/test";
//import test from "node:test"; {

test ("practice test should pass", async ({page})  => {
    await page.goto ('http://localhost:3000/');
    const input = page.getByRole('textbox');
    await input.fill('team AKA is the best ! ! ')
});

//input element

// <label for="new-todo">
// New Todo:
// <input type="text" id="new-todo" name="task" required />
// </label>