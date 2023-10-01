import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";

export const metadata = {
	title: "Productos en el carrito",
	description: "Productos en el carrito",
};

interface ProductInCart {
	product: Product;
	quantity: number;
}

const getProductInCart = (cart: { [id: string]: number }): ProductInCart[] => {
	const productsInCart: ProductInCart[] = [];
	for (const id of Object.keys(cart)) {
		const product = products.find((item) => item.id === id);
		if (product) {
			productsInCart.push({ product: product, quantity: cart[id] });
		}
	}

	return productsInCart;
};

export default function CartPage() {
	const cookiesStore = cookies();
	const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
		[id: string]: number;
	};

	const productsInCart = getProductInCart(cart);
	return (
		<div>
			<h1 className="text-5xl">Cart Products</h1>
			<div className=" flex flex-col sm:flex-row gap-2 w-full">
				<div className=" flex flex-col gap-2 w-full sm:w-10/12">
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
