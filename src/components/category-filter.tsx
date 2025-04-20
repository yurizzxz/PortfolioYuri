import React from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="picks">
      <Select
        value={selectedCategory}
        onValueChange={onCategoryChange}
        defaultValue={selectedCategory}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Todos">Todos</SelectItem>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="fullstack">Fullstack</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
