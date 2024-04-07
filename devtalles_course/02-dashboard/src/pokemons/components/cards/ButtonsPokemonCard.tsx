import { useAppSelector } from "@/store";
import { BtnPokedex } from "./buttons/BtnPokedex";
import { BtnCompetitive } from "./buttons/BtnCompetitive";

interface Props {
  id: string;
  name: string;
}

export const ButtonsPokemonCard = ({ id, name }: Props) => {
  return (
    <section className="border-b">
      <BtnPokedex name={name} />
      <BtnCompetitive />
    </section>
  );
};
