'use script';
const modal=document.querySelector('.modal');
const openBtn=document.querySelectorAll('.show-modal');
const clsBtn=document.querySelector('.close-modal');
const overlay= document.querySelector('.overlay');
console.log(openBtn);           	
for (var i = 0; i < openBtn.length; i++) {
	openBtn[i].addEventListener('click',function(){
		console.log('Button Clicked');
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	})
}
const close=function(){
	     modal.classList.add('hidden');
		 overlay.classList.add('hidden');
};
var Escape;
clsBtn.addEventListener('click',close);
overlay.addEventListener('click',close);
document.addEventListener('keydown',function(e){
	console.log(e.key);
    if(e.key=== 'Escape' && !modal.classList.contains('hidden')){
    	close();
    }
})