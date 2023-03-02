import { Button, Container } from '@mui/material';import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Navbar.css';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const navbarStyle = {
  container: {
    width: '100%',
    height: '120px',
    position: 'fixed',
    top: '0',
    zIndex: '99',
    color: 'black',
    backdropFilter: 'blur(6px)',
    boxShadow: '1px 1px 9px 2px #0000003d'
  },
  navMenuLiStyle: {
    fontSize: '16px',
    margin: '0px 10px',
    fontWeight: '400',
    cursor: 'pointer'
  },

};

const Navbar = () => {
  return (
    <>
      <Grid
        container
        className="lg:flex md:flex sm:hidden"
        justifyContent={'center'}
        style={navbarStyle.container}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={10}
          xl={10}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems="center"
          height="100%"
        >
          {/* TODO: ADICIONAR COR NO MENU AO ROLAR O SCROLL E REDUZIR O TAMANHO */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ul className="menu-after">
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/portfolio-app">
                  <p className="text-lime-400">
                    .<span className="text-white">Portfólio</span>()
                  </p>
                </Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/skills">
                  <p className="text-lime-400">
                    .<span className="text-white">Skills</span>()
                  </p>
                </Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/about-me">
                  <p className="text-lime-400">
                    .<span className="text-white">Sobremim</span>()
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button
              className="bg-blue-600 bg-opacity-5 text-blue-600 w-44 h-12 rounded-2xl border-2 border-blue-600  mx-2 hover:bg-opacity-10 font-mono text-base font-extrabold"
              variant="outlined"
            >
              CURRÍCULO PDF
            </Button>
            <Button
              className="bg-lime-400  bg-opacity-5 text-lime-400 w-44 h-12 rounded-2xl border-2 border-lime-400 mx-2 hover:bg-opacity-10 font-mono text-base font-extrabold btn-navbar2"
              variant="outlined"
            >
              CONTATO
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
