import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="page-footer font-small pt-2" style={{background:"#f8f9fa"}}>
    <div className="container text-center text-md-left mt-5">
        <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Company name</h6>
                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/> */}
                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur
                adipisicing elit.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Products</h6>
                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/> */}
                <p>
                <a href="#!">Demo 1</a>
                </p>
                <p>
                <a href="#!">Demo 2</a>
                </p>
                <p>
                <a href="#!">Demo 3</a>
                </p>
                <p>
                <a href="#!">Demo 4</a>
                </p>
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                
                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/> */}
                <p>
                <a href="#!">Home</a>
                </p>
                <p>
                <a href="#!">About</a>
                </p>
                <p>
                <a href="#!">Contact Us</a>
                </p>
                <p>
                <a href="#!">Help</a>
                </p>
            </div>
        
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"/> */}
                <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
        </div>   
    </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#!"> Demo</a>
        </div>
    </footer>

    </>
  )
}
