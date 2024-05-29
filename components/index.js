import React, {useState} from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context'

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Index = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "home",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    </SafeAreaProvider>
  );
};

export default Index;
