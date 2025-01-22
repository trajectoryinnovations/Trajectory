/*
  Warnings:

  - You are about to drop the column `attachments` on the `ContactRequest` table. All the data in the column will be lost.
  - You are about to drop the column `responseNotes` on the `ContactRequest` table. All the data in the column will be lost.

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
    "status" TEXT NOT NULL DEFAULT 'new',
    "priority" TEXT NOT NULL DEFAULT 'medium',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" DATETIME
);
INSERT INTO "new_ContactRequest" ("createdAt", "email", "id", "message", "mobile", "name", "priority", "respondedAt", "service", "status") SELECT "createdAt", "email", "id", "message", "mobile", "name", "priority", "respondedAt", "service", "status" FROM "ContactRequest";
DROP TABLE "ContactRequest";
ALTER TABLE "new_ContactRequest" RENAME TO "ContactRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
