import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/auth/search-doctors?query=${searchQuery}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchData();
    } else {
      // If search query is empty, clear the results
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/v1/auth/search-students?query=${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div
        id="content"
        className="mask d-flex align-items-center h-100 gradient-custom-3"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                className="card"
                style={{
                  borderRadius: 15,
                  border: "2px solid #3498db",
                  boxShadow: "0 0 10px rgba(52, 152, 219, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <div
                  className="card-body p-5"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                >
                  <h2 className="text-center mb-4">Doctor Search</h2>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter query"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={handleSearch}>
                      Search
                    </button>
                  </div>

                  {searchResults.length > 0 && (
                    <div>
                      <h3 className="mb-3">Search Results:</h3>
                      <ul className="list-group">
                        {searchResults.map((doctor) => (
                          <li
                            key={doctor.email}
                            className="list-group-item text-red text-lg"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{doctor.name}</strong> ({doctor.email})
                              </div>
                              <div>
                                <span
                                  className="badge"
                                  style={{ color: "black" }}
                                >
                                  {doctor.qualification}
                                </span>
                              </div>
                            </div>
                            <div>
                              <span
                                className="badge"
                                style={{ color: "black" }}
                              >
                                {doctor.phone}
                              </span>
                            </div>
                            <div>
                              <span
                                className="badge"
                                style={{ color: "black" }}
                              >
                                {doctor.email}
                              </span>
                            </div>
                            <div>
                              <span
                                className=" badge"
                                style={{ color: "black" }}
                              >
                                {doctor.address}
                              </span>
                            </div>
                            <div>
                              <span
                                className="badge"
                                style={{ color: "black" }}
                              >
                                {doctor.specialization}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSearch;
