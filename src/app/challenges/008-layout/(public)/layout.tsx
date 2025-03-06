import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-purple-800 text-white p-4'>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/challenges/008-layout/' className='hover:text-purple-400'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/challenges/008-layout/about' className='hover:text-purple-400'>
                About
              </Link>
            </li>
            <li>
              <Link href='/challenges/008-layout/contact' className='hover:text-purple-400'>
                Contact
              </Link>
            </li>
            <li>
              <Link href='/challenges/008-layout/blog' className='hover:text-purple-400'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/challenges/008-layout/admin/dashboard' className='hover:text-purple-400'>
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className='flex flex-1'>
        <aside className='w-64 bg-purple-200 p-4'>
          <ul>
            <li>
              <Link href='/challenges/008-layout/category/technology' className='block py-2 hover:bg-purple-300'>
                Technology
              </Link>
            </li>
            <li>
              <Link href='/challenges/008-layout/category/design' className='block py-2 hover:bg-purple-300'>
                Design
              </Link>
            </li>
            <li>
              <Link href='/challenges/008-layout/category/business' className='block py-2 hover:bg-purple-300'>
                Business
              </Link>
            </li>
          </ul>
        </aside>

        <main className='flex-1 p-6 bg-white'>{children}</main>
      </div>

      <footer className='bg-purple-800 text-white text-center p-4'>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  )
}
