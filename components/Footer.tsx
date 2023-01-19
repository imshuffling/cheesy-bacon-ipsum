import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

function footer() {
  return (
    <footer className='flex h-24 w-full items-center justify-center border-t text-white'>
      <a
        className='flex items-center justify-center gap-2'
        href='https://github.com/imshuffling/cheesy-bacon-ipsum'
        target='_blank'
        rel='noopener noreferrer'
      >
        Built by David Riches <AiFillGithub />
      </a>
    </footer>
  );
}

export default footer;
