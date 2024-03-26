const baza = [
    {
        name: "A.A.",
        text: "Lorem, ipsum dolor.",
    },
    {
        name: "B.B.",
        text: "Lorem, ipsum dolor. ipsum",
    },
    {
        name: "C.C.",
        text: "Lorem, ipsum dolor. Lorem",
    },
];

const text1 = document.querySelector(".text");
const user1 = document.querySelector(".user");

let idx = 0;

updatebaza();

function updatebaza(){
    const {name, text} = baza[idx];
    text1.innerText = text;
    user1.innerText = name;
    idx++;
    if(idx === baza.length){
        idx = 0;
    }
    setTimeout(() => {
        updatebaza();
    }, 3000);
}