import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';

import { Instagram } from 'styled-icons/boxicons-logos/Instagram';

import * as S from './styled';

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();
  const { button } = useTranslations();

  return (
    <>
      <S.Navigation>
        {menuItems.map((menu, index) => (
          <S.NavigationLink
            to={menu.link}
            aria-label={menu.name}
            activeClassName="active"
            key={`${menu.link}${index}`}
            >
            {menu.name}
          </S.NavigationLink>
        ))}

        <S.NavigationButton to="" aria-label="Login">
          <Instagram />
        </S.NavigationButton>

      </S.Navigation>
    </>
  );
};

export default Navigation;
