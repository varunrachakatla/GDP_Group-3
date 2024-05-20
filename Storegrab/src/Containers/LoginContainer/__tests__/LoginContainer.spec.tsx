import { Provider } from 'react-redux'
import store from '../../../../Store'
import render, {
    RenderResult,
} from '@testing-library/react-native/build/render'
import { NavigationContainer } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native';
import LoginContainer from '../LoginContainer';
import { StripeProvider } from '@stripe/stripe-react-native';
import { PaperProvider } from 'react-native-paper';
import AppThemeProvider from '../../../core/AppThemeProvider';

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: jest.fn(),
        }),
    };
});
const renderStartupContainerPage = () => {
    return render(
            <Provider store={store}>
                <PaperProvider>
                    <AppThemeProvider>
                            <LoginContainer />
                    </AppThemeProvider>
                </PaperProvider>
            </Provider>
    )
}
let page: RenderResult

describe('LoginContainer', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        page = renderStartupContainerPage()
    })
    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });
    it('should render correctly', function () {
        expect(page.toJSON()).toMatchSnapshot()
    })

    it('displays an error message when username is empty', async () => {
        const loginButton = page.getByTestId('login-button');
    });

    it('displays an error message when password is empty', async () => {
        const loginButton = page.getByTestId('login-button');

        fireEvent.changeText(page.getByTestId('password-input'), '');

        expect(page.getByTestId('password-input')).toBeDefined();
    });

    it('calls the login function with the correct username and password', () => {
        const mockLogin = jest.fn();
        const { getByLabelText, getByTestId } = render(<Provider store={store}><LoginContainer /></Provider>);
        const usernameInput = page.getByTestId('username-input')
        const passwordInput = page.getByTestId('password-input')
        const loginButton = getByTestId('login-button');

        fireEvent.changeText(usernameInput, 'varunrachakatla0708@gmail.com');
        fireEvent.changeText(passwordInput, '070894');
        fireEvent.press(loginButton);

        expect(mockLogin).toHaveBeenCalledWith('testuser', 'testpass');
    });
});  