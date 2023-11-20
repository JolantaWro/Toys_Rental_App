CREATE DATABASE dbtoys;

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
);

CREATE TABLE c (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_producer VARCHAR(255),
  product_description VARCHAR(255),
  product_active BOOLEAN DEFAULT true,
  product_photo VARCHAR(255),
  user_id REFERENCES users(user_id),
  category_id REFERENCES categoryproduct(category_id)
);


INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Tęcza 12-elementowa', "Grimm’s", "Grimm's wooden rainbow is the most famous series of products from this manufacturer", 2, 1);
INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Lego Friends', 'Lego', 'The best blocks for people', 2, 4);
INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Puzzle', 'Trefl', 'The best puzzle for everyone', 2, 3);

INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Sorter sensoryczny ENCE PENCE', 'Ence Pence', 'This interesting sensory sorter is a tool supporting the development of a childs senses', 2, 1);
INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Shape Sorter Box Naturalny', 'Beskidy Mountains', 'This interesting sensory sorter is a tool supporting the development of a childs senses', 2, 1);
INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Piramida Kolorowa Kwadratowa', 'Beskidy Mountains', 'This interesting sensory sorter is a tool supporting the development of a childs senses', 2, 1);

INSERT INTO products (product_name, product_producer, product_description, user_id, category_id) VALUES ('Nasza Księgarnia', 'Nasza Księgarnia', 'The second part of Pucios adventures focuses on the first words typical of a childs speech development', 2, 5);

--insert fake users
insert into users (user_name, user_email, user_password) values ('jolanta', 'jolanta@gmail.com', 'jolanta');

puzzle_1.png
UPDATE products SET product_photo = 'LEGOFriends.jpg'WHERE product_id = 1;
UPDATE products SET product_photo = 'puzzle_1.png' WHERE product_id = 4;