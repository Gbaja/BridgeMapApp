BEGIN;

DROP TABLE IF EXISTS users, categories, workshops;

CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(100),
    user_type VARCHAR(100),
    consent BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE IF NOT EXISTS categories(
    id serial PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS workshops(
    id serial PRIMARY KEY,
    title VARCHAR(100),
    category_id INTEGER REFERENCES categories(id),
    description TEXT,
    starting_age INTEGER,
    ending_age INTEGER,
    starting_date VARCHAR(100),
    ending_date VARCHAR(100),
    starting_time VARCHAR(100),
    ending_time VARCHAR(100)
);

  INSERT INTO users (email, password, user_type, consent)
  VALUES ('test@example.com', 'qwerty', 'young_person', 'true');

 INSERT INTO categories
    (name)
  VALUES
    ('STEM'),
    ('Creative, Art and Fashion'),
    ('Sports, Fitness & Wellbeing'),
    ('Caeer and Employability'),
    ('Digital Media and Photography'),
    ('Skills for Life'),
    ('Accreditated')
  ;

  INSERT INTO workshops 
    (title, category_id, description, starting_age, ending_age, starting_date, ending_date, starting_time, ending_time)
  VALUES
    ('Fashion', (SELECT id FROM categories WHERE name = 'Creative, Art and Fashion'), 'Fashion for life', 12, 18, '18/12/2018', '24/12/2018', '11:00am', '4:00pm')
  ;

COMMIT;