import React, { useEffect, useState } from "react";
import ToolDetail from "./ToolDetail";

const RefrigeratorTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div>
      <h1 className="text-primary text-4xl font-serif font-bold">
        Our Stocking Refrigerator Tools
      </h1>

      <div>
        {tools.map((tool) => (
          <ToolDetail key={tool._id} tool={tool}></ToolDetail>
        ))}
      </div>
    </div>
  );
};

export default RefrigeratorTools;
