import React from 'react'

const imgSrc= "https://www.pngitem.com/pimgs/m/133-1331009_make-in-india-logo-png-transparent-png.png"
function MakeInIndia() {
    return (
        <div>
            <div className="container my-2">
                <div className="row border">
                    <div className="col-md-7 text-md-center py-3 bg-dark text-white">
                        <h2 className="text-uppercase" style={{color:"orange"}}>We Support <br/><span style={{color:"white"}}>Make In India</span> </h2>
                        <h6 style={{color: 'green'}}>Start your make in India with us where you can form a company with us and we will provide full support to you company registration</h6>
                    </div>
                    <div className="col-md-5 p-0">
                        <i>
                        <img src={imgSrc} style={{overflow:'hidden'}} className="img-fluid m-0"></img>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeInIndia
