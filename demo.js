let btn = document.querySelector("#getPass");
let changeText = document.querySelector("#password");
let copyIt = document.querySelector("#copyBtn");
let copypop = document.querySelector("#popo");

function copyText() {
    if(!changeText.value) return;
    navigator.clipboard.writeText(changeText.value)
        .then(() => {
            copypop.classList.add("show");
            setTimeout(() => {
                copypop.classList.remove("show");
            }, 1000);
        })
        .catch(err => {
            console.log(err);
        })
}


function getRandomTextNum(length = 12) {
    const chars = "AQSWDEFRGTHYJUKILOPMNBVCXZ" + "zaqwsxcderfvbgtyhnmjuiklop" + "123456789" + "!@#$%^&`";
    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    changeText.value = getRandomTextNum();
})

copyIt.addEventListener("click", () => {
    copyText();
})