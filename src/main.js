function dessinerHorloge() {
    const canvas = document.getElementById('horloge');
    const ctx = canvas.getContext('2d');
    const centreX = canvas.width / 2;
    const centreY = canvas.height / 2;
    const rayon = canvas.width / 2 - 10;

    function dessinerCadran() {
        ctx.beginPath();
        ctx.arc(centreX, centreY, rayon, 0, 2 * Math.PI);
        ctx.strokeStyle = '#0a5f44';
        ctx.lineWidth = 8;
        ctx.stroke();
    }

    function dessinerChiffres() {
        const chiffres = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const angle = 2 * Math.PI / chiffres.length;

        ctx.font = '28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        chiffres.forEach((chiffre, index) => {
            const x = centreX + (rayon - 20) * Math.cos(angle * index - Math.PI / 2);
            const y = centreY + (rayon - 20) * Math.sin(angle * index - Math.PI / 2);

            ctx.fillStyle = '#0a5f44';
            ctx.fillText(chiffre, x, y);
        });
    }

    function dessinerAiguilles() {
        const maintenant = new Date();
        const heures = maintenant.getHours();
        const minutes = maintenant.getMinutes();
        const secondes = maintenant.getSeconds();

        const angleHeures = (heures % 12) * 2 * Math.PI / 12 + minutes * 2 * Math.PI / (12 * 60) - Math.PI / 2;
        const angleMinutes = minutes * 2 * Math.PI / 60 - Math.PI / 2;
        const angleSecondes = secondes * 2 * Math.PI / 60 - Math.PI / 2;

        // Aiguille des heures
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#0a5f44';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.moveTo(centreX, centreY);
        ctx.lineTo(centreX + rayon / 2 * Math.cos(angleHeures), centreY + rayon / 2 * Math.sin(angleHeures));
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        // Aiguille des minutes
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#0a5f44';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.moveTo(centreX, centreY);
        ctx.lineTo(centreX + rayon * 0.8 * Math.cos(angleMinutes), centreY + rayon * 0.8 * Math.sin(angleMinutes));
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        // Aiguille des secondes
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'red';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.moveTo(centreX, centreY);
        ctx.lineTo(centreX + rayon * 0.9 * Math.cos(angleSecondes), centreY + rayon * 0.9 * Math.sin(angleSecondes));
        ctx.stroke();
        ctx.shadowColor = 'transparent';
    }


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dessinerCadran();
    dessinerChiffres();
    dessinerAiguilles();

    setTimeout(dessinerHorloge, 1000);
}

document.addEventListener('DOMContentLoaded', dessinerHorloge);
