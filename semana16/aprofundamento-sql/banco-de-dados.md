<!-- Exercicio 1 -->

<!-- A) -->
Exclui a coluna salary

<!-- B) -->
Altera a coluna gender para sex VARCHAR(6)

<!-- C) -->
Muda a coluna gender para gender VARCHAR(255)

<!-- Exercicio 2 -->

<!-- A) -->
UPDATE Actor
SET name = "Paola Oliveira",
birth_date = "14/04/1982"
WHERE id = 003

<!-- B) -->
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES"

<!-- C -->
UPDATE Actor
SET
name = "Bia Arantes",
birth_date = "15/03/1993",
salary = 500000,
gender = "female"
WHERE id = 005

<!-- D -->
UPDATE Actor SET name = "Monique Alfradique" WHERE name = "Monique Evans"
Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0.
Quis dizer que 0 linha(s) afetada(s) Linhas correspondentes: 0 Alteradas: 0 Alertas: 0.
Ou seja, a requisição foi realiza, mas não houve nenhuma correspondência.

<!-- Exercicio 3 -->

<!-- A -->
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

<!-- B -->
DELETE * FROM Actor WHERE gender = "male" AND salary > 1000000

<!-- Exercicio 4 -->

<!-- A) -->
SELECT MAX(salary) FROM Actor

<!-- B) -->
SELECT MIN(salary) FROM Actor WHERE gender = "female"

<!-- C -->
SELECT COUNT(*) FROM Actor WHERE gender = "female

<!-- D -->
SELECT SUM(salary) FROM Actor

<!-- Exercicio 5 -->

<!-- A) -->
A query seleciona a quantidade - que conta quantas linhas há - e o gênero do lado

<!-- B) -->
SELECT id, name FROM Actor ORDER BY name DESC

<!-- C) -->
SELECT * FROM Actor ORDER BY salary

<!-- D) -->
SELECT * FROM Actor ORDER BY salary DESC
LIMIT 3

<!-- E) -->
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender

<!-- Exercicio 6 -->
<!-- A) -->
ALTER TABLE Movie
ADD playing_limit_date DATE

<!-- B) -->
ALTER TABLE Movie
CHANGE rating rating FLOAT

<!-- C -->
UPDATE
SET playing_limit_date = "2020/05/02"
WHERE id = "2"

UPDATE
SET playing_limit_date = "20/01/2021"
WHERE id = "2"

<!-- D -->
DELETE FROM Movie
WHERE id = "1"

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Nada foi feito: 0 linha(s) afetada(s) Linhas correspondentes: 0 Alteradas: 0 Alertas: 0.
A query foi executada, porém nenhuma linha que atenda ás condições foi encontrada

<!-- Exercicio 7 -->
<!-- A) -->
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5

<!-- B) -->
SELECT AVG(rating)
FROM Movie

<!-- C -->
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURDATE()
GROUP BY avaliacao

<!-- D -->
SELECT COUNT(*)
FROM Movie
WHERE release_date > CURDATE()

<!-- E -->
SELECT MAX(rating)
FROM Movie

<!-- F -->
SELECT MIN(rating)
FROM Movie

<!-- Exercicio 8 -->

<!-- A) -->
SELECT * FROM
Movie
ORDER BY title

<!-- B) -->
SELECT * FROM
Movie
ORDER BY title
LIMIT 5

<!-- C) -->
SELECT * FROM
Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3

<!-- D) -->
SELECT * FROM
Movie
ORDER BY rating DESC
LIMIT 3