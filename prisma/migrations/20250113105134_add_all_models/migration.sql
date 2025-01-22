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
    "attachments" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "priority" TEXT NOT NULL DEFAULT 'medium',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" DATETIME,
    "responseNotes" TEXT
);
INSERT INTO "new_ContactRequest" ("createdAt", "email", "id", "message", "mobile", "name", "service") SELECT "createdAt", "email", "id", "message", "mobile", "name", "service" FROM "ContactRequest";
DROP TABLE "ContactRequest";
ALTER TABLE "new_ContactRequest" RENAME TO "ContactRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
