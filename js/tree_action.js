
var arr_icur_tree;
var arr_decobutton_state;


var img_tree;
var img_topdeco;
var img_deco;



function initTree(){

	arr_icur_tree=[-1,-1,-1,-1,-1];	
	arr_decobutton_state=[0,0,0,0,0];

	setTree(0);
}

function setTree(_index){

	var _can=document.getElementById("_tree_canvas");	

	_can.classList.remove('show_tree_'+(arr_icur_tree[0]+1));
	_can.classList.add('show_tree_'+(_index+1));

	_can.addEventListener("transitionend",enableCommonButton);
    _can.addEventListener("webkitTransitionEnd",enableCommonButton);     
    _can.addEventListener("mozTransitionEnd",enableCommonButton);     
    _can.addEventListener("oTransitionEnd",enableCommonButton);     

    arr_icur_tree[0]=_index;
}
function setTopdeco(_index){

	var _can=document.getElementById("_topdeco_canvas");	

	_can.classList.remove('show_part_'+(arr_icur_tree[1]+1));
	_can.classList.add('show_part_'+(_index+1));

	_can.addEventListener("transitionend",enableCommonButton);
    _can.addEventListener("webkitTransitionEnd",enableCommonButton);  
    _can.addEventListener("mozTransitionEnd",enableCommonButton);  
    _can.addEventListener("oTransitionEnd",enableCommonButton);  

	var next_bg=document.getElementById("_tree_page_bg");    
    next_bg.classList.remove("color_"+(arr_icur_tree[1]+1));
    next_bg.classList.add("color_"+(_index+1));

	arr_icur_tree[1]=_index;
    
}

function leftClicked(){

	playSound(1);

	switch(tree_step){
		case 1:
			setTree((arr_icur_tree[0]-1+4)%4);	
			break;
		case 2:
			setTopdeco((arr_icur_tree[1]-1+4)%4);
			break;
	}
	setCommonButtonEnable(false);	
}

function rightClicked(){
	  
	playSound(1);

	switch(tree_step){
		case 1:
			setTree((arr_icur_tree[0]+1)%4);   
			break;
		case 2:
			setTopdeco((arr_icur_tree[1]+1)%4);   
			break;
	}
	setCommonButtonEnable(false);	
}


function moveTreeToTop(){
	
	var _can=document.getElementById("_tree_canvas");	
	_can.classList.add('show_top');	

	var _topdeco=document.getElementById("_topdeco_canvas");
	_topdeco.classList.add('show_part');

	_topdeco.addEventListener("transitionend",initTreeTop);
    _topdeco.addEventListener("webkitTransitionEnd",initTreeTop);
    _topdeco.addEventListener("mozTransitionEnd",initTreeTop);
    _topdeco.addEventListener("oTransitionEnd",initTreeTop);

}
function initTreeTop(){
	 setTopdeco(0);

	 var _topdeco=document.getElementById("_topdeco_canvas");
	_topdeco.removeEventListener("transitionend",initTreeTop);
    _topdeco.removeEventListener("webkitTransitionEnd",initTreeTop);	
    _topdeco.removeEventListener("mozTransitionEnd",initTreeTop);	
    _topdeco.removeEventListener("oTransitionEnd",initTreeTop);	

    setCommonButtonEnable(true); 
}

function moveTreeToPlain(){
	
	var _can=document.getElementById("_tree_canvas");	
	_can.classList.remove('show_top');	

	var _topdeco=document.getElementById("_topdeco_canvas");
	_topdeco.classList.add('show_plain');

}

function decoClicked(_ideco){
	
	

	var _igroup=-1;
	switch(arr_decobutton_state[_ideco]){
		case 0: //enable
			for(var i=0;i<3;++i){
				if(arr_icur_tree[2+i]==-1){
					_igroup=i;
					setDeco(_igroup,_ideco);
					break;
				}
			}		
			playSound(1);	
			break;
		case 1: //selected
			for(var i=0;i<3;++i){
				if(arr_icur_tree[2+i]==_ideco){
					_igroup=i;
					setDeco(_igroup,-1);
					break;
				}
			}
			playSound(1);
			break;
		case -1: //disable
			playSound(2);
			break;
	}

	// update button state
	var msel=0;
	for(var i=0;i<5;++i){
		if(arr_decobutton_state[i]==1) msel++;
	}

	//var button=document.getElementById('_common_button');
	if(msel==3){ // all full
		for(var i=0;i<5;++i){ // disable those unselected
			if(arr_decobutton_state[i]!=1) setDecoButtonState(i,-1);
		}			
		setCommonButtonEnable(true);
	}else{
		for(var i=0;i<5;++i){ // enable those unselected
			if(arr_decobutton_state[i]!=1) setDecoButtonState(i,0);
		}
		setCommonButtonEnable(false);	
	}
}

function setDeco(_igroup,_ideco){

	var group=document.getElementsByClassName("deco_group_"+(_igroup+1));
	for(var i=0;i<group.length;++i){
		var deco=group[i];
		deco.classList.remove("show_part_"+(arr_icur_tree[2+_igroup]+1));
		if(_ideco>-1) deco.classList.add("show_part_"+(_ideco+1));
	}
	if(_ideco<0){
		setDecoButtonState(arr_icur_tree[2+_igroup],0);	
	}else setDecoButtonState(_ideco,1);

	arr_icur_tree[2+_igroup]=_ideco;
	

}
// function forceSetDeco(_igroup,_ideco){

// 	var group=document.getElementsByClassName("deco_group_"+(_igroup+1));
// 	for(var i=0;i<group.length;++i){
// 		var deco=group[i];
// 		deco.classList.remove("show_part_"+(arr_icur_tree[2+_igroup]+1));
// 		if(_ideco>-1) deco.classList.add("show_part_"+(_ideco+1));
// 	}
// 	arr_icur_tree[2+_igroup]=_ideco;

// }


function setDecoButtonState(_ideco,_state){
	
	if(_ideco>4) return;

	var button=document.getElementById("_decobutton_"+(_ideco+1));
	switch(arr_decobutton_state[_ideco]){
		case 0:
			//button.classList.remove("enable");
			break;
		case 1:
			button.classList.remove("select");
			break;
		case -1:
			button.classList.remove("disable");
			break;
	}
	switch(_state){
		case 0:
			// button.classList.add("enable");
			break;
		case 1:
			button.classList.add("select");
			break;
		case -1:
			button.classList.add("disable");
			break;
	}
	arr_decobutton_state[_ideco]=_state;
}

