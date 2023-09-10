const joPeach = document.querySelector(".peach");

function jop(){
    if(confirm("탐스러워 보이시나요?")){
        alert("감사합니다.");
    } else {
        alert("흥!");
    }
}

joPeach.addEventListener("click", jop); 