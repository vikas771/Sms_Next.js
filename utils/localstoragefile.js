import React, { useEffect, useState } from "react";


  const localDetails = () => {
    const [LocalSData, setLocalSData] = useState({});

    useEffect(() => {
      const localStorageItem = localStorage.getItem("userToken");
      setLocalSData(JSON.parse(localStorageItem));
      console.log("vikas data is here jhfjj", LocalSData);
    }, []);
    return LocalSData;
    // console.log("second", LocalSData);
    // console.log("third", LocalSData.user.role);
  };

export default localDetails;


// export const {localDetails} = Localstoragefile.DataLocal;
