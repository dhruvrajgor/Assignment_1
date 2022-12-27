var db = require('../models')
var Course = db.course;

var listCourses = async (req,res) => {

  Course.findAll().then(courses => {
        res.render("course/index", { fetchData: courses });
    });
}

var createCourses = async (req,res) => {

        res.render("course/create", { });

}

var storeCourses = async (req,res) => {

        await Course.create({
            name: req.body.coursename,
            duration: req.body.coursedur,
            fees: req.body.coursefees,
        })
        .then((result) => {
              res.render("course/create", { });
        });
   
    
}

var editCourses = async (req,res) => {

      //console.log(req.params.id);
      await Course.findOne({ where: { id: req.params.id } }).then(course => {

          res.render("course/edit", { fetchData1: course });
      });

      //console.log(course);
     
      // await model.user
      //   .findAll({ where: { id: req.body.id } })
      //   .then(async (result) => {
      //       if (result.length > 0) {
      //           await model.user.update(
      //              {
      //                  username: req.body.username,
      //                  password: req.body.password,
      //                  token: req.body.username + req.body.password,
      //               },
      //               { where: { id: req.body.id } }
      //           );
      //           res.status(200).json({
      //               message: "update successful",
      //               data: {
      //               id: req.body.id,
      //               username: req.body.username,
      //               password: req.body.password,
      //               token: req.body.username + req.body.password,
      //               },
      //           });
      //       } else {
      //           res.status(500).json({ message: "update failed" });
      //       }
      //   });
        
}

var updateCourses = async (req,res) => {

      await Course.update(
         {
             name: req.body.coursename,
             duration: req.body.coursedur,
             fees: req.body.coursefees,
          },
          { where: { id: req.params.id } }
      )
      .then((result) => {
            res.redirect('/course');
      });
   
}

var deleteCourses = async (req,res) => {

console.log("delete course");

    await Course.destroy({
            where: {
              id: req.params.id
            }
          }
      )
      .then((result) => {
            res.redirect('/course');
      });
   
}

module.exports = {
  listCourses,createCourses,storeCourses,editCourses,updateCourses,deleteCourses
}


