"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navbar from "../components/navbar/Navbar";


const homeStyle = {
  headerHome: {
    textAlign: 'center',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    marginBottom: '50px'
  },
  headlineBemVindo: {
    fontWeight: '200',
    fontSize: '30px',
    letterSpacing: '2px'
    
  },
  headlinePortfolio: {
    fontWeight: '800',
    fontSize: '125px',
    letterSpacing: '2px'
  },
  headlineCriadoPor: {
    fontWeight: '200',
    fontSize: '16px',
    letterSpacing: '2px',
  },
  headlineHM: {
    fontWeight: '800',
    fontSize: '30px',
    letterSpacing: '2px',
    marginLeft: '10px',

  },
  headTxtDiv: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-35px'
  },
  projectDiv: {
    width: '400px',
    height: '400px',
    background: 'white',
    margin: '5px',
    flexWrap: 'wrap',
    cursor: 'pointer',
  }
}

const fakeProjects = [1, 2, 3, 4, 5, 6]

const Dashboard = () => {
  return (
    <>
    <Navbar></Navbar>
    <header style={homeStyle.headerHome as React.CSSProperties}>
        <div style={homeStyle.headTxtDiv as React.CSSProperties}>
          <span style={homeStyle.headlineBemVindo}>
            Hello, welcome to my web
          </span>
          <span style={homeStyle.headlinePortfolio}>PORTFOLIO</span>
        </div>
        <div style={{ width: '100%', position: 'absolute', bottom: '10px'}}>
          <span style={homeStyle.headlineCriadoPor}>
            Created by:
          </span>
          <span style={homeStyle.headlineHM}>
            HENRIQUE MAGNO
          </span>
        </div>
    </header>
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>

        
          {fakeProjects.map((projects) => <Grid item xs={12} sm={5} md={3} xl={3} style={homeStyle.projectDiv as React.CSSProperties} ></Grid>  )} 


      </Grid>

    </main>
    </>
  );
};

export default Dashboard;
