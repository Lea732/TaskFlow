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
