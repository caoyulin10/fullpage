$(function(){
	var k = $(window).height(); //当前屏幕高度
	var flag = false;  //控制动画
	$(".next").click(function(){
		$.fn.fullpage.moveSectionDown();
	});
    $('#fullpage').fullpage({
    	navigation: true,
    	scrollingSpeed: 1500,
    	//回调函数
    	afterLoad: function(anchorLink,index){   		
			if(index == 2){
				$(".next").fadeOut();
    			$(".search").show().animate({"right":370},1500,function(){
    				// 方块走进来，沙发2个字显示
    				$(".search-words").animate({"opacity":1},500,function(){
    					$(".search").hide();
    					// 图片 往右上角， 缩小
    					$(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},1000);
    					// 同时 沙发图片 变大
    					$(".goods-441-218").show().animate({"height":218},1000); 
    					// 同时 白色文字渐渐的显示出来
    					$(".words-02").animate({"opacity":1},1000,function(){
    						$(".next").fadeIn();
    					});  					
    				});
    			});
    		}
    	},
    	onLeave:function(index,nextIndex,direction){
    		$(".next").fadeOut();
    		if(index == 2 && nextIndex == 3){
    			$(".shirt-02").show().animate({"bottom":-(k-250),"width":207,"left":260},2000,function(){
    				$(".img-01-a").animate({"opacity":1},500,function(){
    					$(".btn-01-a").animate({"opacity":1},500,function(){
    						$(".next").fadeIn();
    					});
    				});
    			});
    			$(".cover").show();
    		}
    		if(index == 3 && nextIndex == 4){
    			$(".shirt-02").hide();
    			$(".t1f").show().animate({"bottom":-((k-250)+50),"left":260},2000,function(){
    				$(this).hide();
    				$(".car-img").show();
    				$(".car").animate({"left":"150%"},4000,"easeInElastic",function(){
    					$(".note").show();
    					$(".note-img").animate({"opacity":1},1000);
    					$(".words-04-a").animate({"opacity":1},1000,function(){
    						$(".next").fadeIn();
    					});
    				});
    			});
    		}
    		if(index == 4 && nextIndex == 5){
    			//小手上来
    			$(".hand-05").animate({"bottom":0},1000,function(){
    				//鼠标显示
    				$(".mouse-05").show();
    				//沙发掉下
    				$(".t1f-05").show().animate({"bottom":70},1000,function(){
    					//单子上走
    					$(".order-05").animate({"bottom":390},1000,function(){
    						$(".word-05").addClass("word-05-a");
    						$(".next").fadeIn();
    					});

    				});
    			});
    		}
    		if(index == 5 && nextIndex == 6){
    			$(".t1f-05").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function(){
    				$(".t1f-05").hide();
    			});
    			$(".box-06").animate({"left": "38%"},1500,function(){
    				$(".box-06").animate({"bottom":40},500,function(){
    					$(".box-06").hide();
    					$(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
    						$(".man-06").animate({"height":305,"bottom":116},1000,function(){
    							$(this).animate({"right":500},500,function(){
    								$(".door-06").animate({"opacity":1},200,function(){
    									$(".women-06").show().animate({"height":306,"right":350},500,function(){
    										$(".pop-07").show();    										
    									});
    								});
    							});
    						});
    					});
    					$(".word-06").show().animate({"left":"30%"},2000,function(){
    						$(".next").fadeIn();
    					});
    					$(".pop-06").show();
    				});

    			});
    		}
    		if(index == 6 && nextIndex == 7){   			
    			setTimeout(function(){
    				$(".star").animate({"width":120},500,function(){
    					$(".good-07").show();
    					$(".next").fadeIn();
    				});
    			},2000);
    		}		
    		/*$(".beginShopping").mouseenter(function(){
    			$(".btn-08").show();
    		}).mouseleave(function(){
    			$(".btn-08").hide();
    		});*/
    		$(".beginShopping").hover(function(){
    			$(".btn-08").toggle();
    		});
    		$(document).mousemove(function(event){
    			var x = event.pageX - $(".hand-08").width()/2;
    			var y = event.pageY + 10;
    			var minY = k - 449;
    			if(y < minY){
    				$(".hand-08").css({"left": x,"top": minY});
    			}else {
    				$(".hand-08").css({"left": x,"top": y});
    			}    			
    		});
    		$(".again").click(function(){
    			$.fn.fullpage.moveTo(1);
    			$("img, .move").attr("style","");
    		});
    	}
    });
});