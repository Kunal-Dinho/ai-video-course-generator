"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "lucide-react";
import { UserDetailContext } from "@/context/UserDetailContext";
import { set } from "date-fns";

function Provider({ children }: { children: React.ReactNode }) {

  const [userDetails, setUserDetails] = useState<any>(null);


  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user");
      console.log(result.data);
      setUserDetails(result?.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    CreateNewUser();
  }, []);

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails}}>
        <div className="max-w-7xl mx-auto">
        {children}
        </div>
      </UserDetailContext.Provider>
    </div>
  );
}

export default Provider;