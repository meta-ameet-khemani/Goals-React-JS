import axios from 'axios';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const server = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const requestInterceptor = request => {
    setLoading(true);
    setData(null);
    console.log('URL', request.url, ' -- METHOD', request.method, ' -- DATA', request.data);
    return request;
  }

  const responseInterceptor = response => {
    setLoading(false);
    console.log('response', response);
    return response;
  }

  const errorInterceptor = error => {
    setLoading(false);
    console.log('error', error);
    return error;
  }

  const getAllPostsHandler = async () => {
    try {
      const response = await server.get('/posts');
      setData(response.data[0].title);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error);
      setLoading(false);
    }
  }

  const getFirstPostsHandler = () => {
    server.get('/posts/1')
      .then(response => {
        setData(response.data.title);
        setError(null);
      })
      .catch(error => {
        setData(null);
        setError(error);
        setLoading(false);
      });
  }

  const updateFirstPostHandler = async () => {
    try {
      const response = await server.put('/posts/1', {
        userId: '1',
        id: '1',
        title: 'Updated Title',
        body: 'body'
      });
      setData(response.data.title);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error);
      setLoading(false);
    }
  }

  const createPostHandler = async () => {
    try {
      const response = await server.post('/posts', {
        userId: '100',
        id: '100',
        title: 'Created Post Title',
        body: 'body'
      });
      setData(response.data.title);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error);
      setLoading(false);
    }
  }

  const deleteFirstPostHandler = async () => {
    try {
      await server.delete('/posts/1');
      setData('Post Deleted');
      setError(null);
    } catch (error) {
      setData(null);
      setError(error);
      setLoading(false);
    }
  }
  
  server.interceptors.request.use(requestInterceptor, errorInterceptor);
  server.interceptors.response.use(responseInterceptor, errorInterceptor);

  return (
    <div>
      <center>
        <h2>Axios Example</h2>
        <br />
        {loading && <><CircularProgress size={20} /><br /></>}
        {error && <span>Got Error: {error.message}<br /></span>}
        {data && <span>Output: {data}<br /><br /></span>}
        <button onClick={getAllPostsHandler}>Get All Posts</button>
        <br />
        <button onClick={getFirstPostsHandler}>Get First Post</button>
        <br />
        <button onClick={updateFirstPostHandler}>Update First Post</button>
        <br />
        <button onClick={createPostHandler}>Create a Post</button>
        <br />
        <button onClick={deleteFirstPostHandler}>Delete First Post</button>
      </center>
    </div>
  );
}

export default App;
