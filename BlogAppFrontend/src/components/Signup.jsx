import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
          padding: 4,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Username" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Password" type="password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Confirm Password" type="password" variant="outlined" />
          </Grid>
<br />
          <Grid item xs={12}>
            <Button variant="contained" fullWidth size="large">
              Sign Up
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center" variant="body2" color="textSecondary">
              Already have an account?{' '}
              <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Signup
