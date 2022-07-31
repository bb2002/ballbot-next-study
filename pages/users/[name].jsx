import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile'
import Repositories from '../../components/Repositories'
import css from "styled-jsx/css";
import {useEffect} from "react";

const style = css`
  .container {
    display: flex;
    width: 100%;
  }
`

const Name = ({ user, repos }) => {
  return (
    <>
      <div className="container">
        <Profile user={user} />
        <Repositories repos={repos} user={user} />
      </div>
      <style jsx>{style}</style>
    </>

  )
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;
  const props = {};

  try {
    const responses = await Promise.all([
      await fetch(
        `https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`
      ),
      await fetch(`https://api.github.com/users/${name}`),
    ]);

    if (responses[0].status === 200) {
      props.repos = await responses[0].json();
    }

    if (responses[1].status === 200) {
      props.user = await responses[1].json();
    }
  } catch (err) {
    console.error(err);
  }

  return {
    props,
  };
};

export default Name;
