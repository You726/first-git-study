//An
const anBtn = document.querySelector(".btn__an");

function handleClick() {
    alert("Hello Im jihyun");
}

anBtn.addEventListener("click" , handleClick);


//Jo
const joCheckBtn = document.getElementById("check_jo_btn");
const joRadio1 = document.getElementById("jo_radio1");

function jojo() {
    const is_checked = joRadio1.checked;
    if(is_checked == true){
        alert("정답!!");
    } else {
        alert("왜... 틀렸어..? ㅜㅡㅜ");
    }
}

joCheckBtn.addEventListener("click", jojo);