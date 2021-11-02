(function($) {
	$(document).ready(function(){
  	"use strict";


	const	body = document.querySelector("body"),
			menuOpen = document.getElementById("openNav"),
			menuClose = document.getElementById("closenav"),
			headerSection = document.getElementById("headerSection"),
			navbar  = document.querySelector(".navbar"),
			mySidebar = document.getElementById("mySidebar");



	    //  ==================== MENU FUNCTION ==================== //

			menuOpen.addEventListener("click", function(event){
				body.style.overflow = "hidden";
				headerSection.classList.add("open");
				mySidebar.classList.add("open");
			});


			menuClose.addEventListener("click", function(event){
				body.style.overflow = "auto";
				headerSection.classList.remove("open");
				mySidebar.classList.remove("open");
			});
	    //  ========== END ==========



	    //  ==================== SPY SCROLL ==================== //

		    // $(window).on('load scroll',function(){
		  		// $('section').each(function(){
		    //         let height = $(this).height();
		    //         let offset = $(this).offset().top - 200;
		    //         let top = $(window).scrollTop();
		    //         let id = $(this).attr('id');
		    //         if(top >= offset && top < offset + height){
		    //             $('.header-section__navbar ul li').removeClass('active');
		    //             $('.nav').find(`[href="#${id}"]`).parent().addClass('active');
		    //         }

		    //     });

		    // });

	    //  ========== END ==========



	    //  ==================== SCROLLING FUNCTION ====================

		    $(window).on("scroll", function() {
		        var scroll = $(window).scrollTop();
		        if (scroll > 70) {
		            $(".navbar").addClass("sticky-top");
		            $(".navbar").addClass("active");
		        } else if (scroll < 30) {
		            $(".navbar").removeClass("active")
		        }
		    });

	    //  ========== END ==========



	    //  ==================== CART FUNCTION ====================
	    const	cartbtn = document.querySelector(".btn-cart"),
	    		cartView = document.querySelector(".cart-view");

	    		cartbtn.addEventListener("click", function(ev){
	    			ev.stopPropagation();
	    			cartView.classList.toggle("open");
	    			cartbtn.classList.toggle("hover");
	    		})
	    		cartView.addEventListener("click", function(ev){
	    			ev.stopPropagation();
	    		})


			    $("html").on("click", function() {
			        cartView.classList.remove("open");
			    	cartbtn.classList.remove("hover");
			    });

	    //  ==================== CART FUNCTION ====================



	    // ============ PARALLAX EFFECT =============//

		    document.addEventListener('mousemove', e => parallax(e));
		    const parallax = e => {
		      document.querySelectorAll('.parallax').forEach(layer => {
		        const speed = layer.dataset.speed;

		        const x = (window.innerWidth - e.pageX * speed) / 100;
		        const y = (window.innerHeight - e.pageY * speed) / 100;

		        layer.style.transform = `translate(${x}px, ${y}px)`;
		      });
		    };


		    document.addEventListener('mousemove', e => parallax_x(e));
		    const parallax_x = e => {
		      document.querySelectorAll('.parallax-x').forEach(layer => {
		        const speed = layer.dataset.speed;

		        const x = (window.innerWidth - e.pageX * speed) / 100;
		        const y = (window.innerHeight - e.pageY * speed) / 100;

		        layer.style.transform = `translate(${x}px)`;
		      });
		    };

	    // ============ END =============//



	    // ============ OUR FOOD GALLARY =============//

		    $(document.body).on("click", ".controls .buttons", function() {

		        $(this).addClass('button-active').siblings().removeClass('button-active');

		        let filter = $(this).attr('data-filter');
		        if(filter == 'all'){
		            $('.dish .image').removeClass('d-none');	
	            	$('.dish .image').addClass('zoom-in');
					 setTimeout(function() {
						$('.dish .image').removeClass('zoom-in');
					}, 400);

		        }else{
		            $('.dish .image').not('.'+filter).addClass('d-none');
		            $('.dish .image').not('.'+filter).removeClass('zoom-in');

		            $('.dish .image').filter('.'+filter).removeClass('d-none');

		            $('.dish .image').filter('.'+filter).addClass('zoom-in');
		        }
		    });

	    // ============ END =============//




















	/*	=====================================================================
	=====================================================================
	=============================== SLIDER ==============================
	=====================================================================
	===================================================================== */


	// var mainJS = require('./index');


    //  ==================== MAIN SLIDER FUNCTION ==================== //

	    const	arrows = document.querySelector(".arrows"),
	    		mainNext = arrows.querySelector(".slider-next"),
	    		mainPrev = arrows.querySelector(".slider-prev"),
	    		mainPrevBtn = arrows.querySelector(".MainPrev"),
	    		mainNextBtn = arrows.querySelector(".MainNext"),

	    		// Slider Item
	    		mainslider = document.querySelector(".main-slider"),
	    		sliderItem = mainslider.querySelectorAll(".slider-item"),
	    		totalsliderItem = sliderItem.length,

	    		
	    		// Active Slider Item //
	    		activeSliderItem = document.querySelector(".slider-item.active"),
	    		activeTitle = activeSliderItem.querySelector(".slider-item-title"),
		    	activeDescription = activeSliderItem.querySelector(".slider-item-description"),
		    	activePrice = activeSliderItem.querySelector(".slider-item-price"),
		    	activeImg = activeSliderItem.querySelector(".slider-item-img");

				let Sliderindex=0;
				
				for (let e=0; e<totalsliderItem; e++) {
					Sliderindex=e;
	            }


			    // ============ Slider Next And Previus Buttons =============//

				    $(document.body).on("click", ".slider-next", function(e) {
					    e.preventDefault();
					    e.stopPropagation();

						if (Sliderindex === totalsliderItem-2) {
							this.classList.add("disabled");
							this.classList.remove("slider-next");
				        }else{
							this.classList.remove("disabled");
							this.classList.add("slider-next");
							mainPrevBtn.classList.add("disabled");
				        }
						mainPrevBtn.classList.remove("disabled");
						mainPrevBtn.classList.add("slider-prev");
						nextItem();
					});
				    $(document.body).on("click", ".slider-prev", function(e) {
					    e.preventDefault();
					    e.stopPropagation();

						if (Sliderindex === 0) {
							this.classList.add("disabled");
							this.classList.remove("slider-prev");
				        }else{
							mainNextBtn.classList.add("disabled");
							this.classList.remove("disabled");
							this.classList.add("slider-prev");
				        }
						mainNextBtn.classList.remove("disabled");
						mainNextBtn.classList.add("slider-next");
						prevItem();
					});

			    // ============ END =============



			    // ============ FUNCTION FOR CHANGING SLIDE WITH NEXT/PREV BUTTONS =============//
					function nextItem(){
						slide('next');
				        changeItem();
				    }
				   	function prevItem(){
				        slide('prev');
				        changeItem();
				    }
				    function changeItem(){
				        const	img = sliderItem[Sliderindex].querySelector(".slider-item-img"),
				        imgSrc = img.getAttribute("src");
				        

				        setTimeout(function() {
				        	activeImg.src=imgSrc;
				        }, 400);

				        activeTitle.innerHTML = sliderItem[Sliderindex].querySelector(".slider-item-title").textContent;
				        activePrice.innerHTML = sliderItem[Sliderindex].querySelector(".slider-item-price").textContent;
				        activeDescription.innerHTML = sliderItem[Sliderindex].querySelector(".slider-item-description").textContent;

				    }
			    // ============ END =============//



				// ============ MAIN PAGE SLIDER ANIMATION =============//

				    // ============ SLIDE TRANSITION EFFECT FOR MAIN PAGE SLIDER =============//

					    function slide(event){

							if (event === 'next') {

							 	if (Sliderindex === totalsliderItem-1) {
						            Sliderindex=0;
						        }else{
						            Sliderindex++;
						        }

						        activeImg.classList.add('animate-slide-to-left');
						        activeImg.classList.remove('floating-circle');

						        setTimeout(function() {
						        	activeImg.classList.remove('animate-slide-to-left');
						        	activeImg.classList.add('floating-circle');
						        }, 800);

							}else{

								if (Sliderindex === 0) {
						            Sliderindex=totalsliderItem-1;
						        }else{
						            Sliderindex--;
						        }

						        activeImg.classList.add('animate-slide-to-right');
						        activeImg.classList.remove('floating-circle');

						        setTimeout(function() {
						        	activeImg.classList.remove('animate-slide-to-right');
						        	activeImg.classList.add('floating-circle');
						        }, 800);
							}

					        activePrice.classList.add("animate-popup");
					        activeTitle.classList.add("animate-slide-left");
					        activeDescription.classList.add("fade-in");
					        
							body.classList.add("overflow-x-hide");

					        setTimeout(function() {
					        	activePrice.classList.remove("animate-popup");
					        	activeTitle.classList.remove("animate-slide-left");
					        	activeDescription.classList.remove("fade-in");
								// body.classList.remove("overflow-x-hide");
					        }, 600);
					       
						}

					// ============================ END FUNCTION ============================ //
				
				    // ============ SHAKE TRANSITION EFFECT FOR MAIN PAGE SLIDER =============//

					    function shake(event){

							if (event === 'next') {

							 	if (Sliderindex === totalsliderItem-1) {
						            Sliderindex=0;
						        }else{
						            Sliderindex++;
						        }

						        activeImg.classList.add('animation-shake');
						        activeImg.classList.remove('floating-circle');

						        setTimeout(function() {
						        	activeImg.classList.remove('animation-shake');
						        }, 800);

							}else{

								if (Sliderindex === 0) {
						            Sliderindex=totalsliderItem-1;
						        }else{
						            Sliderindex--;
						        }

						        activeImg.classList.add('animation-shake');
						        activeImg.classList.remove('floating-circle');

						        setTimeout(function() {
						        	activeImg.classList.remove('animation-shake');
						        }, 800);
							}

					        activePrice.classList.add("animate-popup");
					        activeTitle.classList.add("animate-slide-left");
					        activeDescription.classList.add("fade-in");
					        
							body.classList.add("overflow-x-hide");

					        setTimeout(function() {
					        	activePrice.classList.remove("animate-popup");
					        	activeTitle.classList.remove("animate-slide-left");
					        	activeDescription.classList.remove("fade-in");
					        }, 600);
						}

					// ============================ END FUNCTION ============================ //

					// ============ ROTATE TRANSITION EFFECT FOR MAIN PAGE SLIDER =============//

					    function rotate(event){

							if (event === 'next') {

							 	if (Sliderindex === totalsliderItem-1) {
						            Sliderindex=0;
						        }else{
						            Sliderindex++;
						        }

						        activeImg.classList.add('animation-rotate-right');
						        activeImg.classList.remove('floating-circle');

						        setTimeout(function() {
						        	activeImg.classList.remove('animation-rotate-right');
						        }, 800);

							}else{

								if (Sliderindex === 0) {
						            Sliderindex=totalsliderItem-1;
						        }else{
						            Sliderindex--;
						        }

						        activeImg.classList.add('animation-rotate-left');
						        activeImg.classList.remove('floating-circle');

						        setTimeout(function() {
						        	activeImg.classList.remove('animation-rotate-left');
						        }, 800);
							}

					        activePrice.classList.add("animate-popup");
					        activeTitle.classList.add("animate-slide-left");
					        activeDescription.classList.add("fade-in");
					        
							body.classList.add("overflow-x-hide");

					        setTimeout(function() {
					        	activePrice.classList.remove("animate-popup");
					        	activeTitle.classList.remove("animate-slide-left");
					        	activeDescription.classList.remove("fade-in");
					        }, 600);
						}
						
					// ============================ END FUNCTION ============================ //

				// ================== END ================== //

	//  ==================== END SLIDER ==================== //













    //  ==================== CART FUNCTION ==================== //


			document.querySelectorAll('.pizza-item').forEach(item => {  // Adding Data to Cart Button
				const 	pri = item.querySelector(".pizza-price"),
					 	title = item.querySelector(".pizza-title"),
				 		btn = item.querySelector(".pizza-add-btn");

				btn.setAttribute('data-price', pri.innerText);
				btn.setAttribute('data-title', title.innerText);
			});




	    	// Cart Variables
	    	const 	mainCart =	document.querySelector('.cart-view'),
	    			pizza_item = document.querySelectorAll(".pizza-item"),
	    			total_pizza_item = pizza_item.length;

  				for (let e=0; e<total_pizza_item; e++) {
				    
				    const	item_cart_btn = pizza_item[e].querySelector(".pizza-add-btn"),
				    		item_image = pizza_item[e].querySelector(".pizza-image"),
				    		pizza_image_src = item_image.src,
				    		item_price = pizza_item[e].querySelector(".pizza-price").innerText,
				    		item_title = pizza_item[e].querySelector(".pizza-title").innerText;
					

            		item_cart_btn.addEventListener("click", function(){
            			
            			const  	randId = '_' + Math.random().toString(36).substr(2, 13),
            					html = "<div class='col-md-3 m-auto'><img alt='box' class='img-fluid' src='assets/img/cliparts/pizza-box.png'></div><div class='col-md-6'><div class='info'><h2 class='cart--item-title'>"+item_title+" 👌</h2><h2 class='cart--item-price'>"+item_price+"</h2></div></div><div class='col-md-3'><div class='action'><input class='form-control food_qty'"+randId+"' id='food_qty' maxlength='1' type='text' value='1'><a class='cart-item-deleteBtn' data-delete='"+randId+"' href='javascript:void(0)'><i class='fal fa-trash'></i></a></input></div></div>"; // New Item's Data


            			const 	itemLength = $('.'+randId), 
			            		totalitemLength = itemLength.length+1; //Length of added Items

			            console.log(totalitemLength);
				        if (totalitemLength > 1) { // Checking if the item is Already Added or Not
				            const   qty = document.querySelector('.food_qty'+randId); // Increment function for the Quantity 
				            let a = qty.value;  // Defined Variable for changeing Quantity
				            qty.value = ++a;  // Changeing Quantity of the Added Item     

				        }else{

		    				$('.cart-empty').remove();
				            setTimeout(function() {
				                mainCart.classList.add("open");
				                document.querySelector(".btn-cart").classList.add("hover");
				            }, 100);
				            setTimeout(function() {
				                mainCart.classList.remove("open");
				                document.querySelector(".btn-cart").classList.remove("hover");
				            }, 2500);
				            const product_item = document.createElement("div");
				            product_item.classList.add('product-item');
				            product_item.classList.add(randId);
				            product_item.innerHTML = html;
				            document.getElementById("cart").append(product_item);
				        }

				    });


	            }



				
	        const 	itemLength = $('.'+randId), 
            		totalitemLength = itemLength.length+1; //Length of added Items

	        if (totalitemLength> 1) { // Checking if the item is Already Added or Not
	            const   qty = document.querySelector('.food_qty'+randId); // Increment function for the Quantity 
	            let a = qty.value;  // Defined Variable for changeing Quantity
	            qty.value = ++a;  // Changeing Quantity of the Added Item     

	        }else{


	            
	            // AddBadge();



	            // Delete Insterted Item From Cart
		            // const   delete_btn=document.querySelectorAll(".cart-item-deleteBtn"),
		            //         totalDelete=delete_btn.length;
		            // let deleteIndex=0;

		            // for (let e=0; e<totalDelete; e++) {
		            //     deleteIndex=e;
		            // }

		            // delete_btn[deleteIndex].addEventListener("click", function(event){
		            //         event.preventDefault();
		            //         event.stopPropagation();

		            //         const   delete_id=this.getAttribute("data-delete"),
		            //                 productItemLength=document.querySelectorAll(".product-item").length;
		            //                 $('.'+delete_id).remove();

		            //         RemoveBadge();
		            //         if(productItemLength===1){
		            //             EmptyBadge();
		            //             const emptycart = document.createElement("div");
		            //             emptycart.classList.add('cart-empty');

		            //             emptycart.innerHTML = "<img src='img/empty-cart.png' class='empty-cart-img'><h3 class='empty-cart--text'>Your Cart is Empty</h3><div class='cart-item-deleteBtn hidden'><i></i></div>";

		            //             document.getElementById("cart").appendChild(emptycart);
		            //         }
		                    
		            //     });
	            // Delete Function End
		        }
		    });
		    // =================== Add Item To Cart END ================== //
		   
	   


		   // =========== UPDATE BADGE COUNTS =========== //
		    function AddBadge(){
		        const   badge=document.querySelector(".badge"),
		                badgeText=badge.textContent;

		        let a = parseInt(badgeText);

		        badge.innerHTML = ++a;  // Changeing Count of the Badge
		    }
		    function RemoveBadge(){
		        const   badge=document.querySelector(".badge"),
		                badgeText=badge.textContent;

		        let a = parseInt(badgeText);

		        badge.innerHTML = --a;  // Changeing Count of the Badge
		    }
		    function EmptyBadge(){
		        const   badge=document.querySelector(".badge");
		        badge.innerHTML = 0;  // Changeing Count of the Badge
		   }
		   // =========== UPDATE BADGE COUNTS END =========== //











		// $('.add-to-cart').on('click', function () {
		//     var cart = $('.shopping-cart');
		//     var imgtodrag = $(this).parent('.item').find("img").eq(0);
		//     if (imgtodrag) {
		//         var imgclone = imgtodrag.clone()
		//             .offset({
		//             top: imgtodrag.offset().top,
		//             left: imgtodrag.offset().left
		//         })
		//             .css({
		//             'opacity': '0.8',
		//                 'position': 'absolute',
		//                 'height': '150px',
		//                 'width': '150px',
		//                 'z-index': '100'
		//         })
		//             .appendTo($('body'))
		//             .animate({
		//             'top': cart.offset().top + 10,
		//                 'left': cart.offset().left + 10,
		//                 'width': 75,
		//                 'height': 75
		//         }, 1000, 'easeInOutExpo');
		        
		//         setTimeout(function () {
		//             cart.effect("shake", {
		//                 times: 2
		//             }, 200);
		//         }, 1500);

		//         imgclone.animate({
		//             'width': 0,
		//                 'height': 0
		//         }, function () {
		//             $(this).detach()
		//         });
		//     }
		// });    



})(window.jQuery);