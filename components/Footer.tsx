import Image from 'next/image';

function footer() {
  return (
    <footer className='flex h-24 w-full items-center justify-center border-t text-white'>
      <a
        className='flex items-center justify-center gap-2'
        href='https://davidrich.es'
        target='_blank'
        rel='noopener noreferrer'
      >
        Built by David Riches
      </a>
    </footer>
  );
}

export default footer;
