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

    // ///////////// Резюме /////////////////
    let resume = document.querySelector('.resume');
    let resume_block = document.querySelector('.resume_block')

    function showResume() {
        resume.addEventListener('click', function() {
            resume_block.style.display = 'block'
        })
    }

    function closeResume() {
        let btnClose = document.querySelector('.close_resume');
        btnClose.onclick = function() {
            resume_block.style.display = 'none';
        }
    }
    increment(animationBg)
    // animationBg();
    showResume();
    closeResume();
})()
