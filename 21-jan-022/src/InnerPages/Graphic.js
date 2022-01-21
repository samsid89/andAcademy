import React,{useEffect} from 'react';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';
import $ from 'jquery';
import ModalPopup from '../components/ModalPopup';


import { Consumer } from '../components/Context';

function Graphic(props) {
    
    return (
        <>
            <Helmet>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
              <link rel="stylesheet" href="css/GraphicStyle.css" />
			  <meta name="description" content="Graphic Design Courses - Learn Graphic Design with our 20-week Diploma course. Online-Classes with live sessions from industry professionals. Launch your career as an Grahic designer, Apply now."/>
			  
			  <meta name="keywords" content="graphic design courses, graphic designing courses, online graphic design courses, graphics design courses, graphic design schools, AND Academy"/>
              <title>Graphic Design Courses - Diploma in Graphic Designing in India | AND Academy</title>
              </Helmet>
            <div id="loader" className="loader"></div>
            <header id="myHeader">
  <div class="container-fluid">
    <div class="row">
		<div class="col-md-2 no_padd_col logo_col">
			<a class="logo" href="/"><div class="logo_img"></div></a>
		</div>
		<div class="col-md-7"></div>
		<div class="col-md-3">
		<a className="about_anch" href="/">ABOUT</a>
						<Consumer>
                        {

							
                            ({data,handlecheck})=>(
								<a onClick={()=>{handlecheck(true)}} className="download_broch_1" >BROCHURE  
                            <lottie-player class="download_broch_icon" id="motion_dv" src="images/Motion/arrow_landingpage.json" background="transparent"   speed="1" pause="1000"  style={{"width":"30px","height":"30px","position":"relative","top":"4px"}}  loop  autoplay></lottie-player>
                            </a>
                                
                            )
                        
                        }
                        </Consumer>
			
			
			
		</div>
	</div>
	</div>
</header>
 <div id="overflow_hidden">
 
</div>
<section class="banner">
	<div class="container-fluid">
		<div class="row first_row">
			<div class="col-md-2 bord-right center_sec no_padd_col center_sec_image">
			<div class="home_center_img">
				<div style={{"background":"url(images/Graphic/11x.webp) no-repeat","backgroundSize":"cover","height":"100%","backgroundPosition":"center center"}}></div>
			</div>
		
			<div class="text-div text-div-cent">
						
				
					
						</div>
			
			
		</div>
			<div class="col-md-5  center_sec motion_section">
			<lottie-player class="main_animation" id="motion_dv" src="images/Graphic/landing_motion.json" background="transparent"   speed="1" pause="1000"  style={{"width":"100%","height":"100%","maxWidth":"335px","marginLeft":"auto","marginRight":"auto"}}   loop autoplay></lottie-player>
			
			
		</div>
		
		<div class="col-md-5 mob_padding_no desk_padding_right_0 right_last_sec">
				<div class="row">
					<div class="col-md-5">
						<div class="text-div">
						<p>Master the fundamentals of graphic design by learning about colour theory, composition, typography, creative applications and design processes.</p>
						<h2 class="desk-h2">ONLINE COURSE  <br />
20 WEEKS<br />
LIVE LECTURE  <br />
PLACEMENT SUPPORT</h2>
<h2 class="mob-h2">Online  |  20 weeks  |  Live lecture  |  Placement support</h2>
					<h3>Application Deadline: 26.02.2022</h3>
						</div>
						
					
					</div>
					<div class="col-md-7">
						<div class="home_right_img">
							<div style={{"background":"url(images/Graphic/home-right-new.webp) no-repeat","backgroundSize":"cover","height":"100%","backgroundPosition":"center center"}}></div>
						</div>
					</div>
				</div>

				<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                                
				

			<a onClick={()=>{handlecheck(true)}}  class="download_broch">DOWNLOAD BROCHURE&nbsp;
				<lottie-player class="download_broch_icon" id="motion_dv" src="images/Graphic/arrow_landingpage.json" background="transparent"   speed="1" pause="1000"  style={{"width":"50px","height":"50px","position":"relative","top":"4px"}}  loop  autoplay></lottie-player>
				</a>
                                )
                        
                        }
                        </Consumer>

				
				
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
					<p>20-week intensive cohort-based learning (6 hrs/week) </p>
				</div>
				<div class="classes_div cl_dv_2">
					<h3>Learn from <br />
practitioners</h3>
					<p>Leading faculty and industry experts from India and world over</p>
				</div>
				<div class="classes_div cl_dv_3">
					<h3>Career<br />
enhancement</h3>
					<p>Placement assistance from a dedicated careers division</p>
				</div>
				<div class="classes_div cl_dv_4">
					<h3>Professional <br />
networking</h3>
					<p>Build a network of design professionals and make lifelong connections</p>
				</div>
				<div class="classes_div mob_img">
					<img class="" src="images/Graphic/course-img-3.jpg" alt="" />
				</div>
			</div>
			<div class="col-md-3">
				<div class="first_course_img">
					<div style={{"background":"url(images/Graphic/31x.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
				
			</div>
			<div class="col-md-3">
				<div class="last_course_img">
					<div style={{"background":"url(images/Graphic/course-imag-2.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
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
		<div class="upper_half">Graphic<br /> Designer</div>
		<div class="lower_half">
		<div style={{"background":"url(images/Graphic/51x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			Visual <br /> Designer
		</div>
		<div class="lower_half">
			
		</div>
	</div>
	<div class="future_div">
		<div class="all_full">
		<div style={{"background":"url(images/Graphic/61x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			Art <br /> Director
		</div>
		<div class="lower_half">
			Graphic <br /> Artist 
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
		<div style={{"background":"url(images/Graphic/futuer-job-half-2.jpg) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
		<div class="lower_half">
			Multimedia <br /> Designer 
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
		</div>
		<div class="lower_half">
			Print & <br />Publication <br /> Designer
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			Web <br /> Designer 
		</div>
		<div class="lower_half">
			Graphic <br /> Illustrator
		</div>
	</div>
	<div class="future_div">
		<div class="all_full">
		<div style={{"background":"url(images/Graphic/81x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
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
			Graphic<br /> Designer
		</div>
		<div class="lower_half">
			Art <br /> Director
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			Visual  <br /> Designer 
		</div>
		<div class="lower_half">
			Web   <br /> Designer 
		</div>
	</div>
	<div class="future_div">
		<div class="all_full">
			<div style={{"background":"url(images/Graphic/81x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	
	<div class="future_div">
		<div class="all_full">
			<div style={{"background":"url(images/Graphic/61x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
		</div>
	</div>
	<div class="future_div">
		<div class="upper_half">
			Graphic <br /> Artist
		</div>
		<div class="lower_half">
			Print & <br /> Publication <br /> Designer
		</div>
	</div>
	
	<div class="future_div">
		<div class="upper_half">
			Multimedia <br /> Designer
		</div>
		<div class="lower_half">
			Graphic <br /> Illustrator
		</div>
	</div>
	
	
	
	
	
	
	
	
	
</section>
<section class="course-structure-title">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h2>Course structure</h2>
				<p>The Graphic Design program teaches you how to visualize an idea from concept to impactful communications. You will learn how to create graphics, illustrations, gain mastery of digital tools and typographic applications. This will prepare you to design brand identities, brochures, web pages, social media, posters, signage and more.</p>
				<h3>20 weeks course structure</h3>
			</div>
		</div>
		<div class="row number_row">
			
			<div class="col-md-2 desk_first">
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
						<h4>Design History</h4> 
						<ul>
							<li>Elements of communication design</li>
							<li>History of visual art </li>
							<li>Colour, composition & typography</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2">
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
					
					<div class="below_box">
						<h4>Elements of Design + Principles</h4>
						<ul>
							<li>Basic graphic design</li>
							<li>Advanced colour & composition</li>
							<li>Ways of thinking</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2">
				<div class="first_div third_div">
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
						<h4>Narrative and Process</h4>
						<ul>
							<li>Basics of narrative design</li>
							<li>The design process</li>
							<li>Corporate or brand identity project</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2">
				<div class="first_div fourth_div">
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
					
					<div class="below_box">
						<h4>Design Assets</h4>
						<ul>
							<li>Design for impact</li>
							<li>Design for functionality</li>
							<li>Design for information</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-2">
				<div class="first_div fifth_div">
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
					
					<div class="below_box">
						<h4>Design Systems</h4>
						<ul>
							<li>Introduction to design system</li>
							<li>A design system project:<br />
							publication, wayfinding system or a campaign
							
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			</div>
			<div class="row">
				<div class="col-md-12">
				<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                                
				

			


				<a onClick={()=>{handlecheck(true)}} class="download_curri">DOWNLOAD CURRICULUM 
					<lottie-player class="download_broch_icon yellow" id="motion_dv" src="images/Graphic/arrow_landingpage-red.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
					</a>
                                )
                        
                        }
                        </Consumer>



					
				</div>
			</div>
		</div>
	
</section>
<section class="software-traing">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<h2>Software & tools</h2>
			</div>
			<div class="col-md-3">
				<p>Photoshop<br />
Illustrator<br />
Indesign<br />
After Effects<br /></p>
			</div>
			<div class="col-md-3">
				<div style={{"background":"url(images/Graphic/91x.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
			</div>
		</div>
	</div>
</section>
<section class="eligibilty-crite">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<h2>Eligibility criteria  </h2>
				<p>The programme is designed for anyone who has a keen interest in graphic design.</p>
			</div>
			<div class="col-md-6">
				<h3>Looking for a comprehensive Visual Communication programme?</h3>
				<p>Apply for our 1 year PG Diploma program in Communication Design with specialisation in User Experience Design (UX/UI), Motion Graphics and Digital Brand Communication. Open to graduates from any field. </p>
				<a href="https://apply.andacademy.com/" target="_blank"><img class="tick_img" height="44" src="images/Graphic/tick_icon.svg" alt="" /></a>
			</div>
			<div class="eligiblity_img">
			<div class="cent_back_img" style={{"background":"url(images/Graphic/no-prior-img.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				
			</div>
			
		</div>
	</div>
</section>
<section className="admission-process">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-6">
				<h3>
				Admission process
				</h3>
				<p>Complete your application and secure your place in a programme of your choice in four easy steps.</p>
			</div>
			<div className="col-md-6">
					<div className="adm_sec">
					<div className="adm_number">
					<h4>
						01
					</h4>
					<p>Submit 
an online 
application</p>
				</div>
				<div className="adm_number">
					<h4>
						02
					</h4>
					<p>Schedule an 
interview</p>
				</div>
				<div className="adm_number">
					<h4>
						03
					</h4>
					<p>Receive an 
offer letter</p>
				</div>
				<div className="adm_number">
					<h4>
						04
					</h4>
					<p>Enroll in a 
programme 
and choose 
your payment 
plan</p>
				</div>
					</div>
				
			</div>
		</div>
	</div>
</section>

<section className="fee-financing">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-6">
				<h3>
				Fee & Financing
				</h3>
				<h4>
				Tuition costs for program <br />
is INR 1,00,000 + GST
				</h4>
				<p>Cost is inclusive of in-class learning, online resources, project feedback and mentored support. Additionally you will also get a paid subscription of Adobe Creative Cloud (AdobeXD, Adobe Photoshop, Adobe Illustrator and more).</p>
			</div>
			<div className="col-md-3">
					<h4>EMI starting at just INR 7,500 per month*</h4>
					<div className="enroll_dv">
					<p>*Indicative monthly EMI<br />
Contact our team to know <br />
more about financing options.

</p>
<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                                
								
					

				<a onClick={()=>{handlecheck(true)}}><img className="tick_img" height="44" src="images/Motion/tick_icon.svg" alt="" /></a>
		
                                )
                        
                        }
                        </Consumer>
					</div>
					
				
			</div>
			<div className="col-md-3">
			<div className="cent_back_img" style={{"background":"url(images/fee-financing-img.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}>
				</div>
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
				<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                                
				

			


				

					<a onClick={()=>{handlecheck(true)}}>CONSULT CAREER ADVISORS 
				<lottie-player class="download_broch_icon yellow" id="motion_dv" src="images/Graphic/arrow_landingpage-yellow.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
				</a>
                                )
                        
                        }
                        </Consumer>
				
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
<section class="digital-brand-sec yellow_sec">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
				<a class="anchor_whole" href="motion-graphics-animation-course"><span></span>
				<h6>Intermediate Level </h6> 
				<h5>Motion Graphics Diploma</h5>
				<p>Bring new life to static images with a course in motion graphics using animation and visual effects.
				<img class="tick_img" height="44" src="images/Graphic/tick_icon.svg" alt="" />
				</p>
				
				
				
				</a>
			</div>
			<div class="col-md-4">
				<div class="cent_back_img" style={{"background":"url(images/Graphic/motion_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}>
				</div>
			</div>
		</div>
	</div>
</section>
			<section class="digital-brand-sec black_sec">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4">
					<div class="cent_back_img" style={{"background":"url(images/Graphic/user_below_box.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
						
					</div>
					<div class="col-md-8">
						<a class="anchor_whole" href="user-experience-design-course">
						<h6>Intermediate Level </h6>
						<h5>User Experience Design Diploma</h5>
						<p>Create mobile apps, websites and other digital products that connect with users in relevant and meaningful ways.  
							<img class="tick_img" height="44" src="images/Graphic/tick_icon_black.svg" alt="" />
						</p>
						</a>
					</div>
				</div>
				</div>
			</section>
			<section class="digital-brand-sec another_black">
	<div class="container-fluid">
		<div class="row">
			
			<div class="col-md-8 yellow_div">
				<a class="anchor_whole" href="digital-brand-communication-course">
				<h6>Intermediate Level </h6>
				<h5>Digital Brand Communication Diploma</h5>
				<p>Learn to ideate, design, and promote your brand messaging through visual communication across various digital platforms.
				<img class="tick_img" height="44" src="images/Graphic/tick_icon_red.svg" alt="" /></p>
				</a>
				
			</div>
			<div class="col-md-4">
				<div class="cent_back_img"  style={{"background":"url(images/Graphic/digital_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
			</div>
			</div>
			</div>
			</section>
			<section class="digital-brand-sec blue_sec">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4">
				<div class="cent_back_img"  style={{"background":"url(images/Graphic/interior_below_box.jpg) no-repeat","backgroundSize":"cover","height":"100%", "backgroundPosition" : "center"}}></div>
			</div>
			<div class="col-md-8 blue_div">
				<a class="anchor_whole" href="interior-design-course">
				<h6>beginner Level </h6>
				<h5>Interior Design Diploma</h5>
				<p>Design and build functionally aesthetic residential and commercial spaces.  
				<img class="tick_img" height="44" src="images/Graphic/tick_icon_black.svg" alt="" /></p>
				</a>
				
			</div>
			
		</div>
	</div>
</section>
<footer>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				Copyright 2022 AND Academy | All Rights Reserved
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
      var bot_height = d +c;
      
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
    document.addEventListener("DOMContentLoaded", function(event) { 
		var load = document.getElementById("loader");
	function loadfun(){
		setTimeout(()=>{load.style.display = 'none';},1500)
		
		
		
	}
	loadfun();
		
		});
export default Graphic
