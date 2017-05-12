window.onload=function(){
	var nodeImg=document.getElementById('cat');
	var nodeP=document.getElementById('times');
	var count=0;
	nodeImg.addEventListener('click',function(){
		count++;
		nodeP.innerHTML=count;

	});
}
