// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	title:"All Day",
	artist:"G Herbo ft. Blac Youngsta",
	video:"https://www.youtube.com/watch?v=oRQO7IS0meM",
	picture:"http://s3.amazonaws.com/hiphopdx-production/2017/09/g-herbo-album-cover-630x629.jpg", 
	songLength:"4 minutes",
	songGenre:"Trap",
}

var myPlayList = [
	{
		title:"I Need That",
		artist:"Lil Reese",
		video:"https://www.youtube.com/watch?v=dsWgUDSszII",
		picture:"http://hw-static.worldstarhiphop.com/u/pic/2013/08/70701f4.jpg",
	},
	{
		title:"Fashion",
		artist:"Jay Critch ft. Rich the Kid",
		video:"https://www.youtube.com/watch?v=ZBT7yXr-hDY",
		picture:"https://i.ytimg.com/vi/ZBT7yXr-hDY/maxresdefault.jpg",
	},
	{
		title:"Walk it Talk it",
		artist:"Migos",
		video:"https://play.google.com/music/preview/T5vbjfcib5gknrnix4qqranrwy4?play=1",
		picture:"https://cdn.rappersroom.com/wp-content/uploads/2018/03/migos-walk-it-talk-it-drake.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	$("body").append("<h2>" + mySong.title + "</h2>");
  $("body").append("<p>Artist: " + mySong.artist + "</p>");
	$("body").append("<a href=https://www.youtube.com/watch?v=oRQO7IS0meM>" +	
	"<img src=" + mySong.picture + ">" + "</a>");

});

function displayList(){
$("body").append("<h2>" + myPlaylis.title + "</h2>");

  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
