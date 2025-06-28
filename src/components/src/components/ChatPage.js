// pages/ChatPage.js - Enhanced Chat Interface
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Copy, MoreVertical, RefreshCw } from 'lucide-react';

const ChatPage = ({ messages, setMessages, selectedModel }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with realistic delay
    setTimeout(() => {
      const responses = [
        `I understand your question about "${inputMessage}". As ${selectedModel}, I'm here to provide you with accurate and helpful information. How can I assist you further?`,
        `That's an interesting point about "${inputMessage}". Based on my training, I can offer several perspectives on this topic. Would you like me to elaborate on any particular aspect?`,
        `Thank you for asking about "${inputMessage}". I'd be happy to help you explore this topic in detail. What specific information are you looking for?`,
        `Great question regarding "${inputMessage}"! I can provide you with comprehensive information and analysis. Let me break this down for you.`
      ];
      
      const aiResponse = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  const clearChat = () => {
    setMessages([]);
  };

  const suggestedQuestions = [
    "What can you help me with?",
    "Tell me about artificial intelligence",
    "Help me write a creative story",
    "Explain quantum computing"
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      paddingTop: isMobile ? '70px' : '0'
    }}>
      {/* Chat Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px 20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Bot size={20} color="white" />
            </div>
            <div>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: 'white',
                margin: 0
              }}>
                NeuralChat AI Assistant
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#9ca3af',
                margin: 0
              }}>
                Powered by {selectedModel}
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10b981',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{
                fontSize: '14px',
                color: '#9ca3af'
              }}>
                Online
              </span>
            </div>
            
            <button
              onClick={clearChat}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                padding: '6px',
                color: '#9ca3af',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.color = '#9ca3af';
              }}
            >
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {messages.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
            }}>
              <Bot size={40} color="white" />
            </div>
            
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '8px'
            }}>
              Welcome to NeuralChat!
            </h3>
            
            <p style={{
              fontSize: '16px',
              color: '#9ca3af',
              marginBottom: '32px'
            }}>
              Start a conversation with our AI assistant. Ask anything!
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '12px',
              width: '100%'
            }}>
              {suggestedQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setInputMessage(question)}
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#d1d5db',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = '#d1d5db';
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((message) => (
              <div 
                key={message.id} 
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  maxWidth: '80%',
                  flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: message.sender === 'user' 
                      ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' 
                      : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    flexShrink: 0
                  }}>
                    {message.sender === 'user' ? 
                      <User size={16} color="white" /> : 
                      <Bot size={16} color="white" />
                    }
                  </div>
                  
                  {/* Message Content */}
                  <div style={{
                    background: message.sender === 'user' 
                      ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' 
                      : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: message.sender === 'ai' ? 'blur(20px)' : 'none',
                    border: message.sender === 'ai' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    position: 'relative',
                    group: 'message'
                  }}>
                    <p style={{
                      margin: 0,
                      color: 'white',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word'
                    }}>
                      {message.text}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        color: message.sender === 'user' ? 'rgba(255, 255, 255, 0.8)' : '#9ca3af'
                      }}>
                        {message.timestamp}
                      </span>
                      
                      {message.sender === 'ai' && (
                        <button
                          onClick={() => copyMessage(message.text)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#9ca3af',
                            cursor: 'pointer',
                            padding: '2px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.color = 'white';
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.color = '#9ca3af';
                            e.target.style.background = 'none';
                          }}
                        >
                          <Copy size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Bot size={16} color="white" />
                  </div>
                  
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '16px 20px'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#8b5cf6',
                        borderRadius: '50%',
                        animation: 'bounce 1.4s ease-in-out infinite'
                      }} />
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#8b5cf6',
                        borderRadius: '50%',
                        animation: 'bounce 1.4s ease-in-out infinite',
                        animationDelay: '0.2s'
                      }} />
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#8b5cf6',
                        borderRadius: '50%',
                        animation: 'bounce 1.4s ease-in-out infinite',
                        animationDelay: '0.4s'
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '12px'
          }}>
            <div style={{ flex: 1 }}>
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... (Press Enter to send)"
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'white',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  resize: 'none',
                  minHeight: '44px',
                  maxHeight: '120px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#8b5cf6';
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                rows={1}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                }}
              />
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              style={{
                width: '44px',
                height: '44px',
                background: inputMessage.trim() 
                  ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputMessage.trim() ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                opacity: inputMessage.trim() ? 1 : 0.5
              }}
              onMouseOver={(e) => {
                if (inputMessage.trim()) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Send size={18} color="white" />
            </button>
          </div>
          
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            textAlign: 'center',
            marginTop: '8px',
            margin: '8px 0 0 0'
          }}>
            NeuralChat AI may make mistakes. Please verify important information.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatPage;
