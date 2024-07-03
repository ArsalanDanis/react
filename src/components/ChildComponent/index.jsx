import React from "react";
import { useState } from "react";

function ChildComponent({ onDataUpdate }) {
  const [childData, setChildData] = useState("");

  const handleChildDataChange = (newChildData) => {
    setChildData(newChildData);
    onDataUpdate(newChildData);
  };

  return (
      <div>
          <h1>Child Component</h1>
      <input
        type="text"
        value={childData}
        onChange={(e) => handleChildDataChange(e.target.value)}
      />
    </div>
  );
}

export default ChildComponent;