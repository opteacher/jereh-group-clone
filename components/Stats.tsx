import React from 'react';

const stats = [
  { id: 1, value: '1999', label: 'Founded In' },
  { id: 2, value: '70+', label: 'Countries & Regions' },
  { id: 3, value: '5000+', label: 'Global Employees' },
  { id: 4, value: '002353', label: 'Stock Code (SZ)' },
];

const Stats: React.FC = () => {
  return (
    <div className="bg-jereh-dark py-16 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
          {stats.map((stat) => (
            <div key={stat.id} className="p-4 group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-jereh-red transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;