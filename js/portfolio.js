(function(){
  let i = 0;
  function animationBg(){
    
    var background = document.querySelectorAll(".bg-container") 
    setInterval(function(){    
      i++;
      if(i == background.length){
        i = 0;
        for(var j = 0; j < background.length;j++){
          background[j].classList.remove('show-bg');
        };      
      }    
      background[i].classList.add('show-bg')
      if(background[i-1].classList.contains('show-bg')){
        background[i-1].classList.remove('show-bg');
      }
    },8000)  
  }
  var resume       = document.querySelector('.resume');
  var resume_block = document.querySelector('.resume_block')
  function showResume(){ 
    resume.addEventListener('click', function(){
      resume_block.style.display = 'block'
    })
  }
  function closeResume(){
    var btnClose = document.querySelector('.close_resume');
    btnClose.onclick = function(){
      resume_block.style.display = null;
    }
  }
  animationBg();
  showResume();
  closeResume();
})()
