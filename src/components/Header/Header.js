import React from 'react';
import { HeaderContainer, TextContainer } from './Header.style';
import { darkModeColors } from '../../constants/colors';
import { HeaderButton } from './HeaderButton';
import { Text } from '../Text/Text';
export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Text size="2.5em">Welcome back, Gjon Hajdari</Text>
        <Text
          size="1.2em"
          margin="10px 0 0 0"
          color={darkModeColors.textSecondary}
        >
          Take a look at all of your tickets.
        </Text>
      </TextContainer>

      <HeaderButton />
    </HeaderContainer>
  );
};
