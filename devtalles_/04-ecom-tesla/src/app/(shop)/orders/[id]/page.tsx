import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";

// como datos ficticios ya que esto será por las cookies
const produtsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}
export default function OrderById({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex justify-center items-center mb-72">
      <article className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`} />

        <div
          className={clsx(
            "flex rounded-lg items-center py-2 px-3.5 text-sm font-semibold tracking-wider text-white mb-5",
            {
              "bg-red-600": false,
              "bg-green-600": true,
            }
          )}
        >
          <IoCartSharp size={30} />
          <p className="mx-3">Pending</p>
          <p className="mx-3">Paid</p>
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
                  <p>${product.price} x 3</p>
                  <p className="font-semibold tracking-widest">
                    Subtotal:{" "}
                    <span className=" tracking-normal">
                      ${product.price * 3}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </section>
          {/* Summary */}
          <section className="h-fit bg-neutral-700 rounded-xl shadow-xl shadow-neutral-900 p-3 border-none mx-4 sm:mx-0 sm:p-6">
            <section>
              <h2 className="text-2xl mb-4 font-bold tracking-wider">
                Shipping Address
              </h2>
              <div className="grid gap-0.5">
                <p className="text-xl">Chema Ferrandez</p>
                <p className="">Evergreen Terrace 741</p>
                <p>Springfield</p>
                <p>Texas, USA</p>
              </div>
            </section>
            {/* Divider */}
            <div className="w-full h-0.5 my-8 rounded-lg bg-white/80" />
            {/* Order confirmed */}
            <section>
              <h2 className="text-2xl mb-2">Order summary</h2>
              <section className="grid grid-cols-2">
                <span>Products:</span>
                <span className=" text-right">9 articles</span>

                <span>Taxes:</span>
                <span className=" text-right">21%</span>

                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">$ 242</span>
              </section>
              <div
                className={clsx(
                  "flex rounded-lg justify-center items-center mt-8 py-4 px-3.5 text-sm font-semibold tracking-wider text-white mb-5",
                  {
                    "bg-red-600": false,
                    "bg-green-600": true,
                  }
                )}
              >
                <p className="mx-3">Pending</p>
                <p className="mx-3">Paid</p>
              </div>
            </section>
          </section>
        </div>
      </article>
    </main>
  );
}
