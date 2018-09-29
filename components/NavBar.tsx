import { Header, SearchBar, Avatar } from 'react-native-elements';

<Avatar
    size="small"
    rounded
    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
    onPress={() => console.log("Works!")}
    activeOpacity={0.7}
/>