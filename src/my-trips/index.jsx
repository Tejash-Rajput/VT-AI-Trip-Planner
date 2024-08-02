import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./UserTripCardItem";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigation("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    setUserTrips([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
        setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  useEffect(() => {
    GetUserTrips();
  }, []);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 w-screen">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => {
              return <UserTripCardItem trip={trip} key={index} />;
            })
          : [1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div
                  key={index}
                  className="animate-pulse bg-gray-200 rounded-xl h-40"
                ></div>
              );
            })}
      </div>
    </div>
  );
}

export default MyTrips;
