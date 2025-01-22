/*
  Warnings:

  - You are about to drop the column `priority` on the `ContactRequest` table. All the data in the column will be lost.
  - You are about to drop the column `respondedAt` on the `ContactRequest` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `ContactRequest` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ContactRequest" ("createdAt", "email", "id", "message", "mobile", "name", "service") SELECT "createdAt", "email", "id", "message", "mobile", "name", "service" FROM "ContactRequest";
DROP TABLE "ContactRequest";
ALTER TABLE "new_ContactRequest" RENAME TO "ContactRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
