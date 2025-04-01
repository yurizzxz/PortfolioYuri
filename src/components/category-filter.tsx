import React from "react";

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
      <button
        className={`pickFilter ${selectedCategory === "Todos" ? "active" : ""}`}
        onClick={() => onCategoryChange("Todos")}
      >
        Todos
      </button>
      <button
        className={`pickFilter ${
          selectedCategory === "frontend" ? "active" : ""
        }`}
        onClick={() => onCategoryChange("frontend")}
      >
        Front-End
      </button>
      <button
        className={`pickFilter ${
          selectedCategory === "fullstack" ? "active" : ""
        }`}
        onClick={() => onCategoryChange("fullstack")}
      >
        FullStack
      </button>
    </div>
  );
};

export default CategoryFilter;
