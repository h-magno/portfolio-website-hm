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
    // background: '#ffffffaf',
    backdropFilter: 'blur(6px)',
    boxShadow: '1px 1px 9px 2px #0000003d'
  },

  buttonStyle: {
    fontFamily: 'Noto Sans Mono',
    width: '180px',
    height: '45px',
    marginRight: '10px',
    borderRadius: '15px',
    color: 'royalblue',
    borderColor: 'royalblue',
    fontWeight: '600',
    borderWidth: '1px',
    background: '#4169e114',
    '&:hover': {
      borderColor: 'royalblue',
      transform: 'scale(0.995)'
    }
  },
  buttonStyle2: {
    color: 'yellowgreen',
    borderColor: 'yellowgreen',
    borderWidth: '1px',
    background: '#9acd321a',
    '&:hover': {
      background: '#9acd3214',
      borderColor: 'yellowgreen',
      transform: 'scale(0.995)'
    }
  },
  navMenuLiStyle: {
    fontSize: '16px',
    margin: '0px 10px',
    fontWeight: '400',
    cursor: 'pointer'
  },
  dotAndParentesis: {
    fontSize: '22px',
    color: 'yellowgreen'
  }
};

const Navbar = () => {
  return (
    <>
      <Grid container justifyContent={'center'} style={navbarStyle.container}>
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
                  <span style={navbarStyle.dotAndParentesis}>.</span>Portfolio
                  <span style={navbarStyle.dotAndParentesis}>()</span>
                </Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/skills">
                  <span style={navbarStyle.dotAndParentesis}>.</span>Skills
                  <span style={navbarStyle.dotAndParentesis}>()</span>
                </Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/about-me">
                  <span style={navbarStyle.dotAndParentesis}>.</span>AboutMe
                  <span style={navbarStyle.dotAndParentesis}>()</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Button variant="outlined" sx={{ ...navbarStyle.buttonStyle }}>
              Curriculo PDF
            </Button>
            <Button
              variant="outlined"
              sx={{ ...navbarStyle.buttonStyle, ...navbarStyle.buttonStyle2 }}
            >
              contato
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
