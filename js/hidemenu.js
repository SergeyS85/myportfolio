(function(){
	let burgermenu   = document.querySelector('.gamburgermenu')
	let hidemenu     = document.querySelector('.container_hidemenu')
	let burger       = document.querySelector('.gamburger')
	burgermenu.addEventListener('click',function(){
		hidemenu.style.transform = 'translateX(0px)'
		burgermenu.style.top = '5px'
		burgermenu.style.right = '5px'
	})
})()
