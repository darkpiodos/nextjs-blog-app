"use client";

import SubscriptionTableItem from "@/Components/AdminComponents/SubscriptionTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [emails, setEmails] = useState([]); // Initialize emails as an empty array

  const fetchEmails = async () => {
    try {
      const response = await axios.get("/api/email");
      console.log("API Response:", response.data);
      setEmails(response.data.emails || []); // Set emails to an empty array if response.data.emails is undefined
    } catch (error) {
      console.error("Error fetching emails:", error);
      setEmails([]); // Handle error by setting emails to an empty array
    }
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });

    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error!");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  useEffect(() => {
    console.log("Emails State:", emails);
  }, [emails]);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative max-w-[800px] h-[80vh] overflow-x-auto mt-4 rounded-lg shadow-lg border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <SubscriptionTableItem
                key={index}
                mongoId={item._id}
                email={item.email}
                date={item.date}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
