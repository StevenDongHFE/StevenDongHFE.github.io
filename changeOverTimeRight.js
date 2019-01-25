var t = setInterval(randomcube, 6000);
var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var hp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function randomcube(){
    // alert("hello");
    for (i = 0; i < 12; i++) { 
        score[i] = score[i] + parseInt((Math.random() * (7)), 10) + 3;
        // console.log(score[i]);
    }
    score.sort(function(a, b){return b-a});
    var names = shuffle(['Jose','Susan','Pablo','George','Alan','Rogers','Thomas','Cody','Jimmy','Kate','Luke']);
    names.unshift('You');

    for (j = 0; j < 10; j++) { 
        // hp[j] = hp[j] + parseInt((Math.random() * (5)), 10) + 1;
        hp[j] = hp[j] + parseInt((Math.random() * (3)), 10);
    }
    // hp.sort(function(a, b){return b-a});

    // console.log("Hello");
    // console.log(score);
    // console.log(hp);
    document.getElementById("first_name").innerHTML = names[0];
    document.getElementById("second_name").innerHTML = names[1];
    document.getElementById("third_name").innerHTML = names[2];
    document.getElementById("fourth_name").innerHTML = names[3];
    document.getElementById("fifth_name").innerHTML = names[4];
    document.getElementById("sixth_name").innerHTML = names[5];
    document.getElementById("seventh_name").innerHTML = names[6];
    document.getElementById("eighth_name").innerHTML = names[7];
    document.getElementById("ninth_name").innerHTML = names[8];
    document.getElementById("tenth_name").innerHTML = names[9];
    document.getElementById("eleventh_name").innerHTML = names[10];
    document.getElementById("twelveth_name").innerHTML = names[11];
    
    // document.getElementById("first_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[5];
    document.getElementById("second_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[0];
    document.getElementById("third_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[1];
    document.getElementById("fourth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[2];
    document.getElementById("fifth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[3];
    document.getElementById("sixth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[4];
    document.getElementById("seventh_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[5];
    document.getElementById("eighth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[6];
    document.getElementById("ninth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[7];
    document.getElementById("tenth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[8];
    document.getElementById("eleventh_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[9];
    document.getElementById("twelveth_score").innerHTML = '<i class="fas fa-keyboard"></i>&nbsp;&nbsp;' + score[10];

    document.getElementById("second_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[0];
    document.getElementById("third_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[1];
    document.getElementById("fourth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[2];
    document.getElementById("fifth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[3];
    document.getElementById("sixth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[4];
    document.getElementById("seventh_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[5];
    document.getElementById("eighth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[6];
    document.getElementById("ninth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[7];
    document.getElementById("tenth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[8];
    document.getElementById("eleventh_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[9];
    document.getElementById("twelveth_hp").innerHTML = '<i class="fas fa-times"></i>&nbsp;&nbsp;&nbsp;' + hp[10];

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