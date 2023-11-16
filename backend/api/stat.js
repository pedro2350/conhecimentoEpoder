module.exports = app => {
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: { 'createdAt' : -1 } })
        .then(stat => {
            const defaultStat = {
                users: 0,
                categories: 0,
                articles: 0
            }
            res.json(stat || defaultStat)
        })
    }

    return { Stat, get }
}



/*module.exports = (app) => {
    const Stat = app.mongoose.models.Stat || app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    });

    const get = (req, res) => {
        Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
            .then((stat) => res.json(stat))
            .catch((error) => res.status(500).json({ error: 'Erro ao buscar estatísticas.' }));
    };

    return { Stat, get };
};*/
