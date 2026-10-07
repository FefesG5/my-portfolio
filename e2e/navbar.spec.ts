import { test, expect } from "@playwright/test"

test.describe("Navbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en")
  })

  test("should show theme toggle button", async ({ page }) => {
    const themeToggle = page.getByRole("button", { name: "Toggle theme" })
    await expect(themeToggle).toBeVisible()
  })

  test("should show language dropdown button", async ({ page }) => {
    const languageButton = page.getByRole("button", { name: "Select language" })
    await expect(languageButton).toBeVisible()
  })

  test("should open language dropdown when clicked", async ({ page }) => {
    const languageButton = page.getByRole("button", { name: "Select language" })
    await languageButton.click()
    await expect(page.getByRole("menu")).toBeVisible()
  })

  test("should switch to Japanese when JP is selected", async ({ page }) => {
    const languageButton = page.getByRole("button", { name: "Select language" })
    await languageButton.click()
    await page.getByRole("menuitem", { name: "日本語" }).click()
    await expect(page).toHaveURL("/ja")
  })

  test("should open hamburger menu on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    const hamburger = page.getByRole("button", { name: "Toggle menu" })
    await hamburger.click()
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible()
  })
})
