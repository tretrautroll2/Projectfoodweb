    const NavItems = [
    {name: "ABOUT",
    info: "/"
    },
    {name: "HOME",
    info: "/Home"
    },
    {name: "FOOD",
    info: "/Food"
    },
    {name: "DRINKS",
    info: "/Drinks"
    },
    {name: "OTHERS",
    info: "/Others"
    }
];
    
export default function Navbar() {
return(
        <>
    <nav >
        <ul className='nav no-list'>
          {NavItems.map(item => <li key={item.name}>
            <a className="no-link" href={item.info}>{item.name}</a>
          </li>)}
        </ul>
    </nav>
    </>
    )
}

