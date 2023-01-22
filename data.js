const { Schema, model } = require("mongoose");

module.exports = model("Member", Schema({
  id: { type: String, required: true },
  access_token: { type: String, default: "null" },
  refresh_token: { type: String, default: "null" }
}));