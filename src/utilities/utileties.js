export function GetCurDay() {
    const d = new Date();
    let dayweek = d.getDay();
    let getCurrTime = d.getHours();
    getCurrTime > 17 ? dayweek += 1 : dayweek = dayweek;
    return dayweek > 5 ? 0 : dayweek - 1;
}

export const lightTheme = {
    body: '#d6f3ff',
    sideBar: '#00bcd4',
    button: '#f55b73',
    text: '#252525',
    item: '#ffc107',
    itemTime: '#ff9800',
    itemHover: '#F25C05',
    clock: '#637780',
    toggleBorder: '#091236',
    btnToggle: '#00bcd4',
    btnToggleColor: '#fafafa',
};

export const darkTheme = {
    body: '#152c40',
    sideBar: '#364959',
    button: '#d96b2b',
    text: '#FAFAFA',
    item: '#f25c05',
    itemTime: '#ff6f00',
    itemHover: '#F25C05',
    clock: '#637780',
    toggleBorder: '#FAFAFA',
    btnToggle: '#FAFAFA',
    btnToggleColor: '#252525',
};
