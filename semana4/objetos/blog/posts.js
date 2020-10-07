// salvarPost = (post) => {
//     containerPosts.innerHTML += `
//     <div>
//     <h2>${post.titulo}</h2>
//     <div>${post.autor}</div>
//     <p>${post.conteudo}</p>
//     <img src="${post.imagem}">
//     </div>
//     `;
// }
let containerPosts = document.getElementById("container-de-posts");

let params = (new URL(document.location)).searchParams;

const post = {
    titulo: params.get("titulo"),
    autor: params.get("autor"),
    conteudo: params.get("conteudo"),
    imagem: params.get("imagem")
}

        salvarPost = (post) => {
            containerPosts.innerHTML += `
            <div>
            <h2>${post.titulo}</h2>
            <div>${post.autor}</div>
            <p>${post.conteudo}</p>
            <img src="${post.imagem}">
            </div>
            `;
}

salvarPost(post);