


const {Tweet} = require('../modules/module')


const request =(req,res)=>{
    if(req.method === 'GET'){
        Tweet.find()
        .then(result =>{res.render('home_page',{result,title:'Welcom to tweet',error:null})})
        .catch( err => console.log(err))
               
    }
}

const request_addTweet = (req,res)=>{
    if(req.method === 'GET'){
        res.render('addTweet_page',{title:'Add Tweet',error:null})
    }
    if(req.method === 'POST'){
        const tweet = new Tweet(req.body)
        tweet.save()
        .then(result=> res.redirect('/tweet'))
        .catch( err => 
            // console.log(err.errors.kind)
            // console.log(err.errors.name.properties.type) // minlength

            //  <% if ( error.type === minlength) { %>
       
            //     <h2>Title fild required minimum 20 character</h2>
            // <%}%> 
            // console.log(err.errors.name.message),
            res.render('home_page',{error:err.errors.name.message,title:'Tweet',result:[]}),
             
        )
    }                                       
}

const requestByid = (req,res)=>{
    if(req.method === 'GET'){
        Tweet.findById({_id:req.params.id})
        .then(result =>{
            res.render('one_page',{result,title:'Show One Tweet'})
        })
        .catch( err => console.log(err))
    }
    if(req.method === 'POST'){
        Tweet.findByIdAndDelete({_id:req.params.id})
        .then(result =>{res.redirect('/tweet')})
        .catch( err => console.log(err))
    }
}


const request_update =(req,res)=>{
    if(req.method === 'GET'){
    Tweet.findById({_id:req.params.id})
    .then(result =>{
        res.render('update_page',{result,title:'Edit Tweet'})
    })
    .catch( err => console.log(err))
    }   
    if(req.method === 'POST'){
        Tweet.findByIdAndUpdate({_id:req.params.id})
        .then(result =>{
            result.name = req.body.name
            result.message = req.body.message
            result.save()
                .then( returnRes => res.redirect(`/tweet/${req.params.id}`) )
                .catch( returnError => console.log(returnError))
        })
        .catch( err => console.log(err))
    }
} 


module.exports={
    request,
    request_addTweet,
    request_update,
    requestByid
    
    
   
}
