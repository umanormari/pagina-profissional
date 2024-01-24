document.addEventListener('DOMContentLoaded', function () {
    let img_id = 0;
    const myImg = document.getElementById('myImg');
    const all_imgs = ["/src/imagens/skills/iceberg2.png", "/src/imagens/skills/iceberg-skills.png"];

    if (myImg) {
        myImg.addEventListener('click', updateImg);
    }

    function updateImg() {
        // Verifica se a imagem atual é a última
        if (img_id < all_imgs.length - 1) {
            img_id = (img_id + 1) % all_imgs.length;
            myImg.setAttribute('src', all_imgs[img_id]);
        }
        // Se for a última imagem, não faz nada
    }
});


function mostrarTexto(id) {
    var textoExperiencia = document.getElementById("textoExperiencia_" + id);
    textoExperiencia.style.display = (textoExperiencia.style.display === "none" || textoExperiencia.style.display === "") ? "block" : "none";
}