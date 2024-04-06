import Link from "next/link";

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  // icon?: JSX.Element; // puede ser de ambas maneras lo buenos del ReactNode es que pueden haber varios icons mientras que de JSX solo puede haber uno
  href?: string;
}

export const SimpleCardWidget = ({
  title,
  href,
  icon,
  label,
  subTitle,
}: Props) => {
  return (
    <article className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <section className="flex flex-col">
        {label && ( // se hace así porque puede o no venir, por tanto, si no viene ni se renderiza
          <h2 className="font-bold text-gray-600 text-center">{label}</h2>
        )}
        <section className="my-3">
          <article className="flex flex-row items-center justify-center space-x-1 ">
            {icon}
            <section id="temp" className="text-right">
              <h4 className="text-4xl">{title}</h4>
              {subTitle && <p className="text-xs text-gray-500">{subTitle}</p>}
            </section>
          </article>
        </section>

        {href && (
          <section className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link
              href={`${href}`}
              className="text-indigo-600 text-xs font-medium"
            >
              More
            </Link>
          </section>
        )}
      </section>
    </article>
  );
};
