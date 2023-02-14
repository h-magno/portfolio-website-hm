import { Suspense } from "react";

const ComponentFetch2 = async () => {  
  const response = await fetch(
    'https://api.github.com/users/henrique-magno-dev/repos',
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer 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`
      }
    }
  );
  const repo = await response.json();
  
  // Codigo abaixo é utilizado para suspense API test
  // await new Promise((resolve) => setTimeout(resolve, 5000)); SISPENDE O CARREGAMENTO DA PAGINA EM 5 SEGUNDOS
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <h1>ComponentFetch2</h1>
      <pre>{JSON.stringify(repo[0].name, null, 2).replaceAll('"', '')}</pre>
    </>
  );
};

export default ComponentFetch2;
