import ProductInterface from '../../interfaces/ProductInterface';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Badge
} from 'reactstrap';

export default function ProductItem({
  product
}: {
  product: ProductInterface;
}) {
  return (
    <Col>
      <Card key={product.id} className="border-0 mb-3 shadow-sm">
        <CardImg
          src={product.image}
          alt={product.title}
          className="img-fluid"
        />
        <CardBody className="p-3">
          <CardTitle className="h5 mb-1">{product.title}</CardTitle>
          <CardText className="mb-1">Price: ${product.price}</CardText>
          <CardText className="text-muted small">
            <Badge>{product.category.name}</Badge>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
