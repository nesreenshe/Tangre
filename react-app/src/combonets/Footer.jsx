import img1 from "../assets/i1.jpg"
import img2 from "../assets/i2.jpg"
import img3 from "../assets/i3.jpg"
import img4 from "../assets/i4.jpg"
import img5 from "../assets/i5.jpg"
import img6 from "../assets/i6.jpg"
import img7 from "../assets/i7.jpg"
import img8 from "../assets/i8.jpg"


function Footer() {
 

    return (
      <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3  col-md-6">
            <div className="single-footer-widget">
              <h6>Top Products</h6>
              <ul className="footer-nav">
                <li><a href="#">Managed Website</a></li>
                <li><a href="#">Manage Reputation</a></li>
                <li><a href="#">Power Tools</a></li>
                <li><a href="#">Marketing Service</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-footer-widget newsletter">
              <h6>Newsletter</h6>
              <p className="fp">You can trust us. we only send promo offers, not a single spam.</p>
              <div >
                <form target="_blank" novalidate="true"action="" className="form-inline">
  
                  <div className="form-group row">
                    <div className="col-lg-8 col-md-12">
                      <input name="EMAIL" placeholder="Your Email Address"  required="" type="email" className="w-100 p-2 rounded-pill" />
                       
                    </div>
  
                    <div className="col-lg-4 col-md-12">
                      <button className="nw-btn primary-btn p-2 w-75  rounded-pill" >Subscribe<span className="lnr lnr-arrow-right"></span></button>
                    </div>
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-12">
          <h6 className="mb-20">Instragram Feed</h6>
            <div className="row">
              <div className="col-3">
              <img src={img1} alt="" />
              </div>
              <div className="col-3">
              <img src={img2} alt="" />
              </div>
              <div className="col-3">
              <img src={img3} alt="" />
              </div>
              <div className="col-3">
              <img src={img4} alt="" />
              </div>

              
            </div>
            <div className="row mt-2">
              <div className="col-3">
              <img src={img5} alt="" />
              </div>
              <div className="col-3">
              <img src={img6} alt="" />
              </div>
              <div className="col-3">
              <img src={img7} alt="" />
              </div>
              <div className="col-3">
              <img src={img8} alt="" />
              </div>

              
            </div>

          </div>
        </div>
  
        <div className="footer-bottom d-flex justify-content-between align-items-center mt-5">
          <p className="col-lg-8 col-sm-12 footer-text m-0">
  Copyright © 2025 All rights reserved | This template is made with  by <a href="" className="inf">Colorlib</a>
 
  </p>
         
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer