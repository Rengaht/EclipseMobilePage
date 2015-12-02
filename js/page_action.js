

var TreeID=-1;
var CountTime=0;
var VideoRequested=false;


var common_area;
var tree_step=0;

var word_default_1=['因為有你 愛無極限！','有你我什麼都不怕！','你真是天使心來著！','我想閃耀你的每一天！'];
var word_default_2=['你真的很大心！','我永遠挺你！','你的愛讓我飛上天！','你照亮我的世界！'];
var iselected_word=0;

var cb_enable;
var arr_user_word=['','',''];

var _spinner;

var _video_name;

window.onload = function(e){
     
   // console.log("window on load");

    common_area=document.getElementById("_common_bg");

    showWelcomePage();

    cb_enable=false;
    VideoRequested=false;

    var opts = {
        scale: 12 
        ,lines: 8 // The number of lines to draw
        , width: 6 // The line thickness
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , color: '#fff' // #rgb or #rrggbb or array of colors
        , opacity: 0.25 // Opacity of the lines
    }
    _spinner=new Spinner(opts);
    //showSpinner();

};

function showWelcomePage(){

    //console.log("show _welcome_page");

    var bg=document.getElementById("_welcome_page_bg");    
    bg.classList.add("show_bg");
    //console.log(bg.style.opacity);

    var page=document.getElementById("_welcome_page");    
    page.classList.add("show_page");


    var lower_grass=document.getElementById("_lower_grass");
    lower_grass.classList.add("slide_in");
    var lower_light=document.getElementById("_lower_light");
    lower_light.classList.add("slide_in");

    var upper_grass=document.getElementById("_upper_grass");
    upper_grass.classList.add("slide_in");
    var upper_light=document.getElementById("_upper_light");
    upper_light.classList.add("slide_in");

  //  console.log("finish show _welcome_page");
}

function goToNamePage(){

       playSound(0);
    
    var this_bg=document.getElementById("_welcome_page_bg");    
    this_bg.classList.remove("show_bg");
    this_bg.addEventListener("transitionend",showNamePage);
    this_bg.addEventListener("webkitTransitionEnd",showNamePage);
    this_bg.addEventListener("mozTransitionEnd",showNamePage);
    this_bg.addEventListener("oTransitionEnd",showNamePage);

    var this_page=document.getElementById("_welcome_page");    
    this_page.classList.remove("show_page");

    var lower_grass=document.getElementById("_lower_grass");
    lower_grass.classList.remove("slide_in");
    var lower_light=document.getElementById("_lower_light");
    lower_light.classList.remove("slide_in");

    var upper_grass=document.getElementById("_upper_grass");
    upper_grass.classList.remove("slide_in");
    var upper_light=document.getElementById("_upper_light");
    upper_light.classList.remove("slide_in");

}
function showNamePage(){

   
    var this_bg=document.getElementById("_welcome_page_bg");    
    this_bg.removeEventListener("transitionend",showNamePage);
    this_bg.removeEventListener("webkitTransitionEnd",showNamePage);
    this_bg.removeEventListener("mozTransitionEnd",showNamePage);
    this_bg.removeEventListener("oTransitionEnd",showNamePage);
    
    this_bg.style.visibility="hidden";

    var next_bg=document.getElementById("_name_page_bg");    
    next_bg.classList.add("show_bg");

    var next_page=document.getElementById("_tree_ui_name");    
    next_page.classList.add("show_page");

    common_area.classList.add("show_bg");     
    var common_lower=document.getElementById("_common_lower");           
    common_lower.classList.add("slide_in_long");

    var common_sub=document.getElementById("_common_foot_sub");
    common_sub.classList.add("show_page");

    var descript=document.getElementById("_common_descript");
    descript.classList.add("page_name");

    var name_lower=document.getElementById("_name_lower");
    name_lower.classList.add("slide_in");

    //var common_button=document.getElementById("_common_button");
    setCommonButtonEnable(false);

    arr_user_word=['','',''];
    document.getElementById("_text_input_from").value='';
    document.getElementById("_text_input_to").value='';
       
}

function commonButtonClicked(){

    if(cb_enable) playSound(0);
    else{
      playSound(2);
      return;  
    } 

    switch(tree_step){
        case 0:

             // arr_user_word[0]=trimTextToLength(document.getElementById("_text_input_from").value,10);
             // arr_user_word[1]=trimTextToLength(document.getElementById("_text_input_to").value,10);            

            //console.log("arr_user_word"+arr_user_word.toString());

            goToTreePage();
            break;
        case 1:
            goToTreeTopPage();
            break;
        case 2:
            goToTreeDecoPage();
            break;
        case 3:
            goToWordPage();
            break;
        case 4:
            // arr_user_word[2]=trimTextToLength(document.getElementById("_word_input_"+(iselected_word+1)).value,20);            

           // console.log("arr_user_word"+arr_user_word.toString());

            if(arr_user_word[2]=='p_p'){
                 setDeco(0,5);
                 setDeco(1,6);
                 setDeco(2,7);
                 arr_user_word[2]='皮皮最愛你!';
            }
            if(arr_user_word[2]=='q_q'){
                 setDeco(0,8);
                 setDeco(1,8);
                 setDeco(2,9);
                 arr_user_word[2]='嘿嘿嘿聖誕快樂!';
            }

            sendTree();
           //goToFinalPage();
            break;
        case 5:
            sendVideoRequest();
            break;
    }
    if(tree_step<5) tree_step++;
    

}

function goToTreePage(){
                    
    var this_bg=document.getElementById("_name_page_bg");    
    this_bg.classList.remove("show_bg");
    this_bg.addEventListener("transitionend",showTreePage);
    this_bg.addEventListener("webkitTransitionEnd",showTreePage);
    this_bg.addEventListener("mozTransitionEnd",showTreePage);
    this_bg.addEventListener("oTransitionEnd",showTreePage);

    var this_page=document.getElementById("_tree_ui_name");    
    this_page.classList.remove("show_page");

    var name_lower=document.getElementById("_name_lower");
    name_lower.classList.remove("slide_in");

    initTree();
    setCommonButtonEnable(false);
}
function showTreePage(){

    
    var this_bg=document.getElementById("_name_page_bg");    
    this_bg.removeEventListener("transitionend",showTreePage);
    this_bg.removeEventListener("webkitTransitionEnd",showTreePage);
    this_bg.removeEventListener("mozTransitionEnd",showTreePage);
    this_bg.removeEventListener("oTransitionEnd",showTreePage);

    this_bg.style.visibility="hidden";

    var next_bg=document.getElementById("_tree_page_bg");    
    next_bg.classList.add("color_1");

    var next_page=document.getElementById("_tree_page");    
    next_page.classList.add("show_page");

    var ui_page=document.getElementById("_tree_ui_arrow");
    ui_page.classList.add("show_page");
    
    var descript=document.getElementById("_common_descript");
    descript.classList.remove("page_name");
    descript.classList.add("page_tree");

    
    setCommonButtonEnable(false);

}

function goToTreeTopPage(){
    
    moveTreeToTop();    
    // setTopdeco(0);

    var descript=document.getElementById("_common_descript");
    descript.classList.remove("page_tree");
    descript.classList.add("page_topdeco");

    setCommonButtonEnable(false);
}

function goToTreeDecoPage(){
    
    moveTreeToPlain();    
    var ui_page_1=document.getElementById("_tree_ui_arrow");
    ui_page_1.classList.remove("show_page");

    var ui_page_2=document.getElementById("_tree_ui_deco");
    ui_page_2.classList.add("show_page");

    var descript=document.getElementById("_common_descript");
    descript.classList.remove("page_topdeco");
    descript.classList.add("page_deco");

    var common_button=document.getElementById("_common_button");
    setCommonButtonEnable(false);
}
function goToWordPage(){

    var ui_page_1=document.getElementById("_tree_ui_deco");
    ui_page_1.classList.remove("show_page");

    var ui_page_2=document.getElementById("_tree_ui_word");
    ui_page_2.classList.add("show_page");

    var tree_page=document.getElementById("_tree_page");    
    tree_page.classList.remove("show_page");

    var descript=document.getElementById("_common_descript");
    descript.classList.remove("page_deco");
    descript.classList.add("page_word");

    //set default word
    var input_1=document.getElementById("_word_input_1");
    input_1.value=word_default_1[arr_icur_tree[1]];

    var input_2=document.getElementById("_word_input_2");
    input_2.value=word_default_2[arr_icur_tree[1]];

    document.getElementById("_word_input_3").value='';

    setSelectWord(0);

}
function goToFinalPage(){


    var ui_page_1=document.getElementById("_tree_ui_word");
    ui_page_1.classList.remove("show_page");

    var ui_page_2=document.getElementById("_tree_ui_final");
    ui_page_2.classList.add("show_page");
    ui_page_2.addEventListener("transitionend",showCountDown);
    ui_page_2.addEventListener("webkitTransitionEnd",showCountDown);
    ui_page_2.addEventListener("mozTransitionEnd",showCountDown);
    ui_page_2.addEventListener("oTransitionEnd",showCountDown);

    var tree_page=document.getElementById("_tree_page");    
    tree_page.classList.add("show_page");

    var descript=document.getElementById("_common_descript");
    descript.classList.remove("page_word");
    descript.classList.add("page_final");

    var button=document.getElementById("_common_button");
    button.classList.add("page_final");

    var text=document.getElementById("_countdown_time");    
    text.innerHTML=CountTime;

}
function showCountDown(){
    var ui_page_2=document.getElementById("_tree_ui_final");
    ui_page_2.removeEventListener("transitionend",showCountDown);
    ui_page_2.removeEventListener("webkitTransitionEnd",showCountDown);
    ui_page_2.removeEventListener("mozTransitionEnd",showCountDown);
    ui_page_2.removeEventListener("oTransitionEnd",showCountDown);

    startCountdown(CountTime);

    var cd_bg=document.getElementById("_countdown_bg");
    cd_bg.classList.add("show_pop");

    var cd_time=document.getElementById("_countdown_time");
    cd_time.classList.add("show_pop");

   
}
function hideCountDown(){
    // var cd_note=document.getElementById("_countdown_note");
    // cd_note.classList.remove("show_pop");

    var ui_page_2=document.getElementById("_tree_ui_final");
    ui_page_2.classList.remove("show_page");
}

function setSelectWord(_index){

    //if(iselected_word==_index) return;

    playSound(1);


    iselected_word=_index;
    for(var i=0;i<3;++i){
        var text=document.getElementById("_word_input_"+(i+1));
        if(i==_index){
            //text.style.color="#ffffff";
            text.classList.add("selected");
            arr_user_word[2]=trimTextToLength(document.getElementById("_word_input_"+(i+1)).value,20);   
        } 
        else{
            //text.style.color="#939498"  
            text.classList.remove("selected");
        } 
    }

    if(iselected_word==2 && !checkInputEmpty('_word_input_3')) setCommonButtonEnable(false);  
    else setCommonButtonEnable(true);
    
}

function trimTextToLength(_str,_max_length){
    var current_text=_str;
    var current_length=current_text.length;
    
    var mhalf=0;
    var i;
    var output_text=current_text;

    var mfull=0;
    for(i=0;i<current_length;i++){
        if(current_text.charCodeAt(i)>256) mfull++;
        else mhalf++;
        var total=mfull*2+mhalf;
        if(total>=_max_length){
            output_text=current_text.substring(0,i+1);
            break;
        }
    }
    return output_text;
}

function checkTextInputLength(_element_id,_max_length){
    var _element=document.getElementById(_element_id);
    var current_text=_element.value;
    var current_length=current_text.length;
    
    var mhalf=0;
    var i;

    var output_text=current_text;

    var mfull=0;
    for(i=0;i<current_length;i++){
        if(current_text.charCodeAt(i)>256) mfull++;
        else mhalf++;
        var total=mfull*2+mhalf;
        //console.log(current_text+'  '+total+' '+mfull+' '+mhalf);
        if(total>=_max_length){
            //alert("Exceed!"); 
            //console.log(current_text+'  '+total+' '+i);
            output_text=current_text.substring(0,i+1);
            _element.value=output_text;
            break;
        }
    }

    if(_element_id=='_text_input_from') arr_user_word[0]=trimTextToLength(output_text);
    else if(_element_id=='_text_input_to') arr_user_word[1]=trimTextToLength(output_text);
    else if(_element_id=='_word_input_3') arr_user_word[2]=trimTextToLength(output_text);
    
    
    if(_max_length==10){
        if(checkInputEmpty('_text_input_from') && checkInputEmpty('_text_input_to')) setCommonButtonEnable(true);  
        else setCommonButtonEnable(false);
    }else if(_max_length==20){
        if(iselected_word==2 && !checkInputEmpty('_word_input_3')) setCommonButtonEnable(false);
        else setCommonButtonEnable(true);
    }
    
}
function checkInputEmpty(_element_id){
    var _element=document.getElementById(_element_id);
    var current_text=_element.value;
    var current_length=current_text.length;
    return current_length>0;
}

function playSound(_index){
    switch(_index){
        case 0:
            var sound1=document.getElementById("_sound_ok");
            sound1.play();    
            break;
        case 2:
            var sound3=document.getElementById("_sound_error");
            sound3.play();    
            break;
            
        case 1:
        default:
            var sound2=document.getElementById("_sound_clicked");
            sound2.play();
            break;
    }
}

function setCommonButtonEnable(set_enable){

    var button=document.getElementById('_common_button');
    if(set_enable){
        button.classList.remove("disabled");
        cb_enable=true;        
    }else{
        button.classList.add("disabled");
        cb_enable=false;        
    }

}
function enableCommonButton(){

    if(tree_step==1||tree_step==2) 
        setCommonButtonEnable(true);

    // if(tree_step==1){
    //     var _can=document.getElementById("_tree_canvas");   
    //     _can.removeEventListener("transitionend",enableCommonButton);
    //     _can.removeEventListener("webkitTransitionEnd",enableCommonButton);   
    // }else if(tree_step==2){
    //     var _can=document.getElementById("_topdeco_canvas");   
    //     _can.removeEventListener("transitionend",enableCommonButton);
    //     _can.removeEventListener("webkitTransitionEnd",enableCommonButton);   
    // }

}