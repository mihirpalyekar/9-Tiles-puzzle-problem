// var tile_Array = [' ','1','5','7','4','2','8','6','3'];
var tile_Array = ['1','2','3','4','5','6','7','8',' '];
var final_Array = ['1','2','3','4','5','6','7','8',' '];
var  adjecent_tile = [
        [2, 4],
        [1, 3, 5],
        [2, 6],
        [1, 5, 7],
        [2, 4, 6, 8],
        [3, 5, 9],
        [4, 8],
        [7, 5, 9],
        [6, 8],
    ];
var First_Click_Id;
var Firstclick_Value = null;
var Secondclick_Value =null;
var firstclick_id;
var no_clicks = 0;
var Final_Reuslt = null;
var steps = 0;

window.onload = Start_App;

function Start_App() {
	Shuffle(tile_Array);
	Display_Content(tile_Array);
}

function Shuffle(tile_Array) {
	var moves;
    var random;
    var new_start;
    var start = 8;
    var counter = 40;
    var temporary;
    var blank_Element;
    var temporary1;

    while(counter > 0) {
        moves = adjecent_tile[start];
        random = Math.floor(Math.random()*moves.length);
        new_start = moves[random];
        new_start = new_start-1;
        temporary1 = tile_Array[start];
        tile_Array[start] = tile_Array[new_start];
        tile_Array[new_start] = temporary1;
        start = new_start;
        counter--;
    }
    blank_Element = tile_Array.indexOf(' ');
    console.log(blank_Element);
    document.getElementById(blank_Element + 1).style.backgroundColor = "white";
}

function Display_Content(tile_Array) {
	var index3 ;
	for(index3 = 1; index3 < 10; index3++) {
		document.getElementById(index3.toString()).innerHTML = tile_Array[index3-1];
	}
}

function isTileEmpty(id) {
    if (id == '-1') {
        return false;
    }
    return document.getElementById(id).innerHTML == ' ';   
}

function swap_data(event, id) {
    document.getElementById(id).innerHTML = event.target.innerText;
    document.getElementById(id).style.backgroundColor = "purple";
    event.target.innerText = ' ';
    event.target.style.backgroundColor = "white"
}

function swap_tile(event, id1, id2, id3, id4) {
    var id_1 = id1 ? id1.toString() : '-1';
    var id_2 = id2 ? id2.toString() : '-1';
    var id_3 = id3 ? id3.toString() : '-1';
    var id_4 = id4 ? id4.toString() : '-1';
    steps++;
    
    if (isTileEmpty(id_1)) {
        swap_data(event, id_1);
        return;
    } else if(isTileEmpty(id_2)) {
        swap_data(event, id_2);
        return;
    } else if(isTileEmpty(id_3)) {
        swap_data(event, id_3);
        return;
    } else if(isTileEmpty(id_4)) {
        swap_data(event, id_4);
        return;
    }
    return;
}

function On_Click(event, id) {

    var tiles = adjecent_tile[id-1];
    swap_tile(event, tiles[0], tiles[1], tiles[2], tiles[3]);
    check_Result();

}

function check_Result() {
    var index4 ;
    var index5 = 0;
    for(index4 = 1; index4 < 9; index4++) {
        if(document.getElementById(index4).innerHTML == index4.toString())
            index5++;
    }
    console.log(index5);
    if(index5 == 8) {
        document.getElementById("Final_Result").innerHTML = "game complete!! \n number of moves taken = " + steps;
        remove_Attribute(6,8,9);
    }
}
function remove_Attribute(id1,id2,id3) {
    var id1 = id1.toString();
    var id2 = id2.toString();
    var id3 = id3.toString();
     document.getElementById("9").removeAttribute("onclick");
        document.getElementById("6").removeAttribute("onclick");
        document.getElementById("8").removeAttribute("onclick");
}