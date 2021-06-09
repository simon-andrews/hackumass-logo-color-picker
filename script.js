const logo = document.getElementById('logo');
const openSettingsButton = document.getElementById('open-settings-button');
const settingsPane = document.getElementById('settings-pane');

openSettingsButton.addEventListener('click', () => settingsPane.style.visibility = 'visible');
logo.addEventListener('click', () => settingsPane.style.visibility = 'hidden');

const primaryFillByDefault = [
    'path7893', 'path7901', 'path7913', 'path7921', 'path7929',
    'path7937', 'path7945', 'path7953', 'path7957', 'text8029',
    'path8045', 'path8053', 'path8061'
].map(id => document.getElementById(id));

const primaryStrokeByDefault = [
    'path8049', 'path8057', 'path8065'
].map(id => document.getElementById(id));

const secondaryFillByDefault = [
    'path7871', 'path7873', 'text7877', 'path7889', 'path7897',
    'path7905', 'path7909', 'path7917', 'path7925', 'path7933',
    'path7941', 'path7949', 'path7961', 'path7965', 'path7969',
    'path7973', 'path8025', 'text8033'
].map(id => document.getElementById(id));

const primaryColorSelector = document.getElementById('primary-color-selector');
const secondaryColorSelector = document.getElementById('secondary-color-selector');
const backgroundColorSelector = document.getElementById('background-color-selector');

let currentPrimaryColor = primaryColorSelector.value;
let currentSecondaryColor = secondaryColorSelector.value;
let currentBackgroundColor = backgroundColorSelector.value;

function updateUrl() {
    window.location = `#${currentPrimaryColor.substr(1)},${currentSecondaryColor.substr(1)},${currentBackgroundColor.substr(1)}`;
}

function changePrimary(newColor) {
    primaryFillByDefault.forEach(elem => elem.style.fill = newColor);
    primaryStrokeByDefault.forEach(elem => elem.style.stroke = newColor);
    currentPrimaryColor = newColor;
}

function changeSecondary(newColor) {
    console.log(`new secondary: ${newColor}`);
    secondaryFillByDefault.forEach(elem => elem.style.fill = newColor);
    currentSecondaryColor = newColor;
}

function changeBackground(newColor) {
    console.log(`new background: ${newColor}`);
    document.body.style.backgroundColor = newColor;
    currentBackgroundColor = newColor;
}

primaryColorSelector.addEventListener('input', e => {
    changePrimary(e.target.value);
    updateUrl();
});

secondaryColorSelector.addEventListener('input', e => {
    changeSecondary(e.target.value);
    updateUrl();
});

backgroundColorSelector.addEventListener('input', e => {
    changeBackground(e.target.value);
    updateUrl();
});

let config = window.location.hash.substr(1);
let colors = config.split(',').map(s => `#${s}`);
console.log(colors);
if (colors.length === 3) {
    changePrimary(colors[0]);
    changeSecondary(colors[1]);
    changeBackground(colors[2]);
    primaryColorSelector.value = colors[0];
    secondaryColorSelector.value = colors[1];
    backgroundColorSelector.value = colors[2];
}
