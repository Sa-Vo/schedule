export function GetCurDay() {
    const d = new Date();
    let dayweek = d.getDate();

    return dayweek === 6 || dayweek === 7 ? 0 : dayweek - 1;
}
