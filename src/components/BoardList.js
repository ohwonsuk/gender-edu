import React from 'react';

const BoardList = ({ title, editor, date, status }) => {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td class="px-6 py-4">{editor}</td>
        <td class="px-6 py-4">{date}</td>
        <td class="px-6 py-4">{status}</td>
      </tr>
    </>
  );
};

export default BoardList;
