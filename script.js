const petalContainer = document.querySelector('.petal-container');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  const size = 40 + Math.random() * 80; 
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${4 + Math.random() * 6}s`;
  petalContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 500);


  
