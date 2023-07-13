import React from "react";
import gerson from '../images/gerson.png';
import eric from '../images/eric.png';
import Card from 'react-bootstrap/Card'
import './specialthanks.css'

const SpecialThanks = () => {
  return (
    <div className="specialcontainer">

    <Card style={{ width: '40rem', height: 'auto' }}>
      <Card.Img variant="top" src={gerson} style={{width: '40rem'}}/>
      <Card.Body>
        <Card.Title>Gerson</Card.Title>
        <Card.Text>
          Gerson has been a positive influence on our learning, being both a kind teacher, and knowledgeable and persistent in helping us fix our problems and start our journey as software developers.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '40rem', height: 'auto' }} className='cardtwo'>
    <Card.Img variant="top" src={eric} style={{width: '40rem'}}/>
      <Card.Body>
        <Card.Title>Eric</Card.Title>
        <Card.Text>
          Eric has been there keeping us on track and ensuring every class went smoothly as we learned, and was never afraid to critique us.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
export default SpecialThanks