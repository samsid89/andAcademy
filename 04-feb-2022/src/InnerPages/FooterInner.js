import React, { Component } from 'react';

export class FooterInner extends Component {
  render() {
    return <>
    <footer class="Footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <h5>MEET US AT</h5>
                    <p>IIAD Campus,<br /> B-26, Okhla Phase-1,<br /> New Delhi 110020 </p>
                </div>
                <div class="col-md-4">
                    <h5>WRITE TO US </h5>
                    <p><a href="mailto:apply@andacademy.com">apply@andacademy.com</a></p>
                    <p><a href="mailto:info@andacademy.com">info@andacademy.com</a></p>
                    <p class="socialMedai mob_hidden"><a href="#"><img src="./images/twitter.svg" alt="" /></a><a href="#"><img src="./images/facebook.svg" alt="" /></a><a href="#"><img src="./images/linkedin.svg" alt="" /></a><a href="#"><img src="./images/instagram.svg" alt="" /></a><a href="#"><img src="./images/youtube.svg" alt="" /></a></p>
                </div>
                <div class="col-md-4">
                    <h5>CALL US ON</h5>
                    <p><a href="telto:919289281414">+91  9289 281414</a></p>
                    <p><a href="telto:911141380000">+91 11 4138 0000</a></p>
                    <p class="socialMedai desk_hidden"><a href="#"><img src="./images/twitter.svg" alt="" /></a><a href="#"><img src="./images/facebook.svg" alt="" /></a><a href="#"><img src="./images/linkedin.svg" alt="" /></a><a href="#"><img src="./images/instagram.svg" alt="" /></a><a href="#"><img src="./images/youtube.svg" alt="" /></a></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="">
                    <h5>KICKSTART COURSES </h5>
                    <p><a href="graphic-design-course">Graphic Design Diploma</a></p>
                    <p><a href="interior-design-course">Interior Design Diploma</a></p>
                    <p><a href="communication-design-pg-diploma">Communication Design PG Diploma</a></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="">
                    <h5>ADVANCE COURSES </h5>
                    <p><a href="user-experience-design-course">User Experience Diploma</a></p>
                    <p><a href="motion-graphics-animation-course">Motion Graphics Diploma</a></p>
                    <p><a href="digital-brand-communication-course">Digital Brand Communication Diploma</a></p>
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
            <div class="copyright row">
                <div class="col-md-12">
                    <p>Copyright 2022 AND Academy  |  All Rights Reserved</p>
                    <a class="termsAnchor" href="pdf/Application_Portal_Term_&amp;_Condition.pdf" target="_blank">Terms and Conditions</a>
                </div>
                
            </div>
        </div>
    </footer>
            </>;
  }
}

export default FooterInner;
