import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';
import ModelsPage from './components/ModelsPage';
import AnalyticsPage from './components/AnalyticsPage';
import SettingsPage from './components/SettingsPage';
import { Brain, MessageCircle, Cpu, BarChart3, Settings, Menu, X } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedModel, setSelectedModel] = useState('GPT-4');
  const [messages, setMessages] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: Brain },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'models', label: 'Models', icon: Cpu },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'chat':
        return (
          <ChatPage
            messages={messages}
            setMessages={setMessages}
            selectedModel={selectedModel}
          />
        );
      case 'models':
        return (
          <ModelsPage
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
          />
        );
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      position: 'relative'
    }}>
      {/* Navigation Header */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 20px',
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
          onClick={() => setCurrentPage('home')}
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Brain size={20} color="white" />
            </div>
            <span style={{
              fontSize: '20px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              NeuralChat
            </span>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: window.innerWidth >= 768 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '8px'
          }}>
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  background: currentPage === item.id
                    ? 'rgba(139, 92, 246, 0.2)'
                    : 'transparent',
                  color: currentPage === item.id ? '#a78bfa' : '#9ca3af',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  if (currentPage !== item.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseOut={(e) => {
                  if (currentPage !== item.id) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#9ca3af';
                  }
                }}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: window.innerWidth < 768 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '16px 20px'
          }}>
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  background: currentPage === item.id
                    ? 'rgba(139, 92, 246, 0.2)'
                    : 'transparent',
                  color: currentPage === item.id ? '#a78bfa' : '#9ca3af',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '4px'
                }}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main style={{
        paddingTop: window.innerWidth < 768 ? '70px' : '80px'
      }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
