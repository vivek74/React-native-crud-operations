import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("place", 30),
        Icon.getImageSource("share", 30)
    ]).then(sources =>{
        Navigation.setRoot({
            root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'awesome-places.FindPlaceScreen',
                                passProps: {
                                text: 'Find Place'
                                }
                            }
                        }],
                        options: {
                            topBar: {
                                title: {
                                text: 'Find Places',
                                fontFamily: 'Helvetica'
                                }
                            },
                            bottomTab: {
                                text: 'Find Place',
                                icon: sources[0],
                                testID: 'FIRST_TAB_BAR_BUTTON',
                            }
                        }
                    }
                },

                {
                    stack: {
                        children: [{
                            component: {
                                name: 'awesome-places.SharePlaceScreen',
                                passProps: {
                                text: 'Share Place'
                                }
                            }
                        }],
                        options: {
                            topBar: {
                                title: {
                                text: 'Share Place',
                                fontFamily: 'Helvetica'
                                }
                            },
                            bottomTab: {
                                text: 'Share Place',
                                icon: sources[1],
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }

                }]
            }
            }
        });
    });
};
export default startTabs;
