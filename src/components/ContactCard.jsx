import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function HeaderContact() {
  return (
    <Card style={{ width: '18rem' ,background:"transparent",border:"none" }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{background:"transparent",border:"none" }}>Cras justo odio</ListGroup.Item>
        <ListGroup.Item style={{background:"transparent",border:"none" }}>Dapibus ac facilisis in</ListGroup.Item>
       
      </ListGroup>
    </Card>
  );
}

export default HeaderContact;