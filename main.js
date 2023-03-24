 let foodlist=[
					 {id:1,
					  name:"Hotel Al Ali",
					  cousin:"Briyani,NorthIndian",
					  image:"https://www.chennaicateringservice.com/img/custom-menu/briyani/chicken-briyani.webp",
					  rating:2.5
					  },
					 {id:2,
					  name:"A2B Veg",
					  cousin:"South-North Indian",
					  image:"https://restaurantclicks.com/wp-content/uploads/2022/05/All-Day-Breakfast.jpg",
					  rating:5
					  },
					 {id:3,
					  name:"Doveton Cafe",
					  cousin:"Chinese",
					  image:"https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0Mzc4NTY2MjIwNjUzOTI4/best-burger-restaurant-names.jpg",
					  rating:3.5
					  },
					 {id:4,
					  name:"Zam Zam",
					  cousin:"Continent",
					  image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg",
					  rating:4.5
					  },
					 {id:5,
					  name:"SS Hydrabad Briyani",
					  cousin:"Briyani,SouthIndian",
					  image:"https://imagevars.gulfnews.com/2022/03/11/Guntur-Gongura-Biryani-_17f793bfa09_large.jpg",
					  rating:2.7
					  },
					 {id:6,
					  name:"Cake Works",
					  cousin:"Sweets,Desserts",
					  image:"https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/15380e9/choco-almond-cake.jpg",
					  rating:4
					  },
					 {id:7,
					  name:"KFC",
					  cousin:"Burger,Biryani,Snacks",
					  image:"https://jontotheworld.com/wp-content/uploads/2022/05/Kfc-menu-3.jpg",
					  rating:5
					  },
					 {id:8,
					  name:"Pizza Hut",
					  cousin:"Pizza",
					  image:"https://www.masalabox.com/wp-content/uploads/2023/02/image-81.png",
					  rating:4.5
					  },
		 ]
		 
		 let cont=document.querySelector(".container");
		 let div=document.createElement("div");
			 div.classList.add("row");
			 cont.appendChild(div);
		 foodlist.forEach(function(e){
			 let div1=document.createElement("div");
				 div1.classList.add("col");
				 div.appendChild(div1);
			 let div2=document.createElement("div");
				 div2.classList.add("col-card");
				 div1.appendChild(div2);
			 let imge=document.createElement("img");
				 imge.src=e.image;
				 div2.appendChild(imge);
		     let title=document.createElement("h3");
				 title.innerHTML=e.name;
				 div2.appendChild(title);
		     let type=document.createElement("span");
				 type.innerHTML=e.cousin;
				 div2.appendChild(type);
			 let rate=document.createElement("span");
				 rate.classList.add("star");
				 rate.innerHTML=e.rating;
				 rate.setAttribute('class',"fa fa-star");
				 rate.style.border=("1px solid black");
				 rate.style.padding=("3px 3px");
				 if(e.rating>3.9){
					 rate.style.backgroundColor=("green");
					 rate.style.color=("white");
				 }
				 else if(e.rating>=2.6 && e.rating<=3.9){
					 rate.style.backgroundColor=("orange");
					 rate.style.color=("white");
				 }
				 else{
					 rate.style.backgroundColor=("red");
					 rate.style.color=("white");
				 }
				 div2.appendChild(rate);
		 })