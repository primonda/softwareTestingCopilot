CREATE TABLE "tenants" (
  "id" integer PRIMARY KEY,
  "created_at" timestamp
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "product_id" integer,
  "username" varchar,
  "role" varchar,
  "created_at" timestamp
);

CREATE TABLE "products" (
  "id" integer PRIMARY KEY,
  "tenant_id" integer,
  "title" varchar,
  "created_at" timestamp
);

CREATE TABLE "features" (
  "id" integer PRIMARY KEY,
  "product_id" integer,
  "title" varchar,
  "description" varchar,
  "created_at" timestamp
);

CREATE TABLE "user_stories" (
  "id" integer PRIMARY KEY,
  "feature_id" integer,
  "title" varchar,
  "description" varchar,
  "created_at" timestamp
);

CREATE TABLE "test_cases" (
  "id" integer PRIMARY KEY,
  "user_story_id" integer,
  "title" varchar,
  "test_body" varchar,
  "description" varchar,
  "created_at" timestamp
);

CREATE TABLE "test_runs" (
  "id" integer PRIMARY KEY,
  "test_case_id" integer,
  "status" bool,
  "created_at" timestamp
);

ALTER TABLE "features" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "user_stories" ADD FOREIGN KEY ("feature_id") REFERENCES "features" ("id");

ALTER TABLE "test_cases" ADD FOREIGN KEY ("user_story_id") REFERENCES "user_stories" ("id");

ALTER TABLE "test_runs" ADD FOREIGN KEY ("test_case_id") REFERENCES "test_cases" ("id");

ALTER TABLE "tenants" ADD FOREIGN KEY ("id") REFERENCES "products" ("tenant_id");

ALTER TABLE "products" ADD FOREIGN KEY ("id") REFERENCES "users" ("product_id");
