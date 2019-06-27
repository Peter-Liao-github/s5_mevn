const express = require('express')
const productRoutes = express.Router()

let Product = require('./product.model')

productRoutes.route('/add').post( (req, res) =>{
  let product = new Product(req.body)
  product.save()
    .then( ()=>{ res.status(200).json({'business': 'business in added successfully'}) } )
    .catch( ()=>{ res.status(400).send('unable to save to database') } )
})

productRoutes.route('/').get( (req, res) =>{
  Product.find( (err, posts) =>{
    if(err) res.json(err) 
    else res.json(posts) 
  } )
})

productRoutes.route('/edit/:id').get( (req, res) =>{
  let id = req.params.id
  Product.findById(id, (err, post)=>{
    if(err) res.json(err) 
    res.json(post)
  })
})

productRoutes.route('/update/:id').post( (req, res) =>{
  Product.findById(req.params.id, (err, post)=>{
    if(!post){ res.status(404).send('data is not found') }
    else{
      post.title = req.body.title
      post.body = req.body.body
      post.save()
        .then( ()=>{ res.json('Update complete')} )
        .catch( ()=>{ res.status(400).send('unable to update the database') })
    }
  })
})

productRoutes.route('/delete/:id').delete( (req, res) =>{
  Product.findByIdAndRemove({_id:req.params.id}, err=>{
    if(err) res.json(err)
    else res.json('Successfully removed')
  })
})

module.exports = productRoutes