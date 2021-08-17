import _ from 'lodash';
import './style.css';
import LandingPage from './landing-page.png';
import SampleCSV from './sample.csv';
import SampleXML from './testing.xml';

function component() {
  const element = document.createElement('div');

  // Lodash is now imported by script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add an image to existing div
  const landingPageImage = new Image();
  landingPageImage.src = LandingPage;
  element.appendChild(landingPageImage);
  console.log('CSV: ', SampleCSV);
  console.log('XML: ', SampleXML);
  return element;
}

document.body.appendChild(component());
