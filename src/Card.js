import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { FaEnvelope, FaMapMarkedAlt, FaPhone ,FaBirthdayCake } from 'react-icons/fa'

const Mycard = ({details}) => {
    console.log(details)
    return(
        <Card>
            <CardBody className="center">
                 <img height="150" width="150" className="rounded-circle img-thumbnail border-danger center"
                   src={details.picture?.large} alt="unable to fetch image"
                 />
                 <CardTitle className="text-primary">
                     <h1>
                         <span className="pr-2 text-dark">{details.name?.title}</span>
                         <span className="pr-2 text-dark">{details.name?.first}</span>
                         <span className="pr-2 text-dark">{details.name?.last}</span>
                     </h1>
                 </CardTitle>
                 <CardText   className="d-flex flex-row  " >
                      <FaMapMarkedAlt className="mx-2" />
                     <span >{details.location?.city} </span>
                     <FaPhone className="mx-2"/>
                     <span > {details.phone}</span>
                 </CardText>
                 <CardText>
                         <FaEnvelope className="mx-2"/>
                         {details?.email}
                 </CardText>
                 <CardText>
                 <FaBirthdayCake className="mx-2"/>
                         {details.dob?.date}
                 </CardText>
                 
            </CardBody>
        </Card>
    )
}

export default Mycard