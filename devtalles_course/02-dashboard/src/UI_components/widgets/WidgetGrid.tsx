"use client";
import { IoAddCircle } from "react-icons/io5";
import { SimpleCardWidget } from "./SimpleCardWidget";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);
  return (
    <article className="flex flex-wrap p-2 items-center justify-center">
      <SimpleCardWidget
        title={inCart.toString()}
        href="/dashboard/counter"
        icon={<IoAddCircle size={30} />}
        label="Counter"
        subTitle="Widgets in cart"
      />
    </article>
  );
};
