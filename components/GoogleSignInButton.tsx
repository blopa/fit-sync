import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

type GoogleSignInButtonProps = {
    disabled?: boolean;
    onSignIn: () => void;
    variant?: 'reauthenticate' | 'sign-in';
};

export function GoogleSignInButton({
                                       disabled = false,
                                       onSignIn,
                                       variant = 'sign-in',
                                   }: GoogleSignInButtonProps) {

    return (
        <Button
            disabled={disabled}
            backgroundColor={disabled ? '#f5f5f5' : '#ffffff'}
            borderRadius={4}
            onPress={onSignIn}
            style={[styles.button, disabled && styles.buttonDisabled]}
        >
            <View style={styles.innerContainer}>
                <View style={styles.googleIconWrapper}>
                    <Image
                        source={require('@/assets/google-icon.svg')}
                        style={styles.googleIcon}
                    />
                </View>
                <Text style={[styles.text, disabled && styles.textDisabled]}>
                    {variant === 'sign-in' ? 'Sign in with Google' : 'Reauthenticate'}
                </Text>
            </View>
        </Button>
    );
}

const styles = StyleSheet.create({
        button: {
            marginVertical: 16,
            backgroundColor: '#ffffff',
            borderColor: '#dddddd',
            borderRadius: 4,
            borderWidth: 1,
            paddingHorizontal: 0,
        },
        buttonDisabled: {
            backgroundColor: '#f5f5f5',
        },
        googleIcon: {
            height: 18,
            width: 18,
        },
        googleIconWrapper: {
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 2,
            height: 40,
            justifyContent: 'center',
            width: 40,
        },
        innerContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            margin: 0,
        },
        text: {
            color: '#757575',
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 12,
        },
        textDisabled: {
            color: '#bdbdbd',
        },
    });
