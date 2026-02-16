// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import styles bundle
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './modules/animation'

window.Swiper = Swiper
window.SwiperModules = { Navigation, Pagination }

window.Swiper = Swiper
window.SwiperModules = { Navigation, Pagination }

import collapse from '@alpinejs/collapse'

import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.plugin(collapse);