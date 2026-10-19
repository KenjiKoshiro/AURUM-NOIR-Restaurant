import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
function load(file) {
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const mod = { exports: {} };
  new Function("module", "exports", source)(mod, mod.exports);
  return mod.exports;
}
const { filterMenu, menuItems } = load("src/lib/menu.ts");
const { reservationError, availableTimes } = load("src/lib/reservation.ts");
test("search matches ingredients without case sensitivity", () =>
  assert.ok(
    filterMenu(menuItems, "LEMON", "all", "all", "default").some(
      (i) => i.name === "Lobster Linguine",
    ),
  ));
test("combines category and dietary filters", () =>
  assert.ok(
    filterMenu(menuItems, "", "main", "vegetarian", "default").every(
      (i) => i.category === "main" && i.dietary.includes("vegetarian"),
    ),
  ));
test("sorts ranged prices by starting price without mutating catalog", () => {
  const ids = menuItems.map((i) => i.id);
  const sorted = filterMenu(menuItems, "", "all", "all", "price-asc");
  assert.equal(sorted[0].name, "Craft Mocktail");
  assert.deepEqual(
    menuItems.map((i) => i.id),
    ids,
  );
});
test("unmatched search returns empty", () =>
  assert.equal(
    filterMenu(menuItems, "not-a-dish", "all", "all", "default").length,
    0,
  ));
test("past and impossible dates are rejected", () => {
  assert.ok(reservationError("2026-10-18", "19:00", "2", "2026-10-19"));
  assert.ok(reservationError("2026-02-31", "19:00", "2", "2026-01-01"));
});
test("invalid party size and time are rejected", () => {
  assert.ok(reservationError("2026-10-20", "03:00", "2", "2026-10-19"));
  assert.ok(reservationError("2026-10-20", "19:00", "99", "2026-10-19"));
});
test("Sunday starts earlier and ends earlier", () => {
  assert.ok(availableTimes("2026-10-25").includes("16:00"));
  assert.ok(!availableTimes("2026-10-25").includes("21:00"));
});
test("valid future simulation is accepted", () =>
  assert.equal(reservationError("2026-10-20", "19:00", "2", "2026-10-19"), ""));

test("Friday and Saturday arrivals continue to 22:00", () => {
  assert.ok(availableTimes("2026-10-23").includes("22:00"));
  assert.ok(availableTimes("2026-10-24").includes("21:30"));
});
