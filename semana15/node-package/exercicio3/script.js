var fs = require('fs');

// Exercício 3
const tarefaNova = process.argv[2];

fs.readFile('tarefas.json', 'utf8', (err, data) => {
  if (err) throw err;

  let tarefas = [];
  if (data !== undefined) {
    tarefas = JSON.parse(data);
  }
  
  tarefas = [...tarefas, tarefaNova];
  fs.writeFile('tarefas.json', JSON.stringify(tarefas), 'utf8', (err) => {
    if (err) throw err;
  });
});
