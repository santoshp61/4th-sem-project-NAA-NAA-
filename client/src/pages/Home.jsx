import { useEffect, useState } from "react";
import { api } from "../services/api";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/api/products").then(res => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {products.map(p => (
                <div key={p.id}>
                    {p.name} - Rs. {p.price}
                </div>
            ))}
        </div>
    );
};

export default Home;
