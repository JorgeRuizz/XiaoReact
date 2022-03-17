import React from 'react'
import ReactDOM from 'react-dom';

require('../../css/TopMenu.css');
import logoImage from '../../images/logo1.png';
import { FaSearch, FaShoppingBag, FaAngleDown} from 'react-icons/fa';

const TopMenu = () => {
  return (
    <div className='menuTop'>
      <Top/>
      <Bottom/>
    </div>
  )
}
const Top=()=>{
  return(
    <div className="topSection">
      <div className="searchBar">
        <input placeholder='Search Product' type="text" />
        <FaSearch color='white'/>
      </div>
      <div style={{textAlign:'center'}} className="companyLogo">
        <img src={logoImage} alt="companyLogo" />
      </div>
      <div className="userActions">
        <div style={{marginRight:'20px'}} className="userData">
          <span>Login</span>
        </div>
        <div className="userCart">
          <span>Cart / <span style={{fontWeight:'bold'}}>$0.00</span></span>
          <FaShoppingBag/>
        </div>
      </div>
    </div>
  )
}
const Bottom = () =>{
  return (
    <div className="bottomSection">
      <ul className='menuItems'>
        <li><span>HOME</span></li>
        <li><span>MY ACCOUNT</span></li>
        <li className='activePage'><span>PRODUCTS</span></li>
        <li><span>CATEGORIES</span> <FaAngleDown style={{fontSize:'var(--fs-600)',position:'absolute',transform:'translateY(10px)'}}/>
          <div className="subMenu">
            <ul>
              <li>CATEGORY 1</li>
              <li>CATEGORY 2</li>
              <li>CATEGORY 3</li>
              <li>CATEGORY 4</li>
            </ul>
          </div>
        </li>
        <li><span>HELP</span></li>
      </ul>
    </div>
  )
}
 
export default TopMenu
if (document.getElementById('Menu')) {
    ReactDOM.render(<TopMenu />, document.getElementById('Menu'));
}
