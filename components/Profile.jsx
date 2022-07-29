import css from 'styled-jsx/css';
import { GoMail, GoOrganization, GoLink, GoLocation } from 'react-icons/go';
import Image from 'next/image';

const style = css`
  .container {
    display: flex;
    width: 100%;
  }

  .user-wrapper > ul {
    border: 1px solid #c0c0c0;
    padding: 16px;
  }

  .user-wrapper > ul > ol {
    padding: 0;
  }

  .repo-wrapper {
    margin-left: 32px;
  }

  .repo-item {
    border-bottom: 1px solid #d9d9d9;
  }

  .repo-item > h2 > a {
    text-decoration: none;
    color: black;
  }
`;

const Profile = ({ user, repos }) => {
  if (user && repos) {
    return (
      <>
        <div className="container">
          <div className="user-wrapper" key="1">
            <Image
              src={user.avatar_url}
              alt="Github profile"
              width={350}
              height={350}
            />

            <h2>{user.name}</h2>

            <ul>
              <ol>
                <GoMail /> {user.email ? user.email : 'Empty set'}
              </ol>
              <ol>
                <GoOrganization /> {user.company ? user.company : 'Empty set'}
              </ol>
              <ol>
                <GoLink />
                {user.blog ? <a href={user.blog}>{user.blog}</a> : 'Empty set'}
              </ol>
              <ol>
                <GoLocation /> {user.location ? user.location : 'Empty set'}
              </ol>
            </ul>
          </div>

          <div className="repo-wrapper" key="2">
            <h4>Repository {user.public_repos}</h4>

            {repos.map((repo) => (
              <div key={repo.key} className="repo-item">
                <h2>
                  <a
                    href={`https://github.com/${user.login}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h2>
                <p>{repo.description}</p>
                <p>{repo.language}</p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{style}</style>
      </>
    );
  }

  return (
    <p>
      <b>유저를 찾을 수 없습니다.</b>
    </p>
  );
};

export default Profile;
