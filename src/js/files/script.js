// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const HTML = document.documentElement;
const btnSwitchTheme = document.querySelector('.action-header__btnSwitchTheme');

btnSwitchTheme.addEventListener("click", function() {
	HTML.classList.toggle('darkTheme');	
})