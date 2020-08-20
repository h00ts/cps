import React from 'react';

import { Instagram } from 'styled-icons/boxicons-logos/Instagram';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://instagram.com/callepatalasada"
          title="Instagram"
          target="_blank"
        >
          <Instagram />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
