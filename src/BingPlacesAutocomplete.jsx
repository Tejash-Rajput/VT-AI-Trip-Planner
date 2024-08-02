// src/components/BingPlacesAutocomplete.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BingPlacesAutocomplete = ({ apiKey, onPlaceSelected,handleInputChange }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchText) => {
    try {
      const response = await axios.get(`http://dev.virtualearth.net/REST/v1/Autosuggest`, {
        params: {
          query: searchText,
          key: apiKey,
        },
      });
      const data = response.data;
      if (data.resourceSets[0].resources.length > 0) {
        setSuggestions(data.resourceSets[0].resources[0].value);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    if (query.length >2) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="autocomplete">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
        placeholder="Search for a place"
        className="border p-2 rounded w-full"
      />
      {suggestions.length > 0 && (
        <ul className="border mt-2 rounded max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setQuery(suggestion.address.formattedAddress);
                setSuggestions([]);
                if (onPlaceSelected) {
                  onPlaceSelected(suggestion);
                }
              }}
            >
              {suggestion.address.formattedAddress}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BingPlacesAutocomplete;
