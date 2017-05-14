window.onload=function(){
	var model={
		currentCat : null,
		cats : [
			{
				catName : 'cat1',
				catSrc : 'images/1.jpg',
				catCount : 0,
			},
			{
				catName : 'cat2',
				catSrc : 'images/2.jpg',
				catCount : 0,
			},
			{
				catName : 'cat3',
				catSrc : 'images/3.jpg',
				catCount : 0,
			},
			{
				catName : 'cat4',
				catSrc : 'images/4.jpg',
				catCount : 0,
			},
			{
				catName : 'cat5',
				catSrc : 'images/5.jpg',
				catCount : 0,
			},
		],
	}
	



	var octopus={
		init : function(){
			model.currentCat=model.cats[0];
			viewList.init();
			viewCat.init();
		},
		getCurrentCat : function(){
			return model.currentCat;
		},

		getCats : function(){
			return model.cats;
		},
		setCurrentCat : function(cat){
			model.currentCat=cat;
		},
		incrementCounter : function(){
			model.currentCat.catCount++;
			viewCat.render();
		},




	}

	var viewList={
		init : function(){
			this.catList=document.getElementById('cat-list');
			this.render();
		},

		render : function(){
			var cat,li,i;

			var cats=octopus.getCats();

			this.catList.innerHTML=' ';

			for(i=0;i<cats.length;i++){
				cat=cats[i];

				li=document.createElement('li');

				li.textContent=cat.catName;

				li.addEventListener('click', (function(catCopy) {
                	return function() {
                    	octopus.setCurrentCat(catCopy);
                    	viewCat.render();
               		 };
           	 	})(cat));

				this.catList.appendChild(li);
			}

	
		},

	}




	var viewCat={
		init : function(){
			this.showCat=document.getElementById('show-cat');
			this.catName=document.getElementById('cat-name');
			this.catCount=document.getElementById('cat-count');
			this.catImg=document.getElementById('cat-img');

			this.catImg.addEventListener('click',function(){
				octopus.incrementCounter();
			});

			this.render();
		},

		render : function(){
			var currentCat=octopus.getCurrentCat();
			this.catCount.textContent=currentCat.catCount;
			this.catName.textContent=currentCat.catName;
			this.catImg.src=currentCat.catSrc;
		},



	};

	octopus.init();

	// var catList=document.getElementById('cat-list');
	// var showCat=document.getElementById('show-cat');

	// var showName=document.createElement('p');
	// var showImg=document.createElement('img');
	// var showCount=document.createElement('p');
	// showName.textContent=cats[0].catName;
	// showImg.src=cats[0].catSrc;
	// showCount.textContent=cats[0].catCount;
	// showCat.appendChild(showName);
	// showCat.appendChild(showImg);
	// showCat.appendChild(showCount);
	
	// cats.forEach(function(elem,index,arr){
		
	// 	var li=document.createElement('li');
	// 	var name=document.createElement('p');
	// 	var img=document.createElement('img');
	// 	var count=document.createElement('p');
	// 	name.textContent=elem.catName;

	// 	img.src=elem.catSrc;
	// 	count.textContent=0;

	// 	img.addEventListener('click',function(){
	// 		elem.catCount++;
			
	// 		count.textContent=elem.catCount;

	// 		showName.textContent=elem.catName;
	// 		showImg.src=elem.catSrc;
	// 		showCount.textContent=elem.catCount;
	
	// 	});
	// 	li.appendChild(name);
	// 	li.appendChild(img);
	// 	li.appendChild(count);
	// 	catList.appendChild(li);

	// })



}
