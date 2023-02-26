// Anteriormente no next 12/react era necessário um lift state up. Como se fosse uma requisição pai para evitar fazendo fetchs repetidos com a mesma informação. A partir do next 13 esse processo foi automatizado e agora nossa aplicação identifica automaticamente fetches repetidos e gera apenas 1 fetch, mesmo que você faça mais de uma requisição no mesmo codigo.


const deduplicateRequest = async () => {
  const response = await fetch(
    'https://api.github.com/users/henrique-magno-dev/repos', {
        headers: {
            Authorization: `Bearer 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`}
    }
  );
  const repo = await response.json();

  return (
    <>
      <div>
        <h1>Quantidade de repositórios: {JSON.stringify(repo.length, null, 2)}</h1>

        <h2>Meus rositorios:</h2>
        <pre>
            {JSON.stringify(repo, null, 2)}
        </pre>
      </div>
    </>
  );
};

export default deduplicateRequest;
