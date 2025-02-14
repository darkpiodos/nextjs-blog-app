import React from "react";
import { FaTimes } from "react-icons/fa";

const SubscriptionTableItem = ({ email, mongoId, date, deleteEmail }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No Email"}
      </th>
      <td className="px-6 py-4">{emailDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer  flex items-center space-x-2 "
        onClick={() => {
          deleteEmail(mongoId);
        }}
      >
        <span className="bg-neutral-100 p-3 rounded-full hover:bg-black hover:text-white">
          <FaTimes />
        </span>
      </td>
    </tr>
  );
};

export default SubscriptionTableItem;
