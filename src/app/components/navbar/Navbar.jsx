import { Button, Container } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Grid from "@mui/material/Grid"

import './Navbar.css'

const navbarStyle = {
    container: {
        width: '100%',
        height: '120px',
        position: 'fixed',
        top: '0',
        zIndex: '99',
    },
    containerItemStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '46%',
        background: 'black',
        color: 'white',
        fontWeight: 'bolder',
        padding: '0px 155px 0px 145px',
        fontSize: '20px',
    },
    containerItemStyle2:{
        padding: '0px 155px 0px 175px',
        height: '54%',
        borderBottom: '0px',
        background: 'white',
        color: 'black',
        background: '#ffffffaf',
        backdropFilter: "blur(6px)",

    },
    navMenuLiStyle: {
        margin: '0px 10px',
        cursor: 'pointer'
    }
}

const Navbar = () => {
    return <>
    <Grid
        container
        style={navbarStyle.container}
    >
        <Grid container flexDirection='column' height='100%' s  >
            <Grid item style={navbarStyle.containerItemStyle} >
                <p style={{}}>HENRIQUE MAGNO</p>
                <p style={{fontWeight: '200'}}>PORTFÓLIO</p>
           </Grid>
            <Grid item style={{...navbarStyle.containerItemStyle, ...navbarStyle.containerItemStyle2 }}>
                    <ul className="menu-after">
                        <li style={navbarStyle.navMenuLiStyle}>Portfólio</li>
                        <li style={navbarStyle.navMenuLiStyle}>Skills</li>
                        <li style={navbarStyle.navMenuLiStyle}>Resumo Profissional</li>
                    </ul>
                <div  >
                    <Button variant="contained" style={{background: '#1429a9', marginRight: '10px'}}>Curriculo PDF</Button>
                    <Button variant="contained" color="success">CONTATO</Button>
                </div>
            </Grid>
        </Grid>
        
    </Grid>
    </>
}

export default Navbar