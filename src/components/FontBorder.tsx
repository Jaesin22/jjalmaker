import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { fontBorder } from "../reducers/font";
import { useDispatch } from "react-redux";

type border = {
  name: string;
  fontBorder: string;
};

const font: border[] = [
  { name: "없음", fontBorder: "transparent" },
  { name: "검정색", fontBorder: "black" },
  { name: "흰색", fontBorder: "white" },
];

const FontBorder = () => {
  const [selected, setSelected] = useState<border>(font[0]);
  const dispatch = useDispatch();

  const changeBorder = (selected: border) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(fontBorder(selected.fontBorder));
    setSelected(selected);
  };

  return (
    <div className="flex flex-row mt-12 w-96">
      <label className="ml-5 pt-2">폰트 테두리</label>
      <Listbox
        as="div"
        value={selected}
        onChange={changeBorder}
        className="absolute ml-32"
      >
        <div className="mt-1">
          <Listbox.Button
            className="cursor-default rounded-lg w-64 2xl:w-full
           bg-[#222933] text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options
            className="max-h-60 w-64 overflow-auto rounded-lg
             bg-[#222933] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {font.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-2 pr-4 text-left z-20 text-white ${
                    active ? "bg-[#313846] text-white" : "bg-[#222933]"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium text-[#00adff]" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default FontBorder;
