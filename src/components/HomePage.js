// pages/HomePage.js - Final Responsive Layout
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  TrendingUp,
  Shield,
  Globe,
  Code,
  MessageSquare,
  Lightbulb,
  CheckCircle,
  Play,
  Award,
  Target,
  Rocket,
  BarChart3,
  Cpu,
  Database,
  Layers
} from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const words = ['Intelligence', 'Creativity', 'Innovation', 'Future'];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    let i = 0;
    const timer = setInterval(() => {
      if (i <= word.length) {
        setTypedText(word.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentWordIndex]);

  const features = [
    { 
      icon: Zap, 
      title: 'Lightning Fast', 
      description: 'Get instant responses powered by advanced AI models with cutting-edge technology',
      gradient: 'from-yellow-400 to-orange-500',
      stats: '< 2s response time'
    },
    { 
      icon: Brain, 
      title: 'Intelligent', 
      description: 'Deep understanding and contextual conversations that adapt to your needs',
      gradient: 'from-purple-400 to-pink-500',
      stats: '99.7% accuracy'
    },
    { 
      icon: Sparkles, 
      title: 'Versatile', 
      description: 'From creative writing to complex problem solving and everything in between',
      gradient: 'from-blue-400 to-cyan-500',
      stats: '50+ use cases'
    }
  ];

  const capabilities = [
    { icon: Code, title: 'Code Generation', desc: 'Write, debug, and optimize code in 50+ languages' },
    { icon: MessageSquare, title: 'Content Creation', desc: 'Generate articles, blogs, and creative content' },
    { icon: Lightbulb, title: 'Problem Solving', desc: 'Complex analysis and strategic thinking' },
    { icon: Globe, title: 'Translation', desc: 'Real-time translation in 100+ languages' },
    { icon: BarChart3, title: 'Data Analysis', desc: 'Process and analyze complex datasets' },
    { icon: Shield, title: 'Privacy First', desc: 'End-to-end encryption and data protection' }
  ];

  const stats = [
    { icon: Brain, label: 'AI Models', value: '4+', color: '#a78bfa' },
    { icon: Clock, label: 'Response Time', value: '<2s', color: '#60a5fa' },
    { icon: TrendingUp, label: 'Accuracy', value: '99%', color: '#4ade80' },
    { icon: Users, label: 'Active Users', value: '1K+', color: '#f472b6' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      text: 'NeuralChat has revolutionized my coding workflow. The AI assistance is incredibly accurate and fast.',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Ahmed Khan',
      role: 'Data Scientist',
      text: 'The data analysis capabilities are outstanding. It helps me process complex datasets effortlessly.',
      avatar: 'AK',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Content Creator',
      text: 'Perfect for content creation. The AI understands context and generates high-quality content.',
      avatar: 'EC',
      rating: 5
    }
  ];

  const useCases = [
    { icon: Target, title: 'Business Strategy', desc: 'Strategic planning and market analysis' },
    { icon: Rocket, title: 'Startup Ideas', desc: 'Innovation and business concept development' },
    { icon: Award, title: 'Academic Research', desc: 'Research assistance and paper writing' },
    { icon: Database, title: 'Data Processing', desc: 'Large-scale data analysis and insights' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 70%, #0f172a 100%)',
      position: 'relative',
      overflow: 'auto',
      paddingTop: isMobile ? '70px' : '0'
    }}>
      {/* Background Effects */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        overflow: 'hidden',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '25%',
          height: '25%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '20px 15px' : '40px 30px'
      }}>
        
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '50px' : '80px', 
          paddingTop: isMobile ? '20px' : '40px'
        }}>
          {/* Logo */}
          <div style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: isMobile ? '20px' : '30px'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-8px',
              background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
              borderRadius: '26px',
              filter: 'blur(20px)',
              opacity: '0.8',
              animation: 'pulse 3s ease-in-out infinite'
            }} />
            <div style={{
              position: 'relative',
              width: isMobile ? '80px' : '100px',
              height: isMobile ? '80px' : '100px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px rgba(139, 92, 246, 0.4)'
            }}>
              <Brain size={isMobile ? 40 : 50} color="white" />
            </div>
          </div>
          
          {/* Title */}
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1',
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899, #06b6d4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            NeuralChat AI
          </h1>

          {/* Typing Animation */}
          <div style={{
            fontSize: isMobile ? '1.2rem' : 'clamp(1.3rem, 4vw, 2.2rem)',
            fontWeight: '600',
            marginBottom: '20px',
            height: isMobile ? '40px' : '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <span style={{ color: '#d1d5db', marginRight: '10px' }}>Powered by</span>
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              minWidth: isMobile ? '120px' : '180px',
              textAlign: 'left'
            }}>
              {typedText}
              <span style={{
                color: '#ec4899',
                animation: 'blink 1s infinite'
              }}>|</span>
            </span>
          </div>
          
          {/* Description */}
          <p style={{
            fontSize: isMobile ? '0.9rem' : 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#d1d5db',
            maxWidth: '800px',
            margin: '0 auto 25px',
            lineHeight: '1.6',
            fontWeight: '400',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Experience the future of AI interaction with our cutting-edge platform. 
            Powered by advanced neural networks and designed for the next generation.
          </p>

          {/* Project Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            borderRadius: '40px',
            padding: isMobile ? '8px 16px' : '10px 20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '35px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
          }}>
            <Star size={isMobile ? 14 : 16} color="#fbbf24" />
            <span style={{ fontSize: isMobile ? '11px' : '13px', color: '#d1d5db' }}>
              Final Year Project by{' '}
              <span style={{ fontWeight: '700', color: '#a78bfa' }}>Fahad Saleem</span> &{' '}
              <span style={{ fontWeight: '700', color: '#a78bfa' }}>Faraz Ali</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '12px' : '15px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '25px'
          }}>
            <button
              onClick={() => setCurrentPage('chat')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                color: 'white',
                fontWeight: '700',
                fontSize: isMobile ? '14px' : '16px',
                padding: isMobile ? '12px 20px' : '14px 28px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 12px 30px rgba(139, 92, 246, 0.35)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 16px 40px rgba(139, 92, 246, 0.45)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 12px 30px rgba(139, 92, 246, 0.35)';
              }}
            >
              <span>Start Chatting Now</span>
              <ArrowRight size={isMobile ? 16 : 18} />
            </button>
            
            <button
              onClick={() => setCurrentPage('models')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                color: 'white',
                fontWeight: '600',
                fontSize: isMobile ? '14px' : '16px',
                padding: isMobile ? '12px 18px' : '14px 24px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Play size={isMobile ? 14 : 16} />
              <span>Explore Models</span>
            </button>
          </div>

          <p style={{ color: '#9ca3af', fontSize: isMobile ? '12px' : '13px' }}>
            No registration required • Free to use • Instant access
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: isMobile ? '12px' : '15px',
          marginBottom: isMobile ? '50px' : '60px'
        }}>
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: isMobile ? '16px 12px' : '20px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
                background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <stat.icon size={isMobile ? 20 : 24} color="white" />
              </div>
              <div style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '5px'
              }}>
                {stat.value}
              </div>
              <div style={{
                color: '#9ca3af',
                fontSize: isMobile ? '11px' : '13px',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div style={{ marginBottom: isMobile ? '50px' : '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '40px' }}>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '12px'
            }}>
              Core Features
            </h2>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              color: '#9ca3af',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Discover the powerful capabilities that make NeuralChat special
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: isMobile ? '16px' : '20px'
          }}>
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '22px',
                  padding: isMobile ? '20px' : '25px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.border = '1px solid rgba(139, 92, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '-5px',
                    background: `linear-gradient(135deg, ${feature.gradient.includes('yellow') ? '#facc15, #f97316' : feature.gradient.includes('purple') ? '#8b5cf6, #ec4899' : '#3b82f6, #06b6d4'})`,
                    borderRadius: '16px',
                    filter: 'blur(12px)',
                    opacity: '0.6'
                  }} />
                  <div style={{
                    position: 'relative',
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    background: `linear-gradient(135deg, ${feature.gradient.includes('yellow') ? '#facc15, #f97316' : feature.gradient.includes('purple') ? '#8b5cf6, #ec4899' : '#3b82f6, #06b6d4'})`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <feature.icon size={isMobile ? 24 : 30} color="white" />
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '10px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#9ca3af',
                  lineHeight: '1.5',
                  fontSize: isMobile ? '13px' : '14px',
                  marginBottom: '15px'
                }}>
                  {feature.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '5px 10px',
                  borderRadius: '12px',
                  fontSize: isMobile ? '11px' : '12px',
                  fontWeight: '600',
                  color: '#a78bfa'
                }}>
                  <CheckCircle size={isMobile ? 11 : 12} style={{ marginRight: '5px' }} />
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div style={{ marginBottom: isMobile ? '50px' : '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '40px' }}>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ec4899, #06b6d4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '12px'
            }}>
              What Can You Do?
            </h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: isMobile ? '12px' : '18px'
          }}>
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '18px',
                  padding: isMobile ? '16px' : '20px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: isMobile ? '36px' : '42px',
                  height: isMobile ? '36px' : '42px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <cap.icon size={isMobile ? 18 : 20} color="white" />
                </div>
                <h4 style={{
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '6px'
                }}>
                  {cap.title}
                </h4>
                <p style={{
                  color: '#9ca3af',
                  fontSize: isMobile ? '11px' : '13px',
                  lineHeight: '1.4'
                }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.12))',
          borderRadius: '22px',
          padding: isMobile ? '30px 20px' : '40px 20px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          marginBottom: '30px'
        }}>
          <h3 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '12px'
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#9ca3af',
            marginBottom: '25px',
            maxWidth: '400px',
            margin: '0 auto 25px'
          }}>
            Join thousands of users experiencing the future of AI
          </p>
          
          <button
            onClick={() => setCurrentPage('chat')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              color: 'white',
              fontWeight: '700',
              fontSize: isMobile ? '14px' : '16px',
              padding: isMobile ? '14px 24px' : '16px 32px',
              borderRadius: '18px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 45px rgba(139, 92, 246, 0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 15px 35px rgba(139, 92, 246, 0.4)';
            }}
          >
            <Rocket size={isMobile ? 18 : 20} />
            <span>Launch NeuralChat</span>
            <ArrowRight size={isMobile ? 18 : 20} />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
