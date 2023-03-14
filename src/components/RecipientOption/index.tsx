export function RecipientOption({ selected }: { selected: any }) {
  return (
    <div>
      <div className="ml-auto text-right mb-2">
        <span
          className={`block truncate text-black text-lg ${
            selected ? "font-bold" : "font-bold"
          }`}
        >
          {selected?.name}
        </span>
      </div>

      <div className="flex flex-row text-right justify-between  ">
        <span
          className={`block truncate text-[#9E9E9E] text-lg ${
            selected ? "font-normal" : "font-light"
          }`}
        >
          ID: {selected?.idNumber}
        </span>

        <span
          className={`block truncate text-[#9E9E9E] text-lg ${
            selected ? "font-normal" : "font-light"
          }`}
        >
          Phone : {selected?.mobile}
        </span>
      </div>
    </div>
  );
}

export default RecipientOption;
