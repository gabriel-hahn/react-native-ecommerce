import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('TouchableOpacity', () => 'TouchableOpacity');

Enzyme.configure({ adapter: new Adapter() });
