var audioCtx;
var oscillators;
var C1 = 32.70*2*2*2*2;
var numHarmonics = 1;

$(function(){

    
});

function init(){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    oscillators = [];

    for (var i=0; i<numHarmonics; i++){
        oscillators.push(audioCtx.createOscillator());
        oscillators[i].type = 'sine';
        oscillators[i].frequency.setValueAtTime(C1 * Math.pow(2,i+1), audioCtx.currentTime);
        oscillators[i].connect(audioCtx.destination);
    }

    for (var i=0; i<numHarmonics; i++){
        oscillators[i].start(audioCtx.currentTime);
    }
    $('button').attr('onclick','stopPlay()');
}

function startPlay(){
    for (var i=0; i<numHarmonics; i++){
        oscillators[i].connect(audioCtx.destination);
    }
    $('button').attr('onclick','stopPlay()');
}

function stopPlay(){
    for (var i=0; i<numHarmonics; i++){
        oscillators[i].disconnect(audioCtx.destination);
    }
    $('button').attr('onclick','startPlay()');
}
