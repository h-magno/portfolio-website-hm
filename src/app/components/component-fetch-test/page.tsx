const ComponentFetch1 = async () => {
  const response = await fetch('https://api.github.com/users/henrique-magno-dev', {
    cache: 'no-store',
    headers: {
      Authorization: 'Bearer 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',
    },
  });
  const user = await response.json();

  return (
    <>
      <h1>ComponentFetch1</h1>
      <pre style={{}}>
        {JSON.stringify(user.name, null, 2).replaceAll('"', '')}
      </pre>
    </>
  );
};

export default ComponentFetch1;
