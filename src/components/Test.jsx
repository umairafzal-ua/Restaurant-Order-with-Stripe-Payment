import React from 'react';

const Test = () => {
  return (
    <div>
      <div className="py-12 bg-white">
        <div className="text-center">
          <h2 className="text-yellow-500 text-xl font-semibold">Team Members</h2>
          <h1 className="text-3xl font-bold text-gray-800">Our Master Chefs</h1>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">

          <div className="w-64 text-center shadow-lg p-6 rounded-lg">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img src="https://avatar.iran.liara.run/public/boy" alt="Chef 1" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
            <p className="text-sm text-gray-500">Designation</p>
          </div>

          <div className="w-64 text-center shadow-lg p-6 rounded-lg">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img src="https://avatar.iran.liara.run/public/girl" alt="Chef 2" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
            <p className="text-sm text-gray-500">Designation</p>
          </div>

          <div className="w-64 text-center shadow-lg p-6 rounded-lg">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img src="https://avatar.iran.liara.run/public/boy" alt="Chef 3" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
            <p className="text-sm text-gray-500">Designation</p>
          </div>

          <div className="w-64 text-center shadow-lg p-6 rounded-lg">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img src="https://avatar.iran.liara.run/public/girl" alt="Chef 4" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Full Name</h2>
            <p className="text-sm text-gray-500">Designation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
