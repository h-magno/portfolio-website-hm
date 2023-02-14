import { cookies, headers } from 'next/headers';

// Quando uma aplicação precisa de contexto e extrair os dados atuais do usuário

const cookieFetch = async () => {
  const userCookies = cookies();
  const userHeaders = headers();

  return (
    <>
      <h1>/cookieFetch</h1>
      {JSON.stringify(userCookies.getAll(), null, 2)}
      {JSON.stringify(userHeaders, null, 2)}
    </>
  );
};

export default cookieFetch;
