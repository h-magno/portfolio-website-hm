// SSR FETCH (REALIZANDO REQUISIÇÕES A CADA ACESSO)

const fetchDataRevalidate = async () => {
  const response = await fetch(
    'https://api.github.com/users/henrique-magno-dev', {
        cache: 'no-store',
        headers: {
          Authorization: `Bearer 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`
        }
    }
    // no-store permite que seja recarregada a cada acesso a pagina
  );
  const user = await response.json();

  return (
    <>
      <pre style={{}}>
        {JSON.stringify(user, null, 2)
          .replaceAll('"', '')
          .replace('{', '')
          .slice(0, -1)}
      </pre>
    </>
  );
};

export default fetchDataRevalidate;
