'use client';
import { CSSProperties } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/navbar/Navbar';
import './font-import.css';

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
    fontSize: '30px'
  },
  headlinePortfolio: {
    fontFamily: 'Anek Telugu',
    
    fontWeight: '800',
    fontSize: '125px'
  },
  headlineCriadoPor: {
    fontWeight: '300',
    fontSize: '16px',
    // color: 'yellowgreen'
  },
  headlineHM: {
    fontFamily: 'Anek Telugu',
    fontWeight: '800',
    fontSize: '30px',
    letterSpacing: '1px',
    marginLeft: '10px'
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
    cursor: 'pointer'
  }
};

const fakeProjects = [1, 2, 3, 4, 5, 6];

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <header style={homeStyle.headerHome as CSSProperties}>
        <div style={homeStyle.headTxtDiv as CSSProperties}>
          <span style={homeStyle.headlineBemVindo}>
            <span style={{ color: 'yellowgreen' }}>Hello,</span> welcome to my
            web
          </span>
          <span style={homeStyle.headlinePortfolio}>PORTFOLIO</span>
        </div>
        <div style={{ width: '100%', position: 'absolute', bottom: '10px' }}>
          <span style={homeStyle.headlineCriadoPor}>Created by:</span>
          <span style={homeStyle.headlineHM}>HENRIQUE MAGNO</span>
        </div>
      </header>
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Grid
          container
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {fakeProjects.map((projects, idx) => (
            <Grid
              key={`projeto - ${idx}`}
              item
              xs={12}
              sm={5}
              md={3}
              xl={3}
              style={homeStyle.projectDiv as CSSProperties}
            ></Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Dashboard;
