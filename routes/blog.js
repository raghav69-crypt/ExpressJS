const express = require('express')
const path = require('path')
const router = express.Router()
const raghavblogs = require("../data/raghablogs") //required a folder

router.get('/' , (req , res)=>{
    res.sendfile(path.join(__dirname , '../Templates/index.html'))
})
module.exports = router

//Sending file sitehomepage and consoldated for e.title from raghablogs
router.get('/blog' , (req , res)=>{
    raghavblogs.forEach(e => {
        // console.log(e.title)
    });
    // res.sendfile(path.join(__dirname , '../Templates/Sitehomepage.html'))
})
module.exports = router



router.get('/blogpost/:slug' , (req , res)=>{
    myblog = raghavblogs.filter((e)=>{
        //if request param slug is equal to e.slug(say : cpp-learn)
        return e.slug == req.params.slug
    })
    console.log(myblog)
    res.sendfile(path.join(__dirname , '../Templates/bloghome.html'))
})
module.exports = router
