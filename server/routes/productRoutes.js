const Product = require('../models/Product');

module.exports = app => {
  // Post/add a new product. Error handles whether product name is unoque or if all fields have been field 
  app.post('/api/product', async (req, res, next) => {

    const addedProduct = new Product(req.body);
    try {
      const result = await addedProduct.save();
      return res.send(result);

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
      return res.send(products);

    } catch(err) {
      return res.status(404).send({
        msg: 'Products could not be found please try again',
        err
      })
    }
  })

  // Delete a product
  app.delete('/api/product/:id', async (req, res, next) => {

    try {
      const deletedProduct = await Product.findById(req.params.id).exec();
      if (deletedProduct.cannotDelete === true) {
        return res.send({msg: 'Cannot delete this item. It is protected'})
      } else {
        const result = await Product.deleteOne({ _id: req.params.id }).exec();
        // Sends the result status of the delete and the product deleted
        return res.send({
          deletedProduct,
          result
      })
      }
      
    } catch(err) {
      return res.status(404).send({
        msg: 'Product could not be found for deletion please try again',
        err
      })
    }
  })

  // Update a product
  app.put('/api/product/:id', async (req, res, next) => {
    try {
      const updatedProduct = await Product.findById(req.params.id)
      // protected product. cannot delete or update
      if (updatedProduct.cannotDelete === true) {
        return res.send({msg: 'Cannot update this item. It is protected'})
      } else {
        const updatedProduct = await Product.findById(req.params.id);
        updatedProduct.set(req.body);
        const result = await updatedProduct.save();
       return res.send(result);
      }

    } catch(err) {
      return res.status(404).send({
        msg: 'Please try again could could not update product selected',
        err
      })
    }
  })
}