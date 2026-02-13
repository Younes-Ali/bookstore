import { useCategoryStore } from '../../store'; // ✅ من Zustand

const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => {
  const { categories } = useCategoryStore(); // ✅ مفيش fetch هنا

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 flex-wrap mb-4">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
          selectedCategory === 'all'
            ? 'bg-pink-500 text-white'
            : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300'
        }`}
      >
        All
      </button>

      {categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.categoryName)}
          className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === category.categoryName
              ? 'bg-pink-500 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300'
          }`}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;