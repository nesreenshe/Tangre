import img1 from "../assets/p1.jpg"
import img2 from "../assets/p2.jpg"
import img3 from "../assets/p3.jpg"
import img4 from "../assets/p4.jpg"
import img5 from "../assets/p5.jpg"
import img6 from "../assets/p6.jpg"
function Our() {
  return (
    <section className=" container">
      <div className="row">
        <div className="col-md-12 lat">
          <h1>Our Recent Completed Projects</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="row mt-5 ">
        <div className="col-md-4 mb-5">
          <div class="single-news card text-center border-0 text-secondary ">
            <img className="card-top-img" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">3D Helmet Design</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              Client Project
              </p>
            </div>
          </div>
        </div>
      
        <div className="col-md-4 mb-5">
          <div class="single-news card text-center border-0 text-secondary ">
            <img className="card-top-img" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">2D Vinyl Design</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              Client Project
              </p>
            </div>
          </div>
        </div>
       
        <div className="col-md-4 mb-5">
          <div class="single-news card text-center border-0 text-secondary ">
            <img className="card-top-img" src={img3} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">Creative Poster Design</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              Client Project
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div class="single-news card text-center border-0 text-secondary ">
            <img className="card-top-img" src={img4} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">Embosed Logo Design</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              Client Project
              </p>
            </div>
          </div>
        </div>
      
        <div className="col-md-4 mb-5">
          <div class="single-news card text-center border-0 text-secondary ">
            <img className="card-top-img" src={img5} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">
3D Disposable Bottle</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              Client Project
              </p>
            </div>
          </div>
        </div>
       
        <div className="col-md-4 mb-5">
          <div class="single-news card text-center border-0 text-secondary ">
            <img className="card-top-img" src={img6} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">3D Logo Design</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              Client Project
              </p>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
}

export default Our;
