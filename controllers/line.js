var lineModel = require('../models/line');
var Sequelize = require('sequelize');

exports.index = function(req,res){
    if(USER == null){
        MSG = {value:'You must login first !',alert:1};
        res.redirect('/users');
    }else{
    if(MSG ==null || MSG.alert>1){
        MSG = null;
    }else{
        MSG.alert = 2;
    }
    var line = lineModel(sequelize,Sequelize);
    line.findAll().then((list)=>{
        res.render('lineIndex',{title:'List Index',result:list});
    });
}
}

exports.add = function(req,res){
    if(USER == null){
        MSG = {value:'You must login first !',alert:1};
        res.redirect('/users');
      }
      else{
    var line = lineModel(sequelize,Sequelize);
    var lineId = req.body.lineId;
    var lineName = req.body.lineName;
    var width = req.body.width;
    var height = req.body.height;
    var lineDirection = req.body.lineDirection;
    var lane = req.body.lane;
    var type = req.body.type;
    line.create({lineId:lineId,lineName:lineName,width:width,height:height,lineDirection:lineDirection,lane:lane,type:type})
    .then(()=>{
        console.log("line added success");
        MSG = {value:'Line added successfully !',alert:1};
        setTimeout(() => {
            res.redirect('/line');
        }, 100);
    }).catch(err=>{
        console.log("failed to add line "+err);
        MSG = {value:'Line already exist !',alert:1};
        res.redirect('/line');
    });
}
}

exports.delete = function(req,res){
    if(USER == null){
        MSG = {value:'You must login first !',alert:1};
        res.redirect('/users');
      }else{
    var id = req.params.id;
    var line = lineModel(sequelize,Sequelize);
    line.destroy({ where:{ lineId:id } });
    MSG = {value:'Line deleted successfully !',alert:1};
    setTimeout(() => {
        res.redirect('/line');
    }, 100);
    }
}

exports.edit = function(req,res){
    if(USER == null){
        MSG = {value:'You must login first !',alert:1};
        res.redirect('/users');
      }else{
    var id = req.params.id;
    var line = lineModel(sequelize,Sequelize);
    line.findOne({ where:{ lineId:id } }).then(result=>{
        var j = result.toJSON();
        res.writeHead('200',{'Content-Type':'text/plain'});
        res.end(JSON.stringify(j));
    });
}
}
 
exports.lineEdit = function(req,res){
    if(USER == null){
        MSG = {value:'You must login first !',alert:1};
        res.redirect('/users');
      }else{
    var line = lineModel(sequelize,Sequelize);
    var lineId = req.body.lineId;
    var lineName = req.body.lineName;
    var width = req.body.width;
    var height = req.body.height;
    var lineDirection = req.body.lineDirection;
    var lane = req.body.lane;
    var type = req.body.type;
    console.log("attributes recived: "+lineId+" - "+lineName+" - "+width+" - "+height+" - "+lineDirection+" - "+lane+" - "+type);
    line.update({
        lineName:lineName,
        width:width,
        height:height,
        lineDirection:lineDirection,
        lane:lane,
        type:type
    },{ where:{ lineId:lineId } });
    MSG = {value:'Line edited successfully !',alert:1};
    res.redirect('/line');
}
}