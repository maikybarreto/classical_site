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

    author_name_run = true;
}

if(author_name_run === false) author_name();