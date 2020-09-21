import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme() || 'light';
export const colors = {
  light: {
    // Tones of Green-Turqouise
    tone1: '#004D4A',
    tone2: '#00948B',
    tone2_5: '#57b5af',
    tone3: '#D9E5E6',
    tone4: '#E6F0F0',
    //Tones of white
    white: '#FFFFFF',
    snow: '#FFFFFF',
    lite: '#d5d9df',
    light: '#576272',
    night: '#34363D',

    //Warnings
    error: '#db3535',
  },
  dark: {
    // Tones of Green-Turqouise
    tone1: '#002625',
    tone2: '#004a45',
    tone3: '#588386',
    tone4: '#589292',
    // Other colors
    snow: '#7f7f7f',
    light: '#2b3139',
    night: '#191a1e',
    white: '#2C2A28',
    safeArea: '#FFFFFF',

    //Warnings
    error: '#db3535',
  },
};
const theme = () => colors[colorScheme];

// TODO: Add event listener for apperance change
// Appearance.addChangeListener(({colorScheme}) => {
//   theme();
// });
//  subscription.remove();

export default theme();
