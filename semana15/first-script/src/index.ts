// Exercicio 1

console.log("Hello world");

// A)
// const minhaString: string = 1;
// O VSCode avisa que o tipo número não é assinável ao tipo string

// B)
// const meuNumero: number | string = 0;

// C)
type Pessoa = {nome: string, idade: number, corFavorita: string}

enum coresDoArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}

type cores = {
    corFavorita: coresDoArcoIris
}

// D e E)
const Pedro: Pessoa = {
    nome: "Pedro",
    idade: 27,
    corFavorita: coresDoArcoIris.AZUL
}

const Mateus: Pessoa = {
    nome: "Mateus",
    idade: 17,
    corFavorita: "verde"
}

const Clara: Pessoa = {
    nome: "Clara",
    idade: 25,
    corFavorita: "azul"
}

// Exercicio 2

// A)
function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma:(number) = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// B)
// numerosOrdenados com 2 numbers, soma com um number, statisticas com 3 numbers

// C)
type amostraDeDados = { 
    numeros: number[],
    obterEstatisticas: number
}

const amostraDeIdades: amostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {...}
}

// Exercicio 3

// A)
type post = [
    object: {
        autor: string,
        texto: string
    },
    object: {
        autor: string,
        texto: string
    },
    object: {
        autor: string,
        texto: string
    },
    object: {
        autor: string,
        texto: string
    },
    object: {
        autor: string,
        texto: string
    },
]

const posts: post = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// B)
type posts = {
    posts: object,
    autorInformado: string
}

function buscarPostsPorAutor(posts: object[], autorInformado: string) {
    return posts.filter(
      (post: object) => {
        return post.autor === autorInformado
      }
    )
  }