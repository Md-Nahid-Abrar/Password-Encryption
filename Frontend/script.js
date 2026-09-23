const API_URL = "https://password-encryption-backend.vercel.app";


// Encrypt function
async function encrypt(){

    let text = document.getElementById("encryptInput").value;

    if(text === ""){
        return;
    }


    try{

        let response = await fetch(
            API_URL + "/api/encrypt",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    text:text
                })
            }
        );


        let data = await response.json();


        let box = document.getElementById("encryptResult");

        box.innerHTML = data.encrypted;

        animate(box);


    }catch(error){

        console.error("Encryption Error:", error);

        document.getElementById("encryptResult").innerHTML =
        "Error connecting to server";

    }

}



// Decrypt function
async function decrypt(){

    let text = document.getElementById("decryptInput").value;


    if(text === ""){
        return;
    }


    try{

        let response = await fetch(
            API_URL + "/api/decrypt",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    text:text
                })
            }
        );


        let data = await response.json();


        let box = document.getElementById("decryptResult");

        box.innerHTML = data.decrypted;

        animate(box);


    }catch(error){

        console.error("Decryption Error:", error);

        document.getElementById("decryptResult").innerHTML =
        "Error connecting to server";

    }

}



// Result animation
function animate(element){

    element.classList.remove("animate");

    void element.offsetWidth;

    element.classList.add("animate");

}



// Copy text from input fields
function copyText(id){

    let text = document.getElementById(id).value;


    navigator.clipboard.writeText(text);

}



// Copy generated result
function copyResult(id){

    let text = document.getElementById(id).innerText;


    navigator.clipboard.writeText(text);

}