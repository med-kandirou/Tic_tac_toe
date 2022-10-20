
//function to change between X and O
function changeTurn(turn){
    if(turn=='X'){
        turn='O';
    }
    else if(turn=='O'){
        turn='X';
    }
    return turn;
}

var count=0;

var player=document.getElementById('player');
function cases(id1,id2,id3){
    let winner="";
    if($("#"+id1).hasClass("ClassX") && $("#"+id2).hasClass("ClassX") && $("#"+id3).hasClass("ClassX") || $("#"+id1).hasClass("ClassO") && $("#"+id2).hasClass("ClassO") && $("#"+id3).hasClass("ClassO")){
        if($("#"+id1).hasClass("ClassX")){
            winner="X";
        }
        else{
            winner="O";
        }
        player.style.color="#0BC148";
        player.innerText="Player "+winner+" won";
    }
}
var op='X'; //operation
var count=0; // nombre de fois jouée

function getID(id){
    player.style.display="block";
    var item=document.getElementById(id);
    if(item.classList.contains("ClassX")==false && item.classList.contains("ClassO")==false){
        item.classList.add("Class"+op+"");
        item.innerText=op;
        op=changeTurn(op);
        player.innerText="Player "+op+" turn";
        count++;
        if(count==9){
            player.innerText="Draw";
        }
    }
    //rows
    cases(1,2,3);
    cases(4,5,6);
    cases(7,8,9);
    //columns
    cases(1,4,7);
    cases(2,5,8);
    cases(3,6,9);
    //columns
    cases(1,5,9);
    cases(3,5,7); 
}

//event click button repeat
var repeat=document.getElementById('repeat');
repeat.addEventListener('click',function(){
    var items=document.querySelectorAll('span');
    for(var i=0;i<9;i++){
        items[i].innerText="";
        items[i].classList.remove('ClassX', 'ClassO');
        player.style.display="none";
        player.style.color="#F2F6D0";
    }
});






