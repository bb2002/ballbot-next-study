import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile';

const Name = ({ user, repos }) => {
  return <Profile user={user} repos={repos} />;
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  const props = {};

  try {
    const responses = await Promise.all([
      await fetch(
        `https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`
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
