import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

Test("returns current year", () => {
  expect(getFullYear()).toBe(2023);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("return right notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
