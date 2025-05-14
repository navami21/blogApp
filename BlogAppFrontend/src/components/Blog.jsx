import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    axiosInstance.get('/blogg')
    .then(res=>setBlogs(res.data))
    .catch(err=>console.log(err))
  },[])
  function updateData(val){
    navigate('/addblog',{state:{val}})
  }
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axiosInstance.delete(`/blogg/delete/${id}`)
        .then((res) => {
          if (res.status === 200) {
            alert('Blog deleted successfully!');
            setBlogs(blogs.filter(blog => blog._id !== id)); 
          } else {
            alert('Failed to delete blog');
          }
        })
        .catch((err) => {
          console.error(err);
          alert('An error occurred while deleting the blog');
        });
    }
  };
  

  return (
    <Box sx={{ flexGrow: 1, padding: 4, justifyContent:'center' }}>
      <Typography variant="h4" align="center" gutterBottom >
        BLOGS
      </Typography>
    <Grid container spacing={2} justifyContent="center">

      {blogs.map((blog, index) => (

    <Grid item xs={12} md={3} key={index}>
      <Card sx={{ maxWidth: 600 ,backgroundColor:'#E5E1DA',justifyContent: 'center',boxShadow:'0 1px 2px black' }}>
        <CardMedia
          sx={{ height: 190 , width:300}}
          image={blog.imageurl}
          title={blog.title}
        />
        <CardContent sx={{ textAlign: 'center' }} >
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </CardContent>
        <CardActions  sx={{ justifyContent: 'center' }}>
          <Button  sx={{ backgroundColor: 'green',color:'white',fontWeight:'600' }} onClick={()=>{
            updateData(blog)
          }}>UPDATE</Button>
          <Button sx={{ backgroundColor: 'red',color:'white',fontWeight:'600' }}   onClick={() => handleDelete(blog._id)}>DELETE</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

  </Box>
  )
}

export default Blog
