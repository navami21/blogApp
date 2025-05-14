import { Button, Grid, TextField, Typography, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Addblog = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageurl: '',
  });
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const validateForm = () => {
    let isValid = true;
    setTitleError('');
    setDescriptionError('');

    if (!form.title.trim()) {
      setTitleError('Blog Title is required');
      isValid = false;
    }

    if (!form.description.trim()) {
      setDescriptionError('Blog Description is required');
      isValid = false;
    }

    return isValid;
  };

  const capValue = () => {
    if (validateForm()) {
      if (location.state != null) {
        axiosInstance.put(`/blogg/edit/${location.state.val._id}`, form)
          .then((res) => {
            if (res.status === 200) {
              alert('Update successful');
              navigate('/blog');
            } else {
              alert('Update failed! Please try again.');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axiosInstance.post('/blogg/add', form)
          .then((res) => {
            alert('Blog added Successful!!');
            navigate('/blog');
          })
          .catch((err) => {
            console.log(err);
            alert('Failed to add blog');
            navigate('/blog');
          });
      }
    }
  };

  useEffect(() => {
    if (location.state != null) {
      setForm({
        ...form,
        title: location.state.val.title,
        description: location.state.val.description,
        imageurl: location.state.val.imageurl,
      });
    } else {
      setForm({
        ...form,
        title: '',
        description: '',
        imageurl: '',
      });
    }
  }, [location.state]);

  return (
    <Grid container justifyContent="center" style={{ marginTop: '5%' }}>
      <Grid item xs={12} sm={10} md={6} lg={5}>
        <Paper
          elevation={3}
          style={{
            padding: '30px',
            borderRadius: '15px',
            backgroundColor: 'blanchedalmond',
            width: '500px',
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            {location.state ? 'Edit Blog' : 'Add New Blog'}
          </Typography>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                fullWidth
                label="Blog Title"
                variant="outlined"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                error={!!titleError}
                helperText={titleError}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white', 
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                multiline
                label="Blog Description"
                variant="outlined"
                value={form.description}
                required
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                error={!!descriptionError}
                helperText={descriptionError}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white', // Change this to your desired color
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                value={form.imageurl}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white', // Change this to your desired color
                  },
                }}
                onChange={(e) => setForm({ ...form, imageurl: e.target.value })}
              />
            </Grid>
            <Grid item>
              <Button
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#5F99AE',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  boxShadow: '0 4px 8px black',
                }}
                onClick={capValue}
              >
                {location.state ? 'Update Blog' : 'Add Blog' }
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Addblog;