let tituloPost = document.getElementById("titulo-post");
let autorPost = document.getElementById("autor-post");
let conteudoPost = document.getElementById("conteudo-post");
let imagemPost = document.getElementById("imagem-post");
let botaoCriar = document.getElementById("botao-criar");
let formulario = document.getElementById("formulario");

const posts = [];

criarPost = () => {
    
    if (tituloPost.value !== "" && autorPost.value !== "" && conteudoPost.value !== "") {
        const post = {
            titulo: tituloPost.value,
            autor: autorPost.value,
            conteudo: conteudoPost.value,
            imagem: imagemPost.value
        };

        posts.push(post);
        console.log(posts);
    } else {
        alert("O(s) campo(s) está(ão) vazio(s). Por favor, preencha-o(s).");
    }
}