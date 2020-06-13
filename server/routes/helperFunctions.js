// test
// const addedProduct = new Product(req.body);
// try {
//   const result = await addedProduct.save();
//   console.log(result);
//   return res.send(result);
// } catch (err) {
//   let productNameNotUnique = null;
//   let allProducts = await Product.find().exec();
//   //looks through the DB and looks for an identical product. Then flags it.
//   allProducts.forEach((dbProduct) => {
//     if (dbProduct.productName === addedProduct.productName)
//       productNameNotUnique = true;
//   });
// }
