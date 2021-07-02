import { useState } from "react";
import CheckBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  }
  return (
    <div className="App">
      <CheckBox onChange={onChange} chekced={check}>
        다음 약관에 모두 동의
      </CheckBox>
    </div>
  );
}

export default App;