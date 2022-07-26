export const columns = [
    {
        key: 'col0'
    },
    {
        key: 'col1'
    },
    {
        key: 'col2'
    },
    {
        key: 'col3'
    },
    {
        key: 'col4'
    },
];

export const rows = ((count = 10) => {
    const arr = [];
    for(let i = 0; i < count; i++) {
        arr.push(columns.reduce((acc, col, colIndex) => {
            return {...acc, [col.key]: `r${i} c${colIndex}`}
        }, {}))
    }
    return arr
})();
