import React, { useEffect, useState } from "react";



const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");



  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();
      console.log(parseData)

    //   setAllCompanys(parseData);


      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div >
        <p > Me:
            {name}</p>
        <button onClick={e => logout(e)} >
          Logout
        </button>
      </div>

  </>
  );
};

export default Dashboard;