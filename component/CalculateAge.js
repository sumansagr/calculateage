import React, { useEffect, useState } from "react";

function Dob() {
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  useEffect(() => {
    if (dob !== "") {
      const date = new Date();

      // date.getFullYear();
      const curyear = date.getFullYear();
      const curmonth = date.getMonth();
      const birthdate = new Date(dob);
      const birthyear = birthdate.getFullYear();
      const birthmonth = birthdate.getMonth();
      console.log("curdate", date.getFullYear());
      console.log("birthdate", birthdate.getFullYear());

      const agee =  curyear - birthyear ;
      setage(agee);
      console.log(agee)
    }
  }, [dob]);
  // const updateDob = () => {};
  const enterDate = (event) => {
    const val = event.target.value;
    console.log(val);
    setdob(val);
  };

  return (
    <div>
      <input
        type="date"
        onChange={enterDate}
        placeholder="enter your dob"
      />
      {dob ? <p>DOB :- {dob}</p> : null}
      {dob ? <p>age is :- {age} </p> : null}
    </div>
  );
}

export default Dob;
