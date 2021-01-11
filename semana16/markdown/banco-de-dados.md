<!-- Exercicio 1 -->

<!-- A) -->
VARCHAR(n) define o tipo sequência de n caracteres a uma coluna, sendo n a quantidade de caracteres
PRIMARY KEY estabelece chave primária ou identificar único para tal coluna
NOT NULL não nulo: impede que os campos venham com valores nulos
DATE coluna com dados em forma de data

<!-- B -->
SHOW DATABASES exibe uma lista com todos os bancos de dados
SHOW TABLES mostra uma lista as todas as tabelas do banco que está em uso
SHOW TABLES traz informações de campo, tipo, nulo, chave, padrão e extra sobre a tabela

Exercicio 2

<!-- B) -->
Entrada "002" duplicada para a chave "PRIMARY". Este erro ocorreu porque a coluna de id é uma chave primária e, como tal, exige um identificador único porém, foi passado um id já existente.

<!-- C -->
A contagem de colunas não atende á contagem de valores na linha 1. Isto aconteceu porque, foi tentada a inserção de uma quantidade de valores diferente da quantidade de colunas onde esses dados seriam atribuídos

<!-- D -->
O campo "name" não tem um valor padrão. A razão para isso é que, o campo "name" não foi referenciado, consequentemente, não foi provido um valor padrão para esse.

<!-- E -->
Valor de data incorreto: "1950" para a coluna "birth_date" na linha 1. Tal erro foi relatado devido ao valor esperado para a coluna "birth_date" não estar envolvido por aspas, portanto sendo tratado como um cálculo, onde "-" subtrai.

<!-- Exercicio 3 -->

<!-- A -->
SELECT * FROM Actor WHERE gender = "female"

<!-- B -->
SELECT salary FROM Actor WHERE name = "Tony Ramos"

<!-- C -->
SELECT * from Actor WHERE gender = "invalid". Nenhuma linha foi retornada, em vez disso, apareceu uma linha nula

<!-- D -->
SELECT id, name, salary FROM Actor WHERE salary < 500000

<!-- E -->
SELECT id, name from Actor WHERE id = "002". Coluna "nome" desconhecida na lista de campos. Isto foi alertado porque a coluna "nome" referida com o SELECT não existe na lista de campos da tabela

<!-- Exercicio 4 -->

<!-- A) -->
A query seleciona os atores com nome que começa pela letra A ou J e que estes tenham um salário maior do que 300000

<!-- B) -->
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000

<!-- C -->
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%"

<!-- D -->
SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%") AND (name LIKE "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000

<!-- E -->
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000

<!-- Exercicio 5 -->

<!-- A) -->
CREATE TABLE Movies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT(255) NOT NULL,
    release_date DATE NOT NULL,
    rating INT(2) NOT NULL,
)
A query cria as colunas todas não nulas, com um id como número inteiro e chave primária e que é incrementado em 1 a cada inserção, com um name como sequência de caracteres, sinopse como texto, data de nascimento como date e avalicao como inteiro até 2 casas decimais

<!-- B) -->

<!-- Exercicio 6 -->
<!-- A) -->
SELECT id, nome, rating FROM Movies WHERE id = 1

<!-- B) -->
SELECT * FROM movies WHERE name = ""

<!-- C -->
SELECT id, name, synopsis FROM movies WHERE rating >= 7

<!-- Exercicio 7 -->
<!-- A) -->
SELECT * FROM Movies WHERE name LIKE "%vida%"

<!-- B) -->
SELECT * FROM Movies WHERE name LIKE "%casa%" OR synopsis LIKE "%casa%"

<!-- C -->
SELECT * FROM Movies WHERE release_date < "11/01/2021";

<!-- D -->
SELECT * FROM Movies WHERE (name LIKE "%casa%" OR synopsis LIKE "%casa%") AND rating > 7;