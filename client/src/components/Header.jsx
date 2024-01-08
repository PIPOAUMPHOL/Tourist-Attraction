/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Content from "./Content";

export const searchDataContext = React.createContext();

function Header() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  async function getSearchData() {
    if (search == "") {
      setData([]);
    } else {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${search}`
      );

      setData(response.data.data);
    }
  }

  useEffect(() => {
    getSearchData();
  }, [search]);

  return (
    <>
      <searchDataContext.Provider value={{ searchData: data }}>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: auto;
          `}
        >
          <div
            css={css`
              width: 55%;
              height: auto;
              display: flex;
              flex-direction: column;
            `}
          >
            <h2
              css={css`
                text-align: center;
                font-size: 50px;
                margin-top: 10px;
                margin-bottom: -5px;
                color: #309cdb;
              `}
            >
              เที่ยวไหนดี
            </h2>
            <label
              css={css`
                font-size: 17px;
              `}
            >
              ค้นหาที่เที่ยว
            </label>
            <input
              css={css`
                border-style: none;
                outline-style: none;
                font-size: 17px;
                text-align: center;
              `}
              placeholder="หาที่เที่ยวแล้วไปกัน ..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              value={search}
            />
            <hr />
          </div>
        </div>
        <Content />
      </searchDataContext.Provider>
    </>
  );
}

export default Header;
