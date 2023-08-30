export function Footer() {
  return (
    <footer className="border-t">
      <ul className="flex h-full flex-col items-center px-4 lg:flex-row lg:px-8">
        <li className="mt-1 lg:m-0">
          &copy; Jesse Breuer-Penello. All rights reserverd.
        </li>
        <li className="lg:ml-auto">
          <a
            href="https://github.com/steezplusplus/ecommerce-store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline"
          >
            View source code
          </a>
        </li>
      </ul>
    </footer>
  );
}
