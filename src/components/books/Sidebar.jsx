import React from 'react';
import FilterHeader from './FilterHeader';
import CategoryFilter from './CategoryFilter';
import PublisherFilter from './PublisherFilter';
import YearFilter from './YearFilter';

const Sidebar = ({ filters, setFilters }) => {
  return (
    <aside className="w-full mt-3 lg:mt-0 lg:w-72 bg-[#f2f2f2] border-r border-gray-200 p-6 flex flex-col gap-5 items-center lg:gap-0 lg:items-start ">
      <FilterHeader />
      <div className='flex gap-2 lg:flex-col w-full'>
      <CategoryFilter filters={filters} setFilters={setFilters} />
      <PublisherFilter filters={filters} setFilters={setFilters} />
      <YearFilter filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  );
};

export default Sidebar;