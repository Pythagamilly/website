import $ from "jquery";
import {LoggerService} from "./services/loggerService";

const logger = new LoggerService();

$( () => {
  logger.debug('index');


  let path = window.location.pathname;
  logger.max('index, window.location.pathname: ', path);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('------ entry: ', entry);
      if (entry.target.classList.contains('ns-index-example') && entry.isIntersecting) {
        console.log('------- contains ns-index-example, add animation');
        entry.target.classList.add('ns-index-example-animation');
      }
    })
  })


  observer.observe(document.querySelector('.ns-index-example'));



});
