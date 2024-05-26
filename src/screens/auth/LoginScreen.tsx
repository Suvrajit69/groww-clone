import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {Image, StyleSheet, View, useColorScheme} from 'react-native';
import { normalizeModerately, screenHeight, screenWidth } from '../../utils/Scaling';
import LoginImageDark from "../../assets/images/login_dark_animation.png"
import LoginImageLight from "../../assets/images/login_animation_light.png"
import GoogleIcon from "../../assets/images/google.png";
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import Icon from "react-native-vector-icons/Ionicons"
import TouchableText from '../../components/auth/TouchableText';


const LoginScreen = () => {
  const theme = useColorScheme();

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together we Groww
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Invest • Pay • Loans
        </CustomText>

        <View style={styles.imgContainer}>
          <Image style={styles.img} source={theme === "dark" ? LoginImageDark : LoginImageLight}/>
        </View>

        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          text="Continue with Google"
          onPress={()=>{}}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={20} color="black" />}
          text="Continue with Apple"
          onPress={()=>{}}
        />

        <TouchableText firstText='Use other email ID' onPress={()=>{}} style={{marginVertical: 30}}/>
        
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  subText: {
    marginTop: 12,
    opacity: 0.6,
  },
  imgContainer:{
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(30)
  },
  img:{
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  gimg: {
    height: 20,
    width: 20,
  },
});
export default LoginScreen;
