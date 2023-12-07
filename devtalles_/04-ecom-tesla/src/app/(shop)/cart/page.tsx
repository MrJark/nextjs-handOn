import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

// como datos ficticios ya que esto será por las cookies
const produtsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function Cart() {
  return (
    <main className="flex justify-center items-center mb-72">
      <div className="flex flex-col w-[1000px]">
        <Title title="Your cart" />
        <div className="flex flex-row justify-between items-center m-5">
          <span className="text-3xl ">Items</span>
          <Link href="/" className="mb-5 underline">
            Continue shopping
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <section className="flex flex-col m-5">
            {/* Items */}
            {produtsInCart.map((product) => (
              <div key={product.slug} className="flex pb-8">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  height={100}
                  className="mr-5 rounded-lg"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector className="mt-2" quantity={1} />
                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </section>
          {/* Summary */}
          <section className="h-fit bg-neutral-700 rounded-xl shadow-xl shadow-neutral-900 p-3 border-none mx-4 sm:mx-0 sm:p-6">
            <h2 className="text-2xl mb-2">Order summary</h2>
            <section className="grid grid-cols-2">
              <span>Products:</span>
              <span className=" text-right">3 articles</span>

              <span>Taxes:</span>
              <span className=" text-right">21%</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </section>
            <div className="mt-10">
              <Link
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
