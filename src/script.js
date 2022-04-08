
const clock = document.getElementById('clock');

setInterval(() => {
    const now = new Date();
    clock.innerHTML = now.toLocaleString('en-US');
}, 1000);
