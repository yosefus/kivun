import { useState } from "react";
import style from "./style.module.css";
import CustomInput from "../../common/CustomInput";
import axios from "axios";




export default function EntryPoll() {
const [pop, setpop] = useState(true);

function pollregister(e) {
  
  axios.post('http://survey-workin.herokuapp.com/api/users/register,()=>(e.target.value)')
}

  return (
    <>
      {pop ? (
        <div className={style.popup}>
          <div className={style.popupcontent}>
            <form>
              <span>הזן מספר טלפון</span>
              <br />
              <CustomInput
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                onFocus={}
              />
              <br />
              הזן שם פרטי
              <br />
              <CustomInput type="text" required />
              <br />
              <span>הזן שם משפחה</span>
              <br />
              <CustomInput type="text" required />
              <br />
              <span> הזן כתובת מייל</span>
              <br />
              <CustomInput type="email" required />
              <br />
              <input
                type="submit"
                className={style.btn}
                onClick={() => setpop(false)}
                onChange={pollregister}
                value="המשך"
              />
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
