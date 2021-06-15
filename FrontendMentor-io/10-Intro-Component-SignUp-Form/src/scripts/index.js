import '../styles/index.scss';
import { Validation } from './Validation';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
new Validation();
