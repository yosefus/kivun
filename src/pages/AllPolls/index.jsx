import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { getAllPolls } from "../../functions/pollApi";
import { RiAddFill } from "react-icons/ri";
import { CustomInput } from "../../common"
import NewPoll from "../AddPoll/NewPoll"

export default function AllPolls() {
  const [allpolls, setllpolls] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => getAllPolls().then(setllpolls), []);
  ///////////////////////////////////////////////////////////////////////////////

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }



  /////////////////////////////////////////////////////////////////////////////////

  const filteredPoll = allpolls.filter((alp) => {
    if (search === "") {
      return alp;
    } else if (alp.title.includes(search)) {
      return alp.title;
    } else if (alp.description.includes(search)) {
      return alp.description;
    }
  });

  return (
    <div className={style.body}>
      <div className={style.search}>
        <CustomInput type="text" placeholder="חיפוש לפי תגיות ותוכן..." onChangFn={(e) => setsearch(e.target.value)} />
        <span onClick={() => toggleModal()} className={style.addBtn}>
          <RiAddFill />
        </span>
        {modal && (<div className={style.popup}><NewPoll Modal={toggleModal} /></div>)}
      </div>
      <div className={style.flex}>
        {filteredPoll.map((alp) => (
          <Link className={style.text} to={`/admin/poll/${alp._id}`}>
            <li key={alp._id} className={style.allpoll}>
              <h2>{alp.title}</h2>
              <br />
              <h4>{alp.description}</h4>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}
