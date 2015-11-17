var images = [];
function preload(){
	console.log("preloading...");
    for(var i=0; i<arguments.length;i++){
        images[i]=new Image();
        images[i].src=preload.arguments[i];
    }
}

preload(
    "img/page_tree/tree/tree_1.png",
 	"img/page_tree/tree/tree_2.png",
 	"img/page_tree/tree/tree_3.png",
 	"img/page_tree/tree/tree_4.png",
 	"img/page_tree/topdeco/topdeco_1.png",
 	"img/page_tree/topdeco/topdeco_2.png",
 	"img/page_tree/topdeco/topdeco_3.png",
 	"img/page_tree/topdeco/topdeco_4.png"
);