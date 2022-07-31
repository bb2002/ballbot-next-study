import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Link from 'next/link';

const Index = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      <label>
        USERNAME:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="유저 ID 입력"
        />
      </label>
      <p>{username} 님 깃허브에서 검색</p>
      <Link href={`/users/${username}`}>
        <a>탐방 ㄱㄱ</a>
      </Link>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch('https://api.github.com/users/bb2002');
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }

    return {};
  } catch (ex) {
    console.error(ex);
    return { props: { user: null } };
  }
};

export default Index;
