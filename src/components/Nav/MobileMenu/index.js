import React, {useState, useEffect, useRef} from 'react'

import Burger from './Burger'
import Menu from './Menu'

const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    const node = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = (e) => {
        if (node && !node.current.contains(e.target)) {
            setOpen(false)
        }
    }

    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default MobileMenu
