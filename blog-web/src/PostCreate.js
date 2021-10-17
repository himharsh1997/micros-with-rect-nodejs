import React, { useState } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [title, setTitle] = useState("");
    
    const handleFormSubmit = async (e) => { 
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        }, { headers: { 'Content-Type': 'Application/json'}});
        setTitle('');
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
