let tituloPost = document.getElementById("titulo-post");
let autorPost = document.getElementById("autor-post");
let conteudoPost = document.getElementById("conteudo-post");
let imagemPost = document.getElementById("imagem-post");
// let listaPosts = document.getElementById("lista-de-posts");
let botaoCriar = document.getElementById("botao-criar");
let formulario = document.getElementById("formulario");

const posts = [];

criarPost = () => {
    // e.preventDefault();
    
    if (tituloPost.value !== "" && autorPost.value !== "" && conteudoPost.value !== "") {
        const post = {
            titulo: tituloPost.value,
            autor: autorPost.value,
            conteudo: conteudoPost.value,
            imagem: imagemPost.value
        };

        posts.push(post);
        console.log(posts);
        // salvarPost(post);
        // window.location.assign("posts.html");
    } else {
        alert("O(s) campo(s) está(ão) vazio(s). Por favor, preencha-o(s).");
    }
}

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

// botaoCriar.onclick = criarPost;

// containerPosts.innerHTML += `<li><h2>${tituloPost.value}</h2><div>${autorPost.value}</div><p>${conteudoPost.value}</p></li>`;
// tituloPost.value, tituloPost.value, tituloPost.value, tituloPost.value = "";