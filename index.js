const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generateBtn = document.getElementById("generate-btn")
const passwordEl1 = document.getElementById("pw-el1")
const passwordEl2 = document.getElementById("pw-el2")
const copyText1 = document.getElementById("copy-text1")
const copyText2 = document.getElementById("copy-text2")
const characterLength = document.getElementById("pw-length")



generateBtn.addEventListener("click", function(){
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < characterLength.value; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex1]
        password2 += characters[randomIndex2]
    }
        copyText1.classList.add("hidden")
        copyText2.classList.add("hidden")
        return [passwordEl1.value = password1, passwordEl2.value = password2]
})

passwordEl1.addEventListener("click", function(){
    passwordEl1.select();
    document.execCommand("copy")
    copyText1.classList.remove("hidden")
})

passwordEl2.addEventListener("click", function(){
    passwordEl2.select();
    document.execCommand("copy")
    copyText2.classList.remove("hidden")
})