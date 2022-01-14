let author_name_run = false;

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

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

    // document.getElementById("subtitle").style.opacity = 0.5;
    subtitle = document.getElementById("subtitle");
    for(let i = 0; i <= 10; i ++) {
        subtitle.style.opacity = i/10;
        await sleep(50)
    }
}

author_name();
