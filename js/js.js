var robert = {

	direcction:"N",
	position:[0,0]

}

function turnRight(){
	if(robert.direcction=="N"){robert.direcction="E"}
	else if(robert.direcction=="E"){robert.direcction="S"}
	else if(robert.direcction=="S"){robert.direcction="W"}
	else if(robert.direcction=="W"){robert.direcction="N"}
		console.log(robert.direcction);
};

function turnLeft(){
	if(robert.direcction=="N"){robert.direcction="W"}
	else if(robert.direcction=="E"){robert.direcction="N"}
	else if(robert.direcction=="S"){robert.direcction="E"}
	else if(robert.direcction=="W"){robert.direcction="S"}
		console.log(robert.direcction);
};
function moveForward(){
	if(robert.direcction=="N"){
		if(robert.position[0]==0) {console.log("Robert is in the limit N")}
		else{robert.position[0]-=1}}
	if(robert.direcction=="W"){
		if(robert.position[1]==0) {console.log("Robert is in the limit W")}
		else {robert.position[1]-=1}}
	if(robert.direcction=="S"){	
		if(robert.position[0]>=9) {console.log("Robert is in the limit S")}
		else {robert.position[0]+=1}}
	if(robert.direcction=="E"){
		if(robert.position[1]>=9) {console.log("Robert is in the limit E")}
		else {robert.position[1]+=1}}
		console.log(robert.position);
}
function moveBack(){
	if(robert.direcction=="N"){
		if(robert.position[0]>=9) {console.log("Robert is in the limit")}
		else{robert.position[0]+=1}}
	if(robert.direcction=="W"){
		if(robert.position[1]>=9) {console.log("Robert is in the limit")}
		else {robert.position[1]+=1}}
	if(robert.direcction=="S"){	
		if(robert.position[0]==0) {console.log("Robert is in the limit")}
		else {robert.position[0]-=1}}
	if(robert.direcction=="E"){
		if(robert.position[1]==0) {console.log("Robert is in the limit")}
		else {robert.position[1]-=1}}
		console.log(robert.position);
}

function robertDice2(order){

			for(i=0;i<=order.length-1;i++){
				if(order[i]=="f"){moveForward();}
				else if(order[i]=="b"){moveBack();}
				else if(order[i]=="l"){turnLeft();}
				else if(order[i]=="r"){turnRight();}
			}
			position();
			return matrix
}
		

		function robertDice(order){
			certain=true;
			for(i=0;i<=order.length-1;i++){
				if(order[i]=="f"){console.log("The order is valid");}
				else if(order[i]=="b"){console.log("The order is valid")}
				else if(order[i]=="l"){console.log("The order is valid")}
				else if(order[i]=="r"){console.log("The order is valid")}
				else{certain=false};
			}
		if(certain==true){robertDice2(order)}
			else{console.log("The order is invalid");}
		return matrix
}
		





var matrix = [ [0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
				];

function position(){
	matrix = [  [0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0],
				];
	matrix[robert.position[0]][robert.position[1]]=1;
	return matrix
}