import { Item } from './nav/Item'
import { useEffect, useState } from 'react'
import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Nav = ({ texts }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeNavItem, setActiveNavItem] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            const sections = document.querySelectorAll('.section')
            let currentSection = ''

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id')
                }
            })

            setActiveNavItem(currentSection)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={'fixed bg-white w-full z-30 left-0'}>
            <div
                className={
                    'lg:block flex justify-between mx-auto items-center w-full max-w-[1204px] p-4'
                }
            >
                <a href="#top" className={'cursor-pointer'}>
                    <img
                        className={`image-transition ${
                            isScrolled ? '' : 'lg:w-[132px]'
                        } w-[83px] lg:absolute`}
                        src={'logo.svg'}
                        alt={'logo'}
                    />
                </a>

                <div
                    className={
                        'lg:hidden p-2 cursor-pointer flex items-end flex-col active:outline-none focus:outline-none'
                    }
                    onClick={toggleMenu}
                >
                    <span className={`block w-6 h-0.5 bg-black mb-1`}></span>
                    <span className={`block w-6 h-0.5 bg-black mb-1`}></span>
                    <span className={`block w-6 h-0.5 bg-black`}></span>
                </div>

                <div
                    className={`justify-between items-center lg:ml-[243px] z-10 w-full lg:w-unset left-0 top-28 lg:top-0 lg:left-0 py-4 ${
                        isOpen ? 'flex flex-col' : 'lg:flex hidden'
                    } fixed lg:relative bg-white`}
                >
                    <div
                        className={
                            'flex w-full gap-10 lg:gap-[80px] items-center lg:flex-row flex-col mb-10 lg:mb-0'
                        }
                    >
                        <Item
                            setIsOpen={setIsOpen}
                            name={'služby'}
                            anchor={'#sluzby'}
                            textClass={`${
                                activeNavItem === 'special-section'
                                    ? 'text-pink'
                                    : 'text-black'
                            }`}
                        />
                        <Item
                            setIsOpen={setIsOpen}
                            name={'o mě'}
                            anchor={'#o_me'}
                            textClass={`${
                                activeNavItem === 'about-me-section'
                                    ? 'text-pink'
                                    : 'text-black'
                            }`}
                        />
                        <Item
                            setIsOpen={setIsOpen}
                            name={'vzdělání'}
                            anchor={'#vzdelani'}
                            textClass={`${
                                activeNavItem === 'education-section'
                                    ? 'text-pink'
                                    : 'text-black'
                            }`}
                        />
                        <Item
                            setIsOpen={setIsOpen}
                            name={'ceník'}
                            anchor={'#cenik'}
                            textClass={`${
                                activeNavItem === 'pricing-section'
                                    ? 'text-pink'
                                    : 'text-black'
                            }`}
                        />
                    </div>
                    <a
                        href={'#kontakt'}
                        className={
                            'font-bold italic uppercase py-[14px] px-[60px] bg-black text-grey cursor-pointer rounded-xl min-w-fit h-fit'
                        }
                        onClick={() => setIsOpen(false)}
                        dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'contact_me'))}
                   />
                </div>
            </div>
        </div>
    )
}

export default Nav