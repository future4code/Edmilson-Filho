let containerPosts = document.getElementById("container-de-posts");

let params = (new URL(document.location)).searchParams;

const post = {
    id: localStorage.length,
    titulo: params.get("titulo"),
    autor: params.get("autor"),
    conteudo: params.get("conteudo"),
    imagem: params.get("imagem")
}

const posts = [];

posts.push(post);

salvarPost = (id) => {
    if (localStorage.length > 0) {
        localStorage.setItem(`post${id + 1}`, JSON.stringify(post));
    } else {
        localStorage.setItem(`post1`, JSON.stringify(post));
    }
}

console.log(JSON.stringify(post));

salvarPost(localStorage.length);

let postsRecebidos = [];

if (localStorage.length >= 0) {
    for (let i = 1; i < localStorage.length + 1; i++) {
        postsRecebidos.push(JSON.parse(localStorage.getItem(`post${i}`)));
        console.log(JSON.parse(localStorage.getItem(`post${i}`)));
    }
}

for (let item of postsRecebidos) {
    containerPosts.innerHTML += `
        <div>
        <h2>${item.titulo}</h2>
        <div>${item.autor}</div>
        <p>${item.conteudo}</p>
        <img src="${item.imagem}">
        </div>
    `;
}

console.log(postsRecebidos);