const sounds = document.querySelectorAll("#sounds p input[type='checkbox']");

const [metronome, kickdrum, snaredrum, hithat] = sounds;


// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

let drumCount = 0;
let tockCount = 3;
// This function is called every 600ms
function update() {

    if(metronome.checked) {
        if(drumCount === tockCount) {
            tock.play();
    
            tockCount += 4
            console.log("tock: ",drumCount);
        } else {
            // Play the 'tick' sound
            tick.play();
    
            console.log("tick: ", drumCount);
        }
    drumCount +=1;
    } else if(kick.checked){
        kick.play();
        drumCount += 1;
    }else if(snare.checked){
        snare.play();
        drumCount += 1;
    }else if(hihat.checked){
        hihat.play();
        drumCount += 1;
    }
    
}
// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);






