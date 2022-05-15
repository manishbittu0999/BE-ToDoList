const TODO = require("../models/todo");


// controller to render home page
module.exports.home = function(req, res){

    TODO.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching todos from db');
            return;
        }
        return res.render('home',{
         title: "TODO APP",
         todo_list: todos
        });
    });
}

// controller to create TODO 
module.exports.create = function(req, res){
    TODO.create({
        name: req.body.name,
        date: req.body.date,
        card: req.body.card
    }, function(err, newTODO){
        if(err){
            console.log('Error in creating todo!');
            return;
        }
        return res.redirect('back');
    });
}


// controller to destroy TODO

module.exports.destroy = function(req, res){
    var items=[];
    for(var key in req.body){
        items=req.body[key];
    }
    TODO.remove({_id:{$in:items}},function(err, data){
        if (err){
           throw err;
        }
        res.json(data);
    });
}


//module.exports.actionName = function(req,res){}