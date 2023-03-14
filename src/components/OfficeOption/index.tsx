export function OfficeOption({ selected }:{selected:any}) {
  return (
     <div className="flex justify-between">
      <div className="flex flex-col   gap-2">
        <span
          className={`block truncate text-[#9E9E9E] text-sm ${
            selected ? "font-normal" : " font-light"
          }`}
        >
          {selected?.startingHour +" "+ selected?.endingHour +" :"} ساعات العمل
        </span>
        <span
          className={`block truncate text-[#9E9E9E] text-sm ${
            selected ? "font-normal" : "font-light"
          }`}
        >
          {selected?.fees}
        </span>
      </div>

      <div className="flex flex-col text-right mr-4 gap-2">
        <span
          className={`block truncate text-black text-lg ${
            selected ? "font-bold" : "font-bold"
          }`}
        >
          {selected?.name}
        </span>
        <span
          className={`block truncate text-[#9E9E9E] text-sm ${
            selected ? "font-normal" : "font-light"
          }`}
        >
          {selected?.address}
        </span>
      </div>
    </div>
  );
}

export default OfficeOption;
