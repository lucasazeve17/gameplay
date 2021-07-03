import React, {useState} from "react";
import { View, Text, Image, StatusBar } from 'react-native'
import { styles } from './style'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";

export const SignIn = () =>{
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Image 
                source={IlustrationImg}  
                style={styles.image}
                resizeMode='stretch'
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos{`\n`}
                </Text>

                <ButtonIcon title=" Entre com Discord" activeOpacity={0.9}/>
            </View>
        </View>
    );
}