import React from 'react';

const HomeCard = ({ blogs  }) => {
  return (
    <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {blogs.map((blog, index) => (
      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
          <p className="text-sm text-gray-600 mt-2"><strong>Author:</strong> {blog.author}</p>
          <p className="text-sm text-gray-600"><strong>Category:</strong> {blog.category}</p>
          <p className="text-gray-700 mt-4">{blog.synopsis}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default HomeCard;
