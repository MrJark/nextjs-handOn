import Link from "next/link";

export const SimpleCardWidget = () => {
  return (
    <article className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <section className="flex flex-col">
        <h2 className="font-bold text-gray-600 text-center">Counter</h2>

        <section className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">{/* Icono irá aquí */}</div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">Title</h4>
              <p className="text-xs text-gray-500">Subtitle</p>
            </div>
          </div>
        </section>

        <section className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <Link href="#" className="text-indigo-600 text-xs font-medium">
            More
          </Link>
        </section>
      </section>
    </article>
  );
};
