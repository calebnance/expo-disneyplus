import * as React from 'react';
import { StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { func } from './src/constants';

// main navigation stack
import Stack from './src/navigation/Stack';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {
        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isLoading === false) {
      // loading is complete, hide Splash Screen and show app
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />

      <Stack />

      <View onLayout={onLayoutRootView} />
    </React.Fragment>
  );
};

export default App;
