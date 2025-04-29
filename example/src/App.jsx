import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';

import CutieRabbitImage from './image/CutieRabbit.png';

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = content.trim();
    if (!text) return;
    setPosts([{ id: Date.now(), text }, ...posts]);
    setContent('');
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            うさぎの投稿アプリ
          </Typography>
          <Box
            component="img"
            src={CutieRabbitImage}
            alt="Cutie Rabbit"
            sx={{
              height: 150,
              width: 150,
              ml: 2,
            }}
          />
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <TextField
            label="投稿内容"
            placeholder="ここに投稿内容を入力してください"
            multiline
            rows={1}
            fullWidth
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{
              height: 60,
              '& .MuiInputBase-root': {
                height: '100%',
                alignItems: 'center',
              },
              '& .MuiInputBase-inputMultiline': {
                padding: 0,
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={{ mt: 2 }}
            fullWidth
          >
            投稿する
          </Button>
        </Box>

        <Stack spacing={2}>
          {posts.map((post) => (
            <Card
              key={post.id}
              variant="outlined"
              sx={{
                width: '100%',
                '& .MuiCardContent-root': {
                  py: 2,
                  px: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    flex: 1,
                  }}
                >
                  {post.text}
                </Typography>

                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => handleDelete(post.id)}
                  sx={{
                    p: 0.5,
                    ml: 1,
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default App;
