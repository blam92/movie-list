USE movie_list;

CREATE TABLE movies (
  id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500),
  img_source VARCHAR(100),
  to_watch BOOL,
  PRIMARY KEY (id)
);