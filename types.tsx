/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { APIEmoji } from "discord-api-types/v9";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  App: undefined;
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Modal: undefined;
  ThemeOverview: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

declare module "react-native" {
  interface PlatformStatic {
    isDesktop?: boolean;
    isMobile?: boolean;
    isWeb?: boolean;
  }
}

declare module "discord-api-types/v9" {
  interface GatewayIdentifyProperties {
    os: string;
  }

  interface GatewayIdentifyData {
    // @ts-ignore
    intents?: number;
  }

  interface APIEmoji {
    id: string;
  }

  interface APIGuildMember {
    id: string;
  }
}
