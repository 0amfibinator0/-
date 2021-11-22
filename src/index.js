import modal from './modules/modal';
import accordeon from './modules/accordeon';
import scrollUp from './modules/scrollUp';
import mainSlider from './modules/mainSlider';
import carousel from './modules/carousel';
import sending from './modules/sending';
import links from './modules/links';

modal();
accordeon();
scrollUp();
mainSlider();
sending({
    formId: 'form'
});
links();
carousel.init();