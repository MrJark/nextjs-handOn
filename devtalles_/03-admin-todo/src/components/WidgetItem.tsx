interface Props {
  title?: string;
  children: React.ReactNode;
}

export const WidgetItem = ({children, title}: Props) => {
  return (
    <>
      <div className="md:col-span-2 lg:col-span-1 shadow-lg shadow-blue-100">
        <div className="h-full py-2 px-8 space-y-6 rounded-xl border border-gray-200 bg-white">
          <div className="">
            <h5 className="text-2xl font-bold text-gray-600 text-center">
              {title}
            </h5>
            <div className="mt-1 flex flex-col justify-center gap-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
