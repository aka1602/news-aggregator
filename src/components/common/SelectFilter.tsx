import * as React from "react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SelectProps } from "@/utils/types";
import { newsCategories } from "@/utils/constant";

export default function CategoryFilter({
  value,
  onChange = () => {},
  className = "",
  list = [],
  defaultValue = "",
}: SelectProps) {
  const [selectedValue, setSelectedValue] = React.useState(value);

  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  return (
    <Select
      onValueChange={(val) => {
        setSelectedValue(val);
        onChange(val);
      }}
      defaultValue={defaultValue || value}
      value={selectedValue}
    >
      <SelectTrigger
        className={`w-[180px] h-6 text-[10px] p-1 border-black dark:border-white truncate font-medium ${className}`}
      >
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent className="max-h-[180px]">
        <SelectGroup>
          {list.map((item, id) => {
            return (
              <SelectItem value={item.name} key={id} className="text-xs">
                {item.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
