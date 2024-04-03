CREATE TABLE title (
  id INT AUTO_INCREMENT NOT NULL,
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

INSERT INTO title (title) VALUES ("My first checklist");

INSERT INTO checklist (item, title_id) VALUES ("Do the chores", 1);
INSERT INTO checklist (item, title_id) VALUES ("Make dentist appointment", 1);
INSERT INTO checklist (item, title_id) VALUES ("Get a refund on the paint", 1);