import React from 'react'
import { Button ,Card,
    CardBody,
    CardImg,
    Row, Col} from 'reactstrap'
import img1 from "../assets/img/pages/content-img-1.jpg"
export default function Empty() {
    const WhenClick = (e)=>{
        e.preventDefault();
        console.log("Hello my friend")

    }
    return (
        <Row>
            
        <div>
            Hello
            <Button onClick={WhenClick}  color="black">Primary</Button>
            <Col lg="4" md ="6" sm="12">
            <Card>
            <CardImg
              top
              className="img-fluid"
              src={img1}
              alt="card image cap"
            />
          
            <CardBody>
              <h5>Vuexy Admin</h5>
              <p className="mb-0">By Pixinvent Creative Studio</p>
              <span>Elite Author</span>
              <div className="card-btns d-flex justify-content-between mt-2">
                <Button.Ripple className="gradient-light-primary text-white">
                  Download
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  View All
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
          </Col>
        </div>
        </Row>
    )
}
