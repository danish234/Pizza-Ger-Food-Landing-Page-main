
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
	    		activeSliderItem = document.querySelector(".active-slider-item"),
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

