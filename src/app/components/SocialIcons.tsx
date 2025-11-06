import React from 'react';

interface SocialIconProps {
  size?: number;
  color?: string;
}

export const LinkedInIcon: React.FC<SocialIconProps> = ({ size = 24, color = '#77b5' }) => (
  <div style={{
    width: size,
    height: size,
    background: color,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: size * 0.6,
    fontWeight: 'bold'
  }}>
    in
  </div>
);

export const InstagramIcon: React.FC<SocialIconProps> = ({ size = 24, color = '#E4405' }) => (
  <div style={{
    width: size,
    height: size,
    background: `linear-gradient(45deg, #f094330#e6683c25#dc274350#cc236675%,#bc1888 100%)`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }}>
    <div style={{
      width: size * 0.6,
      height: size * 0.6,
      border: '2px solid white',
      borderRadius: '4px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size * 0.2,
        height: size * 0.2,
        border: '2px solid #dc2743',
        borderRadius: '50%',
        background: 'transparent'
      }}></div>
      <div style={{
        position: 'absolute',
        top: size * 0.05,
        right: size * 0.05,
        width: size * 0.15,
        height: size * 0.15,
        border: '2px solid white',
        borderRadius: '50%',
        background: 'transparent'
      }}></div>
    </div>
  </div>
);

export const TwitterIcon: React.FC<SocialIconProps> = ({ size = 24, color = '#000' }) => (
  <div style={{
    width: size,
    height: size,
    background: color,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: size * 0.5,
    fontWeight: 'bold'
  }}>
    X
  </div>
);

export const FacebookIcon: React.FC<SocialIconProps> = ({ size = 24, color = '#1877F2' }) => (
  <div style={{
    width: size,
    height: size,
    background: color,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: size * 0.5,
    fontWeight: 'bold'
  }}>
    f
  </div>
); 