import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, List, ListItem, ListItemText, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, timestamp: new Date(), sender: 'me' }]);
      setMessage('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', width:'80%', margin: '20px auto', height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" style={{ textAlign: 'center', marginBottom: '8px' }}>Chat </Typography>
      <Box style={{ flexGrow: 1, overflowY: 'auto', padding: '8px', marginBottom: '8px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} style={{ justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start' }}>
              <Box style={{
                maxWidth: '75%',
                padding: '8px 12px',
                borderRadius: '18px',
                backgroundColor: msg.sender === 'me' ? '#DCF8C6' : '#ffffff',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                textAlign: 'right',
              }}>
                <ListItemText
                  primary={msg.text}
                  secondary={msg.timestamp ? msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          autoComplete='off'
          placeholder="Type a message"
          fullWidth
          marginBottom="2%"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          style={{ marginRight: '8px' }}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Chatbox;
