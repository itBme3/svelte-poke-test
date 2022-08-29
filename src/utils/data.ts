export const columns = [
    {
        key: 'col0'
    },
    {
        key: 'col1'
    },
    {
        key: 'col2'
    }
];

export const rows = (() => {
    const arr = [];
    for(let i = 0; i < 5; i++) {
        arr.push(columns.reduce((acc, col, colIndex) => {
            return {...acc, [col.key]: `r${i} c${colIndex}`}
        }, {}))
    }
    return arr
})();
