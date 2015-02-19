// Stephen Bly
// Game Engine Programming
// Symple Synth
// based off code from: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

var oscillator;
var playing = false;

function setup()
{
    var contex = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = contex.createOscillator();
    oscillator.type = 'sine'; // wave type is: sine, square, sawtooth, triangle, custom
    oscillator.frequency.value = 3000; // frequency of wave

    // warm distortion?
    var real = new Float32Array(2);
    var imag = new Float32Array(2);

    real[0] = 0;
    real[1] = 1;
    imag[0] = 0;
    imag[1] = 0;

    var wave = contex.createPeriodicWave(real, imag);

    oscillator.setPeriodicWave(wave);
    oscillator.connect(contex.destination);
}

function play()
{
    if (playing)
    {
        oscillator.stop();
        playing = false;
    }
    else
    {
        oscillator.start();
        playing = true;
    }
}

function setType(type)
{
    oscillator.type = type;
}

function setFrequency(frequency)
{
    oscillator.frequency.vaue = frequency;
}