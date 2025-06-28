// pages/ModelsPage.js - Enhanced AI Models Interface
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Cpu, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Clock,
  Shield,
  Globe,
  Code,
  Award,
  BarChart3,
  Users,
  Layers,
  Target
} from 'lucide-react';

const ModelsPage = ({ selectedModel, setSelectedModel }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aiModels = [
    {
      name: 'GPT-4',
      description: 'Most capable model for complex reasoning, creative writing, and detailed analysis',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Advanced reasoning', 'Creative writing', 'Code generation', 'Mathematical problem solving'],
      performance: { speed: 85, accuracy: 95, creativity: 90 },
      pricing: 'Premium',
      status: 'available',
      category: 'language',
      strengths: ['Complex reasoning', 'Academic research', 'Professional writing'],
      useCases: ['Research', 'Content Creation', 'Analysis', 'Programming'],
      modelSize: '175B parameters',
      latency: '2-3s',
      costPerToken: '$0.03/1K'
    },
    {
      name: 'Claude-3',
      description: 'Excellent for analysis, reasoning, and helpful, harmless conversations',
      icon: Sparkles,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Constitutional AI', 'Harmless responses', 'Analysis tasks', 'Research assistance'],
      performance: { speed: 90, accuracy: 93, creativity: 85 },
      pricing: 'Standard',
      status: 'available',
      category: 'language',
      strengths: ['Ethical responses', 'Long-form analysis', 'Academic writing'],
      useCases: ['Research', 'Education', 'Analysis', 'Writing'],
      modelSize: '200B parameters',
      latency: '1-2s',
      costPerToken: '$0.02/1K'
    },
    {
      name: 'Gemini Pro',
      description: 'Google\'s multimodal AI with excellent performance across various tasks',
      icon: Zap,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Multimodal capabilities', 'Fast responses', 'Web integration', 'Real-time data'],
      performance: { speed: 95, accuracy: 88, creativity: 80 },
      pricing: 'Standard',
      status: 'available',
      category: 'multimodal',
      strengths: ['Multimodal input', 'Real-time data', 'Fast processing'],
      useCases: ['Image Analysis', 'Real-time Tasks', 'Web Search', 'Data Processing'],
      modelSize: '137B parameters',
      latency: '1s',
      costPerToken: '$0.015/1K'
    },
    {
      name: 'LLaMA-2',
      description: 'Open-source alternative with good performance for general tasks',
      icon: Cpu,
      gradient: 'from-orange-500 to-red-500',
      features: ['Open source', 'Privacy focused', 'General purpose', 'Community driven'],
      performance: { speed: 80, accuracy: 85, creativity: 75 },
      pricing: 'Free',
      status: 'available',
      category: 'opensource',
      strengths: ['Open source', 'Privacy', 'Customizable'],
      useCases: ['Development', 'Research', 'Personal Use', 'Education'],
      modelSize: '70B parameters',
      latency: '3-4s',
      costPerToken: 'Free'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Models', icon: Layers },
    { id: 'language', label: 'Language', icon: Brain },
    { id: 'multimodal', label: 'Multimodal', icon: Zap },
    { id: 'opensource', label: 'Open Source', icon: Code }
  ];

  const filteredModels = activeFilter === 'all' 
    ? aiModels 
    : aiModels.filter(model => model.category === activeFilter);

  const PerformanceBar = ({ label, value, color, icon: Icon }) => (
    <div style={{ marginBottom: '12px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '6px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Icon size={14} style={{ color }} />
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>{label}</span>
        </div>
        <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{value}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden'
      }}>
        <div 
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            borderRadius: '3px',
            width: `${value}%`,
            transition: 'all 1s ease'
          }}
        />
      </div>
    </div>
  );

  const ModelCard = ({ model }) => {
    const isSelected = selectedModel === model.name;
    
    return (
      <div 
        style={{
          position: 'relative',
          background: isSelected 
            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))'
            : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '24px',
          border: isSelected 
            ? '2px solid #8b5cf6' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          boxShadow: isSelected 
            ? '0 20px 40px rgba(139, 92, 246, 0.3)' 
            : 'none'
        }}
        onClick={() => setSelectedModel(model.name)}
        onMouseOver={(e) => {
          if (!isSelected) {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.border = '1px solid rgba(139, 92, 246, 0.3)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
          }
        }}
        onMouseOut={(e) => {
          if (!isSelected) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = 'none';
          }
        }}
      >
        {/* Selection indicator */}
        {isSelected && (
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '24px',
            height: '24px',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckCircle size={14} color="white" />
          </div>
        )}

        {/* Model header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-4px',
              background: `linear-gradient(135deg, ${model.gradient.replace('from-', '').replace('to-', ', ')})`,
              borderRadius: '14px',
              filter: 'blur(8px)',
              opacity: '0.6'
            }} />
            <div style={{
              position: 'relative',
              width: '48px',
              height: '48px',
              background: `linear-gradient(135deg, ${model.gradient.replace('from-', '').replace('to-', ', ')})`,
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <model.icon size={24} color="white" />
            </div>
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '4px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'white',
                margin: 0
              }}>
                {model.name}
              </h3>
              <span style={{
                fontSize: '11px',
                padding: '2px 8px',
                borderRadius: '12px',
                fontWeight: '600',
                background: model.pricing === 'Premium' 
                  ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
                  : model.pricing === 'Free'
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white'
              }}>
                {model.pricing}
              </span>
            </div>
            <p style={{
              fontSize: '13px',
              color: '#9ca3af',
              margin: 0,
              fontWeight: '500'
            }}>
              {model.modelSize} • {model.latency} latency
            </p>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '14px',
          color: '#d1d5db',
          lineHeight: '1.5',
          marginBottom: '16px'
        }}>
          {model.description}
        </p>

        {/* Key Strengths */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#a78bfa',
            marginBottom: '8px'
          }}>
            Key Strengths
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px'
          }}>
            {model.strengths.map((strength, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '11px',
                  padding: '4px 8px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: '#c4b5fd',
                  borderRadius: '8px',
                  border: '1px solid rgba(139, 92, 246, 0.3)'
                }}
              >
                {strength}
              </span>
            ))}
          </div>
        </div>

        {/* Performance metrics */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#a78bfa',
            marginBottom: '10px'
          }}>
            Performance
          </h4>
          <PerformanceBar 
            label="Speed" 
            value={model.performance.speed} 
            color="#3b82f6"
            icon={Clock} 
          />
          <PerformanceBar 
            label="Accuracy" 
            value={model.performance.accuracy} 
            color="#10b981"
            icon={Target} 
          />
          <PerformanceBar 
            label="Creativity" 
            value={model.performance.creativity} 
            color="#8b5cf6"
            icon={Sparkles} 
          />
        </div>

        {/* Use Cases */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#a78bfa',
            marginBottom: '8px'
          }}>
            Best For
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '4px'
          }}>
            {model.useCases.slice(0, 4).map((useCase, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                color: '#9ca3af'
              }}>
                <div style={{
                  width: '4px',
                  height: '4px',
                  background: '#8b5cf6',
                  borderRadius: '50%'
                }} />
                {useCase}
              </div>
            ))}
          </div>
        </div>

        {/* Status and pricing */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              background: '#10b981',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{
              fontSize: '12px',
              color: '#10b981',
              fontWeight: '500'
            }}>
              {model.status}
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{
              fontSize: '11px',
              color: '#6b7280'
            }}>
              {model.costPerToken}
            </span>
            <Star size={12} color="#fbbf24" fill="#fbbf24" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      paddingTop: isMobile ? '70px' : '0',
      overflow: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '20px 15px' : '40px 30px'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '8px'
          }}>
            AI Models
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#9ca3af',
            maxWidth: '600px'
          }}>
            Choose the perfect AI model for your needs. Each model has unique strengths and capabilities.
          </p>
        </div>

        {/* Currently Selected Model */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '4px'
              }}>
                Currently Selected
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#9ca3af',
                margin: 0
              }}>
                This model will be used for all conversations
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
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
              <div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'white'
                }}>
                  {selectedModel}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#a78bfa'
                }}>
                  Active Model
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '30px',
          overflowX: 'auto',
          paddingBottom: '4px'
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '12px',
                border: 'none',
                background: activeFilter === category.id
                  ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: activeFilter === category.id ? 'white' : '#9ca3af',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== category.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = 'white';
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== category.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.color = '#9ca3af';
                }
              }}
            >
              <category.icon size={14} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {filteredModels.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>

        {/* Comparison Table */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '30px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Model Comparison
          </h3>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{
                    textAlign: 'left',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#a78bfa'
                  }}>
                    Model
                  </th>
                  <th style={{
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#a78bfa'
                  }}>
                    Speed
                  </th>
                  <th style={{
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#a78bfa'
                  }}>
                    Accuracy
                  </th>
                  <th style={{
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#a78bfa'
                  }}>
                    Creativity
                  </th>
                  <th style={{
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#a78bfa'
                  }}>
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiModels.map((model, idx) => (
                  <tr 
                    key={model.name} 
                    style={{
                      borderBottom: idx < aiModels.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      background: selectedModel === model.name ? 'rgba(139, 92, 246, 0.1)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '16px 12px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          width: '28px',
                          height: '28px',
                          background: `linear-gradient(135deg, ${model.gradient.replace('from-', '').replace('to-', ', ')})`,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <model.icon size={14} color="white" />
                        </div>
                        <span style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'white'
                        }}>
                          {model.name}
                        </span>
                      </div>
                    </td>
                    <td style={{
                      textAlign: 'center',
                      padding: '16px 12px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}>
                        <Clock size={12} color="#3b82f6" />
                        <span style={{
                          fontSize: '13px',
                          color: 'white',
                          fontWeight: '500'
                        }}>
                          {model.performance.speed}%
                        </span>
                      </div>
                    </td>
                    <td style={{
                      textAlign: 'center',
                      padding: '16px 12px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}>
                        <Target size={12} color="#10b981" />
                        <span style={{
                          fontSize: '13px',
                          color: 'white',
                          fontWeight: '500'
                        }}>
                          {model.performance.accuracy}%
                        </span>
                      </div>
                    </td>
                    <td style={{
                      textAlign: 'center',
                      padding: '16px 12px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}>
                        <Sparkles size={12} color="#8b5cf6" />
                        <span style={{
                          fontSize: '13px',
                          color: 'white',
                          fontWeight: '500'
                        }}>
                          {model.performance.creativity}%
                        </span>
                      </div>
                    </td>
                    <td style={{
                      textAlign: 'center',
                      padding: '16px 12px'
                    }}>
                      <span style={{
                        fontSize: '11px',
                        padding: '4px 8px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        background: model.pricing === 'Premium' 
                          ? 'rgba(251, 191, 36, 0.2)' 
                          : model.pricing === 'Free'
                          ? 'rgba(16, 185, 129, 0.2)'
                          : 'rgba(59, 130, 246, 0.2)',
                        color: model.pricing === 'Premium' 
                          ? '#fbbf24' 
                          : model.pricing === 'Free'
                          ? '#10b981'
                          : '#3b82f6'
                      }}>
                        {model.pricing}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
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

export default ModelsPage;