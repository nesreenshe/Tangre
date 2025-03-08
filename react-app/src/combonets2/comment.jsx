import img1 from "../assets/user1.png";
import img2 from "../assets/user2.png"

function Comment() {
 

    return (
     <header className="bg-black container-fluid comment  d-flex justify-content-center align-items-center ">
        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-5 bg-white 1 py-2 m-2">
               <div className="row justify-content-center  ">
                <div className="col-2"><img src={img1} alt="" className="w-75"/></div>
                <div className="col-8"><p>
								Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector,
								hardware.
							</p>
                    <h4>Mark Alviro Wiens</h4>
                
                <p>CEO at Google</p></div>
               </div>
               

            </div>
            <div className="col-md-5 bg-white py-2 m-2">
               <div className="row justify-content-center  ">
                <div className="col-2"><img src={img2} alt="" className="w-75"/></div>
                <div className="col-8"><p>
								Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector,
								hardware.
							</p>
                    <h4>Mark Alviro Wiens</h4>
                
                <p>CEO at Google</p></div>
               </div>
               

            </div>    
        </div>

     </header>
    )
  }
  
  export default Comment