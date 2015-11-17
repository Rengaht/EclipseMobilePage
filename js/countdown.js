var countdown_time;
var countdown_interval;
function startCountdown(_time){
	countdown_time=_time;
	countdown_interval=setInterval(updateCountdown,1000);
}

function updateCountdown(){
    countdown_time--;
    var text=document.getElementById("_countdown_time");    
    text.innerHTML=countdown_time;

    if(countdown_time<=0){
    	clearInterval(countdown_interval);
    	
    	//var ui_page_2=document.getElementById("_tree_ui_final");
    	//ui_page_2.classList.remove("show_page_delay");
        var cd_bg=document.getElementById("_countdown_bg");
        cd_bg.classList.remove("show_pop");

        var cd_time=document.getElementById("_countdown_time");
        cd_time.classList.remove("show_pop");

        var cd_note=document.getElementById("_countdown_note");
        cd_note.classList.add("show_pop");
    }
    
}