const model = require('../../model/query.model')

getCountBySpecialFeatures = async (req, res) => {
    let data = await model.getCountBySpecialFeatures();
    res.status(200).json(data);
}
getCountByRating = async (req, res) => {
    let data = await model.getCountByRating();
    res.status(200).json(data);
}
getTopCustomer = async (req, res) => {
    let data = await model.getTopCustomer();
    res.status(200).json(data);
}
getTotalFilmByCategoryPercentage = async (req, res) => {
    let data = await model.getTotalFilmByCategoryPercentage();
    res.status(200).json(data);
}
getFilmByMostActor = async (req, res) => {
    let data = await model.getFilmByMostActor();
    res.status(200).json(data);
}
getTopSpenderCustomer = async (req, res) => {
    let data = await model.getTopSpenderCustomer();
    res.status(200).json(data);
}
getTotalFilmLanguage = async (req, res) => {
    let data = await model.getTotalFilmLanguage();
    res.status(200).json(data);
}
getDailyIncome = async (req, res) => {
    let data = await model.getDailyIncome();
    res.status(200).json(data);
}
getRentalCountByCategory = async (req, res) => {
    let data = await model.getRentalCountByCategory();
    res.status(200).json(data);
}
getTopRentalDurationFilm = async (req, res) => {
    let data = await model.getTopRentalDurationFilm();
    res.status(200).json(data);
}

module.exports = {
    getCountBySpecialFeatures,
    getCountByRating,
    getTopCustomer,
    getTotalFilmByCategoryPercentage,
    getFilmByMostActor,
    getTopSpenderCustomer,
    getTotalFilmLanguage,
    getDailyIncome,
    getRentalCountByCategory,
    getTopRentalDurationFilm
}