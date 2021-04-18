const db = require("../models");

module.exports = (app) => {
  //GET ONE PALLET ROUTE
  app.get("/api/cooler/:location", (req, res) => {
    console.log("Get");
    db.Pallet.findOne({ Location: req.params.location })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //GET ALL PALLETS ROUTE
  app.get("/api/cooler/", (req, res) => {
    db.Pallet.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //POST ROUTE
  app.post("/api/cooler", (req, res) => {
    console.log("hey");
    db.Pallet.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // DELETE ROUTE
  app.delete("/api/cooler/:location", (req, res) => {
    console.log("Delete");
    db.Pallet.findOneAndDelete({ Location: req.params.location })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //PUT ROUTE
  app.put("/api/cooler/:location", (req, res) => {
    db.Pallet.findOneAndUpdate(
      { location: req.params.id },
      {
        $set: {
          Product: req.body.Product,
          Unit: req.body.Unit,
          Quantity: req.body.Quantity,
          Julian: req.body.Julian,
        },
      },
      { overwrite: true }
    )
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });
};
