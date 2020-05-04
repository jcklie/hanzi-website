exports.createPages = ({
    actions: {createPage}
}) => {
    const heisig = require('./data/heisig.json');
    heisig.forEach(hanzi => {
        createPage({
            path: `/character/${hanzi.character}`,
            component: require.resolve('./src/templates/hanzi.js'),
            context: {
                number: hanzi.number,
                character: hanzi.character,
                keyword: hanzi.keyword,
                pinyin: hanzi.pinyin,
                alias: hanzi.alias,
                decomposition: hanzi.decomposition,
                decomposition_names: hanzi.decomposition_names,
                meanings: hanzi.meanings
            }
        })
    });
}