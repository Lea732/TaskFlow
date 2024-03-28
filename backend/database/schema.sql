CREATE TABLE title (
  id INT  AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE checklist (
  id INT AUTO_INCREMENT NOT NULL,
  item VARCHAR(100),
  title_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (title_id) REFERENCES title(id)
);

-- INSERT INTO title (title) VALUES ('My first checklist');

-- INSERT INTO checklist (title_id, item) VALUES (1, 'Do the chores');
-- INSERT INTO checklist (title_id, item) VALUES (1, 'Make dentist appointment');
-- INSERT INTO checklist (title_id, item) VALUES (1, 'Get a refund on the paint');