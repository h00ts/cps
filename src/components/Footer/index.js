import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href="https://patreon.com"
            target="_blank"
          >
            {seeMorePWA}
          </a>
          .
        </p>
        <p>
          {maintainedBy}{' '}
          {contributeMessage}{' '}
          <a
            href="https://instagram.com/jaylucci"
            target="_blank"
          >
            (@jlucci)
          </a>
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
