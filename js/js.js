var robert = {
	direcction:"N",
	position:[1,1]
}
var robert2 = {
	direcction:"N",
	position:[xMax-1,xMax-1]
}
var xMax=10;
var matrix = []; //grill
for (x=0;x<=xMax;x++){
	matrix.push([]);
		for (y=0;y<=xMax;y++){
			matrix[x].push(0);
		}}
for(x=0;x<=xMax;x++){matrix[0][x]=2;}
for(x=0;x<=xMax;x++){matrix[xMax][x]=2;}
for(x=0;x<=xMax;x++){matrix[x][0]=2;}
for(x=0;x<=xMax;x++){matrix[x][xMax]=2;}


function turnRight(Robert){
	if(Robert.direcction=="N"){Robert.direcction="E"}
	else if(Robert.direcction=="E"){Robert.direcction="S"}
	else if(Robert.direcction=="S"){Robert.direcction="W"}
	else if(Robert.direcction=="W"){Robert.direcction="N"}
		console.log(Robert.direcction);
};

function turnLeft(Robert){
	if(Robert.direcction=="N"){Robert.direcction="W"}
	else if(Robert.direcction=="E"){Robert.direcction="N"}
	else if(Robert.direcction=="S"){Robert.direcction="E"}
	else if(Robert.direcction=="W"){Robert.direcction="S"}
		console.log(Robert.direcction);
};
function moveForward(Robert){
	if(Robert.direcction=="N"){
		if(check(Robert.position[0]-1,Robert.position[1])){
			Robert.position[0]-=1}
			else {console.log("There are some obstacle")}}

	if(Robert.direcction=="W"){
		if(check(Robert.position[0],Robert.position[1]-1)){
			Robert.position[1]-=1}
			else {console.log("There are some obstacle")}}

	if(Robert.direcction=="S"){	
		if(check(Robert.position[0]+1,Robert.position[1])){
			Robert.position[0]+=1}
			else {console.log("There are some obstacle")}}

	if(Robert.direcction=="E"){
		if(check(Robert.position[0],Robert.position[1]+1)){
			Robert.position[1]+=1}
			else {console.log("There are some obstacle")}}

		console.log(Robert.position);
}
function moveBack(Robert){

	if(Robert.direcction=="N"){
		if(check(Robert.position[0]+1,Robert.position[1])){
			Robert.position[0]+=1}
			else {console.log("There are some obstacle")}}

	if(Robert.direcction=="W"){
		if(check(Robert.position[0],Robert.position[1]+1)){
			Robert.position[1]+=1}
			else {console.log("There are some obstacle")}}

	if(Robert.direcction=="S"){	
		 if(check(Robert.position[0]-1,Robert.position[1])){
			Robert.position[0]-=1}
			else {console.log("There are some obstacle")}}

	if(Robert.direcction=="E"){
		if(check(Robert.position[0],Robert.position[1]-1)){
			Robert.position[1]-=1}
			else {console.log("There are some obstacle")}}

	console.log(Robert.position);
}

function robertDice(Robert,order){

			if (checkOrder(order)){for(i=0;i<=order.length-1;i++){
							if(order[i]=="f"){moveForward(Robert);}
							else if(order[i]=="b"){moveBack(Robert);}
							else if(order[i]=="l"){turnLeft(Robert);}
							else if(order[i]=="r"){turnRight(Robert);}
						}
						position();
						return matrix}
			else {console.log("The order is invalid");}
}
		
function checkOrder(order){
	certain=true;
	for(i=0;i<=order.length-1;i++){
		if(order[i]=="f"){console.log("");}
		else if(order[i]=="b"){console.log("")}
		else if(order[i]=="l"){console.log("")}
		else if(order[i]=="r"){console.log("")}
		else{certain=false};
	}
	if(certain==true){return true}
	else{return false}	
}
		
	function check(x,y){
		if (matrix[x][y]==0){return true}
			else{return false}
	
}

function position(Robert){
	
	for (x=1;x<=10;x++){
			for (y=1;y<=10;y++){
				matrix[x][y]=0;
			}
	}
	matrix[robert.position[0]][robert.position[1]]=1;
	matrix[robert2.position[0]][robert2.position[1]]=3;
	return matrix
}
function obstacle(x,y){
	matrix[x][y]=2;
}
function randonObstacle(){
	matrix[parseInt((Math.random() * (xMax-2)) + 1)][parseInt((Math.random() * (xMax-2)) + 1)]=2;
}