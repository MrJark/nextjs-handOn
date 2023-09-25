import { BsFillHeartbreakFill } from "react-icons/bs";

export const NoFav = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center" >
      <BsFillHeartbreakFill size={50} className="text-red-500"/>
      <span>There are not fav pokemons yet</span>
    </div>
  )
}