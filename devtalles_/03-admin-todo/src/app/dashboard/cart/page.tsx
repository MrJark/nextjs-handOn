import {WidgetItem} from "@/components";
import {Product, products} from "@/products/data/products";
import {ItemCard} from "@/shopping-cart";
import {cookies} from "next/headers";

export const metadata = {
  title: "Productos en el carrito",
  description: "Productos en el carrito",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductInCart = (cart: {[id: string]: number}): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((item) => item.id === id);
    if (product) {
      productsInCart.push({product: product, quantity: cart[id]});
    }
  }

  return productsInCart;
};

const taxes: number = 15;

export default function CartPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };

  const productsInCart = getProductInCart(cart);

  const totalToPay = productsInCart.reduce(
    // con el reduce puedes hacer en una única función cunato tienes que pagar
    (prev, current) => current.product.price * current.quantity + prev,
    0
  );

  return (
    <div>
      <div className="flex flex-cols-2 justify-between mb-10">
        <h1 className="text-5xl">Cart Products</h1>
        <div className=" flex ">
          <WidgetItem>
            <div className="mt-2 flex justify-center items-center gap-4">
              <h3 className="text-2xl font-semibold text-gray-600">Total:</h3>
              <span className=" text-2xl font-bold text-gray-800">
                ${(totalToPay + totalToPay * (taxes / 100)).toFixed(2)}
              </span>
            </div>
            <span className=" text-xs text-center font-bold text-gray-600">
              Tax Includes: {taxes}%
            </span>
          </WidgetItem>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row gap-2 w-full">
        <div className=" flex flex-col gap-2 w-full">
          {productsInCart.map((item) => (
            <ItemCard
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
