USE movie_list;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500),
  img_source VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO movies (title, description, img_source) VALUES ('Mean Girls', 'Girly Movie', '/tempalte');
INSERT INTO movies (title, description, img_source) VALUES ('Hackers', 'Hacker movie', '/tempalte');
INSERT INTO movies (title, description, img_source) VALUES ('The Grey', 'Grey Movie', '/tempalte');
INSERT INTO movies (title, description, img_source) VALUES ('Star Wars', 'In a galaxy far far away...', '/tempalte');