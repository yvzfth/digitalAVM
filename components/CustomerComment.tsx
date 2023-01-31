import React from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
interface CustomerCommentProps {
  comment: {
    customerName: string;
    commentText: string;
    rating: number;
    src: string;
  };
}

const CustomerComment = ({ comment }: CustomerCommentProps) => {
  return (
    <div className='flex items-center -mr-[5.5rem]'>
      <div className='flex flex-1 flex-col space-y-2 pr-20 pl-8 py-4 min-w-[18rem] w-[18rem] md:w-[30rem] max-w-[30rem] bg-[var(--primary-color)] shadow-2xl rounded-2xl'>
        <div className='text-gray-50 text-xl'>{comment.customerName}</div>
        <div className='text-gray-200'>{comment.commentText}</div>
        <div className='text-right text-yellow-400'>
          {[...Array(Math.floor(comment.rating))].map((e, i) => (
            <StarRoundedIcon key={i} />
          ))}
          {comment.rating % 1 !== 0 && <StarHalfRoundedIcon />}
          {[...Array(Math.floor(5 - comment.rating))].map((e, i) => (
            <StarBorderRoundedIcon key={i} />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center h-20 w-20 md:h-52 md:w-52 '>
        <img
          src={comment.src}
          alt=''
          className='bg-black relative flex-shrink-0 min-w-full min-h-full object-contain object-center  -left-[5.5rem]  rounded-full shadow-2xl'
        />
      </div>
    </div>
  );
};

export default CustomerComment;
