// Main
console.log('FullStack Vietnam!')
$('.owl-one').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	responsiveClass:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
			items:1,
			dots: true,
			nav:false
        },
        1000:{
			items:1,
			nav:false,
			dots: true,
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	responsiveClass:true,
	dots:false,
	center: true,
	items:3,
	
    responsive:{
        0:{
            items:1
        },
        768:{
			items:1.5,
			nav: true,
			dots:false
        },
        1000:{
			items:1.5,
			dots:false,
			nav: true,
        }
    }
})


$('.owl-three').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	responsiveClass:true,
	dots:false,
	
	items:1,
	
    responsive:{
        0:{
            items:1
        },
        576:{
			items:2,

			
		},
        992:{
			items:4,
        }
    }
})
