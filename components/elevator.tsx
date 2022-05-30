import { NextComponentType } from "next";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const elevatorFloors = [5, 4, 3, 2, 1, 0];

export const Elevator: NextComponentType = () => {
  const [currentFloor, setCurrentFloor] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="mx-auto max-w-4xl pt-8">
      <h1 className="text-4xl font-bold pb-4">Elevator</h1>
      {elevatorFloors.map((floor, i) => (
        <div className="flex-row flex w-max h-max mt-4">
          <div key={i} className="flex flex-col mr-4">
            <ChevronUpIcon
              className={
                "h-12 w-12 transform fill-gray-700 text-white my-auto border border-gray-400 bg-gray-400 rounded-md mb-2 hover:bg-gray-700 hover:border-gray-700 hover:fill-gray-400"
              }
            />
            <ChevronDownIcon
              className={
                "h-12 w-12 transform fill-gray-700 text-white my-auto border border-gray-400 bg-gray-400 rounded-md hover:bg-gray-700 hover:border-gray-700 hover:fill-gray-400"
              }
            />
          </div>
          <ElevatorSquare floor={floor} />
        </div>
      ))}
    </div>
  );
};

const ElevatorSquare = ({ floor }: { floor: number }) => {
  return (
    <div className="border w-max p-8 bg-gray-600 text-white rounded-md text-xl">
      {floor}
    </div>
  );
};
