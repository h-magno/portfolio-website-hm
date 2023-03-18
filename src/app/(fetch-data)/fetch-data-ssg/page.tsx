// ESTE TIPO DE FETCH COBRE APENAS REQUISIÇÕES ESTÁTICAS REALIZADAS NO BUILD DA APLICAÇÃO. BOM PARA HOME-PAGE.// GSP

const fetchDataStatic = async () => {
  const response = await fetch('https://api.github.com/users/henrique-magno-dev', {
    headers: {
      Authorization: 'Bearer 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',
    },
  });
  const user = await response.json();

  return (
    <pre style={{}}>
      {JSON.stringify(user, null, 2)
        .replaceAll('"', '')
        .replace('{', '')
        .slice(0, -1)}
    </pre>
  );
};

export default fetchDataStatic;
