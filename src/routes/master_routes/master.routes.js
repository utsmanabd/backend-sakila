var express = require('express');
var router = express.Router();

const FilmController = require('./../../controller/master_controller/FilmController');
const ActorController = require('./../../controller/master_controller/ActorController');
const AddressController = require('./../../controller/master_controller/AddressController');
const CategoryController = require('./../../controller/master_controller/CategoryController');
const CountryController = require('./../../controller/master_controller/CountryController');
const InventoryController = require('./../../controller/master_controller/InventoryController');
const LanguageController = require('./../../controller/master_controller/LanguageController');
const StaffController = require('./../../controller/master_controller/StaffController');
const QueryController = require('./../../controller/master_controller/QueryController')

// film data
router.get('/film', FilmController.getAllFilm);
router.get('/film/:id', FilmController.getFilmById);
router.post('/film', FilmController.insertFilm);
router.put('/film/:id', FilmController.updateFilm);

// actor data
router.get('/actor', ActorController.getAllActor)
router.get('/actor/:id', ActorController.getActorById)
router.post('/actor', ActorController.insertActor)
router.put('/actor/:id', ActorController.updateActor)
router.delete('/actor/:id', ActorController.deleteActor)

// address data
router.get('/address', AddressController.getAllAddress)
router.get('/address/:id', AddressController.getAddressById)
router.post('/address', AddressController.insertAddress)
router.put('/address/:id', AddressController.updateAddress)

// category data
router.get('/category', CategoryController.getAllCategory);
router.get('/category/:id', CategoryController.getCategoryById);
router.post('/category', CategoryController.insertCategory);
router.put('/category/:id', CategoryController.updateCategory);

// country data
router.get('/country', CountryController.getAllCountry);
router.get('/country/:id', CountryController.getCountryById);
router.post('/country', CountryController.insertCountry);
router.put('/country/:id', CountryController.updateCountry);

// inventory data
router.get('/inventory', InventoryController.getAllInventory);
router.get('/inventory/:id', InventoryController.getInventoryById);
router.post('/inventory', InventoryController.insertInventory);
router.put('/inventory/:id', InventoryController.updateInventory);

// language data
router.get('/language', LanguageController.getAllLanguage);
router.get('/language/:id', LanguageController.getLanguageById);
router.post('/language', LanguageController.insertLanguage);
router.put('/language/:id', LanguageController.updateLanguage);

// staff data
router.get('/staff', StaffController.getAllStaff);
router.get('/staff/:id', StaffController.getStaffById);
router.post('/staff', StaffController.insertStaff);
router.put('/staff/:id', StaffController.updateStaff);

// query data
router.get('/count-by-special-features', QueryController.getCountBySpecialFeatures);
router.get('/count-by-rating', QueryController.getCountByRating);
router.get('/get-customer-by-top-rental', QueryController.getTopCustomer)
router.get('/get-film-category-percentage', QueryController.getTotalFilmByCategoryPercentage)
router.get('/get-film-by-most-actor', QueryController.getFilmByMostActor)
router.get('/get-top-spender-customer', QueryController.getTopSpenderCustomer)
router.get('/get-total-film-language', QueryController.getTotalFilmLanguage)
router.get('/get-daily-income', QueryController.getDailyIncome)
router.get('/get-rental-count-by-category', QueryController.getRentalCountByCategory)
router.get('/get-top-rental-duration', QueryController.getTopRentalDurationFilm)




module.exports = router;