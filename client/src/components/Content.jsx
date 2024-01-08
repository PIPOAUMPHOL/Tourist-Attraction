/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { searchDataContext } from "./Header";
import { useContext } from "react";
import linkIcon from "../assets/linkIcon.svg";

function Content() {
  const context = useContext(searchDataContext);
  console.log(context.searchData);

  return context.searchData.map((item, index) => {
    return (
      <div
        key={index}
        css={css`
          margin-top: 40px;
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 65%;
            display: flex;
            height: 280px;
          `}
        >
          <div
            css={css`
              width: 30%;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
              `}
              src={item.photos[0]}
            />
          </div>
          <div
            css={css`
              margin-left: 30px;
              width: 70%;

              position: relative;
            `}
          >
            <h3
              css={css`
                font-size: 25px;
              `}
            >
              {item.title}
            </h3>
            <p>{item.description.slice(0, 100)} ...</p>
            <a href={item.url}>อ่านต่อ</a>
            <br />
            <span>หมวด&nbsp;&nbsp;</span>
            <a
              href={item.url}
              css={css`
                color: gray;
              `}
            >
              {item.tags[0]}
            </a>
            &nbsp;&nbsp;
            <a
              href={item.url}
              css={css`
                color: gray;
              `}
            >
              {item.tags[1]}
            </a>
            &nbsp;&nbsp;
            <a
              href={item.url}
              css={css`
                color: gray;
              `}
            >
              {item.tags[2]}
            </a>
            &nbsp;&nbsp;
            <a
              href={item.url}
              css={css`
                color: gray;
              `}
            >
              {item.tags[3]}
            </a>
            &nbsp;&nbsp;
            <a
              href={item.url}
              css={css`
                color: gray;
              `}
            >
              {item.tags[4]}
            </a>
            <div
              css={css`
                margin-top: 15px;
                display: flex;
              `}
            >
              <div
                css={css`
                  width: 100px;
                  margin-right: 30px;
                `}
              >
                <img
                  src={item.photos[1]}
                  css={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                  `}
                />
              </div>

              <div
                css={css`
                  width: 100px;
                  margin-right: 30px;
                `}
              >
                <img
                  src={item.photos[2]}
                  css={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                  `}
                />
              </div>

              <div
                css={css`
                  width: 100px;
                `}
              >
                <img
                  src={item.photos[3]}
                  css={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    margin-right: 30px;
                    border-radius: 20px;
                  `}
                />
              </div>
            </div>
            <img
              src={linkIcon}
              css={css`
                width: 50px;
                position: absolute;
                right: 10px;
                bottom: 30px;
              `}
            />
          </div>
        </div>
      </div>
    );
  });
}

export default Content;
