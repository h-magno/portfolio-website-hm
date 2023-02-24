'use client';import { useState } from 'react';
import Link from 'next/link';
import {
  useRouter,
  usePathname,
  useSearchParams,
  useSelectedLayoutSegments,
  redirect,
  notFound
} from 'next/navigation';
import { Button, Box } from '@mui/material';

const routeTypes = () => {
  //**************************************************************
  // Utilizado para fazer a navegação do usuário, assim como o Link
  const routerPush = useRouter();
  // O PATH que estiver dentro prefech começará a ser carregado assim que o usuario entrar na pagina
  const routerPrefetch = useRouter();
  // Obriga a rota a ser renderizada novamente do 0 a cada acesso, semelhante ao 'no-store' do cache
  const routerRefresh = useRouter();
  // Não sei
  const routerReplace = useRouter();
  //**************************************************************
  // Utiliza o nome da rota atual
  const routerPathname = usePathname();
  //**************************************************************
  // Pegar or parametros da URL após "?"
  const routerSearchParams = useSearchParams();
  //**************************************************************
  // Redireciona o usuário para a sua pagina Not found
  //   const notFoundLink = notFound();
  //**************************************************************
  // Redireciona o usuário para determinada rota
  //   const redirects = redirect('/');

  const [dataTeste, setDataTest] = useState(false);
  const [dataTeste2, setDataTest2] = useState(false);
  const [dataTeste3, setDataTest3] = useState(false);
  const [dataTeste4, setDataTest4] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width: '300px',
        background: 'red',
        Button: {
          margin: '5px 0px' 
        }
      }}
    >
      {/* Link normal, vale ressaltar a opção ACTIVE LINK para destacar o link que está sendo utilizado no moemnto */}
      <Link href={'/'}>
        <Button variant="contained">Navegação tradicional</Button>
      </Link>
      {/* // PARA NAVEGAÇÕES APÓS ALGUMA AÇÃO DO USUÁRIO(com funçoes): */}
      <div>
        {dataTeste !== true ? (
          <Button variant="contained" onClick={() => setDataTest(true)}>
            Redirect
          </Button>
        ) : (
          redirect('/')
        )}
      </div>
      <div>
        {dataTeste2 !== true ? (
          <Button variant="contained" onClick={() => setDataTest2(true)}>
            Not Found
          </Button>
        ) : (
          notFound()
        )}
      </div>
      <div>
        {dataTeste3 !== true ? (
          <Button variant="contained" onClick={() => setDataTest3(true)}>
            Pathname
          </Button>
        ) : (
          <> {usePathname()} </>
        )}
      </div>
      <div>
        {dataTeste4 !== true ? (
          <Button variant="contained" onClick={() => setDataTest4(true)}>
            Search Params
          </Button>
        ) : 
        (() => { console.log(routerSearchParams); return <p> Olhe o console do navegador </p> ; })()
        
          
        }
      </div>
    </Box>
  );
};

export default routeTypes;
