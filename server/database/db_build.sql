BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(100),
    user_type VARCHAR(100),
    consent BOOLEAN DEFAULT false NOT NULL
);

COMMIT;