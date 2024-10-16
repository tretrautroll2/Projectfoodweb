const NavItems = [
  {
    name: "About",
    info: "/About"
  },
  {
    name: "Home",
    info: "/"
  },
  {
    name: "Food",
    info: "/Food"
  },
  {
    name: "Drinks",
    info: "/Drinks"
  },
  {
    name: "Others",
    info: "/Others"
  }
];

export default function Navbar() {
  return (
    <>
      <nav >
        <ul className='nav no-list'>
          {NavItems.map(item => <li key={item.name}>
            <a className="no-link nav-link" href={item.info}>{item.name}</a>
          </li>)}
        </ul>
      </nav>
    </>
  )
}

