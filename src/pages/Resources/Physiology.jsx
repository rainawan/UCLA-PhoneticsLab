import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
// import { Accordion } from "@material-tailwind/react";

const Physiology = () => {
  return (
    <div className="bg-white p-20">
      {/* <Text h2 className="font-bold text-darkblue">
        Physiology
      </Text>

      <h1>Palatography</h1> */}
      
      <Accordion variant="shadow">
        <AccordionItem title="Accordion 0">
          <div>Content for Accordion 0</div>
        </AccordionItem>
        <AccordionItem className="p-0" title="Accordion 1">
          Content for Accordion 1
        </AccordionItem>
        <AccordionItem title="Accordion 2">
          Content for Accordion 2
        </AccordionItem>
        <AccordionItem title="Accordion 3">
          Content for Accordion 3
        </AccordionItem>
      </Accordion>

      {/* <div class="relative mb-3">
        <h6 class="mb-0">
          <button
            class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-1"
          >
            <span>What is Material Tailwind?</span>
            <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-1"
          class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </div>
      </div>
      <div class="relative mb-3">
        <h6 class="mb-0">
          <button
            class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-2"
          >
            <span>How to use Material Tailwind?</span>
            <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-2"
          class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </div>
      </div>
      <div class="relative mb-3">
        <h6 class="mb-0">
          <button
            class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-3"
          >
            <span>What can I do with Material Tailwind?</span>
            <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-3"
          class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Physiology;
