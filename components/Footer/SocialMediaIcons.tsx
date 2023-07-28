import React from 'react';
import { Avatar } from '@mui/material';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
type Props = {};

const SocialMediaIcons = (props: Props) => {
  return (
    <div className='flex gap-3 py-4'>
      <Avatar sx={{ bgcolor: '#4267B2' }}>
        <FaFacebookF />
      </Avatar>
      <Avatar sx={{ bgcolor: '#1DA1F2' }}>
        <FaTwitter />
      </Avatar>
      <Avatar
        sx={{
          WebkitTextFillColor: 'transparent',
          background:
            'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        }}
      >
        <BsInstagram />
      </Avatar>
      <Avatar sx={{ bgcolor: '#0072b1' }}>
        <FaLinkedinIn />
      </Avatar>
    </div>
  );
};

export default SocialMediaIcons;
