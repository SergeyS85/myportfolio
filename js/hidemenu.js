(function(){
	let burgermenu   = document.querySelector('.container_gamburger');
	let hidemenu     = document.querySelector('.container_hidemenu');
	let burger       = document.querySelectorAll('.gamburger');
	let onOffBurger  = false;
	burgermenu.addEventListener('click',function(){
		onOffBurger = !onOffBurger
		onBurger()
		offBurger()
	})
	function onBurger(){
		if(onOffBurger){
			hidemenu.style.transform = 'translateX(0px)'
			burgermenu.style.top = '5px'
			burgermenu.style.right = '5px'
			burger[0].classList.add('gambAnim')
			burger[1].classList.add('gambAnim')
			burger[2].classList.add('gambAnim')
		}
	}
	function offBurger(){
		if(!onOffBurger){
			hidemenu.style.transform = 'translateX(-150px)'
			burgermenu.style.top = '20px'
			burgermenu.style.right = '-40px'
			burger[0].classList.remove('gambAnim')
			burger[1].classList.remove('gambAnim')
			burger[2].classList.remove('gambAnim')
		}
	}
})()
