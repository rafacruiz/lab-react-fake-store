import { useState } from "react";
import * as ProductsServices  from './../../../services/products-service';

function CartList () {

    const [cart, setCart] = useState([]);

    useState(() => {
        const cart = async () => {
            const cart = await ProductsServices.getCart();
            setCart(cart);
        }

        cart();
    }, []);

    return (
        <div>
            <h2 className="my-4">🛒 Carrito de la compra</h2>

            <div className="row">  
                <div className="col-8">

                {cart.length > 0 
                    ? cart.map((cartItem) => (
                        <div className="shadow bg-body-tertiary rounded py-3 mb-2" key={cartItem.id}>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src={cartItem.image} className="img-fluid rounded px-2" />
                                    </div>
                                    <div className="col-md-4">
                                        <h6 className="mb-0">{cartItem.title}</h6>
                                        <small className="text-muted">{cartItem.category}</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            value="1" 
                                            min="1" 
                                        />
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <strong>{cartItem.price}€</strong>
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <button className="btn btn-outline-danger btn-sm">
                                            ✖
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    : 
                        <div className="fw-bold py-3">
                            Cart empty!
                        </div>
                    }
                </div>

                
                <div className="col-4">
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title py-4">Resumen</h5>

                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <strong>50 €</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Envío</span>
                                    <strong>5 €</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>55 €</strong>
                                </li>
                            </ul>

                            <button className="btn btn-primary w-100">
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;