import React,{useEffect} from 'react';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';
import $ from 'jquery';
import ModalPopup from '../components/ModalPopup';
import { Consumer } from '../components/Context';
import FooterInner from './FooterInner';


global.jQuery = global.$ = require('jquery'); 
function Communication(props) {
    
    return (
        <>
            <Helmet>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
              <link rel="stylesheet" href="css/CommunicationStyle.css" />
			  <link rel="stylesheet" href="css/FooterInner.css" />
			  <meta name="description" content="Launch your career in design with our PG Diploma and become an expert in Visual Communication, Graphic Design, UX/UI, Motion Graphics and much more, apply now. "/>
			  
			  <meta name="keywords" content="visual communication diploma, visual communication course, communication design diploma, diploma in visual communication design, PG diploma in visual communication, PG Diploma in communication design, communication design , communication design courses, communication design program, courses in communication design, AND Academy"/>
              <title>PG Diploma in Communication Design | Visual Communication Course</title>
			  
              </Helmet>
            <div id="loader" className="loader"></div>
            <header id="myHeader">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-9">
					<a className="logo" href="/">
						<div className="logo_img"></div>
					</a>
				</div>
				<div className="col-md-3">	
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
	<div id="overflow_hidden"></div>
	<section className="banner">
		<div className="container-fluid">
			<div className="row first_row">
				<div className="col-md-5  center_sec motion_section">
					<lottie-player id="motion_dv" src="images/Communication/landing_motion.json" background="transparent" speed="1" pause="1000" style={{"width":"100%","height":"100%","maxWidth":"440px","marginLeft":"auto","marginRight":"auto"}} loop autoplay></lottie-player>
					<div className="specialis_div">
						<p className="specialis">With specialisation in-</p>
						<p className="user_type">USER EXPERIENCE DESIGN / MOTION GRAPHICS / DIGITAL BRAND COMMUNICATION</p>
					</div>
				</div>
				<div className="col-md-3 bord-right center_sec no_padd_col center_sec_image">
					<div className="home_center_img">
						<div style={{"background":"url(images/Communication/61x.webp) no-repeat","backgroundSize":"cover","height":"100%","backgroundPosition":"center center"}}></div>
					</div>
					<div className="text-div text-div-cent">
						<p>Build your career with our industry integrated PG Diploma that covers the entire spectrum of visual communication from fundamentals to a specialisation in a chosen field.</p>
						<h2 className="desk-h2">1 Year<br />
Hybrid Model (On campus + online)<br />
Placement Guarantee</h2>
						<div className="mob-h2">
							<div className="specialis_div_mob">
							Specialisations : <br />
User Experience Design / <br />
Digital Brand Communication /<br /> Motion Graphic Design
								<h3>Application Deadline: 26.02.2022</h3>
							</div>
							<div className="feat_list">
								<ul>
									<li>1 Year</li>
									<li>Hybrid Model<br />(On campus + online)</li>
									<li>Placement Guarantee</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 mob_padding_no desk_padding_right_0 right_last_sec">
					<div className="row">
						<div className="col-md-5">
							<div className="text-div">
								<h3>Application Deadline: 26.02.2022</h3>
							</div>
						</div>
						<div className="col-md-7">
							<div className="home_right_img">
								<div style={{"background":"url(images/Communication/home-right-new.jpg) no-repeat","backgroundSize":"cover","height":"100%","backgroundPosition":"center center"}}></div>
							</div>
						</div>
					</div>	
					<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                       
				
				
			<a onClick={()=>{handlecheck(true)}} className="download_broch">DOWNLOAD BROCHURE 
				<lottie-player class="download_broch_icon" id="motion_dv" src="images/Communication/arrow_landingpage.json" background="transparent"   speed="1" pause="1000"  style={{"width":"40px","height":"40px","position":"relative","top":"4px"}}  loop  autoplay></lottie-player>
				</a>
                                )
                        
                        }
                        </Consumer>
					
				</div>
			</div>
            </div>
	</section>
	<section className="course-title">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2>Course highlights </h2>
				</div>
			</div>
		</div>
	</section>
	<section className="course-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<div className="classes_div cl_dv_1">
						<h3>Hybrid
<br /> 
learning</h3>
						<p>20 weeks on-campus 
intense module followed by a 20-week online specialisation, integrated with a 6-month industry internship</p>
					</div>
					<div className="classes_div cl_dv_2">
						<h3>Learn from 
<br />
experts</h3>
						<p>Lectures by leading faculties  and dedicated mentorship by industry professionals from around the world</p>
					</div>
					<div className="classes_div cl_dv_3">
						<h3>Guaranteed<br />
Placements</h3>
						<p>This programme comes with a placement guarantee and internship support</p>
					</div>
					<div className="classes_div cl_dv_4">
						<h3>Professional <br />
networking</h3>
						<p>Build a network of design professionals and make lifelong connections</p>
					</div>
					<div className="classes_div mob_img">
						<div style={{"background":"url(images/Communication/61x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="first_course_img">
						<div style={{"background":"url(images/Communication/course-imag-1.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="last_course_img">
						<div style={{"background":"url(images/Communication/prof-netw.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="future_title">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2>Future job roles  </h2>
				</div>
			</div>
		</div>
	</section>
	<section className="future_sec mob_hid">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="max_widt">
						<div className="future_div">
							<div className="upper_half">UX/UI
								<br />Designer</div>
							<div className="lower_half">
								<div style={{"background":"url(images/Communication/91x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
							</div>
						</div>
						<div className="future_div">
							<div className="upper_half">UX
								<br />Researcher
							</div>
							<div className="lower_half">Information
								<br />Designer</div>
						</div>
						<div className="future_div">
							<div className="upper_half">Visual
								<br />Designer</div>
							<div className="lower_half">Animator</div>
						</div>
						<div className="future_div">
							<div className="upper_half">
								<div style={{"background":"url(images/Communication/31x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
							</div>
							<div className="lower_half">Motion
								<br />Graphic
								<br />Designer</div>
						</div>
						<div className="future_div">
							<div className="upper_half">
								<p>Digital
									<br />Brand
									<br />Manager</p>
							</div>
							<div className="lower_half">Social
								<br />Media
								<br />Strategist</div>
						</div>
						<div className="future_div">
							<div className="upper_half">Creative
								<br />Director</div>
							<div className="lower_half">
								<div style={{"background":"url(images/Communication/11x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
							</div>
						</div>
						<div className="future_div">
							<div className="upper_half">
								<p>Art
									<br />Director</p>
							</div>
							<div className="lower_half">Visualiser</div>
						</div>
						<div className="future_div">
							<div className="all_full">
								<div style={{"background":"url(images/Communication/future-pic.webp) no-repeat","backgroundPosition":"right","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="future_sec desk_hid">
		<div className="future_div">
			<div className="upper_half">
				<p>UX / UI
					<br />Designer</p>
			</div>
			<div className="lower_half">Information<br /> Designer</div>
		</div>
		<div className="future_div">
			<div className="upper_half">UX <br /> Researcher</div>
			<div className="lower_half">Visual<br /> Designer</div>
		</div>
		<div className="future_div">
			<div className="all_full">
				<div style={{"background":"url(images/Communication/11x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
			</div>
		</div>
		<div className="future_div">
			<div className="all_full">
				<div style={{"background":"url(images/Communication/31x.webp) no-repeat","backgroundSize":"cover","height":"100%","width":"100%"}}></div>
			</div>
		</div>
		<div className="future_div last_future_div">
			<div className="upper_half">Animator</div>
			<div className="lower_half">Motion<br /> Graphics<br /> Designer</div>
			<div className="lower_half">Digital<br /> Brand<br /> Manager</div>
			<div className="lower_half">Social<br /> Media<br /> Strategist</div>
		</div>
		<div className="future_div">
			<div className="upper_half">Visualiser</div>
		</div>
		<div className="future_div last_future_div">
			<div className="lower_half">Art Director</div>
			<div className="lower_half">Creative<br /> Director</div>	
		</div>
		
	</section>
	<section className="course-structure-title above-course-sturuc">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2>Course structure</h2>
					<p>This program offers you the most comprehensive syllabus from basics to industry-ready specialisation over two terms. The first term will teach you the fundamentals of communication design across colour theory, composition, typography, creative thinking and design process. <br /><br />

In the second term, you will have the opportunity to do an industry internship alongside online evening classes in your chosen specialisation. Furthermore, you get trained in relevant industry-standard software and tools as well as develop a robust portfolio of advanced projects.</p>
					<h3 className="seemester_ONE"><span>Semester 1</span>  Graphic Design Term |  20 weeks | On-Campus</h3>
				</div>
			</div>
			<div className="row number_row mob_hide_accordion">
				<div className="col-md-2 desk_first">
					<div className="first_div">
						<div className="number_div">1</div>
						<div className="number_div">2</div>
						<div className="number_div">3</div>
						<div className="number_div">4</div>
						<div className="below_box">
							<h4>Design History</h4> 
							<ul>
								<li>Elements of communication design</li>
								<li>History of visual art</li>
								<li>Colour, composition & typography</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div second_div">
						<div className="number_div">5</div>
						<div className="number_div">6</div>
						<div className="number_div">7</div>
						<div className="number_div">8</div>
						<div className="below_box">
							<h4>Elements of Design + Principles</h4>
							<ul>
								<li>Basic graphic design</li>
								<li>Advanced colour & composition</li>
								<li>Ways of thinking</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div third_div">
						<div className="number_div">9</div>
						<div className="number_div">10</div>
						<div className="number_div">11</div>
						<div className="number_div">12</div>
						<div className="below_box">
							<h4>Narrative and Process</h4>
							<ul>
								<li>Basics of narrative design</li>
								<li>The design process</li>
								<li>Corporate or brand identity</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div fourth_div">
						<div className="number_div">13</div>
						<div className="number_div">14</div>
						<div className="number_div">15</div>
						<div className="number_div">16</div>
						<div className="below_box">
							<h4>Design Assets</h4>
							<ul>
								<li>Design for impact</li>
								<li>Design for functionality</li>
								<li>Design for information</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div fifth_div">
						<div className="number_div">17</div>
						<div className="number_div">18</div>
						<div className="number_div">19</div>
						<div className="number_div">20</div>
						<div className="below_box">
							<h4>Design Systems</h4>
							<ul>
								<li>Introduction to design system</li>
								<li>A design system project: publication, wayfinding system or a campaign</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<div className="accordion width desk_hide_accordion" id="accordionHorizontalExample1">
						<div className="card">
							<div className="card-header" data-toggle="collapse" data-target="#collapseOneAnother"> <span>&nbsp;</span>
							</div>
							<div id="collapseOneAnother" className="collapse show width" data-parent="#accordionHorizontalExample1">
								<div className="card-body">
									<div className="row number_row">
				<div className="col-md-2 desk_first">
					<div className="first_div">
						<div className="number_div">1</div>
						<div className="number_div">2</div>
						<div className="number_div">3</div>
						<div className="number_div">4</div>
						<div className="below_box">
							<h4>Design History</h4> 
							<ul>
								<li>Elements of communication design</li>
								<li>History of visual art</li>
								<li>Colour, composition & typography</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div second_div">
						<div className="number_div">5</div>
						<div className="number_div">6</div>
						<div className="number_div">7</div>
						<div className="number_div">8</div>
						<div className="below_box">
							<h4>Elements of Design + Principles</h4>
							<ul>
								<li>Basic graphic design</li>
								<li>Advanced colour & composition</li>
								<li>Ways of thinking</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div third_div">
						<div className="number_div">9</div>
						<div className="number_div">10</div>
						<div className="number_div">11</div>
						<div className="number_div">12</div>
						<div className="below_box">
							<h4>Narrative and Process</h4>
							<ul>
								<li>Basics of narrative design</li>
								<li>The design process</li>
								<li>Corporate or brand identity</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div fourth_div">
						<div className="number_div">13</div>
						<div className="number_div">14</div>
						<div className="number_div">15</div>
						<div className="number_div">16</div>
						<div className="below_box">
							<h4>Design Assets</h4>
							<ul>
								<li>Design for impact</li>
								<li>Design for functionality</li>
								<li>Design for information</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<div className="first_div fifth_div">
						<div className="number_div">17</div>
						<div className="number_div">18</div>
						<div className="number_div">19</div>
						<div className="number_div">20</div>
						<div className="below_box">
							<h4>Design Systems</h4>
							<ul>
								<li>Introduction to design system</li>
								<li>A design system project:publication, wayfinding system or a campaign</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
							</div>
						</div>
					</div>
			
			
			
			</div>
	</section>
	<section  className="course-structure-title accordion_section">
		<div className="container-fluid">
		<div className="row">
				<div className="col-md-12">
				<h3 className="mob_side_pad"><span>Semester 2</span>  Pick a Specialisation | 20 weeks | Online evening classes | Industry internship</h3>
				</div>
				
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="accordion width" id="accordionHorizontalExample">
						<div id="firstAccordion" className="card active">
							<div className="card-header" data-toggle="collapse" data-target="#collapseOne"> <span>01. <br />USER <br />EXPERIENCE <br />DESIGN</span>
							</div>
							<div id="collapseOne" className="collapse show width" data-parent="#accordionHorizontalExample">
								<div className="card-body">
									<div className="row number_row accordion_row">
										{/*<div className="col-md-2 mobile_first">
											<div className="first_div">
												<div className="number_div">1</div>
												<div className="below_box">
													<h4>Introductory session</h4>
												</div>
											</div>
										</div>
										<div className="col-md-2 desk_first">
											<div className="first_div only_first">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="number_div">5</div>
												<div className="below_box">
													<h4>Visual Language</h4> 
													<ul>
														<li>Introductory session</li>
														<li>Elements of design</li>
														<li>Colour & composition</li>
														<li>Design process</li>
													</ul>
												</div>
											</div>
										</div>*/}
										<div className="col-md-2 desk_first">
											<div className="first_div second_div">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="below_box">
													<h4>Elements of UX</h4>
													<ul>
														<li>UX process</li>
														<li>User needs</li>
														<li>Business assets</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div third_div">
												<div className="number_div">5</div>
												<div className="number_div">6</div>
												<div className="number_div">7</div>
												<div className="number_div">8</div>
												<div className="below_box">
													<h4>Scope and Structure</h4>
													<ul>
														<li>Feature functionality</li>
														<li>Information architecture</li>
														<li>Interaction design</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div fourth_div">
												<div className="number_div">9</div>
												<div className="number_div">10</div>
												<div className="number_div">11</div>
												<div className="number_div">12</div>
												<div className="below_box">
													<h4>Skeleton and  Surface</h4>
													<ul>
														<li>Navigation design</li>
														<li>Interface design</li>
														<li>Information design</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div fifth_div">
												<div className="number_div">13</div>
												<div className="number_div">14</div>
												<div className="number_div">15</div>
												<div className="number_div">16</div>
												<div className="below_box">
													<h4>Design Sprint</h4>
													<ul>
														<li>User onboarding</li>
														<li>Page types</li>
														<li>Dashboard design</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div sixth_div">
												<div className="number_div">17</div>
												<div className="number_div">18</div>
												<div className="number_div">19</div>
												<div className="number_div">20</div>
												<div className="below_box">
													<h4>Design System Projects</h4>
													<ul>
														<li>Content hub</li>
														<li>Online store</li>
														<li>Mobile app</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="secondAccordion" className="card">
							<div className="card-header header-2" data-toggle="collapse" data-target="#collapseTwo">02. <br /> MOTION <br />GRAPHICS</div>
							<div id="collapseTwo" className="collapse width" data-parent="#accordionHorizontalExample">
								<div className="card-body">
									<div className="row number_row accordion_row accordion_row_2">
										{/*<div className="col-md-2 mobile_first">
											<div className="first_div">
												<div className="number_div">1</div>
												<div className="below_box">
													<h4>Introductory session</h4>
												</div>
											</div>
										</div>
										<div className="col-md-2 desk_first">
											<div className="first_div only_first">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="number_div">5</div>
												<div className="below_box">
													<h4>Visual Language</h4> 
													<ul>
														<li>Introductory session</li>
														<li>Composition principle</li>
														<li>Object motion</li>
														<li>Camera motion</li>
													</ul>
												</div>
											</div>
										</div>*/}
										<div className="col-md-2 desk_first">
											<div className="first_div second_div">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="below_box">
													<h4>Elements of Motion</h4>
													<ul>
														<li>Time & space</li>
														<li>Principles of animation</li>
														<li>Composition & staging</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div third_div">
												<div className="number_div">5</div>
												<div className="number_div">6</div>
												<div className="number_div">7</div>
												<div className="number_div">8</div>
												<div className="below_box">
													<h4>Motion Emotion</h4>
													<ul>
														<li>Logo type animation</li>
														<li>Sound design</li>
														<li>Text in motion</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div fourth_div">
												<div className="number_div">9</div>
												<div className="number_div">10</div>
												<div className="number_div">11</div>
												<div className="number_div">12</div>
												<div className="below_box">
													<h4>Character design</h4>
													<ul>
														<li>Character anatomy</li>
														<li>Personality & caricature</li>
														<li>Characters in motion</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div fifth_div">
												<div className="number_div">12</div>
												<div className="number_div">14</div>
												<div className="number_div">15</div>
												<div className="number_div">16</div>
												<div className="below_box">
													<h4>Motion Graphics for Gamification</h4>
													<ul>
														<li>Gamification</li>
														<li>Title sequence</li>
														<li>Explainer videos</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div sixth_div">
												<div className="number_div">17</div>
												<div className="number_div">18</div>
												<div className="number_div">19</div>
												<div className="number_div">20</div>
												<div className="below_box">
													<h4>Motion Design System</h4>
													<ul>
														<li>Creating brands Design system: Attributes & characteristics</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="thirdAccordion" className="card">
							<div className="card-header header-3" data-toggle="collapse" data-target="#collapseThree">03. <br />DIGITAL BRAND <br />COMMUNICATION</div>
							<div id="collapseThree" className="collapse width" data-parent="#accordionHorizontalExample">
								<div className="card-body">
									<div className="row number_row accordion_row accordion_row_3">
										{/*<div className="col-md-2 mobile_first">
											<div className="first_div">
												<div className="number_div">1</div>
												<div className="below_box">
													<h4>Introductory session</h4>
												</div>
											</div>
										</div>
										<div className="col-md-2 desk_first">
											<div className="first_div only_first">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="number_div">5</div>
												<div className="below_box">
													<h4>Visual Language</h4> 
													<ul>
														<li>Introductory session</li>
														<li>Elements of design</li>
														<li>Colour & composition</li>
														<li>Design process</li>
													</ul>
												</div>
											</div>
										</div>*/}
										<div className="col-md-2 desk_first">
											<div className="first_div second_div">
												<div className="number_div">1</div>
												<div className="number_div">2</div>
												<div className="number_div">3</div>
												<div className="number_div">4</div>
												<div className="below_box">
													<h4>Introduction to Digital Media</h4>
													<ul>
														<li>What is digital?</li>
														<li>Channels and sssets</li>
														<li>Basics of digital</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div third_div">
												<div className="number_div">5</div>
												<div className="number_div">6</div>
												<div className="number_div">7</div>
												<div className="number_div">8</div>
												<div className="below_box">
													<h4>Channels of Digital Media</h4>
													<ul>
														<li>Content & social</li>
														<li>Mobile & advertising</li>
														<li>MarTech introduction</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div fourth_div">
												<div className="number_div">9</div>
												<div className="number_div">10</div>
												<div className="number_div">11</div>
												<div className="number_div">12</div>
												<div className="below_box">
													<h4>Revisiting Brand</h4>
													<ul>
														<li>Brand assets</li>
														<li>Strategy</li>
														<li>Visual language & tone</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div fifth_div">
												<div className="number_div">13</div>
												<div className="number_div">14</div>
												<div className="number_div">15</div>
												<div className="number_div">16</div>
												<div className="below_box">
													<h4>Content Marketing</h4>
													<ul>
														<li>Video content</li>
														<li>Stories</li>
														<li>Infographics & memes</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-md-2">
											<div className="first_div sixth_div">
												<div className="number_div">17</div>
												<div className="number_div">18</div>
												<div className="number_div">19</div>
												<div className="number_div">20</div>
												<div className="below_box">
													<h4>Brand Campaign Project</h4>
													<ul>
														<li>Campaign plan</li>
														<li>Strategy</li>
														<li>Execution</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">	
						<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                       
				

				<a onClick={()=>{handlecheck(true)}} className="download_curri">DOWNLOAD CURRICULUM 
					<lottie-player class="download_broch_icon yellow mob_hide_arrow" id="motion_dv" src="images/Communication/arrow_landingpage.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
					<lottie-player class="download_broch_icon yellow desk_hide_arrow" id="motion_dv" src="images/Communication/arrow_landingpage.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
					
					</a>
                                )
                        
                        }
                        </Consumer>
						
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="software-traing">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-9">
					<h2>Software & tools</h2>
					<h3>Graphic design term</h3>
					<p>Photoshop | Illustrator | Indesign | After Effects</p><br />
					<h3>SpecialisatioN Term</h3>
					<p><span>USER EXPERIENCE DESIGN: &nbsp;</span> Adobe XD | Figma | Sketch | Zeplin</p>
					<p><span>MOTION GRAPHICS: &nbsp;</span> Photoshop | Illustrator | After Effects | Premier Pro | Cinema 4d</p>
					<p className="para_marg_bot"><span>DIGTIAL BRAND COMMUNICATION: &nbsp;</span> Photoshop | Illustrator | Indesign | Adobe Spark | Canva | Hootsuite</p>
				</div>
				<div className="col-md-3" style={{"display":"none"}}></div>
				<div className="col-md-3">
					<div style={{"background":"url(images/Communication/91x.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
			</div>
		</div>
	</section>
	<section className="eligibilty-crite">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<h2>Eligibility criteria  </h2>
				</div>
				<div className="col-md-6">
					<p>This programme is designed for graduates from any background or skill-set. No prior knowledge or experience of design is required.
</p>
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
is INR 2,50,000 + GST
				</h4>
				<p>Cost is inclusive of in-class learning, online resources, project feedback and mentored support. Additionally you will also get a paid subscription of Adobe Creative Cloud (AdobeXD, Adobe Photoshop, Adobe Illustrator and more).</p>
			</div>
			<div className="col-md-3">
					<h4>EMI starting at just INR 12,500 per month*</h4>
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
	<section className="not-sure">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2>Looking for a 6 months fast- <br />track program? </h2>
					<p>Check out our diploma programmes in User Experience Design, Digital Brand communication, Motion Graphic Design, Graphic Design and Interior design.</p>
					
				</div>
			</div>
		</div>
	</section>
	<section className="digital-brand-sec yellow_sec another_yellow_sec">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-8">	<a className="anchor_whole" href="user-experience-design-course"><span></span>
				<h6>Intermediate Level </h6>
				<h5>User Experience Design Diploma</h5>
				<p><span>Create mobile apps, websites and other digital products that connect with users in relevant and meaningful ways.</span>   
				<img className="tick_img" height="44" src="images/Communication/tick_icon_black.svg" alt="" />
				</p>
				
				
				
				</a>
				</div>
				<div className="col-md-4">
					<div className="cent_back_img" style={{"background":"url(images/Communication/user_below_box.jpg) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
			</div>
		</div>
	</section>
	<section className="digital-brand-sec black_sec">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4">
					<div className="cent_back_img" style={{"background":"url(images/Communication/digital_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
				<div className="col-md-8">
					<a className="anchor_whole" href="digital-brand-communication-course">
						<h6>Intermediate Level </h6>
						<h5>Digital Brand Communication Diploma</h5>
						<p><span>Learn to ideate, design, and promote your brand messaging through visual communication across various digital platforms.</span>
							<img className="tick_img" height="44" src="images/Communication/tick_icon_red.svg" alt="" />
						</p>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section className="digital-brand-sec">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-8 yellow_div">
					<a className="anchor_whole" href="graphic-design-course">
						<h6>beginner Level </h6>
						<h5>Graphic Design Diploma</h5>
						<p><span>Master the fundamentals of graphic design, from colour theory, composition and typography to creative applications and design processes.</span>

							<img className="tick_img" height="44" src="images/Communication/tick_icon_red.svg" alt="" />
						</p>
					</a>
				</div>
				<div className="col-md-4">
					<div className="cent_back_img" style={{"background":"url(images/Communication/graphic_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
			</div>
		</div>
	</section>
	<section className="digital-brand-sec another_black">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4">
					<div className="cent_back_img" style={{"background":"url(images/Communication/motion_below_box.webp) no-repeat","backgroundSize":"cover","height":"100%"}}></div>
				</div>
				<div className="col-md-8">
					<a className="anchor_whole" href="motion-graphics-animation-course">
						<h6>Intermediate Level </h6>
						<h5>Motion Graphics Diploma</h5>
						<p><span>Bring new life to static images with a course in motion graphics using animation and visual effects.</span>

							<img className="tick_img" height="44" src="images/Communication/tick_icon.svg" alt="" />
						</p>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section className="digital-brand-sec blue_sec">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-8 blue_div">
					<a className="anchor_whole" href="interior-design-course">
						<h6>beginner Level </h6>
						<h5>Interior Design Diploma</h5>
						<p><span>Design and build functionally aesthetic residential and commercial spaces.</span>
							<img className="tick_img" height="44" src="images/Communication/tick_icon_black.svg" alt="" />
						</p>
					</a>
				</div>
				<div className="col-md-4">
					<div className="cent_back_img" style={{"background":"url(images/Communication/interior_below_box.jpg) no-repeat","backgroundSize":"cover","height":"100%", "backgroundPosition" : "center"}}></div>
				</div>
			</div>
		</div>
	</section>
	<section className="not-sure">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2>Not sure about which <br />
programme to pick ?</h2>
<Consumer>
                        {

							
                            ({data,handlecheck})=>(
                       
				
					<a onClick={()=>{handlecheck(true)}}>CONSULT CAREER ADVISORS 
				<lottie-player class="download_broch_icon yellow" id="motion_dv" src="images/Communication/arrow_landingpage-yellow.json"  background="transparent"   speed="1" pause="1000"  style={{"width":"60px","height":"60px","position":"relative","top":"7px"}}  loop  autoplay></lottie-player>
				</a>
                                )
                        
                        }
                        </Consumer>
					
				</div>
			</div>
		</div>
	</section>
	<FooterInner></FooterInner>




            <ModalPopup data={props.data}></ModalPopup>
<ScriptTag isHydrating={true} type="text/javascript" src="../js/jquery-3.2.1.slim.min.js" />
<ScriptTag isHydrating={true} type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
<ScriptTag isHydrating={true} type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
<ScriptTag isHydrating={true} type="text/javascript" src="owlcarousel/owl.carousel.min.js" />
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
      var bot_height = d + c;
      
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
  document.addEventListener("DOMContentLoaded", function() { 
$(window).trigger('resize');
});

document.addEventListener("DOMContentLoaded", function() { 
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

        document.addEventListener("DOMContentLoaded", function() { 
		
		    
		
		    $('#firstAccordion .card-header').on('click', function () {

                if($(this).parent().hasClass('active'))
                {
                    $(this).parent().removeClass('active');
                }
                else{
                    $(this).parent().addClass('active');
                }
		        
               $('#secondAccordion').removeClass('active');
               $('#thirdAccordion').removeClass('active');
				
		    });
            $('#secondAccordion .card-header').on('click', function () {
		        if($(this).parent().hasClass('active'))
                {
                    $(this).parent().removeClass('active');
                }
                else{
                    $(this).parent().addClass('active');
                }
                $('#firstAccordion').removeClass('active');
                $('#thirdAccordion').removeClass('active');
				
		    });
            $('#thirdAccordion .card-header').on('click', function () {
              
                if($(this).parent().hasClass('active'))
                {
                    $(this).parent().removeClass('active');
                }
                else{
                    $(this).parent().addClass('active');
                }
                $('#secondAccordion').removeClass('active');
                $('#firstAccordion').removeClass('active');
				
		    });

            var horizontalAccordions = $(".accordion.width");
				horizontalAccordions.each(function() {
					var accordion = $(this);
					var collapse = accordion.find(".collapse");
					var bodies = collapse.find("> *");
					
				   
					
					setTimeout(()=>{accordion.height(accordion.height());},500)
					
					setTimeout(()=>{bodies.width(bodies.eq(0).width());bodies.height(bodies.eq(0).height());
						collapse.not(".show").each(function() {
							$(this).parent().find("[data-toggle='collapse']")
								.addClass("collapsed");
								
						});
					
					},500)
					
					
				});

			

		
			
		           
		});
		document.addEventListener("DOMContentLoaded", function(event) { 
			var load = document.getElementById("loader");
		function loadfun(){
			setTimeout(()=>{load.style.display = 'none';},1500)
			
			
			
		}
		loadfun();
			
			});

export default Communication
