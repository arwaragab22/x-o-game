
let divname = document.querySelector(".player");
let namep1 = sessionStorage.getItem("player1");
let namep2 = sessionStorage.getItem("player2");
divname.innerHTML = `welcome ${namep1} welcome ${namep2}`;
if (sessionStorage.getItem("score1") && sessionStorage.getItem("score2")) {
    scoreplayerx = sessionStorage.getItem("score1");
    scoreplayery = sessionStorage.getItem("score2");
    document.querySelector(".score1").innerHTML = scoreplayerx;
    document.querySelector(".score2").innerHTML = scoreplayery;
    console.log("yyyyyyyyyyyyyyy")
}
else {
    scoreplayerx = 0;
    scoreplayery = 0;
}

let char = "x";
let winarray = [];
let array = document.querySelectorAll(".row div");
let info = document.querySelector(".name");
array.forEach(function (e) {
    e.onclick = function () {
        console.log(e);
        if (char == "x") {
            if (e.innerHTML == "") {
                e.innerHTML = "x";
                char = "y";
                e.style.cursor = "auto";

                info.innerHTML = sessionStorage.getItem("player2") + "will play";

                winner(e);

            }
        } else {
            if (e.innerHTML == "") {
                e.innerHTML = "y";
                char = "x";
                e.style.cursor = "auto";

                info.innerHTML = sessionStorage.getItem("player1") + "will play";

                winner(e);

            }
        }
    };
});

function winner(e) {
    if (
        array[0].innerHTML == array[1].innerHTML &&
        array[1].innerHTML == array[2].innerHTML &&
        array[1].innerHTML !== ""
    ) {
        winnerperson(array[0], array[1], array[2], e);
    }

    if (
        array[0].innerHTML == array[3].innerHTML &&
        array[3].innerHTML == array[6].innerHTML &&
        array[3].innerHTML !== ""
    ) {
        winnerperson(array[0], array[3], array[6], e);
    }

    if (
        array[0].innerHTML == array[4].innerHTML &&
        array[4].innerHTML == array[8].innerHTML &&
        array[4].innerHTML != ""
    ) {
        winnerperson(array[0], array[4], array[8], e);
    }
    if (
        array[1].innerHTML == array[4].innerHTML &&
        array[1].innerHTML == array[7].innerHTML &&
        array[1].innerHTML != ""
    ) {
        winnerperson(array[1], array[4], array[7], e);
    }
    if (
        array[6].innerHTML == array[7].innerHTML &&
        array[6].innerHTML == array[8].innerHTML &&
        array[6].innerHTML != ""
    ) {
        winnerperson(array[6], array[7], array[8], e);
    }

    if (
        array[2].innerHTML == array[5].innerHTML &&
        array[2].innerHTM == array[8].innerHTML &&
        array[2].innerHTM != ""
    ) {
        winnerperson(array[2], array[5], array[8], e);
    }
    if (
        array[2].innerHTML == array[4].innerHTML &&
        array[2].innerHTML == array[6].innerHTML &&
        array[2].innerHTML != ""
    ) {
        winnerperson(array[2], array[4], array[6], e);
    }
    if (
        array[3].innerHTML == array[4].innerHTML &&
        array[3].innerHTML == array[5].innerHTML &&
        array[3].innerHTML != ""
    ) {
        winnerperson(array[3], array[4], array[5], e);
    }
}

function winnerperson(a, b, c, e) {
    info.innerHTML = e.innerHTML + "win";

    if (e.innerHTM === "x") {
        info.innerHTML = sessionStorage.getItem("player1") + "win";
    }
    else {
         info.innerHTML = sessionStorage.getItem("player2") + "win";
    }

    if (e.innerHTML === "x") {
        scoreplayerx++;
        document.querySelector(".score1").innerHTML = scoreplayerx;
        sessionStorage.setItem("score1", scoreplayerx);
        sessionStorage.setItem("score2", scoreplayery);
        console.log(scoreplayerx, scoreplayery)
    }
    else {
        scoreplayery++;
        document.querySelector(".score2").innerHTML = scoreplayery;
        sessionStorage.setItem("score2", scoreplayery);
        sessionStorage.setItem("score1", scoreplayerx);
    }



    a.style.backgroundColor = b.style.backgroundColor = c.style.backgroundColor = "black";

    let interval = setInterval(final, 1000);
    let k = 1;
    function final() {

        info.innerHTML += ".";

        k++;
        if (k == 3) {
            clearInterval(interval);
        }
        setTimeout(function () {
            location.reload();
        }, 4000)

    }
}
