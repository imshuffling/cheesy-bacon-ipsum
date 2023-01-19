import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import Footer from '../components/Footer';
import cheeses from '../cheeses';
import lorem from '../lorem';

const Home: NextPage = () => {
  const [ipsum, setIpsum] = useState<any>(null);
  const [count, setCount] = useState<number>(2);
  const [unit, setUnit] = useState<string>('paragraphs');
  const [showPTag, setShowPTag] = useState<boolean>(false);

  const words = [...cheeses, ...lorem];

  const data = loremIpsum({
    count, // Number of "words", "sentences", or "paragraphs"
    format: 'html', // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 7, // Max. number of sentences per paragarph.
    random: Math.random, // A PRNG function
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 15, // Max. number of words per sentence.
    suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
    units: unit as any, // paragraph(s), "sentence(s)", or "word(s)"
    words, // Array of words to draw from
  });

  function getNewIpsum() {
    setIpsum(data.toLowerCase());
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>🧀🥓 CheesyBacon Ipsum Generator </title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900'
          rel='stylesheet'
          type='text/css'
        />
      </Head>

      <main className='flex w-full max-w-5xl flex-1 flex-col items-center md:justify-center p-4 md:p-12 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          🧀🥓 CheesyBacon Ipsum Generator
        </h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 py-10 items-center md:items-end'>
          <div>
            <label
              htmlFor='count'
              className='block text-sm font-medium text-white text-left'
            >
              Count
            </label>
            <div className='mt-1'>
              <input
                type='number'
                name='count'
                id='count'
                value={count}
                onChange={(e) => {
                  const val: any = e.target.value;
                  if (!isNaN(val)) setCount(Number(val));
                }}
                className='block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='units'
              className='block text-sm font-medium text-white text-left'
            >
              Units
            </label>
            <select
              id='units'
              name='units'
              className='mt-1 block w-full rounded-md border-gray-300 text-gray-700 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              defaultValue='paragraphs'
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value='paragraphs'>Paragraph(s)</option>
              <option value='sentences'>Sentence(s)</option>
              <option value='words'>Word(s)</option>
            </select>
          </div>

          <div>
            <div className='relative flex items-start'>
              <div className='flex h-5 items-center'>
                <input
                  id='tags'
                  aria-describedby='tags-description'
                  name='tags'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  value={showPTag ? 'checked' : ''}
                  onChange={(e) => {
                    setShowPTag(e.target.checked);
                  }}
                />
              </div>
              <div className='ml-3 text-sm text-left'>
                <label htmlFor='tags' className='font-medium text-white'>
                  Show Paragraph tags
                </label>
              </div>
            </div>
          </div>

          <div>
            <button
              className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-3.5 text-center'
              onClick={getNewIpsum}
            >
              Cheesy bacon ipsum!
            </button>
          </div>
        </div>

        <section>
          {ipsum && (
            <div>
              {showPTag ? (
                <div contentEditable className='w-full ipsum no-p-tag'>
                  {ipsum}
                </div>
              ) : (
                <div
                  contentEditable
                  className='w-full ipsum p-tag-active'
                  dangerouslySetInnerHTML={{ __html: ipsum }}
                />
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
