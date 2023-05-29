import { useState } from "react";

const onChange = () => {
    // return console.log("test");
    
};

const Dropdown = () => {
    const [themeMode , setThemeMode] = useState('dark');
  return (
    <div>
      <select id="theme" onChange={onChange}>
        <option value="dark" selected>
          🌙 Dark
        </option>
        <option value="light">🌞 Light</option>
      </select>
    </div>
  );
};

export default Dropdown;
