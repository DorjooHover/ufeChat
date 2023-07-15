import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import imageLogo from '../../assets/images/hover.png';
import imageProfile from '../../assets/images/khngr.jpg';
import styles from '../styles/style';
export const MainAppBar = ({
  toggleMenu = () => {},
  image1 = imageLogo,
  image2 = imageProfile,
  icon = '',
}) => {
  return (
    <View style={styles.flexRowCenter}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon name={icon} size={26} fontWeight={500} />
      </TouchableOpacity>

      <Image source={image1} />
      <Image source={image2} style={styles.circleAvatar} />
    </View>
  );
};
