'use strict';

const userModel = require('../models/users');

const blankStruct = {
    success: false,
    message: "",
    data: null
};

exports.getUserDetails = async (req, res) => {
    const userId = Number(req.params.userId)
    const responseStruct = Object.assign({}, blankStruct);
    const data = await userModel.getUsers(userId);
    if (data) {
        responseStruct.success = true;
    }
    responseStruct.data = data || {};
    return res.status(200).send(responseStruct);
}