import img1 from "../assets/b1.jpg"
import img2 from "../assets/b2.jpg"
import img3 from "../assets/b3.jpg"
import img4 from "../assets/b4.jpg"

function Latour() {
  return (
    <section className=" container">
      <div className="row">
        <div className="col-md-12 lat">
          <h1>Latest From Our Blog </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="row mt-5 ">
        <div className="col-md-3 mb-5">
          <div class="single-news card  border-0 text-secondary ">
            <img className="card-top-img" src={img1} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="jan">10 Jan 2018</a>
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">Secret of making Heart Shaped eggs</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              inappropriate behavior ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      
        <div className="col-md-3 mb-5">
          <div class="single-news card  border-0 text-secondary ">
            <img className="card-top-img" src={img2} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="jan">10 Jan 2018</a>
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">Secret of making Heart Shaped eggs</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              inappropriate behavior ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
       
        <div className="col-md-3 mb-5">
          <div class="single-news card  border-0 text-secondary ">
            <img className="card-top-img" src={img3} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="jan">10 Jan 2018</a>
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">Secret of making Heart Shaped eggs</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              inappropriate behavior ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-5">
          <div class="single-news card  border-0 text-secondary ">
            <img className="card-top-img" src={img4} alt="Card image cap" />
            <div className="card-body">
              <a href="#" className="jan">10 Jan 2018</a>
              <h4 className="card-title mt-3 text-secondary ">
                <a href="#" className="text-secondary">Secret of making Heart Shaped eggs</a>
              </h4>
              <p className="card-text mt-4 mb-3">
              inappropriate behavior ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      
       

      </div>
      
    </section>
  );
}

export default Latour;