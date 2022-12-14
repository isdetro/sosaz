import { ReactElement } from 'react';
import style from './UserDropDown.module.scss';
import DropdownMenu from './DropdowMenu';

function UserDropDown() {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <h3 className={style.name}>{'Alasgar Mahmudov'}</h3>
        <h3 className={style.role}>Admin</h3>
      </div>
      <DropdownMenu
        className={style.dropDown}
        src={
          'https://s.hs-data.com/bilder/spieler/gross/11212.jpg?fallback=png'
        }
      />
    </div>
  );
}

export default UserDropDown;
