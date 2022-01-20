let playlist = document.querySelector('.playlist');
		let options = document.querySelector('.options');

		function open_p(){
			playlist.classList.toggle('active');
		}

		function sidebar(){
			options.classList.toggle('active2');
		}


// *****************************************************
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');
const play = document.getElementById('play_btn');
const icon = document.getElementById('play-icon')
const pause = document.getElementById('pause');
const slider = document.getElementById('slider');
const musicTime = document.getElementById('music--time');

if(icon){
    icon.addEventListener('click', () => {
        m1.play();
        icon.style.display = "none"
        pause.style.display = "block"

        
    })
}

if(pause){
    pause.addEventListener('click', () => {
        m1.pause();
        icon.style.display = "block"
        pause.style.display = "none"
    })
}

m1.onloadedmetadata = () => slider.max = m1.duration;
slider.onchange = () => m1.currentTime = slider.value
m1.ontimeupdate = () => slider.value = m1.currentTime



