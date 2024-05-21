import { Provider } from 'react-redux'
import store from '../../../store'
import render, {
    RenderResult,
} from '@testing-library/react-native/build/render'
import VendorSubscriptionPage from '../Subscription'
import { NavigationContainer } from '@react-navigation/native'
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
            <NavigationContainer>
                <VendorSubscriptionPage />
            </NavigationContainer>
        </Provider>,
    )
}
let page: RenderResult
describe('VendorSubscriptionPage', () => {
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
    it('renders the text properly',()=>{
        expect(page.getByText('Subscription Details')).toBeDefined();
        expect(page.getByText('Current Plan:')).toBeDefined();
        expect(page.getByText('Vendor Plan')).toBeDefined();
        expect(page.getByText('Cost Per Month:')).toBeDefined();
        expect(page.getAllByText('$49.99')[0]).toBeDefined();
        expect(page.getByText('Total Cost:')).toBeDefined();
    })

});