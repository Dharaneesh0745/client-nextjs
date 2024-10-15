"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [userData, setUserData] = useState<{name: string}[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      await axios.get("http://localhost:8000/users", {withCredentials: true}).then((res) => {
        setUserData(res.data.users);
      }).catch((error) => {
        console.log(error)
      })
    }

    fetchData();
  }, [userData])

  return (
    <>
      <div>
        <ul>
          {
            userData.map((item, index) => {
              return (
                <li key={index}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}
