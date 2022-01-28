let author_name_run = false;

// Função de delay para uso interno nas funções. Necessário utilizar async nas funções.
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Função base para a simulação de digitação de caracteres.
async function char_by_char_text(string, element,delay, post_delay = 0, post_function) {
    let current_string = '';
    for(let c in string) {
        current_string += string[c];
        element.innerHTML = current_string;
        await sleep(delay);
    }
    await sleep(post_delay);
    post_function()
}

// Função base para o aparecimento ou sumiço de um elemento por meio do atributo opacity.
async function show_text(element, delay) {
    for(let i = 0; i <= 10; i ++) {
        element.style.opacity = i/10;
        await sleep(delay);
    }
}

// Função personalizada para as aplicações da página.
async function author_name(){
    let author_name = "Maiky Barreto da Silva";
    let text_space = document.getElementById("author_name");
    let current_string = "";

    for(let c in author_name){
        current_string += author_name[c];
        console.log(current_string);
        text_space.innerHTML = current_string;
        await sleep(100);
    }
    await sleep(200);

    subtitle = document.getElementById("subtitle");
    for(let i = 0; i <= 10; i ++) {
        subtitle.style.opacity = i/10;
        await sleep(50)
    }
}

author_name();


function change_text_1(event) {
    let p = document.getElementById("container-content");
    p.innerHTML = "Imagem 1"
}

function change_text_2(event) {
    let p = document.getElementById("container-content");
    p.innerHTML = "Imagem 2"
}

function change_text_3(event) {
    let p = document.getElementById("container-content");
    p.innerHTML = "Imagem 3"
}

function change_text_4(event) {
    let p = document.getElementById("container-content");
    p.innerHTML = "Imagem 4"
}

let container_img_1 = document.getElementById("container-img-1");
container_img_1.addEventListener("mouseover", change_text_1);

let container_img_2 = document.getElementById("container-img-2");
container_img_2.addEventListener("mouseover", change_text_2);

let container_img_3 = document.getElementById("container-img-3");
container_img_3.addEventListener("mouseover", change_text_3);

let container_img_4 = document.getElementById("container-img-4");
container_img_4.addEventListener("mouseover", change_text_4);