var database =[
{
	username: "ayush",
	password: "supersecret"
},
{
	username: "sally",
	password: "123"
},

{
	username: "ingrid",
	password: "777"
}
];

var newsFeed = [
	{
		username: "booby",
		timeline: "so tired from all the learnings"
	},
	{
		username:"Sally",
		timeline:"javascript is soooo cool!"
	},
	{
		username:"Mitch",
		timeline:"javascript is preeety cool!"
	}

];



function signIn(username,password) {
	for (var i=0;i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password) {
			console.log(newsfeed);
		} else {
			alert("Sorry,wrong username and password");
		}
	}



	// if (username === database[0].username && 
	// 	password === database[0].password) {
	// 	console.log(newsFeed);
 //  } else{
 //  	alert("Sorry,wrong username and password!");
 //  }

	
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");


signIn(userNamePrompt,passwordPrompt);