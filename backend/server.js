const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend está rodando!' });
});

// ✅ Lista de Canais
app.get('/api/channels', (req, res) => {
  const channels = [
    {
      id: 1,
      name: 'Canal Teste 1',
      description: 'Conteúdo ao vivo com programação variada.',
      thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
      price: 'R$ 9,99 / mês',
      streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
    },
    {
      id: 2,
      name: 'Canal Teste 2',
      description: 'Filmes e séries exclusivas em streaming.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
      price: 'R$ 9,99 / mês',
      streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
    }
  ];
  res.json(channels);
});

// ✅ Detalhe do Canal
app.get('/api/channels/:id', (req, res) => {
  const channels = {
    1: {
      id: 1,
      name: 'Canal Teste 1',
      description: 'Conteúdo ao vivo com programação variada.',
      thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
      price: 'R$ 9,99 / mês',
      streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      programs: ['Show 1', 'Show 2', 'Show 3']
    },
    2: {
      id: 2,
      name: 'Canal Teste 2',
      description: 'Filmes e séries exclusivas em streaming.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
      price: 'R$ 9,99 / mês',
      streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      programs: ['Série 1', 'Série 2', 'Série 3']
    }
  };
  
  const channel = channels[req.params.id];
  if (channel) {
    res.json(channel);
  } else {
    res.status(404).json({ error: 'Canal não encontrado' });
  }
});

// ✅ Login (Exemplo)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email && password) {
    res.json({
      success: true,
      token: 'fake-jwt-token-' + Date.now(),
      user: { email, name: 'Usuário Teste' }
    });
  } else {
    res.status(400).json({ error: 'Email e senha obrigatórios' });
  }
});

// ✅ Registro (Exemplo)
app.post('/api/auth/register', (req, res) => {
  const { email, password, name } = req.body;
  
  if (email && password && name) {
    res.json({
      success: true,
      message: 'Usuário criado com sucesso!',
      user: { email, name }
    });
  } else {
    res.status(400).json({ error: 'Dados incompletos' });
  }
});

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`📺 Canais: http://localhost:${PORT}/api/channels`);
});
