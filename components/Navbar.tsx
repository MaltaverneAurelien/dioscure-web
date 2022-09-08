import SessionContext from '../context/context'
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useContext } from 'react'
import { BsTrophy, BsTwitch } from 'react-icons/bs'
import { MdLiveTv } from 'react-icons/md'
import { FiGift } from 'react-icons/fi'
import { FaDumbbell } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
    const { session } = useContext(SessionContext)
    const [dropdown, setDropdown] = useState(false)

    function handleClick() {
        setDropdown(!dropdown)
    }
    function showDropdown() {
        return dropdown ? 'opacity-100' : 'opacity-0'
    }

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
        <nav className="bg-primary py-2 px-8 shadow-lg shadow-primary">
            <div className="flex flex-nowrap justify-between items-center mx-auto">
                <a href='https://www.maltaverneaurelien.com/' className="flex items-center">
                    <img src='/DioscureTV_logo.png' className='w-48'/>
                </a>
                <div className="container flex flex-wrap float-left items-center gap-2"> 
                    {/* TODO: Creer un Component NavItem, qui prendrait en param un icone et du texte, un href */}
                    <div className="text-white px-5"><a href="#" className="flex items-center"><MdLiveTv className="float-left mr-2"/>Live</a></div>
                    <div className="text-white px-5"><a href="#tournoi" className="flex items-center"><BsTrophy className="float-left mr-2"/>Tournoi</a></div>
                    <div className="text-white px-5"><a href="#coaching" className="flex items-center"><FaDumbbell className="float-left mr-2"/>Coaching</a></div>
                    <div className="text-white px-5"><a href="#recompense" className="flex items-center"><FiGift className="float-left mr-2"/>Récompenses</a></div>
                </div>
                {session === null && (
                    <button type='button' onClick={(e) => { 
                        e.preventDefault() 
                        signInWithTwitch() }} className='bg-purple hover:bg-violet-800 focus:ring-1 focus:ring-white text-white flex rounded-full items-center text-sm px-4 py-1 w-max whitespace-nowrap'><BsTwitch className='float-left text-base mr-2'/>Connexion avec Twitch 
                    </button>
                )}
                {session !== null && (
                    <div className='relative inline-block text-left'>
                        <div>
                            <button type="button" onClick={handleClick}>
                                <img src={session.user.user_metadata.avatar_url} className='rounded-full w-12'/>
                            </button>
                        </div>
                        <ul className={"bg-primary absolute right-0 z-10 mt-2 w-56 divide-y divide-opacity-80 divide-white rounded-md shadow-xl transition-all duration-300 " + showDropdown()}>
                            <li className="py-1">
                                <a href="#account" className="text-white px-4 py-2 text-sm flex items-center"><CgProfile className="float-left mr-2"/>Profile</a>
                            </li>
                            <li className="py-1"><a href="#" className="text-white block px-4 py-2 text-sm "><button type='button' onClick={(e) => { 
                                e.preventDefault()
                                signout() }} className="flex items-center"><BiLogOut className="float-left mr-2"/>Se déconnecter</button></a>
                            </li>
                        </ul>
                    </div>
                )}   
            </div>       
        </nav>
    </>
    )
}