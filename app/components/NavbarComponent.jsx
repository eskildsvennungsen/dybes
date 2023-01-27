
import Link from 'next/link'
import logoUrl, {ReactComponent as Logo} from '../img/DybesLogo.svg'

const navbarItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
];

export default function Navbar(){
    return (
        <nav className='fixed w-full py-4 bg-black'>
            <div className='items-center mx-auto max-w-7xl px-5 lg:px-0 flex flex-row justify-between'>
                <div className='max-w-md'>
                    <img className='h-12' src={logoUrl} alt='logo' />
                </div>
                <ul className='flex flex-row'>
                    {navbarItems.map((post) => (
                    <li key={post.name}>
                        <Link href={post.path} className='ml-4'>
                        {post.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
  }
  