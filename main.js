let cube = document.getElementById("cube");

setInterval(function () {
    // let random1 = Math.floor(Math.random() * 100) - 100;
    let random1 = Math.random() * (300 - 50) + 50;
    let randomTwo = Math.random() * (350 - 50) + 50;


    let randomCo1 = Math.random() * (255 - 0) + 0;
    let randomCo2 = Math.random() * (255 - 0) + 0;
    let randomCo3 = Math.random() * (255 - 0) + 0;

    let random3 = Math.random() * (1 - 0.1) + 0.1;
    
    // backgroundColor //
    cube.style.backgroundColor = `rgb(${randomCo1}, ${randomCo2}, ${randomCo3})`;
    //== backgroundColor ==//

    // width And height //
    cube.style.width = random1 + "px";
    cube.style.height = random1 + "px";
    //== width And height ==//

    // Transparency //
    cube.style.opacity = random3;
    //== Transparency ==//

    // Position //
    cube.style.position = 'relative';
    cube.style.top = random1 + "px";
    cube.style.left = randomTwo + "px";
    //== Position ==//
}, 2000);