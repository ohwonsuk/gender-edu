import React from 'react';

const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto mb-5">
        <table className="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                구 분
              </th>
              <th scope="col" className="px-6 py-3">
                이 름
              </th>
              <th scope="col" className="px-6 py-3">
                분 야
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                교육상담전문위원
              </th>
              <td className="px-6 py-4">이승은</td>
              <td className="px-6 py-4">젠더에듀상담센터 소장</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                교육연구자문위원
              </th>
              <td className="px-6 py-4">이은주</td>
              <td className="px-6 py-4">인지행동치료전문가</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                교육연구자문위원
              </th>
              <td className="px-6 py-4">한지선</td>
              <td className="px-6 py-4">미술치료전문가</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                교육연구자문위원
              </th>
              <td className="px-6 py-4">이승민</td>
              <td className="px-6 py-4">인권/폭력예방교육전문가</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
