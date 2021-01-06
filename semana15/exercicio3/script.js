var fs = require('fs');

// Exercício 3

const tarefaNova = process.argv[3];

const exibirTarefas = (tarefaNova) => {

    fs.open('tarefas.txt', tarefaNova, (err, fd) => {
        if (err) throw err;
        fs.appendFile(fd, 'data to append', 'utf8', (err) => {
          fs.close(fd, (err) => {
            if (err) throw err;
          });
          if (err) throw err;
        });
      });

    // fs.readFile('/tarefas.txt', 'utf8',  (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // }
    // );
}

exibirTarefas(tarefaNova);