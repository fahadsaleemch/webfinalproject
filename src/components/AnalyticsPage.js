// pages/AnalyticsPage.js - Enhanced Analytics Dashboard
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  Zap, 
  Brain, 
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Star,
  Award,
  Target,
  Globe,
  Code,
  Lightbulb,
  Download,
  RefreshCw,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeChart, setActiveChart] = useState('messages');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    {
      title: 'Total Messages',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      description: 'Messages sent this week',
      previousValue: '1,102'
    },
    {
      title: 'Hours Saved',
      value: '89.2',
      change: '+8%',
      trend: 'up',
      icon: Clock,
      color: 'from-green-500 to-emerald-500',
      description: 'Time saved using AI assistance',
      previousValue: '82.6'
    },
    {
      title: 'Success Rate',
      value: '98.7%',
      change: '+2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      description: 'Successful task completion',
      previousValue: '96.8%'
    },
    {
      title: 'Active Days',
      value: '23',
      change: '+5%',
      trend: 'up',
      icon: Calendar,
      color: 'from-orange-500 to-red-500',
      description: 'Days active this month',
      previousValue: '22'
    }
  ];

  const weeklyData = [
    { day: 'Mon', messages: 45, hours: 2.5, tasks: 12, accuracy: 98 },
    { day: 'Tue', messages: 52, hours: 3.1, tasks: 15, accuracy: 97 },
    { day: 'Wed', messages: 38, hours: 2.0, tasks: 10, accuracy: 99 },
    { day: 'Thu', messages: 65, hours: 4.2, tasks: 18, accuracy: 96 },
    { day: 'Fri', messages: 71, hours: 4.8, tasks: 20, accuracy: 98 },
    { day: 'Sat', messages: 34, hours: 1.8, tasks: 8, accuracy: 100 },
    { day: 'Sun', messages: 28, hours: 1.5, tasks: 6, accuracy: 99 }
  ];

  const modelUsage = [
    { name: 'GPT-4', usage: 45, sessions: 156, color: '#8b5cf6', hours: 34.5 },
    { name: 'Claude-3', usage: 30, sessions: 98, color: '#06b6d4', hours: 22.8 },
    { name: 'Gemini Pro', usage: 20, sessions: 64, color: '#10b981', hours: 15.2 },
    { name: 'LLaMA-2', usage: 5, sessions: 18, color: '#f97316', hours: 4.1 }
  ];

  const taskCategories = [
    { name: 'Code Generation', count: 89, percentage: 35, icon: Code, color: '#8b5cf6' },
    { name: 'Creative Writing', count: 67, percentage: 26, icon: Lightbulb, color: '#ec4899' },
    { name: 'Analysis', count: 54, percentage: 21, icon: BarChart3, color: '#06b6d4' },
    { name: 'Research', count: 32, percentage: 13, icon: Globe, color: '#10b981' },
    { name: 'Other', count: 13, percentage: 5, icon: Target, color: '#f59e0b' }
  ];

  const recentActivities = [
    {
      action: 'Generated React component code',
      time: '2 hours ago',
      model: 'GPT-4',
      type: 'code',
      icon: Code,
      success: true
    },
    {
      action: 'Analyzed quarterly sales data',
      time: '5 hours ago',
      model: 'Claude-3',
      type: 'analysis',
      icon: BarChart3,
      success: true
    },
    {
      action: 'Created marketing copy',
      time: '8 hours ago',
      model: 'GPT-4',
      type: 'creative',
      icon: Lightbulb,
      success: true
    },
    {
      action: 'Translated technical documentation',
      time: '1 day ago',
      model: 'Gemini Pro',
      type: 'translation',
      icon: Globe,
      success: true
    },
    {
      action: 'Research on AI trends',
      time: '1 day ago',
      model: 'Claude-3',
      type: 'research',
      icon: Users,
      success: true
    },
    {
      action: 'Code review and optimization',
      time: '2 days ago',
      model: 'GPT-4',
      type: 'code',
      icon: Code,
      success: false
    }
  ];

  const timeRanges = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  const chartTypes = [
    { value: 'messages', label: 'Messages', icon: MessageCircle },
    { value: 'hours', label: 'Hours Saved', icon: Clock },
    { value: 'tasks', label: 'Tasks', icon: Target },
    { value: 'accuracy', label: 'Accuracy', icon: TrendingUp }
  ];

  const StatCard = ({ stat }) => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      padding: isMobile ? '16px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: `linear-gradient(135deg, ${stat.color})`,
        borderRadius: '50%',
        opacity: '0.1',
        transform: 'translate(30px, -30px)'
      }} />
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: `linear-gradient(135deg, ${stat.color})`,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <stat.icon size={20} color="white" />
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '13px',
          fontWeight: '600',
          color: stat.trend === 'up' ? '#10b981' : '#ef4444'
        }}>
          {stat.trend === 'up' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
          {stat.change}
        </div>
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <div style={{
          fontSize: isMobile ? '1.5rem' : '2rem',
          fontWeight: '800',
          color: 'white',
          marginBottom: '4px'
        }}>
          {stat.value}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: 'white'
        }}>
          {stat.title}
        </div>
      </div>
      
      <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>
        {stat.description}
      </div>
      
      <div style={{
        fontSize: '11px',
        color: '#6b7280'
      }}>
        Previous: {stat.previousValue}
      </div>
    </div>
  );

  const ChartBar = ({ data, maxValue, color, label }) => {
    const height = (data / maxValue) * 100;
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        minWidth: '40px'
      }}>
        <div style={{
          position: 'relative',
          width: '24px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              background: `linear-gradient(to top, ${color}, ${color}aa)`,
              borderRadius: '12px',
              transition: 'all 1s ease',
              height: `${height}%`
            }}
          />
        </div>
        <span style={{
          fontSize: '11px',
          color: '#9ca3af',
          fontWeight: '500'
        }}>
          {label}
        </span>
        <span style={{
          fontSize: '12px',
          color: 'white',
          fontWeight: '600'
        }}>
          {data}
        </span>
      </div>
    );
  };

  const getChartData = () => {
    switch(activeChart) {
      case 'messages': return weeklyData.map(d => d.messages);
      case 'hours': return weeklyData.map(d => d.hours);
      case 'tasks': return weeklyData.map(d => d.tasks);
      case 'accuracy': return weeklyData.map(d => d.accuracy);
      default: return weeklyData.map(d => d.messages);
    }
  };

  const getChartColor = () => {
    switch(activeChart) {
      case 'messages': return '#3b82f6';
      case 'hours': return '#10b981';
      case 'tasks': return '#8b5cf6';
      case 'accuracy': return '#f59e0b';
      default: return '#3b82f6';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      paddingTop: isMobile ? '70px' : '0',
      overflow: 'auto'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '20px 15px' : '40px 30px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h1 style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '8px'
            }}>
              Analytics Dashboard
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#9ca3af'
            }}>
              Track your AI usage and performance metrics
            </p>
          </div>
          
          {/* Time Range Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <button style={{
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#9ca3af',
              cursor: 'pointer'
            }}>
              <RefreshCw size={16} />
            </button>
            <button style={{
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#9ca3af',
              cursor: 'pointer'
            }}>
              <Download size={16} />
            </button>
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: timeRange === range.value
                    ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                    : 'rgba(255, 255, 255, 0.05)',
                  color: timeRange === range.value ? 'white' : '#9ca3af'
                }}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '20px',
          marginBottom: '30px'
        }}>
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {/* Weekly Activity Chart */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: isMobile ? '20px' : '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: 'white'
              }}>
                Weekly Activity
              </h3>
              
              <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                {chartTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActiveChart(type.value)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: activeChart === type.value
                        ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                        : 'rgba(255, 255, 255, 0.05)',
                      color: activeChart === type.value ? 'white' : '#9ca3af'
                    }}
                  >
                    <type.icon size={12} />
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'space-between',
              gap: '8px',
              height: '120px',
              padding: '0 8px'
            }}>
              {weeklyData.map((data, idx) => (
                <ChartBar
                  key={idx}
                  data={getChartData()[idx]}
                  maxValue={Math.max(...getChartData())}
                  color={getChartColor()}
                  label={data.day}
                />
              ))}
            </div>
          </div>

          {/* Model Usage */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: isMobile ? '20px' : '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '20px'
            }}>
              Model Usage
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              {modelUsage.map((model, idx) => (
                <div key={idx} style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        background: model.color,
                        borderRadius: '3px'
                      }} />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'white'
                      }}>
                        {model.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '13px',
                      color: '#9ca3af'
                    }}>
                      {model.usage}%
                    </span>
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
                        background: model.color,
                        borderRadius: '3px',
                        width: `${model.usage}%`,
                        transition: 'all 1s ease'
                      }}
                    />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '4px',
                    fontSize: '11px',
                    color: '#6b7280'
                  }}>
                    <span>{model.sessions} sessions</span>
                    <span>{model.hours}h saved</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Task Categories and Recent Activity */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {/* Task Categories */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: isMobile ? '20px' : '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '20px'
            }}>
              Task Categories
            </h3>
            
            {taskCategories.map((category, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                marginBottom: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: `${category.color}33`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <category.icon size={16} style={{ color: category.color }} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '4px'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'white'
                    }}>
                      {category.name}
                    </span>
                    <span style={{
                      fontSize: '13px',
                      color: '#9ca3af'
                    }}>
                      {category.count}
                    </span>
                  </div>
                  
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px'
                  }}>
                    <div style={{
                      width: `${category.percentage}%`,
                      height: '100%',
                      background: category.color,
                      borderRadius: '2px',
                      transition: 'all 1s ease'
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: isMobile ? '20px' : '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: 'white'
              }}>
                Recent Activity
              </h3>
              <button style={{
                fontSize: '13px',
                color: '#8b5cf6',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                View All
              </button>
            </div>
            
            <div style={{
              maxHeight: '300px',
              overflowY: 'auto'
            }}>
              {recentActivities.map((activity, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  marginBottom: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: activity.success ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <activity.icon size={16} style={{ 
                      color: activity.success ? '#10b981' : '#ef4444' 
                    }} />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'white',
                      marginBottom: '4px',
                      lineHeight: '1.4'
                    }}>
                      {activity.action}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>
                        {activity.time}
                      </span>
                      <span style={{
                        fontSize: '11px',
                        padding: '2px 6px',
                        background: 'rgba(139, 92, 246, 0.2)',
                        color: '#c4b5fd',
                        borderRadius: '4px'
                      }}>
                        {activity.model}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          padding: isMobile ? '20px' : '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Summary Statistics
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '16px'
          }}>
            {[
              { label: 'Total Sessions', value: '156', icon: Activity },
              { label: 'Avg. Session Time', value: '12m', icon: Clock },
              { label: 'Tasks Completed', value: '89', icon: Target },
              { label: 'Satisfaction', value: '4.9★', icon: Star }
            ].map((stat, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px'
                }}>
                  <stat.icon size={16} color="white" />
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;