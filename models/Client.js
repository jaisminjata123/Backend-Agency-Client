const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ClientSchema = new mongoose.Schema(
    {
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
            required: true 
        },
     
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        totalBill:
        {
            type: Number,
            required: true
        }

    },
    { timestamps: true }
)
module.exports = mongoose.model("Client", ClientSchema);