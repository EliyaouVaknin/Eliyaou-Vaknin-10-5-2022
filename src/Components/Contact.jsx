import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, faLink } from '@fortawesome/free-solid-svg-icons'
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
                <div className="contactMeOption col"><FontAwesomeIcon icon={faMailBulk}/>  eliyaou5423703@gmail.com</div>
                <div className="contactMeOption col"><FontAwesomeIcon icon={faLink}/>  linkedin.com/in/eliyaou-vaknin-393957233</div>
                <div className="contactMeOption col"><FontAwesomeIcon icon={faPhone}/>  +972 54-5423703</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
