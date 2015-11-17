function sendTree(){
	
	
	//console.log(arr_icur_tree);
	var tree_str=arr_icur_tree[0].toString()+arr_icur_tree[1].toString()+arr_icur_tree[2].toString()+arr_icur_tree[3].toString()+arr_icur_tree[4].toString();

	var phpcmd='http://eclipse.artgital.com/eclipse/s/eclipse.php?active=addTree'+
				'&mid='+MachineID.toString()+
				'&tcode='+tree_str+
				'&to='+arr_user_word[1]+
				'&from='+arr_user_word[0]+
				'&message='+arr_user_word[2];
	
	//console.log(phpcmd);
	showSpinner();
	
	setCommonButtonEnable(false);

	$.get(phpcmd,function(data){
		console.log('>>> send tree: '+data);

		var json=JSON.parse(data);
		if(json.result==1){
			TreeID=json.tid;
			CountTime=parseInt(json.time);

			hideSpinner();
			goToFinalPage();
		}else{
			
		}

		setCommonButtonEnable(true);

	});			


}

function sendVideoRequest(){
	
	if(VideoRequested){
		goShareFacebook();
		return;
	} 

	var phpcmd='http://eclipse.artgital.com/eclipse/s/eclipse.php?active=createVideo'
				+'&tid='+TreeID;

	//console.log(phpcmd);
	
	$.get(phpcmd,function(data){
		//console.log('>>> request video: '+data);

		var json=JSON.parse(data);
		if(json.result==1){
			VideoRequested=true;
			_video_name=json.vn;

			goShareFacebook();
		}

	});			

}


function showSpinner(){
	 var target=document.getElementById('spin_target');
    _spinner.spin(target);
}
function hideSpinner(){
	 _spinner.stop();	
}


function goShareFacebook(){
	var _url=encodeURIComponent("http://eclipse.artgital.com/eclipse/viewer/?tid="+TreeID+"&vName="+_video_name);
	window.open("https://www.facebook.com/sharer/sharer.php?u="+_url,'_blank');
}