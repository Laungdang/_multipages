import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cart.css";

function Cart({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-itemps-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  emove from Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    <div className="carts-total">
      <h4>
        Product: <span className="badge bg-danger">{carts.length} items</span>  - Total Price: 
        <span className="badge bg-success">${carts.reduce((prev, cart) => {
          return prev + cart.price;
        }, 0)}</span>
      </h4>
      <button className="btn bg-warning">Checkout <span><i class="bi bi-wallet"></i></span></button>
      </div>
    </div>
  );
}

export default Cart;
