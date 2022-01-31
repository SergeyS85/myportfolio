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
    showResume();
    closeResume();
