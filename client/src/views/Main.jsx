import {Col, Container, Row} from "react-bootstrap";

export default function Main(){
	return (
		<Container>	
			<Row className="justify-content-md-center">
				<Col md="auto">
					<h1>Lo sentimos</h1>
					</Col>	
			</Row>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<h2>El Sitio Web aún se encuentra en construcción</h2>
				</Col>	
			</Row>
		</Container>
	);
}