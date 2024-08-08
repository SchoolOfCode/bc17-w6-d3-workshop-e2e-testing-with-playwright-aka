import { test, expect  } from "@playwright/test";
//import test from "node:test"; {

test ("practice test should pass", async ({page})  => {
    await page.goto ('http://localhost:3000/');
});