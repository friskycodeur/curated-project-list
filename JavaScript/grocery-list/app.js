const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = mongoose.Schema({
	name: String,
	quantity: String
});

const item = mongoose.model('item', itemSchema);

const info1 = new item({ name: "Welcome to Grocery List Manager" });
const info2 = new item({ name: "<< click here to delete any item" });
const info3 = new item({ name: "Enter item to add and press +" })
const arr = [info1, info2, info3];

app.get("/", function (req, res) {
	item.find({}, function (err, results) {
		if (!err) {
			if (results.length === 0) {
				item.insertMany(arr, function (err) {
					if (!err) {
						console.log("List Created");
					} else {
						console.log(err);
					}
				})
				res.redirect("/");
			} else {
				res.render("list", { items: results });
			}
		}
	})
});

app.post("/delete", function (req, res) {
	item.deleteOne({ _id: req.body.checkbox }, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Item Deleted");
		}
	})
	res.redirect("/");
});

app.post("/", function (req, res) {
	item.create({ name: req.body.newitem, quantity: req.body.quantity }, function (err, results) {
		if (err) {
			console.log(err);
		} else {
			console.log("Item Added");
		}
	})
	res.redirect("/");
})

app.listen("3000", function () {
	console.log("Server running on port 3000");
});