import { Link } from 'react-router-dom';

const Menu = () => {

  const menu = [
    { name: 'Home', link: '/' },
    { name: 'Template', link: '/template' },
  ]

  return (
    <ul className="menu">
      {menu && menu.length && menu.map(item => (
        <li className="menu-item"><Link to={item.link}>{item.name}</Link></li>
      ))}
    </ul>
  )
}

export default Menu
