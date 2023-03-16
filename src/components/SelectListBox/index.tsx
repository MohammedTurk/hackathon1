import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { SelectListBoxProps } from "components/types";

export const SelectListBox = ({
  data = [],
  label,
  selectedFromEdit,
  error = false,
  withoutHelperText = false,
  helperText,
  OptionType,
  setValue,
  fieldName,
  setSelectDetails
}: SelectListBoxProps) => {
  console.log(data);
  
  const [selected, setSelected] = useState<object>(
    selectedFromEdit || data[0]
  );


  useEffect(() => {
    if (selectedFromEdit) {
      setSelected(selectedFromEdit);
    } else {
      setSelected(data[0]);
    }
  }, [data, selectedFromEdit]);

  useEffect(()=>{
     
    setSelectDetails(selected)
    if(fieldName === "officeId"){
      setValue("officeId",selected?._id)
    }else if(fieldName === "recipientId"){
      setValue("recipientId",selected?._id)

    }else{
      setValue("bankId",selected?._id)

      
    }
   },[selected])

  // if (!data || data.length === 0) {
 
  //   return (
  //     <>
  //       {label && (
  //         <label className="block mb-1 mt-3 font-medium text-gray-dark">
  //           {label}
  //         </label>
  //       )}
  //       <Listbox>
  //         <div className="relative  ">
  //           <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2   sm:text-sm h-14">
  //             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
  //               <ChevronUpDownIcon
  //                 className="h-5 w-5 text-gray-400"
  //                 aria-hidden="true"
  //               />
  //             </span>
  //           </Listbox.Button>
  //           <Transition
  //             // as={Fragment}
  //             leave="transition ease-in duration-100"
  //             leaveFrom="opacity-100"
  //             leaveTo="opacity-0"
  //           >
  //             <Listbox.Options className="absolute mt-1 max-h-60 w-full z-40 overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"></Listbox.Options>
  //           </Transition>
  //         </div>
  //       </Listbox>
  //     </>
  //   );
  // }
  

  return (
    <>
      {label && (
        <label className="block mb-1  mt-5 font-medium text-gray-dark">{label}</label>
      )}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white   pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2   sm:text-sm h-20">
            <OptionType selected={selected} />

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            // as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full z-40 overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((person) => (
                <Listbox.Option
                  key={person._id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4  hover:bg-gray-light ${
                      active ? "bg-gray-light text-gray-light" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  <>
                    <OptionType selected={person} />
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
     
    </>
  );
};

export default SelectListBox;
