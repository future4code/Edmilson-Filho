<!-- EXERCICIO 1 -->

<!-- A) -->
Uma chave estrangeira é uma chave usada para ligar duas tabelas juntas. Uma chave estrangeira é um campo (ou vários campos) que referencia a chave primária de outra tabela. 

<!-- B) -->
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id INT(11),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
    "001",
    "Muito bom!",
    7,
    "004"
);
<!-- C -->
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. Que significa:
"Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falhou", ou seja, a restrição não foi capaz de ligar a chave estraingeira da nova avaliação a chave primária de um filme que não existe

<!-- E -->
"Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falhou"

<!-- Exercicio 2 -->

<!-- A) -->
A tabela cria uma relação entre as tabelas Actor e Movie, unindo referências dos atores á filmes feitos por eles.

<!-- C) -->
"Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falhou"

<!-- D -->
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Não é possível deletar ou atualizar uma linha pai: uma restrição de chave estrangeira falhou.

<!-- Exercicio 3 -->
<!-- A -->
O que ela faz é selecionar as linhas das tabelas Movie que correspondem á tabela Rating, onde o Movie_id em Movie for igual a movie_id em Rating. ON estabelece a o parâmetro de comparação entre as tabelas

<!-- B -->
SELECT Movie_id, name, avaliacao FROM Movie INNER JOIN Rating ON Movie_id = Rating.movie_id;