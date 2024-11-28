import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import { useAuthRequest } from 'expo-auth-session/providers/google';
import { AuthRequest } from 'expo-auth-session/src/AuthRequest';
import { useEffect, useState } from 'react';
import {GOOGLE_CLIENT_ID, handleGoogleSignIn} from "@/utils/googleAuth";

interface UseGoogleAuthReturn {
    isSigningIn: boolean;
    promptAsync: (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>;
    request: AuthRequest | null; // should be GoogleAuthRequest, but it's not exported
    response: AuthSessionResult | null;
}

/**
 * Custom hook to handle Google OAuth sign-in flow.
 */
export const useGoogleAuth = (): UseGoogleAuthReturn => {
    const [isSigningIn, setIsSigningIn] = useState(false);

    const [request, response, promptAsync] = useAuthRequest({
        androidClientId: GOOGLE_CLIENT_ID,
        scopes: [
            "https://www.googleapis.com/auth/fitness.activity.read",
            "https://www.googleapis.com/auth/fitness.location.read",
            "https://www.googleapis.com/auth/fitness.body.read",
            "https://www.googleapis.com/auth/fitness.nutrition.read",
            "https://www.googleapis.com/auth/fitness.blood_pressure.read",
            "https://www.googleapis.com/auth/fitness.blood_glucose.read",
            "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
            "https://www.googleapis.com/auth/fitness.body_temperature.read",
            "https://www.googleapis.com/auth/fitness.reproductive_health.read",
            "https://www.googleapis.com/auth/fitness.sleep.read",
            "https://www.googleapis.com/auth/fitness.heart_rate.read",
            "https://www.googleapis.com/auth/fitness.hydration.read",
        ],
        webClientId: GOOGLE_CLIENT_ID,
    });

    useEffect(() => {
        const handleResponse = async () => {
            if (response?.type === 'success') {
                try {
                    setIsSigningIn(true);
                    await handleGoogleSignIn(response);
                } catch (error) {
                    console.error('Google sign-in failed:', error);
                } finally {
                    setIsSigningIn(false);
                }
            }
        };

        handleResponse();
    }, [response]);

    return { isSigningIn, promptAsync, request: request as unknown as AuthRequest, response };
};
