// Nuna hoton da aka zaba kafin bincike
function previewImage(event, imgId) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById(imgId);
        output.src = reader.result;
        output.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

function generateTraits() {
    const n1 = document.getElementById('name1').value;
    const n2 = document.getElementById('name2').value;

    if (!n1 || !n2) {
        alert("Don Allah shigar da sunaye duka guda biyu!");
        return;
    }

    const getScore = () => Math.floor(Math.random() * 51) + 50;

    document.getElementById('display-name1').innerText = n1;
    document.getElementById('display-name2').innerText = n2;

    const traits = ['anger', 'love', 'patience', 'purity', 'strength'];
    traits.forEach(t => {
        document.getElementById(`n1-${t}`).innerText = getScore() + "%";
        document.getElementById(`n2-${t}`).innerText = getScore() + "%";
    });

    document.getElementById('capture-area').classList.remove('hidden');
    document.getElementById('actions').classList.remove('hidden');
}

// Aikin sauke hoto
function downloadResult() {
    const area = document.getElementById('capture-area');
    html2canvas(area, { backgroundColor: "#1e1e1e" }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'sakamakon-halayya.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}