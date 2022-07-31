import { useState } from "react";
import css from "styled-jsx/css";
import {AiFillGithub} from "react-icons/ai";
import {useRouter} from "next/router";

const HeaderCss = css`
  .header-wrapper {
    padding: 14px 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }

  .header-search-form input {
    margin: 0 16px;
    background-color: hsla(0, 0%, 100%, 0.125);
    width: 300px;
    height: 28px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    padding: 0 12px;
    font-size: 14px;
    font-weight: bold;
  }

  .header-navigations a {
    color: white;
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Header = () => {
  const [username, setUserName] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/users/${username}`);
    setUserName('');
  }

  return (
    <>
      <div className="header-wrapper">
        <AiFillGithub color="white" size={36} />
        <form className="header-search-form" onSubmit={onSubmit}>
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </form>

        <nav className="header-navigations">
          <a href="https://github.com/pulls">Pull requests</a>
          <a href="https://github.com/issues">Issues</a>
          <a href="https://github.com/marketplace">Marketplace</a>
        </nav>
      </div>

      <style jsx>{HeaderCss}</style>
    </>
  );
};

export default Header;
