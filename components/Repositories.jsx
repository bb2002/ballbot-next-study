import { formatDistance } from "date-fns";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import Link from "next/link";

const style = css`
  .repo-wrapper {
    width: 100%;
    margin-left: 32px;
    height: 100vh;
    overflow-y: scroll;
  }

  .repository-pagination {
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 3px;
    width: fit-content;
    margin: 20px auto auto;
  }

  .repository-pagination button {
    padding: 6px 12px;
    font-size: 14px;
    border: 0;
    color: #0366d6;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }

  .repository-pagination button:first-child {
    border-right: 1px solid rgba(27, 31, 35, 0.15);
  }

  .repository-pagination button:hover:not([disabled]) {
    background-color: #0366d6;
    color: white;
  }

  .repository-pagination button:disabled {
    color: rgba(27, 31, 35, 0.3);
  }

  .repo-item {
    border-bottom: 1px solid #d9d9d9;
  }

  .repo-item > h2 > a {
    text-decoration: none;
    color: black;
  }
`;

const Repositories = ({ user, repos }) => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
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
            <p>
              {formatDistance(new Date(repo.updated_at), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        ))}

        <div className="repository-pagination">
          <Link href={`/users/${user.login}?page=${page ? Number(page) - 1 : 1}`}>
            <a>
              <button type="button" disabled={!page || page === "1"}>
                이전
              </button>
            </a>
          </Link>

          <Link href={`/users/${user.login}?page=${!page ? "2" : Number(page) + 1}`}>
            <a>
              <button type="button" disabled={repos.length < 10}>
                다음
              </button>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{style}</style>
    </>
  );
};

export default Repositories;
