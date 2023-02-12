import { Button, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Navbar.css';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const navbarStyle = {
  container: {
    width: '100%',
    height: '90px',
    position: 'fixed',
    top: '0',
    zIndex: '99',
    color: 'black',
    // background: '#ffffffaf',
    backdropFilter: 'blur(6px)',
    boxShadow: '1px 1px 9px 2px #0000003d'
  },

  buttonStyle: {
    width: '180px',
    height: '45px',
    marginRight: '10px',
    borderRadius: '30px',
    color: 'royalblue',
    borderColor: 'royalblue',
    fontWeight: '600',
    borderWidth: '1px',
    background: '#4169e121'
  },
  buttonStyle2: {
    background: '#9acd3224',
    color: 'yellowgreen',
    borderColor: 'yellowgreen'
  },
  navMenuLiStyle: {
    margin: '0px 10px',
    cursor: 'pointer'
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
            <div>
              <KeyboardArrowRightIcon
                fontSize="large"
                style={{ color: 'royalblue' }}
              />
            </div>
            <ul className="menu-after">
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/portfolio-app">Portfólio</Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/skills">Skills</Link>
              </li>
              <li style={navbarStyle.navMenuLiStyle}>
                <Link href="/about-me">Sobre mim</Link>
              </li>
            </ul>
          </div>
          <div>
            <Button variant="outlined" style={{...navbarStyle.buttonStyle}}>
              Curriculo PDF
            </Button>
            <Button variant="outlined" style={{...navbarStyle.buttonStyle, ...navbarStyle.buttonStyle2  }}>
              contato
            </Button>

          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
