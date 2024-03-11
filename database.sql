CREATE TABLE user (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(50)NOT NULL,
  pass VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

INSERT INTO user(username, email, pass) VALUES ('laupadron', 'laupadron1458@gmail.com','sofia1458'), ('sofimaidana', 'sofiruchis@hotmail.com', 'lau1458');