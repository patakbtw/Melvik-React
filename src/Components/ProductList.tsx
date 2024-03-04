import { useEffect, useState } from "react";
import md5 from 'crypto-js/md5';

interface ProductProps { id: string, name: string, description: string, price: number };

export default function ProductList() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const generateAuthString = (password: string) => {
      const timestamp = new Date().toISOString().split("T")[0].replace(/-/g, "");
      const authString = `${password}_${timestamp}`;
      return authString;
    }

    const authString = generateAuthString("Valantis");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": md5(authString).toString(),
      },
      body: JSON.stringify({
        action: "get_ids",
        params: { offset: 0, limit: 50 },
      }),
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://api.valantis.store:40000/", requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
        const uniqueIds = new Set();

        // Фильтруем продукты и добавляем только уникальные идентификаторы в Set
        const uniqueProducts = data.result.filter((product: {id: string}) => {
          if (uniqueIds.has(product.id)) {
            return false; // Пропускаем продукты с повторяющимися идентификаторами
          } else {
            uniqueIds.add(product.id);  
            return true;
          }
        });

        setProducts(uniqueProducts);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </li>
      ))}
    </ul>
  );
}
