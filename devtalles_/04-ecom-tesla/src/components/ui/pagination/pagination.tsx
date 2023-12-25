import Link from "next/link";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}
export const Pagination = ({ totalPages }: Props) => {
  return (
    <div className="flex text-center justify-center items-center text-white">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <Link
              className="page-link relative block py-1.5 px-6 border-0 bg-transparent outline-none transition-all duration-300 rounded  pointer-events-none focus:shadow-none"
              href="#"
            >
              <IoChevronBack size={30} />
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              1
            </Link>
          </li>
          <li className="page-item active">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded  hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="#"
            >
              2 <span className="visually-hidden"></span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              3
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link relative flex justify-center w-12 py-1.5 mx-6 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
