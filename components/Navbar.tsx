import { supabase } from '../utils/supabaseClient'
import SessionContext from '../context/context'
import { useContext } from 'react'
import { BsTrophy, BsTwitch } from 'react-icons/bs'
import { MdLiveTv } from 'react-icons/md'
import { FiGift } from 'react-icons/fi'

export default function Navbar() {
    const { session } = useContext(SessionContext)
    console.log(session);
    
    async function signout() {
        const { error } = await supabase.auth.signOut()
    }
    async function signInWithTwitch() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'twitch',
        })
    }

    return (
        <>
        <nav className='bg-primary py-2 px-8'>
            <div className='container flex flex-nowrap justify-between items-center mx-auto'>
                <a href='https://www.maltaverneaurelien.com/' className='flex items-center'>
                    <span className='text-white'>DioscureTV</span>
                </a>
                <div className='container flex flex-wrap float-left items-center pl-8'>
                    <div className='text-white px-5'><a href="#" className='flex items-center'><MdLiveTv className='float-left mr-2'/>Live</a></div>
                    <div className='text-white px-5'><a href="#tournoi" className='flex items-center'><BsTrophy className='float-left mr-2'/>Tournoi</a></div>
                    {/* <div className='text-white px-5'><a href="#coaching" className='flex items-center'><BsTrophy className='float-left mr-2'/>Coaching</a></div> */}
                    <div className='text-white px-5'><a href="#recompense" className='flex items-center'><FiGift className='float-left mr-2'/>Récompenses</a></div>
                </div>
                {session === null && (
                    <button type='button' onClick={(e) => { 
                        e.preventDefault() 
                        signInWithTwitch() }} className='container bg-purple text-white flex rounded-full border-2 items-center text-sm px-4 py-2'><BsTwitch className='float-left text-xl mr-2'/>Connexion avec Twitch 
                    </button>
                )}
                <div className='hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600' id='user-dropdown'>
                    <div className='py-3 px-4'>
                    <span className='block text-sm text-gray-900 dark:text-white'>Bonnie Green</span>
                    <span className='block text-sm font-medium text-gray-500 truncate dark:text-gray-400'>name@flowbite.com</span>
                    </div>
                    <ul className='py-1' aria-labelledby='user-menu-button'>
                    <li>
                        <a href="#" className=''>Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className=''>Settings</a>
                    </li>
                    <li>
                        <a href="#" className=''>Earnings</a>
                    </li>
                    <li>
                        <a href="#" className=''>Sign out</a>
                    </li>
                    </ul>
                </div>
                {session !== null && (
                    <button type='button' onClick={(e) => { 
                        e.preventDefault() 
                        signout() }} className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'>Se déconnecter
                        </button>
                )}   
            </div>       
        </nav>
      </>
    )
}