function hearts() {
    const container = document.querySelector('.container');

    const heart = document.createElement('div');
    heart.classList.add('hearts');
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    container.appendChild(heart);

    setTimeout( () => {
        heart.remove();
    }, 3000 );
}

setInterval(hearts, 100);