import { useState } from 'react'
import About from './Pages/About';
import Home from './Pages/Home';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Others from './Pages/Others';            
export default function Navbar() {
const [activeTab, setActiveTab] = useState("HOME");
const NavItems = [
    {name: "ABOUT",
    info: <About />
    },
    {name: "HOME",
    info: <Home />
    },
    {name: "FOOD",
    info: <Food />
    },
    {name: "DRINKS",
    info: <Drinks />
    },
    {name: "OTHERS",
    info: <Others />
    }
]
    return(
        <>
    <nav >
        <ul className='nav no-list'>
          {NavItems.map(item => <li key={item.name} onClick={() => setActiveTab(item.name)}>
            {item.name}
          </li>)}
        </ul>
    </nav>
    <div>
        <li className='no-list inventory'> 
        {NavItems.find(item => item.name === activeTab).info} 
        </li>
    </div>
    </>
    )
}   