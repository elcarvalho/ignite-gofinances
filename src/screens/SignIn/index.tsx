import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { singInWithGoogle, signInWithApple } = useAuth();

  const theme = useTheme();

  async function hanldeSingInWithGoogle() {
    try {
      setIsLoading(true);
      return await singInWithGoogle();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert('Não foi possivel conectar a conta Google');
    }

  }

  async function hanldeSingInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert('Não foi possivel conectar a conta Apple');
    }

  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {'\n'} finanças de forma {'\n'} muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'} uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={hanldeSingInWithGoogle}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={hanldeSingInWithApple}
          />
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
}
