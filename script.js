//your JS code here. If required.
let cnt=0;
const btn=document.getElementById('incrementBtn');
btn.addEventListener('click',()=>{
	cnt++;
	const text=document.getElementById('counter');
	text.innerText=cnt;
})