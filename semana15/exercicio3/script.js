// Exercício 3

const tarefaNova = process.argv[2];
const tarefas = [];

const exibirTarefas = (tarefaNova) => {
    tarefas.push(tarefaNova);

    fs.appendFile('tarefas.txt', tarefas, 'utf8');
    tarefasFile = fs.readFile('tarefas.txt', 'utf8');

    console.log("tarefas: ", tarefasFile);
}

exibirTarefas(tarefaNova);