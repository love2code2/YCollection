/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, malabeads, bracelets, stones, candles, accessories;

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: process.env.ADMIN_PASSWORD || 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });

Catalog
  .find({})
  .remove()
  .then(function () {
    return Catalog.create({ name: 'All'});
  })
  .then(function (catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({name: 'MALABEADS'});
  })
  .then(function (category) {
    malabeads = category._id;
    return mainCatalog.addChild({name: 'BRACELETS'});
  })
  .then(function (category) {
    bracelets = category._id;
    return mainCatalog.addChild({name: 'STONES'});
  })
  .then(function (category) {
    stones = category._id;
    return mainCatalog.addChild({name: 'CANDLES'});
  })
   .then(function (category) {
    candles = category._id;
    return mainCatalog.addChild({name: 'ACCESSORIES'});
  })
  .then(function (category) {
    accessories = category._id;
    return Product.find({}).remove({});
  })
  .then(function() {
    return Product.create({
      title: 'METATRON MALA',
      imageUrl: '/assets/uploads/p1.jpg',
      price: 25,
      stock: 250,
      categories: [malabeads],
      description: 'This pendant can be used as a visual focal point to connect with the archangel, or it can be used as a concentration tool for meditations that promote balance and a sense of peace + calm. Wearing the Metatron’s Cube can provide its wearer with inner peace and spirituality.'
    }, {
      title: 'SOUL MATE MALA',
      imageUrl: '/assets/uploads/p2.jpg',
      price: 15,
      stock: 100,
      categories: [malabeads],
      description: 'When you feel it, you know. The deepest and truest connection our soul makes with the soul of another. Your best friend who understands you like no one else can, the love of your life, your sister, your mother, your companion. This does not happen by chance, it is the universe’s design.'
    }, {
      title: 'CLEARING KIT',
      imageUrl: '/assets/uploads/p4.jpg',
      price: 15,
      stock: 100,
      categories: [accessories],
      description: 'This Clearing Kit combines the essential tools for clearing unwanted energy, protecting your space + setting fresh intentions. Use the gemstones for meditation, crystal grids, moon ceremonies, altars, to make elixirs, carry them in your pocket or store them by your bed. The perfect way to add a bit of magic + enchantment to your soul space. Each tumbled gemstone is intuitively chosen and varies in size + shape.'
    }, {
      title: 'CLEARING KIT - 1',
      imageUrl: '/assets/uploads/p4.jpg',
      price: 15,
      stock: 100,
      categories: [accessories],
      description: 'This Clearing Kit combines the essential tools for clearing unwanted energy, protecting your space + setting fresh intentions. Use the gemstones for meditation, crystal grids, moon ceremonies, altars, to make elixirs, carry them in your pocket or store them by your bed. The perfect way to add a bit of magic + enchantment to your soul space. Each tumbled gemstone is intuitively chosen and varies in size + shape.'
    },{
      title: 'QUARTZ CRYSTAL CANDLE',
      imageUrl: '/assets/uploads/p5.jpg',
      price: 15,
      stock: 100,
      categories: [candles],
      description: 'This Clearing Kit combines the essential tools for clearing unwanted energy, protecting your space + setting fresh intentions. Use the gemstones for meditation, crystal grids, moon ceremonies, altars, to make elixirs, carry them in your pocket or store them by your bed. The perfect way to add a bit of magic + enchantment to your soul space. Each tumbled gemstone is intuitively chosen and varies in size + shape.'
    },{
      title: 'WISDOM MALA RING',
      imageUrl: '/assets/uploads/p6.jpg',
      price: 15,
      stock: 100,
      categories: [accessories],
      description: 'The light you are seeking has always been within. Trust your intuition. Your inner knowledge and stillness is your key to outer strength. Push forward, find answers, and journey inwards. Listen to the compass of your own heart; all you need lies within you. Follow your soul, it knows the way. '
    },
    {
      title: 'WISDOM MALA RING - 2',
      imageUrl: '/assets/uploads/p6.jpg',
      price: 15,
      stock: 100,
      categories: [accessories],
      description: 'The light you are seeking has always been within. Trust your intuition. Your inner knowledge and stillness is your key to outer strength. Push forward, find answers, and journey inwards. Listen to the compass of your own heart; all you need lies within you. Follow your soul, it knows the way. '
    }, {
      
      title: 'SERENITY BRACELET',
      imageUrl: '/assets/uploads/p3.jpg',
      price: 8,
      stock: 50,
      categories: [bracelets],
      description: 'ou are like a calm, clear lake - beautiful and peaceful to be with. Your quiet radiance brings hope and support to those who come within your aura. You attract respect and love from others, for all are calmed by you. Amethyst is a highly spiritual stone believed to hold a strong healing and cleansing power, said to cultivate tranquility, peace + calm. As you become deeply serene and still you connect to the higher powers of the universe for divine guidance and your path in life becomes smooth and flowing.'
    });
  })
  .then(function () {
    console.log('Finished populating Products with categories');
  })
  .then(null, function (err) {
    console.error('Error populating Products & categories: ', err);
  });
