export function OfficeOption({ selected }: { selected: any }) {
  return (
    <>
      <div className="flex flex-row text-right justify-between">
        <span className="block truncate text-[#9E9E9E] text-md font-normal">
          {selected?.startingHour + " " + selected?.endingHour + " :"} ساعات
          العمل
        </span>
        <span className="block truncate text-black text-lg font-bold ">
          {selected?.name}
        </span>
      </div>

      <div className="flex flex-row text-right justify-between mt-1 ">
        <span className="block truncate text-[#9E9E9E] text-sm font-normal">
          {" "}
          {selected?.fees}
        </span>

        <span className="block truncate text-[#9E9E9E] text-md font-normal">
          {selected?.address}
        </span>
      </div>
    </>

    
  );
}

export default OfficeOption;
