import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Bell, 
  Moon, 
  Palette, 
  Globe, 
  Shield, 
  Download, 
  Trash2, 
  Save,
  Settings,
  Key,
  Smartphone,
  Volume2,
  Camera,
  Eye,
  EyeOff
} from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    // Profile Settings
    displayName: 'Fahad Saleem',
    email: 'fahad.saleem@example.com',
    bio: 'Computer Science Student - Final Year Project',
    
    // Preferences
    darkMode: true,
    notifications: true,
    soundEffects: true,
    language: 'en',
    theme: 'purple',
    
    // Privacy
    dataCollection: false,
    analyticsSharing: true,
    publicProfile: false
  });

  const [activeTab, setActiveTab] = useState('profile');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Show success animation
    const button = document.querySelector('#save-button');
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'preferences', label: 'Preferences', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'account', label: 'Account', icon: Key }
  ];

  const themes = [
    { id: 'purple', name: 'Purple Fusion', colors: ['#8B5CF6', '#EC4899'] },
    { id: 'blue', name: 'Ocean Blue', colors: ['#3B82F6', '#06B6D4'] },
    { id: 'green', name: 'Nature Green', colors: ['#10B981', '#059669'] },
    { id: 'orange', name: 'Sunset Orange', colors: ['#F97316', '#EA580C'] }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' }
  ];

  const ToggleSwitch = ({ checked, onChange, label, description }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '16px' : '20px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      marginBottom: '12px'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    }}
    >
      <div>
        <h4 style={{
          color: 'white',
          fontWeight: '600',
          fontSize: '15px',
          marginBottom: description ? '4px' : '0'
        }}>
          {label}
        </h4>
        {description && (
          <p style={{
            color: '#9ca3af',
            fontSize: '13px',
            margin: '0',
            lineHeight: '1.4'
          }}>
            {description}
          </p>
        )}
      </div>
      <button
        onClick={() => onChange(!checked)}
        style={{
          position: 'relative',
          width: '48px',
          height: '24px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          background: checked 
            ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' 
            : '#4b5563',
          boxShadow: checked 
            ? '0 4px 12px rgba(139, 92, 246, 0.4)' 
            : '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: 'white',
          borderRadius: '50%',
          top: '2px',
          left: checked ? '26px' : '2px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }} />
      </button>
    </div>
  );

  const InputField = ({ label, type = 'text', value, onChange, placeholder }) => (
    <div style={{ marginBottom: '20px' }}>
      <label style={{
        display: 'block',
        color: '#d1d5db',
        marginBottom: '8px',
        fontWeight: '500',
        fontSize: '14px'
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '12px 16px',
          color: 'white',
          fontSize: '14px',
          outline: 'none',
          transition: 'all 0.3s ease'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#8b5cf6';
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );

  const ProfileTab = () => (
    <div style={{ padding: isMobile ? '0' : '0' }}>
      {/* Profile Picture Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '24px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '16px',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
          }}>
            {settings.displayName.split(' ').map(n => n[0]).join('')}
          </div>
          <button style={{
            position: 'absolute',
            bottom: '16px',
            right: '0',
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            borderRadius: '50%',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
          >
            <Camera size={16} />
          </button>
        </div>
        <h3 style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '4px'
        }}>
          {settings.displayName}
        </h3>
        <p style={{
          color: '#9ca3af',
          fontSize: '14px',
          margin: '0'
        }}>
          Computer Science Student
        </p>
      </div>

      {/* Profile Form */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <User size={20} />
          Personal Information
        </h3>

        <InputField
          label="Display Name"
          value={settings.displayName}
          onChange={(e) => handleSettingChange('displayName', e.target.value)}
          placeholder="Enter your display name"
        />

        <InputField
          label="Email Address"
          type="email"
          value={settings.email}
          onChange={(e) => handleSettingChange('email', e.target.value)}
          placeholder="Enter your email address"
        />

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            color: '#d1d5db',
            marginBottom: '8px',
            fontWeight: '500',
            fontSize: '14px'
          }}>
            Bio
          </label>
          <textarea
            value={settings.bio}
            onChange={(e) => handleSettingChange('bio', e.target.value)}
            rows="4"
            placeholder="Tell us about yourself..."
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '12px 16px',
              color: 'white',
              fontSize: '14px',
              outline: 'none',
              transition: 'all 0.3s ease',
              resize: 'vertical',
              minHeight: '80px'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#8b5cf6';
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          />
        </div>
      </div>
    </div>
  );

  const PreferencesTab = () => (
    <div>
      {/* Theme Selection */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '24px'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Palette size={20} />
          Color Theme
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '12px'
        }}>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleSettingChange('theme', theme.id)}
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: settings.theme === theme.id
                  ? '2px solid #8b5cf6'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: settings.theme === theme.id
                  ? 'rgba(139, 92, 246, 0.2)'
                  : 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '100%'
              }}
              onMouseOver={(e) => {
                if (settings.theme !== theme.id) {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }
              }}
              onMouseOut={(e) => {
                if (settings.theme !== theme.id) {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`
                }} />
                <span style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  {theme.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '24px'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Globe size={20} />
          Language
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '12px'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSettingChange('language', lang.code)}
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: settings.language === lang.code
                  ? '2px solid #8b5cf6'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: settings.language === lang.code
                  ? 'rgba(139, 92, 246, 0.2)'
                  : 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '100%'
              }}
              onMouseOver={(e) => {
                if (settings.language !== lang.code) {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }
              }}
              onMouseOut={(e) => {
                if (settings.language !== lang.code) {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '24px' }}>{lang.flag}</span>
                <span style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '14px'
                }}>
                  {lang.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interface Settings */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Settings size={20} />
          Interface Settings
        </h3>
        
        <ToggleSwitch
          checked={settings.darkMode}
          onChange={(value) => handleSettingChange('darkMode', value)}
          label="Dark Mode"
          description="Use dark theme across the application"
        />

        <ToggleSwitch
          checked={settings.notifications}
          onChange={(value) => handleSettingChange('notifications', value)}
          label="Push Notifications"
          description="Receive notifications about new features and updates"
        />

        <ToggleSwitch
          checked={settings.soundEffects}
          onChange={(value) => handleSettingChange('soundEffects', value)}
          label="Sound Effects"
          description="Play sounds for interactions and notifications"
        />
      </div>
    </div>
  );

  const PrivacyTab = () => (
    <div>
      {/* Privacy Controls */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '24px'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Shield size={20} />
          Privacy Controls
        </h3>
        
        <ToggleSwitch
          checked={settings.dataCollection}
          onChange={(value) => handleSettingChange('dataCollection', value)}
          label="Data Collection"
          description="Allow collection of usage data to improve the service"
        />

        <ToggleSwitch
          checked={settings.analyticsSharing}
          onChange={(value) => handleSettingChange('analyticsSharing', value)}
          label="Analytics Sharing"
          description="Share anonymous analytics to help improve NeuralChat"
        />

        <ToggleSwitch
          checked={settings.publicProfile}
          onChange={(value) => handleSettingChange('publicProfile', value)}
          label="Public Profile"
          description="Make your profile visible to other users"
        />
      </div>

      {/* Data Management */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Download size={20} />
          Data Management
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
            e.target.style.background = 'rgba(59, 130, 246, 0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Download size={20} style={{ color: '#3b82f6' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '500' }}>Export Data</div>
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Download all your data</div>
              </div>
            </div>
            <span style={{ color: '#3b82f6', fontSize: '14px', fontWeight: '500' }}>Download</span>
          </button>

          <button style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            e.target.style.background = 'rgba(239, 68, 68, 0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Trash2 size={20} style={{ color: '#ef4444' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '500' }}>Delete Account</div>
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Permanently delete your account</div>
              </div>
            </div>
            <span style={{ color: '#ef4444', fontSize: '14px', fontWeight: '500' }}>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );

  const AccountTab = () => (
    <div>
      {/* Security Settings */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '24px'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Key size={20} />
          Security
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
            e.target.style.background = 'rgba(139, 92, 246, 0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Key size={20} style={{ color: '#8b5cf6' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '500' }}>Change Password</div>
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Update your account password</div>
              </div>
            </div>
            <span style={{ color: '#8b5cf6', fontSize: '14px', fontWeight: '500' }}>Change</span>
          </button>

          <button style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = 'rgba(16, 185, 129, 0.5)';
            e.target.style.background = 'rgba(16, 185, 129, 0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Smartphone size={20} style={{ color: '#10b981' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '500' }}>Two-Factor Authentication</div>
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Add an extra layer of security</div>
              </div>
            </div>
            <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '500' }}>Enable</span>
          </button>
        </div>
      </div>

      {/* Project Information */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '20px' : '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Project Information
        </h3>
        
        <div style={{
          textAlign: 'center',
          padding: '20px'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
          }}>
            <Settings size={32} color="white" />
          </div>
          
          <h4 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '8px'
          }}>
            NeuralChat AI
          </h4>
          
          <p style={{
            color: '#9ca3af',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            Final Year Project - Web Development
          </p>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '14px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#9ca3af' }}>Created by:</span>
                <span style={{ color: 'white', fontWeight: '500' }}>Fahad Saleem & Faraz Ali</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#9ca3af' }}>Version:</span>
                <span style={{ color: 'white', fontWeight: '500' }}>1.0.0</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#9ca3af' }}>Technology:</span>
                <span style={{ color: 'white', fontWeight: '500' }}>React.js</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#9ca3af' }}>University:</span>
                <span style={{ color: 'white', fontWeight: '500' }}>Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      padding: isMobile ? '80px 16px 20px' : '40px 20px',
      position: 'relative'
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
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '8px'
          }}>
            Settings
          </h1>
          <p style={{
            color: '#9ca3af',
            fontSize: '16px'
          }}>
            Customize your NeuralChat AI experience
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '280px 1fr',
          gap: '24px'
        }}>
          {/* Sidebar Tabs */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            height: 'fit-content',
            position: isMobile ? 'static' : 'sticky',
            top: '20px'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: activeTab === tab.id
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))'
                      : 'transparent',
                    color: activeTab === tab.id ? '#a78bfa' : '#9ca3af',
                    borderLeft: activeTab === tab.id ? '3px solid #8b5cf6' : '3px solid transparent'
                  }}
                  onMouseOver={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.color = 'white';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.color = '#9ca3af';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: isMobile ? '20px' : '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'preferences' && <PreferencesTab />}
            {activeTab === 'privacy' && <PrivacyTab />}
            {activeTab === 'account' && <AccountTab />}

            {/* Save Button */}
            {(activeTab === 'profile' || activeTab === 'preferences') && (
              <div style={{
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <button
                  id="save-button"
                  onClick={handleSave}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '14px',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)';
                  }}
                >
                  <Save size={16} />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;