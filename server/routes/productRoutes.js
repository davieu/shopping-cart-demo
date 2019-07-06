const Product = require('../models/Product');

module.exports = app => {
  // Post/add a new product. Error handles whether product name is unoque or if all fields have been field 
  app.post('/api/product', async (req, res, next) => {

    const addedProduct = new Product(req.body);
    try {
      const result = await addedProduct.save();
      res.send(result);

    } catch(err) {
      let productNameNotUnique = null;
      let allProducts = await Product.find().exec();
      //looks through the DB and looks for an identical product. Then flags it.
      allProducts.forEach(dbProduct => {
        if (dbProduct.productName === addedProduct.productName) productNameNotUnique = true})
      // if productNameNotUnique is true then the first if block will run
      if (productNameNotUnique) {
        return res.status(400).send({
          msg:`Unable to create new product. Product name: ${addedProduct.productName} is already in use.`,err})
      } else {
        return res.status(400).send({
          msg:'Unable to create product please check if required fields are entered.',
          err
        })
      }
    }
  })

  // Gets all products in daabase
  app.get('/api/products', async (req, res, next) => {
    try {
      const products = await Product.find().exec();
      res.send(products);

    } catch(err) {
      res.status(404).send({
        msg: 'Products could not be found please try again',
        err
      })
    }
  })

  // Delete a product
  app.delete('/api/product/:id', async (req, res, next) => {

    try {
      const deletedProduct = await Product.findById(req.params.id).exec();
      const result = await Product.deleteOne({ _id: req.params.id }).exec();
      // Sends the result status of the delete and the product deleted
      res.send({
        deletedProduct,
        result
      })

    } catch(err) {
      res.status(404).send({
        msg: 'Product could not be found for deletion please try again',
        err
      })
    }
  })

  // Update a product
  app.put('/api/product/:id', async (req, res, next) => {

    try {
      const updatedProduct = await Product.findById(req.params.id);
      updatedProduct.set(req.body);
      const result = await updatedProduct.save();
      res.send(result);
      
    } catch(err) {
      res.status(404).send({
        msg: 'Please try again could could not update product selected',
        err
      })
    }
  })
}