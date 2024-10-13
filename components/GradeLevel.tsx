"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function GradeLevel() {
  const [position, setPosition] = useState("bottom");
  const [selectedGradeLevel, setSelectedGradeLevel] =
    useState("Select Grade Level");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedGradeLevel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-60 overflow-y-auto">
        <DropdownMenuLabel>Select Grade Level</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => {
            setSelectedGradeLevel(value);
            setPosition(value);
          }}
        >
          <DropdownMenuLabel>Elementary School</DropdownMenuLabel>
          <DropdownMenuRadioItem value="1st">1st</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2nd">2nd</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3th">3rd</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="4th">4th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="5th">5th</DropdownMenuRadioItem>
          {/* <DropdownMenuRadioItem value="0">Middle School</DropdownMenuRadioItem>
           */}
          <DropdownMenuLabel>Middle School</DropdownMenuLabel>
          <DropdownMenuRadioItem value="6th">6th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="7th">7th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="8th">8th</DropdownMenuRadioItem>
          <DropdownMenuLabel>High School</DropdownMenuLabel>
          <DropdownMenuRadioItem value="9th">9th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="10th">10th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="11th">11th</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="12th">12th</DropdownMenuRadioItem>
          <DropdownMenuLabel>College</DropdownMenuLabel>
          <DropdownMenuRadioItem value="Undergraduate">
            Undergraduate
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
