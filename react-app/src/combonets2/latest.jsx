import img1 from "../assets/n1.jpg"
import img2 from "../assets/n2.jpg"
import img3 from "../assets/n3.jpg"
function Latest() {
  return (
    <section className=" container">
      <div className="row">
        <div className="col-md-12 lat">
          <h1>Latest News from all categories</h1>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="row mt-5 ">
        <div className="col-md-4 mb-5">
          <div class="single-news card">
            <img className="card-top-img" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">
                <a href="#">Addiction Whit Gambling</a>
              </h4>
              <p className="card-text mt-4 mb-3">
                It is a good idea to think of your PC as an office. It stores
                files, programs, pictures. This can be compared to an actual.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div class="single-news card">
            <img className="card-top-img" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">
                <a href="#">Addiction Whit Gambling</a>
              </h4>
              <p className="card-text mt-4 mb-3">
                It is a good idea to think of your PC as an office. It stores
                files, programs, pictures. This can be compared to an actual.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div class="single-news card">
            <img className="card-top-img" src={img3} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title mt-3">
                <a href="#">Addiction Whit Gambling</a>
              </h4>
              <p className="card-text mt-4 mb-3">
                It is a good idea to think of your PC as an office. It stores
                files, programs, pictures. This can be compared to an actual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest;
