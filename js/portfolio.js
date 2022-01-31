(function() {
    // //////////// Главная ///////////////
    let background = document.querySelectorAll(".bg-container")
    let i = 0;

    function increment(callbackAnimBg) {
        setInterval(() => {
            if (i == background.length-1) {
                i = 0;
            }
            else{
              ++i
            } 
            callbackAnimBg()           
        }, 4000)
    }

    function animationBg() {
        for (let j = 0; j < background.length; ++j) {
            background[j].classList.remove('show-bg');
        };
        background[i].classList.add('show-bg')
    }
    
    increment(animationBg)
})()
