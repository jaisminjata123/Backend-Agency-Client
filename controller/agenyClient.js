const User = require("../models/Client");
const Agency = require("../models/Agency")
const Client = require("../models/Client");
const jwt = require("jsonwebtoken");

//API createAgencyClient

const createAgnecyClient = async (req, res) => {
    const agency = new Agency({
        name: req.body.agencyName,
        address1: req.body.agencyAddress1,
        address2: req.body.agencyAddress2,
        state: req.body.agencyState,
        city: req.body.agencyCity,
        phoneNumber: req.body.agencyPhoneNumber
    });

    const client = new Client({
        agencyId: agency._id,
        name: req.body.clientName,
        email: req.body.clientEmail,
        phoneNumber: req.body.clientPhoneNumber,
        totalBill: req.body.clientTotalBill
    });
    const accessToken = jwt.sign(
        {
            id: client._id,

        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
    );
    try {
        const savedAgency = await agency.save();
        const savedClient = await client.save();

        res.status(201).json({
            msg: "Agency and Client details are saved successfully!!",
            agency: savedAgency, client: savedClient, accessToken: accessToken
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


//API UPDATE CLIENT

const updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.updateOne({ _id: req.params.id }, {
            $set: {
                name: req.body.clientName,
                email: req.body.clientEmail,
                phoneNumber: req.body.clientPhoneNumber,
                totalBill: req.body.clientTotalBill
            }
        });

        res.json({
            msg: "Client details are updated successfully!!",
            body: req.body
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


//API GET TOP CLIENT DETAILS

const topClientDetail = async (req, res) => {
    try {
        const topClients = await Client.find().sort({ TotalBill: -1 }).limit(3);
        const agencies = await Agency.find({ _id: { $in: topClients.map(c => c.agencyId) } });
        const response = topClients.map(c => {
            const agency = agencies.find(a => a._id.equals(c.agencyId));
            return { AgencyName: agency.name, ClientName: c.name, TotalBill: c.totalBill };
        });

        res.json({
            msg: "Records fetched successfully!!",
            response: response
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};




module.exports = {
    createAgnecyClient,
    updateClient,
    topClientDetail
}