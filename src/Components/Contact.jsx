import React from 'react'
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div className="container-fluid ">
      <div className="row flex justify-content-around">
        <div className="contactMeTitleDiv card col-md-12">
          <div className="card-body align-items-center ">
            <h1 id='contactMeTitle'>Let's have a talk</h1>
          </div>
            <div className="container-fluid p-1">
              <div className="row">
                <div className="contactMeOption col-md-4">0545423703</div>
                <div className="contactMeOption col-md-4">eliyaou5423703@gmail.com</div>
                <div className="contactMeOption col-md-4">linkedIn/212312</div>
              </div>
            </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid contactMeTitleDiv">
    //   <div className="row flex justify-content-around">
    //     <div className="col-md-12">
    //       <h1 id='contactMeTitle'>Let's have a talk</h1>
    //         <div className="contactMeOption bg-info text-light">0545423703</div>
    //         <div className="contactMeOption bg-dark text-light">eliyaou5423703@gmail.com</div>
    //         <div className="contactMeOption bg-primary text-dark">linkedIn/212312</div>
    //     </div>
    //   </div>
    // </div>
  )
}
