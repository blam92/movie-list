USE movie_list;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500),
  img_source VARCHAR(100),
  to_watch BOOL,
  PRIMARY KEY (id)
);

INSERT INTO movies (title, description, img_source, to_watch) VALUES ('Mean Girls', 'Girly Movie', '/tempalte', TRUE);
INSERT INTO movies (title, description, img_source, to_watch) VALUES ('Hackers', 'Hacker movie', '/tempalte', TRUE);
INSERT INTO movies (title, description, img_source, to_watch) VALUES ('The Grey', 'Grey Movie', '/tempalte', FALSE);
INSERT INTO movies (title, description, img_source, to_watch) VALUES ('Star Wars', 'In a galaxy far far away...', '/tempalte', FALSE);