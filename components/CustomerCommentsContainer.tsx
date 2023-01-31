import { Button } from '@mui/material';
import React from 'react';
import CustomerComment from './CustomerComment';

const comments = [
  {
    customerName: 'Ahmet',
    commentText:
      'DigitalAVM sayesinde evimden istediğim ürünü sipariş verip aynı gün içerisinde teslim alıyorum. Teşekkürler DigitalAVM.',
    src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    rating: 4,
  },
  {
    customerName: 'Aslı',
    commentText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit laboriosam non, ducimus ipsum error sequi quia animi quod ad, odit ex quasi recusandae magni quis aliquid voluptatibus facere velit? ',
    src: 'https://www.ajansinternet.com/uploads/2020/01/27/231508_92815ba1-0de2-464a-b8df-936d62f89ca0.jpeg',
    rating: 5,
  },
  {
    customerName: 'Suna',
    commentText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla est praesentium debitis alias optio, quod fugit reprehenderit id quia doloribus facere aspernatur aliquam similique assumenda voluptates cum iusto corrupti laudantium! ',
    src: 'https://i.pinimg.com/originals/fe/b2/a8/feb2a8bc921e87c380f70d379722cf8b.jpg',
    rating: 5,
  },
  {
    customerName: 'Yücel',
    commentText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus eveniet molestiae perspiciatis, dolorum adipisci nostrum ea nemo facere, beatae praesentium id illum magnam, labore repellendus aut temporibus voluptas similique. ',
    src: 'https://i.cnnturk.com/i/cnnturk/75/740x416/5db54bae214ed813e4837e90.jpg',
    rating: 5,
  },
];
const CustomerCommentsContainer = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < comments.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className='mt-8 '>
      <div className='py-8 font-semibold text-4xl text-center text-[var(--primary-color)]'>
        Müşterilerimizin Yorumları
      </div>
      <div className='w-full flex items-center justify-center'>
        <Button
          onClick={handlePreviousClick}
          sx={{
            minHeight: 0,
            minWidth: 0,
            padding: '1rem',
            borderRadius: '100%',
            mr: 1,
          }}
          className=''
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </Button>
        <CustomerComment comment={comments[currentIndex]} />
        <Button
          onClick={handleNextClick}
          sx={{
            minHeight: 0,
            minWidth: 0,
            padding: '1rem',
            borderRadius: '100%',
            ml: 1,
          }}
          className=''
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default CustomerCommentsContainer;
