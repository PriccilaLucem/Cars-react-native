import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Cars: undefined; 
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cars'>;

export type Props = {
  navigation: HomeScreenNavigationProp;
};