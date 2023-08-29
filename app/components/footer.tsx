// TODO Mobile layout collapse
export function Footer() {
  return (
    <footer className='border-t'>
      <ul className='flex items-center gap-x-2 px-4 py-2 sm:gap-x-4 sm:px-6 lg:gap-x-6 lg:px-8'>
        <li>&copy; Jesse Breuer-Penello. All rights reserverd.</li>
        <li className='ml-auto'>
          <a
            href='https://github.com/steezplusplus/ecommerce-store'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-600 hover:underline'
          >
            View source code
          </a>
        </li>
      </ul>
    </footer>
  );
}
