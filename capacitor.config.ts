import type {CapacitorConfig} from '@capacitor/cli';

const myFunc = (async(): Promise<void> => {
});

await myFunc();

export default ({
  appId: 'com.example.app',
  appName: 'capacitor-config-bug',
  bundledWebRuntime: false,
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    }
  }
} as CapacitorConfig);
