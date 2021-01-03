function Today(){
	const body = document.body;
	const things = document.getElementById("value_text").value;
	if(things === ""){
		alert("Please Enter your task");
	}else{
		let count=0;
		count+=1;
		const add= document.createElement("p");
		body.append(add);
		add.id="Things";
		add.innerText=count+ " :"+ things;
	}
	
}

function Remove(){
	const remo = document.querySelector("#Things");
	remo.remove();
}