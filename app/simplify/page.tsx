import { GradeLevel } from "@/components/GradeLevel";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-24 max-w-[500px]">
      <div className="p-4 border border-1 border-gray-200 rounded-xl items-center">
        <h1 className="font-semibold text-3xl">Simplify Your Learning</h1>
        <p className="text-gray-500 pt-2">
          Simplify your question to a desired grade level to make understanding
          it easier!
        </p>
        <div className="flex gap-4 py-2 items-center">
          {/* <div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Simplify
              </label>
            </div>
          </div> */}
          {/* <h1 className="font-bold">or</h1> */}
          <div className="flex flex-col py-4 gap-y-2 font-semibold">
            <h1>Select Your Desired Grade Level: </h1>
            <GradeLevel />
          </div>
        </div>
        <Button className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-semibold">
          Submit
        </Button>
      </div>
    </div>
  );
}
