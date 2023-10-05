-- EXAMPLE
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT,
    email CHAR(256) NOT NULL,
    password CHAR(32) NOT NULL,

    PRIMARY KEY (id)
);

INSERT INTO Users
(email, password)
VALUES
('nam@viet.com', 'uoih3nrihni3'),
('kelby@native.org', 'j12k3hk12h3');