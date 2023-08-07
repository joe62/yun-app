import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About Us</Link>
            </li>
            <li>
                <Link href='/blog/hello-world'>Blog Post</Link>
            </li>
            <li>
                <Link href='/posts/first-post'>First Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar