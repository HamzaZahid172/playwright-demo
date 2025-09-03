# Playwright Demo (TypeScript)

![CI](https://github.com/HamzaZahid172/playwright-demo/actions/workflows/playwright.yml/badge.svg)

End-to-end tests for a sample web app (SauceDemo) using **Playwright Test** with a clean Page Object Model, environment-based secrets, and GitHub Actions CI.

---

## Tech stack

- Node.js ≥ 18
- Playwright Test (**Chromium**, **Firefox**, **WebKit**)
- TypeScript
- GitHub Actions (CI)

---

## Getting started

```bash
# 1) Install dependencies
npm ci

# 2) Install Playwright browsers (one time)
npx playwright install

# 3) (Optional) create local env vars
cp .env.example .env
# then edit .env with your values

# 4) Run all tests (headless)
npx playwright test

# 5) Open the last HTML report
npx playwright show-report
