/* Replace with your SQL commands */
CREATE TABLE assent(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(200) NOT NULL,
    phone VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    access TEXT []
);