import { useState } from "react";
import Dropdown from "./Dropdown";

const MainScreen = () => {
  const [Weight, setWeight] = useState<number>(0);
  const [Result, setResult] = useState<number>(0);

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
    console.log(Weight);
  };

  const Calculate = () => {
    setResult((Weight * 2.2 * 30) / 2);
    console.log(Result);
  };

  return (
    <>
      <div>
        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <h1>{Result.toFixed(0)} มล.</h1>
        <form>
          <input
            type="number"
            name="weight"
            placeholder="น้ำหนักของคุณ (กิโลกรัม)"
            onChange={onChangeWeight}
          />
          <br />
          <br />
          <button type="button" onClick={Calculate}>
            คำนวณ
          </button>
        </form>
      </div>
      <br />
      <Dropdown />
    </>
  );
};

export default MainScreen;
