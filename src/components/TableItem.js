import React from 'react';

const TableItem = ({ name, field, note }) => {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {name}
          </th>
          <td className="px-6 py-4">{field}</td>
          <td className="px-6 py-4">{note}</td>
        </tr>
      </tbody>
    </>
  );
};

export default TableItem;
