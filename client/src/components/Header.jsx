/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Content from "./Content";

export const searchDataContext = React.createContext();

function Header() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  async function getSearchData() {
    if (search == "") {
      setData([]);
    } else {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await axios.get(
          `https://tourist-attraction-server-eiy4.onrender.com/trips?keywords=${search}`
        );

        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
  }

  useEffect(() => {
    getSearchData();
  }, [search]);

  return (
    <>
      <searchDataContext.Provider
        value={{ searchData: data, isError: isError, isLoading: isLoading }}
      >
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
