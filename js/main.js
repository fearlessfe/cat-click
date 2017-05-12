window.onload=function(){
	var cats=[
		{
			catName : 'cat1',
			catSrc : 'images/1.jpg',
			catCount : 0,
		},
		{
			catName : 'cat2',
			catSrc : 'images/2.jpg',
			catCount : 0,
		}
	]

	var ul=document.getElementById('cat-list');
	
	cats.forEach(function(elem,index,arr){
		
		var li=document.createElement('li');
		var name=document.createElement('p');
		var img=document.createElement('img');
		var count=document.createElement('p');
		

		name.textContent=elem.catName;
		img.src=elem.catSrc;
		count.textContent=0;

		img.addEventListener('click',function(){
			elem.catCount++;
			
			count.innerHTML=elem.catCount;
			
		});
		li.appendChild(name);
		li.appendChild(img);
		li.appendChild(count);
		ul.appendChild(li);

	})



}
