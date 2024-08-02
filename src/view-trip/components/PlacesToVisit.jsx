import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>
      <div>
        {trip?.tripdata?.itinerary?.map((item, index) => {
          return (
            <div key={index} className="mt-5">
              <h2 className="font-bold text-lg">Day {item.day}</h2>
              <div className="grid grid-cols-2 gap-5">
                {item.plan.map((place, index) => {
                  return (
                    <div key={index} className="my-3">
                      <h2 className="font-medium text-sm text-orange-600">
                        {place.timeTravel}
                      </h2>
                      <PlaceCardItem place={place} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlacesToVisit;
