import React,{useEffect} from 'react';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';
import $ from 'jquery';
import ModalPopup from '../components/ModalPopup';


import { Consumer } from '../components/Context';

function Interior(props) {
    useEffect(() => {
       
        var load = document.getElementById("loader");
		
		/*setTimeout(function(){ load.style.display = 'none'; }, 1000);*/
			load.style.display = 'none';
		
    }, [])
    return (
        <>
            <Helmet>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
              <link rel="stylesheet" href="css/InteriorStyle.css" />
              <title>Interior | AND Academy</title>
              </Helmet>
            <div id="loader" className="spinner-border"></div>
            <header id="myHeader">
  <div class="container-fluid">
    <div class="row">
		<div class="col-md-9">
			<a class="logo" href="#"><div class="logo_img"></div></a>
		</div>
		<div class="col-md-3">
			<a class="download_broch_1" data-toggle="modal" data-target="#myModal" href=""><span class="mob_down">DOWNLOAD </span>BROCHURE 
			<lottie-player class="download_broch_icon" id="motion_dv" src="images/Interior/arrow_landingpage.json" background="transparent"   speed="1" pause="1000"  style={{"width":"30px","height":"30px","position":"relative","top":"4px"}}  loop  autoplay></lottie-player>
			</a>
		</div>
	</div>
	</div>
</header>
 <div id="overflow_hidden">
 
</div>
<section class="banner">
	<div class="container-fluid">
		<div class="row first_row">
			<div class="col-md-5  center_sec motion_section">
			<lottie-player id="motion_dv" src="images/Interior/landing_motion.json" background="transparent"   speed="1" pause="1000"  style={{"width":"100%","height":"100%","maxWidth":"270px","marginLeft":"auto","marginRight":"auto"}}   loop autoplay></lottie-player>
			
			
		</div>
		<div class="col-md-2 bord-right center_sec no_padd_col center_sec_image">
			<div class="home_center_img">
				<div style={{"background":"url(images/Interior/home-center-im.jpg) no-repeat","backgroundSize":"cover","height":"100%","backgroundPosition":"center center"}}></div>	
			</div>
		
			<div class="text-div text-div-cent">
						<p>Design and build functionally aesthetic residential and commercial spaces. Learn everything you need to know about Interior Design to start your own business or simply pursue your passion. </p>
						<h2 class="desk-h2">ONLINE COURSE  <br />
26 WEEKS<br />
LIVE LECTURE  <br />
CAREER SUPPORT</h2>
				<h2 class="mob-h2">Online  |  26 weeks  |  Live lecture  |  Career support</h2>
					
						</div>
			
			
		</div>
		<div class="col-md-5 mob_padding_no desk_padding_right_0 right_last_sec">
				<div class="row">
					<div class="col-md-5">
						<div class="text-div">
						
					<h3>Application Deadline: 31.12.2021</h3>
						</div>
						
					
					</div>
					<div class="col-md-7">
						<div class="home_right_img">
							<div style={{"background":"url(images/Interior/interior_main_above.jpg) no-repeat","backgroundSize":"cover","height":"100%","backgroundPosition":"center center"}}></div>
						</div>
					</div>
				</div>
				<a class="download_broch"  data-toggle="modal" data-target="#myModal" href="" >DOWNLOAD BROCHURE
				<lottie-player class="download_broch_icon" id="motion_dv" src="images/Interior/arrow_landingpage.json" background="transparent"   speed="1" pause="1000"  style={{"width":"50px","height":"50px","position":"relative","top":"4px"}}  loop  autoplay></lottie-player>
				</a>
				
			</div>
	</div>
    </div>
</section>

<section class="course-title">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Course highlights </h2>
			</div>
		</div>
	</div>
</section>
<section class="course-section">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<div class="classes_div cl_dv_1">
					<h3>Live online<br /> 
classes</h3>
					<p>26-week intensive cohort-based learning (6 hrs/week) </p>
				</div>
				<div class="classes_div cl_dv_2">
					<h3>Learn from <br />
practitioners</h3>
					<p>Leading faculty and industry experts from India and world over</p>
				</div>
				<div class="classes_div cl_dv_3">
					<h3>Launch <br />your career
</h3>
					<p>Learn interior design and project management skills to become an entrepreneur</p>
				</div>
				<div class="classes_div cl_dv_4">
					<h3>Professional <br />
networking</h3>
					<p>Build a network of design professionals and make lifelong connections</p>
				</div>
				<div class="classes_div mob_img">
					<img class="" src="images/Interior/course-img-3.jpg" alt="" />
				</div>
			</div>
			<div class="col-md-3">
				<div class="first_course_img">
					<div style={{"background":"url(images/Interior/course-highlights-1.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
				
			</div>
			<div class="col-md-3">
				<div class="last_course_img">
					<div style={{"background":"url(images/Interior/1xinterior4.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
				
			</div>
		</div>
	</div>
</section>
<section class="future_title">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Future job roles  </h2>
			</div>
		</div>
	</div>
</section>
<section class="future_sec mob_hid">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="max_widt">
					<div class="future_div">
		<div class="all_full">
		<div style={{"background":"url(images/Interior/future-job-1.jpg) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			<p>Design <br /> Consultant</p>
		</div>
		<div class="lower_half">
			Interior  <br /> Stylist
		</div>
	</div>
					<div class="future_div">
		<div class="upper_half">
		
		
		</div>
		<div class="lower_half">
			<div style={{"background":"url(images/Interior/1xinterior7.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	<div class="future_div last_future_div">
		<div class="upper_half">
			<div style={{"background":"url(images/Interior/1xinterior1.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
		<div class="lower_half">
			Residential   <br /> Designer 
		</div>
		<div class="lower_half">
			Space   <br /> Planner
		</div>
	</div>
	
	
	
	<div class="future_div">
		<div class="upper_half">
			Interior    <br /> Project<br /> Manager 
		</div>
		<div class="lower_half">
			
		</div>
	</div>
	<div class="future_div last_future_div">
		<div class="upper_half">
			<div style={{"background":"url(images/Interior/1xinterior8.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
		<div class="lower_half">
			Retail     <br /> Designer 
		</div>
		<div class="lower_half">
			Commercial     <br /> Designer
		</div>
	</div>
	

	
				</div>
				
			</div>
		</div>
		</div>
	</section>
<section class="future_sec desk_hid">
	<div class="future_div">
		<div class="upper_half">
			<p>Design <br /> Consultant</p>
		</div>
		<div class="lower_half">
			Space  <br /> Planner
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			Interior 
 <br /> Stylist
		</div>
		<div class="lower_half">
			Residential    <br /> Designer
		</div>
	</div>
	<div class="future_div">
		<div class="all_full">
			<div style={{"background":"url(images/Interior/1xinterior5.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	
	<div class="future_div">
		<div class="all_full">
			<div style={{"background":"url(images/Interior/1xinterior8.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	<div class="future_div last_future_div">
		<div class="upper_half">
			Commercial   <br /> Designer 
		</div>
		<div class="lower_half">
			Retail     <br /> Designer 
		</div>
		<div class="upper_half">
		</div>
		<div class="lower_half">
			Interior<br /> Project<br /> Manager   
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	
	
</section>
<section class="course-structure-title">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Course structure</h2>
				<p>Interior Design as a profession focuses on improving the functionality and aesthetics of existing spaces. You will learn to transform residential or commercial spaces through creative ideation, space planning and design theory. Create a professional portfolio of projects using digital 3D models and various presentation techniques. </p>
				<h3>26 weeks course structure</h3>
			</div>
		</div>
		<div class="row number_row">
			<div class="col-md-2 mobile_first">
				<div class="first_div">
					<div class="number_div">
						1
					</div>
					<div class="below_box">
						<h4>Introductory session</h4>
					</div>
				</div>
			</div>
			<div class="col-md-2 desk_first one_col">
				<div class="first_div only_first">
					<div class="number_div">
						1
					</div>
					<div class="number_div">
						2
					</div>
					<div class="number_div">
						3
					</div>
					<div class="number_div">
						4
					</div>
					<div class="below_box">
						<h4>Introduction to Interior Design 
& Planning</h4> 
						<ul>
							<li>Elements of interior</li>
							<li>Ergonomics</li>
							<li>Space planning</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2 two_col">
				<div class="first_div second_div">
					
					<div class="number_div">
						5
					</div>
					<div class="number_div">
						6
					</div>
					<div class="number_div">
						7
					</div>
					<div class="number_div">
						8
					</div>
					<div class="number_div">
						9
					</div>
					<div class="number_div">
						10
					</div>
					<div class="number_div">
						11
					</div>
					<div class="number_div">
						12
					</div>
					<div class="below_box">
						<h4>Creating Interiors</h4>
						<ul>
							<li>Architectural Drawing</li>
							<li>3D Modelling</li>
							<li>Principles of Vaastu</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2 three_col">
				<div class="first_div third_div">
					
					
					<div class="number_div">
						13
					</div>
					<div class="number_div">
						14
					</div>
					<div class="number_div">
						15
					</div>
					<div class="number_div">
						16
					</div>
					<div class="number_div">
						17
					</div>
					<div class="number_div">
						18
					</div>
					<div class="number_div">
						19
					</div>
					<div class="number_div">
						20
					</div>
					<div class="number_div">
						21
					</div>
					<div class="below_box">
						<h4>Building a Design</h4>
						<ul>
							<li>Adaptive reuse</li>
							<li>Finishes & materials</li>
							<li>Construction methods & services</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2 fourth_col">
				<div class="first_div fourth_div">
					<div class="number_div">
						22
					</div>
					<div class="number_div">
						23
					</div>
					<div class="number_div">
						24
					</div>
					<div class="number_div blank_div">
						&nbsp;
					</div>
					
					<div class="below_box">
						<h4>Sourcing 
& Styling</h4>
						<ul>
							<li>Furniture & furnishings </li>
							<li>Art & accessories</li>
							<li>Vendor selection</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2 fifth_col">
				<div class="first_div fifth_div">
					<div class="number_div">
						25
					</div>
					<div class="number_div">
						26
					</div>
					<div class="number_div blank_div">
						&nbsp;
					</div>
					<div class="number_div blank_div">
						&nbsp;
					</div>
					<div class="number_div blank_div">
						&nbsp;
					</div>
					<div class="number_div blank_div">
						&nbsp;
					</div>
					
					<div class="below_box">
						<h4>Entrepreneurship & Project Management</h4>
						<ul>
							<li>Business models</li>
							<li>Contract documents</li>
							<li>Management guidelines</li>
						</ul>
					</div>
				</div>
			</div>
				
			</div>
			<div class="row">
				<div class="col-md-12">
					<a data-toggle="modal" data-target="#myModal" href="#" class="download_curri">DOWNLOAD CURRICULUM 
					<lottie-player class="download_broch_icon yellow" id="motion_dv" src="images/Interior/arrow_landingpage-yellow.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
					</a>
				</div>
			</div>
		</div>
</section>
<section class="software-traing">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<h2>Software & tools  </h2>
				<p class="mob_hidden">
				Sketchup<br />
				Florrplanner
				</p>
			</div>
			<div class="col-md-6">
				<div style={{"background":"url(images/Interior/1xinterior9.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
			</div>
			<div class="mob-software">
				<div class="col-md-3">
				
				<p>
				Sketchup<br />
				Florrplanner
				</p>
			</div>
			<div class="col-md-3">
				<div style={{"background":"url(images/Interior/1xinterior9.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
			</div>
			
			</div>
			
			
		</div>
	</div>
</section>
<section class="eligibilty-crite">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<h2>Eligibility criteria  </h2>
			</div>
			<div class="col-md-6">
				<p>The programme is designed for anyone who has a keen interest in Interior Design. </p>
			</div>
			<div class="eligiblity_img">
			<div class="cent_back_img" style={{"background":"url(images/Interior/no-prior-img.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				
			</div>
			
		</div>
	</div>
</section>
<section class="not-sure">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Not sure about which <br />
programme to pick ?</h2>
				<a data-toggle="modal" data-target="#myModal" href="#">CONSULT CAREER ADVISORS 
				<lottie-player class="download_broch_icon yellow" id="motion_dv" src="images/Interior/arrow_landingpage-yellow.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
				</a>
			</div>
		</div>
	</div>
</section>
<section class="explore-more">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Explore more specialisation courses </h2>
			</div>
		</div>
	</div>
</section>
<section class="digital-brand-sec  black_sec">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
				<a class="anchor_whole" href="#"><span></span>
				<h6>Intermediate Level </h6>
				<h5>Digital Brand Communication Diploma</h5>
				<p>Learn to ideate, design, and promote your brand messaging through visual communication across various digital platforms.  
				<img class="tick_img" height="44" src="images/Interior/tick_icon_red.svg" alt="" />
				</p>
				
				
				
				</a>
			</div>
			<div class="col-md-4">
				<div class="cent_back_img" style={{"background":"url(images/Interior/digital_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}>
				</div>
			</div>
		</div>
	</div>
</section>
			<section class="digital-brand-sec another_yellow_sec">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4">
					<div class="cent_back_img" style={{"background":"url(images/Interior/user_below_box.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
						
					</div>
					<div class="col-md-8 yellow_div">
						<a class="anchor_whole" href="#">
						<h6>Intermediate Level </h6>
						<h5>User Experience Design Diploma</h5>
						<p>Create mobile apps, websites and other digital products that connect with users in relevant and meaningful ways. 

							<img class="tick_img" height="44" src="images/Interior/tick_icon_black.svg" alt="" />
						</p>
						</a>
					</div>
				</div>
				</div>
			</section>
			<section class="digital-brand-sec yellow_sec">
	<div class="container-fluid">
		<div class="row">
			
			<div class="col-md-8">
				<a class="anchor_whole" href="#">
				<h6>Intermediate Level </h6>
				<h5>Motion Graphics Diploma</h5>
				<p>Bring new life to static images with a course in motion graphics using animation and visual effects. 
				<img class="tick_img" height="44" src="images/Interior/tick_icon.svg" alt="" /></p>
				</a>
				
			</div>
			<div class="col-md-4">
				<div class="cent_back_img"  style={{"background":"url(images/Interior/motion_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
			</div>
			</div>
			</div>
			</section>
			<section class="digital-brand-sec">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4">
				<div class="cent_back_img"  style={{"background":"url(images/Interior/graphic_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
			</div>
			<div class="col-md-8 white_div">
				<a class="anchor_whole" href="#">
				<h6>beginner Level </h6>
				<h5>Graphic Design Diploma</h5>
				<p>Master the fundamentals of graphic design, from colour theory, composition and typography to creative applications and design processes.

				<img class="tick_img" height="44" src="images/Interior/tick_icon_red.svg" alt="" /></p>
				</a>
				
			</div>
			
		</div>
	</div>
</section>
<footer>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				Copyright 2021 AND Academy | All Rights Reserved
			</div>
		</div>
	</div>
</footer>
<ModalPopup data={props.data}></ModalPopup>
<ScriptTag isHydrating={true} type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
<ScriptTag isHydrating={true} type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
<ScriptTag isHydrating={true} type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
<ScriptTag isHydrating={true} type="text/javascript" src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        </>
    )
}
$(window).on('resize',function() {
		
		
    var a = $(".cl_dv_1").outerHeight();
    var b = $(".cl_dv_2").outerHeight();
    var c = $(".cl_dv_3").outerHeight();
    var d = $(".cl_dv_4").outerHeight();
      var div_height = a + b +c;
      var bot_height = d;
      
      var div_height_mob = a + b;
      var bot_height_mob = d;
      var bot_height_mob_2 = d+2;
    
     //alert(a+b+c);
     
     
     
     
     function myFunction(x) {
            if (x.matches) { // If media query matches
              $('.first_course_img').css({"height":div_height_mob + "px"} );
              $('.last_course_img').css({"height":bot_height_mob + "px"} );
              $('.course-section .col-md-3:last-child').css({"top":-bot_height_mob_2 + "px"} );
              $('.classes_div.mob_img').css({"height":bot_height_mob + "px"} );
            } 
            
            else {
             $('.first_course_img').css({"height":div_height + "px"} );
     $('.last_course_img').css({"height":bot_height + "px"} );
            }
          }

          var x = window.matchMedia("(max-width: 767px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
          
     
  });
  document.addEventListener("DOMContentLoaded", function(event) { 
$(window).trigger('resize');
});

document.addEventListener("DOMContentLoaded", function(event) { 
    window.onscroll = function() {
    myFunction()
    };
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    var heihgt_1 = $("#myHeader").outerHeight();
    var heihgt_2 = $(".banner").outerHeight();
    
    var main_height = heihgt_1 + heihgt_2;
    //alert(main_height);
    
    function myFunction() {
      if (window.pageYOffset > main_height) {
        header.classList.add("sticky");
        $("#overflow_hidden").css({"height":heihgt_1 + "px"} );
      } else {
        header.classList.remove("sticky");
        
        $("#overflow_hidden").css({"height":0 + "px"} );
      }
    }
    });

    var load = document.getElementById("loader");
		function loadfun(){
		/*setTimeout(function(){ load.style.display = 'none'; }, 1000);*/
			load.style.display = 'none';
		}
export default Interior
