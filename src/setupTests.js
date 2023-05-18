import { configure } from 'enzyme';
import util from 'util';
// import Adapter from 'enzyme-adapter-react-16'; only use for React 16
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; only use for React 17
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });


Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});