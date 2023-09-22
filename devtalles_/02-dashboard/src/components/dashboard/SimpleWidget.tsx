import Link from "next/link"



export interface Props {
  title: string,
  id?: string
  subtitle?: string,
  label?: string,
  icon?: React.ReactNode, // tb Puede ser un JSX.Element pero la ventaja del ReactNode es que permite no importar nada y tener de un elemento
  href?: string,
}

export const SimpleWidget = ({ title, href, icon, label, subtitle }: Props) => {
  return (
    <div className="bg-gray-100 shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        {
          label && (
            <div>
              <h2 className="font-bold text-gray-800 text-center">{label}</h2>
            </div>
          )
        }
        <div className="my-3">
          <div className="flex flex-row items-center text-gray-600 justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              {/* <IoCafeOutline size={50} /> */}
              { icon }
            </div>
            <div id="temp" className="text-right">
              <h4 className="text-2xl text-gray-900 text-right">{title}</h4>
              {
                subtitle && ( <p className="text-md text-gray-800 text-right">{subtitle}</p>)
              }
            </div>
          </div>
        </div>
        {
          href 
            ? 
              <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                <Link href={href} className="text-indigo-600 text-xs font-medium">More</Link>
              </div>
            : ''
        }
        
      </div>
    </div>
  )
}