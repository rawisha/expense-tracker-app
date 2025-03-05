import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import * as Icons from "phosphor-react-native";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/authContext";
const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter()
  const {login: loginUser} = useAuth()

  const handleSubmit = async () => {
    if(!emailRef.current || !passwordRef.current){
        Alert.alert('Login', "Please fill all the fields")
    }
    setIsLoading(true)
    const res = await loginUser(emailRef.current, passwordRef.current)
    setIsLoading(false)
    if(!res.success){
      Alert.alert("Login", res.msg)
    }
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Welcome Back
          </Typo>
        </View>

        <View style={styles.form}>
          <Typo size={16} color={colors.textLight}>
            Login now to track all your expenses
          </Typo>
          <Input
            onChangeText={(value) => (emailRef.current = value)}
            placeholder="Enter your email"
            icon={
              <Icons.At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
            placeholder="Enter your password"
            icon={
              <Icons.Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Typo size={14} color={colors.text} style={{alignSelf: "flex-end"}}>Forgot Password?</Typo>
          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>Login</Typo>
          </Button>
        </View>

        <View style={styles.footer}>
            <Typo size={15}>Don't have an account?</Typo>
            <Pressable onPress={()=> router.navigate("/(auth)/register")}>
                <Typo fontWeight={"700"} color={colors.primary} size={15}>Sign Up</Typo>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(30),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassowrd: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
