// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
let count=0;
// This function is called every 600ms
function update() {

    count++;
    
    const metronomeCount = (count % 4) + 1;
    document.querySelector("#count").innerText=metronomeCount;

    if (document.querySelector("#metronome").checked) {
    
        if (document.querySelector("#kick-drum").checked && Number(document.querySelector("#kick-drum-timing").value)===metronomeCount)
            kick.play()
        if (document.querySelector("#snare-drum").checked && Number(document.querySelector("#snare-drum-timing").value)===metronomeCount)
            snare.play()
        if (document.querySelector("#hi-hat").checked && Number(document.querySelector("#hi-hat-timing").value)===metronomeCount)
            hihat.play()

        if (metronomeCount===4) {
            // Play the 'tock' sound
            tock.play();

        } else {
            // Play the 'tick' sound
            tick.play();
        }


    }

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
