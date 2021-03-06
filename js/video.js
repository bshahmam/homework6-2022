var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);

});



document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("video current time", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Muted");
    if (video.muted){
		video.muted = false;
		mute.innerText = "Mute";}
	else
		{video.muted = true;
		mute.innerText = "Unmute";}
	console.log("unmuted")
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("Slider");
	volume = document.querySelector("#slider")
    video.volume = slider.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change Style")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change Back")
	video.classList.remove("oldSchool")
});