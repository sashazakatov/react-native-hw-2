import { Pressable, Text, TextInput, View, StyleSheet, ImageBackground } from 'react-native';

const RegistrationScreen = () => {
    return(
        <ImageBackground 
            source={require('../assets/images/background.jpg')}
            resizeMode="cover" 
            style={style.container}
        >
            <View style={style.form}>
                <View style={style.photo}>
                    {/* <Button title='add'/> */}
                </View>
                <Text style={style.title}>Реєстрація</Text>
                <TextInput
                    style={style.input}
                    placeholder='Логін'
                />
                <TextInput
                    style={style.input}
                    placeholder='Адреса електронної пошти'
                />
                <TextInput
                    style={[style.input, {marginBottom: 43}]}
                    placeholder='Пароль'
                />
                <Pressable style={style.button}>
                    <Text style={{color: '#FFFFFF', fontSize: 16, }}>Нажми меня</Text>
                </Pressable>
                <Text style={style.text}>Вже є акаунт? Увійти</Text>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    form: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

        alignItems: 'center',

        paddingTop: 92,
        paddingLeft: 16,
        paddingRight: 16,
    },
    photo: {
        position: 'absolute',
        backgroundColor: '#F6F6F6',
        width: 120,
        height: 120,
        borderRadius: 16,
        marginBottom:32,
        transform: [{ translateY: -50 }],
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        marginBottom: 33,
        fontSize: 30,
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 16,
        '&:focus': {
            borderColor: '#FF6C00',
        },
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '100%',
        fontFamily: 'Roboto',
        color: '#FFFFFF',
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        marginBottom: 16,
    },
    text:{
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 16,
        color: "#1B4371",
        marginBottom: 40,
    }
});

export default RegistrationScreen;