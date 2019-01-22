var t = setInterval(randomcube, 8000);


function randomcube(){
    // alert("hello");
    var score = [0, 0, 0, 0, 0, 0];
    for (i = 0; i < 6; i++) { 
        score[i] = parseInt((Math.random() * (90001)), 10) + 9999;
        console.log(score[i]);
    }
    var names = shuffle(['Jose','Susan','Pablo','George','Alan']);

    var hp = [0, 0, 0, 0, 0, 0];
    for (j = 0; j < 6; j++) { 
        hp[j] = parseInt((Math.random() * (101)), 10);
    }

    console.log("Hello");
    // console.log(score);
    // console.log(hp);
    document.getElementById("first_name").innerHTML = 'You';
    document.getElementById("second_name").innerHTML = names[0];
    document.getElementById("third_name").innerHTML = names[1];
    document.getElementById("fourth_name").innerHTML = names[2];
    document.getElementById("fifth_name").innerHTML = names[3];
    document.getElementById("sixth_name").innerHTML = names[4];
    
    document.getElementById("first_score").innerHTML = score[0];
    document.getElementById("second_score").innerHTML = score[1];
    document.getElementById("third_score").innerHTML = score[2];
    document.getElementById("fourth_score").innerHTML = score[3];
    document.getElementById("fifth_score").innerHTML = score[4];
    document.getElementById("sixth_score").innerHTML = score[5];

    document.getElementById("second_hp").innerHTML = '<i class="fas fa-plus-square"></i>&nbsp;&nbsp;&nbsp;' + hp[1];
    document.getElementById("third_hp").innerHTML = '<i class="fas fa-plus-square"></i>&nbsp;&nbsp;&nbsp;' + hp[2];
    document.getElementById("fourth_hp").innerHTML = '<i class="fas fa-plus-square"></i>&nbsp;&nbsp;&nbsp;' + hp[3];
    document.getElementById("fifth_hp").innerHTML = '<i class="fas fa-plus-square"></i>&nbsp;&nbsp;&nbsp;' + hp[4];
    document.getElementById("sixth_hp").innerHTML = '<i class="fas fa-plus-square"></i>&nbsp;&nbsp;&nbsp;' + hp[5];

}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}