import css from "styled-jsx/css";
import { GoMail, GoOrganization, GoLink, GoLocation } from "react-icons/go";
import Image from "next/image";

const style = css`
  .user-wrapper > ul {
    border: 1px solid #c0c0c0;
    padding: 16px;
  }

  .user-wrapper > ul > ol {
    padding: 0;
  }
`;

const Profile = ({ user }) => {
  return (
    <>
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
            <GoMail /> {user.email ? user.email : "Empty set"}
          </ol>
          <ol>
            <GoOrganization /> {user.company ? user.company : "Empty set"}
          </ol>
          <ol>
            <GoLink />
            {user.blog ? <a href={user.blog}>{user.blog}</a> : "Empty set"}
          </ol>
          <ol>
            <GoLocation /> {user.location ? user.location : "Empty set"}
          </ol>
        </ul>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Profile;
