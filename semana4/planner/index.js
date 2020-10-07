let diasSemana = document.getElementById("dias-semana");
let horasDia = document.getElementById("horas-dia");
let tarefas = document.querySelectorAll("p");

let i = 0;
criarTarefa = () => {
    let tarefaEntrada = document.getElementById("tarefa").value;
    
    if (tarefaEntrada !== "") {
        i++;
        let diaSelecionado = document.getElementById(diasSemana.value);
        // let tarefaCriada = `<p onclick="riscarTarefa()" id="tarefa${i}">${tarefaEntrada}</p>`;
        // diaSelecionado.innerHTML = tarefaCriada;
        diaSelecionado.innerHTML += `<div><h4>${horasDia.value} horas</h4><p onclick="riscarTarefa('${tarefaEntrada}', ${i})" id="tarefa${i}">${tarefaEntrada}</p></div>`;
        document.getElementById("tarefa").value = "";
    } else {
        alert("O campo está vazio");
    }
}

let riscarTarefa = (tarefaEntrada, i) => {
    let tarefaClicada = document.getElementById(`tarefa${i}`);
    tarefaClicada.innerHTML = `<i class="clicado">${tarefaEntrada}</i>`;
}

let limparTarefas = () => {
    let dias = document.querySelectorAll('.semana div');

    for (let i = 0; i < dias.length; i++) {
        dias[i].innerHTML = "";
    }
}

adicionarHoras = () => {
    for (let i = 0; i < 24; i++) {
        horasDia.innerHTML += `<option value="${i}">${i}</option>`
    }
}

adicionarHoras();