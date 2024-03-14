import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import {LoginV} from '../screens/Login';
import {WalletScreen} from '../screens/Wallet/WalletScreen';
import {LoansV} from '../screens/Loans';
import {LoadingC} from '../screens/Loading/Loading';

const Stack = createStackNavigator();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Loading" component={LoadingC} />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="Login"
        component={LoginV}
      />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Loans" component={LoansV} />
    </Stack.Navigator>
  );
};
