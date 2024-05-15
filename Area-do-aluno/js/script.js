

const modulo1 = ["XnPwtZ2Mm9U", "5GaBMQPdEhY", "rsxDvAVqDzk", "WMYxbtYaMxY", "r5g8RKHTLFg", "M_HYbpBESZs"];
const modulo2 = ["vVT3LBSohak", "J6iH2gW2BuE", "6Dmw1KysVnQ", "edStFiRSJlI", "xETxjynM8kw", "LRdjYPXIZhY",
"-z2RialpFOk", "xFlF4oq48iY", "UPZ5qx8ck3I", "ppYs5sDV55U", "BFMVka0yeCc", "nFI9PyqieSw", "A0s2uqKfYMg", "JtANEd8ACBM", "9dadS8mb0E8"];
const modulo3 = ["xd0fSMdCRoo", "zgy0OepuPDc", "ipCOICsBIu0", "B7DC1aUwPhw"];
const modulo4 = ["08VUQo8taHc", "lqJmDWzAuk8", "pDg0BI7JQ04"];


function atualizarVideo(codigoVideo) {
    var iframe = document.querySelector('.v-principal');
    iframe.src = "https://www.youtube.com/embed/" + codigoVideo;
}

//             Modulo 1 informatica

document.getElementById('inf-01').addEventListener('click', function() {
    atualizarVideo(modulo1[0]);
});

document.getElementById('inf-02').addEventListener('click', function() {
    atualizarVideo(modulo1[1]);
});

document.getElementById('inf-03').addEventListener('click', function() {
    atualizarVideo(modulo1[2]);
});

document.getElementById('inf-04').addEventListener('click', function() {
    atualizarVideo(modulo1[3]);
});

document.getElementById('inf-05').addEventListener('click', function() {
    atualizarVideo(modulo1[4]);
});

document.getElementById('inf-06').addEventListener('click', function() {
    atualizarVideo(modulo1[5]);
});

// Modulo 2 Excel


document.getElementById('exc-01').addEventListener('click', function() {
    atualizarVideo(modulo2[0]);
});
document.getElementById('exc-02').addEventListener('click', function() {
    atualizarVideo(modulo2[1]);
});
document.getElementById('exc-03').addEventListener('click', function() {
    atualizarVideo(modulo2[2]);
});
document.getElementById('exc-04').addEventListener('click', function() {
    atualizarVideo(modulo2[3]);
});
document.getElementById('exc-05').addEventListener('click', function() {
    atualizarVideo(modulo2[4]);
});
document.getElementById('exc-06').addEventListener('click', function() {
    atualizarVideo(modulo2[5]);
});
document.getElementById('exc-07').addEventListener('click', function() {
    atualizarVideo(modulo2[6]);
});
document.getElementById('exc-08').addEventListener('click', function() {
    atualizarVideo(modulo2[7]);
});
document.getElementById('exc-09').addEventListener('click', function() {
    atualizarVideo(modulo2[8]);
});
document.getElementById('exc-10').addEventListener('click', function() {
    atualizarVideo(modulo2[9]);
});
document.getElementById('exc-11').addEventListener('click', function() {
    atualizarVideo(modulo2[10]);
});
document.getElementById('exc-12').addEventListener('click', function() {
    atualizarVideo(modulo2[11]);
});
document.getElementById('exc-13').addEventListener('click', function() {
    atualizarVideo(modulo2[12]);
});
document.getElementById('exc-14').addEventListener('click', function() {
    atualizarVideo(modulo2[13]);
});
document.getElementById('exc-15').addEventListener('click', function() {
    atualizarVideo(modulo2[14]);
});

// modulo 3 word

document.getElementById('wor-01').addEventListener('click', function() {
    atualizarVideo(modulo3[0]);
});
document.getElementById('wor-02').addEventListener('click', function() {
    atualizarVideo(modulo3[1]);
});
document.getElementById('wor-03').addEventListener('click', function() {
    atualizarVideo(modulo3[2]);
});
document.getElementById('wor-04').addEventListener('click', function() {
    atualizarVideo(modulo3[3]);
});

// modulo 4 powerpoint

document.getElementById('pow-01').addEventListener('click', function() {
    atualizarVideo(modulo4[0]);
});
document.getElementById('pow-02').addEventListener('click', function() {
    atualizarVideo(modulo4[1]);
});
document.getElementById('pow-03').addEventListener('click', function() {
    atualizarVideo(modulo4[2]);
});


